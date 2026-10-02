using TuneLab.Core.Models;

namespace TuneLab.Core.Analysis;

public sealed class BoostEventDetector
{
    public IReadOnlyList<BoostEvent> Detect(TuningLog log)
    {
        var c = new ChannelResolver(log);
        var required = new[] { "EngineSpeed", "Gear", "BoostActual", "BoostCommand", "PedalPosition" };
        if (required.Any(x => !c.Has(x))) return [];

        var frames = log.Frames;
        var candidate = new bool[frames.Count];
        for (var i = 1; i < frames.Count; i++)
        {
            var rpm = c.Get(frames[i], "EngineSpeed");
            var pedal = c.Get(frames[i], "PedalPosition");
            var boost = c.Get(frames[i], "BoostActual");
            var cmd = c.Get(frames[i], "BoostCommand");
            candidate[i] = rpm >= 2500 && pedal >= 20 && (boost >= 3 || cmd >= 5);
        }

        var windows = new List<(int Start, int End)>();
        var start = -1;
        for (var i = 0; i < candidate.Length; i++)
        {
            if (candidate[i] && start < 0) start = i;
            if ((!candidate[i] || i == candidate.Length - 1) && start >= 0)
            {
                var end = candidate[i] ? i : i - 1;
                if (frames[end].TimeSeconds - frames[start].TimeSeconds >= 0.25) windows.Add((Math.Max(0, start - 10), Math.Min(frames.Count - 1, end + 10)));
                start = -1;
            }
        }

        return windows.Select(w => Summarize(frames, w.Start, w.End, c))
            .Where(e => e.PeakBoost >= 8)
            .OrderBy(e => e.StartIndex)
            .ToArray();
    }

    private static BoostEvent Summarize(IReadOnlyList<LogFrame> frames, int start, int end, ChannelResolver c)
    {
        double maxCmd = double.NegativeInfinity, peakBoost = double.NegativeInfinity, peakOver = double.NegativeInfinity;
        double peakRate = 0, minWg = double.PositiveInfinity, minWgCmd = double.PositiveInfinity, peakAir = double.NegativeInfinity, peakKnock = 0, maxPedal = 0;
        for (var i = start; i <= end; i++)
        {
            var f = frames[i];
            var boost = c.Get(f, "BoostActual");
            var cmd = c.Get(f, "BoostCommand");
            if (!double.IsNaN(cmd)) maxCmd = Math.Max(maxCmd, cmd);
            if (!double.IsNaN(boost)) peakBoost = Math.Max(peakBoost, boost);
            if (!double.IsNaN(boost) && !double.IsNaN(cmd) && cmd >= 8) peakOver = Math.Max(peakOver, boost - cmd);
            maxPedal = Math.Max(maxPedal, c.Get(f, "PedalPosition", 0));
            if (c.Has("Wastegate")) minWg = Math.Min(minWg, c.Get(f, "Wastegate"));
            if (c.Has("WastegateCommand")) minWgCmd = Math.Min(minWgCmd, c.Get(f, "WastegateCommand"));
            if (c.Has("CylinderAir")) peakAir = Math.Max(peakAir, c.Get(f, "CylinderAir"));
            if (c.Has("KnockCount")) peakKnock = Math.Max(peakKnock, c.Get(f, "KnockCount", 0));
            // Use a ~0.2 s window rather than adjacent frames so dBP/dt is not dominated by sample noise.
            if (i > start)
            {
                var j = i - 1;
                while (j > start && f.TimeSeconds - frames[j].TimeSeconds < 0.15) j--;
                var dt = f.TimeSeconds - frames[j].TimeSeconds;
                if (dt >= 0.15 && dt <= 0.30)
                {
                    var prev = c.Get(frames[j], "BoostActual");
                    if (!double.IsNaN(prev) && !double.IsNaN(boost)) peakRate = Math.Max(peakRate, (boost - prev) / dt);
                }
            }
        }

        static double Clean(double x) => double.IsInfinity(x) ? double.NaN : x;
        return new BoostEvent(start, end,
            (int)Math.Round(c.Get(frames[start], "Gear", 0)),
            c.Get(frames[start], "EngineSpeed"), c.Get(frames[end], "EngineSpeed"), maxPedal,
            Clean(maxCmd), Clean(peakBoost), Clean(peakOver), peakRate,
            Clean(minWg), Clean(minWgCmd), Clean(peakAir), peakKnock);
    }
}
