namespace TuneLab.Core.Models;

public sealed class TuningLog
{
    public required string SourcePath { get; init; }
    public required IReadOnlyList<string> Channels { get; init; }
    public required IReadOnlyList<LogFrame> Frames { get; init; }
    public required IReadOnlyDictionary<string, string> Metadata { get; init; }
    public string PlatformId { get; set; } = "unknown";
    public double DurationSeconds => Frames.Count == 0 ? 0 : Frames[^1].TimeSeconds - Frames[0].TimeSeconds;
}
