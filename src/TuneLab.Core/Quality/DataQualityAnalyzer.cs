using TuneLab.Core.Analysis;
using TuneLab.Core.Models;

namespace TuneLab.Core.Quality;

public enum QualitySeverity { Info, Warning, Error }
public sealed record DataQualityIssue(QualitySeverity Severity, string Channel, string Message);
public sealed record DataQualityReport(IReadOnlyList<DataQualityIssue> Issues)
{
    public bool HasErrors => Issues.Any(x => x.Severity == QualitySeverity.Error);
    public int WarningCount => Issues.Count(x => x.Severity == QualitySeverity.Warning);
}

public sealed class DataQualityAnalyzer
{
    private static readonly string[] CoreChannels = ["EngineSpeed", "PedalPosition", "ThrottlePosition", "BoostActual", "BoostCommand"];

    public DataQualityReport Analyze(TuningLog log)
    {
        var c = new ChannelResolver(log);
        var issues = new List<DataQualityIssue>();
        foreach (var channel in CoreChannels)
            if (!c.Has(channel)) issues.Add(new(QualitySeverity.Error, channel, "Required analysis channel is missing."));

        CheckFrozen(log, c, issues, "IntakeTemperature", -40, "Sensor appears fixed at -40, commonly indicating unavailable/invalid data.");
        CheckFrozen(log, c, issues, "FuelPressure", 0, "Fuel pressure channel is fixed at zero and should not be used for diagnostics.");
        CheckFrozen(log, c, issues, "InjectorDuty", 0, "Injector duty channel is fixed at zero and may be unavailable.");

        if (log.Frames.Count < 100) issues.Add(new(QualitySeverity.Warning, "Log", "Very short log; statistical analyses may be unreliable."));
        if (log.DurationSeconds <= 0) issues.Add(new(QualitySeverity.Error, "Time", "Log duration is invalid."));

        return new DataQualityReport(issues);
    }

    private static void CheckFrozen(TuningLog log, ChannelResolver c, List<DataQualityIssue> issues, string channel, double suspiciousValue, string message)
    {
        if (!c.Has(channel) || log.Frames.Count == 0) return;
        var vals = log.Frames.Select(f => c.Get(f, channel)).Where(double.IsFinite).Take(5000).ToArray();
        if (vals.Length > 20 && vals.All(v => Math.Abs(v - suspiciousValue) < 0.0001))
            issues.Add(new(QualitySeverity.Warning, channel, message));
    }
}
