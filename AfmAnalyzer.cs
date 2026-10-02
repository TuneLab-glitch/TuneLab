using TuneLab.Core.Models;

namespace TuneLab.Core.Analysis;

public sealed class AfmAnalyzer
{
    public AfmAnalysisResult Analyze(TuningLog log, IReadOnlyList<AfmCell> table, AfmAnalysisOptions? options = null)
    {
        options ??= new AfmAnalysisOptions();
        if (table.Count == 0) return new AfmAnalysisResult(0, log.Frames.Count, []);
        var c = new ChannelResolver(log);
        var required = new[] { "AfmFrequency", "TotalTrim", "CoolantTemperature", "PedalPosition" };
        if (required.Any(x => !c.Has(x))) throw new InvalidOperationException("Log is missing one or more AFM analysis channels.");

        var bins = table.OrderBy(x => x.FrequencyHz).Select(x => new Bin(x)).ToArray();
        var accepted = 0; var rejected = 0;
        for (var i = 1; i < log.Frames.Count; i++)
        {
            var f = log.Frames[i];
            var trim = c.Get(f, "TotalTrim");
            var hz = c.Get(f, "AfmFrequency");
            var ect = c.Get(f, "CoolantTemperature");
            if (!double.IsFinite(trim) || !double.IsFinite(hz) || ect < options.MinimumEctF || Math.Abs(trim) > options.MaximumAbsTrimPercent) { rejected++; continue; }
            if (options.RequireClosedLoop && c.Has("FuelStatus") && Math.Round(c.Get(f, "FuelStatus")) != options.ClosedLoopFuelStatus) { rejected++; continue; }
            if (options.ExcludeTransientThrottle)
            {
                var dt = f.TimeSeconds - log.Frames[i - 1].TimeSeconds;
                var pedalRate = dt > 0 ? Math.Abs(c.Get(f, "PedalPosition") - c.Get(log.Frames[i - 1], "PedalPosition")) / dt : double.PositiveInfinity;
                if (pedalRate > options.MaximumPedalRatePercentPerSecond) { rejected++; continue; }
            }

            var (bin, distance) = FindNearest(bins, hz);
            bin.Samples.Add(new Sample(trim, distance));
            accepted++;
        }

        var results = bins.Select(bin => BuildResult(bin, options)).ToArray();
        if (options.SmoothProposedCurve) results = Smooth(results, options.MaximumSmoothingPercent);
        return new AfmAnalysisResult(accepted, rejected, results);
    }

    private static (Bin Bin, double Distance) FindNearest(Bin[] bins, double hz)
    {
        var best = bins[0]; var bestDistance = Math.Abs(best.Cell.FrequencyHz - hz);
        for (var i = 1; i < bins.Length; i++)
        {
            var d = Math.Abs(bins[i].Cell.FrequencyHz - hz);
            if (d < bestDistance) { best = bins[i]; bestDistance = d; }
        }
        return (best, bestDistance);
    }

    private static AfmCellResult BuildResult(Bin bin, AfmAnalysisOptions o)
    {
        if (bin.Samples.Count == 0) return new(bin.Cell.FrequencyHz, bin.Cell.CurrentFlow, 0, 0, 0, 0, 0, bin.Cell.CurrentFlow, "None");
        var trims = bin.Samples.Select(x => x.Trim).OrderBy(x => x).ToArray();
        var mean = trims.Average();
        var median = trims.Length % 2 == 1 ? trims[trims.Length / 2] : (trims[trims.Length / 2 - 1] + trims[trims.Length / 2]) / 2;
        var sd = Math.Sqrt(trims.Sum(x => Math.Pow(x - mean, 2)) / trims.Length);
        var weighted = WeightedMean(bin.Samples);
        var raw = o.Strategy switch { AfmCorrectionStrategy.Mean => mean, AfmCorrectionStrategy.DistanceWeighted => weighted, _ => median };
        var correction = bin.Samples.Count >= o.MinimumSamplesPerCell ? Math.Clamp(raw, -o.MaximumCorrectionPercent, o.MaximumCorrectionPercent) : 0;
        var proposed = bin.Cell.CurrentFlow * (1 + correction / 100.0);
        var confidence = bin.Samples.Count < o.MinimumSamplesPerCell ? "Low" : sd <= 1.5 && bin.Samples.Count >= o.MinimumSamplesPerCell * 3 ? "High" : "Medium";
        return new(bin.Cell.FrequencyHz, bin.Cell.CurrentFlow, bin.Samples.Count, mean, median, sd, correction, proposed, confidence);
    }

    private static double WeightedMean(List<Sample> samples)
    {
        var weights = samples.Select(s => 1.0 / Math.Max(1.0, s.DistanceHz)).ToArray();
        var total = weights.Sum();
        return total <= 0 ? samples.Average(s => s.Trim) : samples.Select((s, i) => s.Trim * weights[i]).Sum() / total;
    }

    private static AfmCellResult[] Smooth(AfmCellResult[] source, double maxPercent)
    {
        if (source.Length < 3) return source;
        var result = source.ToArray();
        for (var i = 1; i < source.Length - 1; i++)
        {
            if (source[i].Samples == 0) continue;
            var neighborAverage = (source[i - 1].ProposedFlow + source[i + 1].ProposedFlow) / 2.0;
            var limit = source[i].ProposedFlow * maxPercent / 100.0;
            var adjusted = Math.Clamp(neighborAverage, source[i].ProposedFlow - limit, source[i].ProposedFlow + limit);
            result[i] = source[i] with { ProposedFlow = adjusted };
        }
        return result;
    }

    private sealed class Bin(AfmCell cell) { public AfmCell Cell { get; } = cell; public List<Sample> Samples { get; } = []; }
    private sealed record Sample(double Trim, double DistanceHz);
}
