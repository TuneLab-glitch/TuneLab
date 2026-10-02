namespace TuneLab.Core.Models;

public sealed class LogFrame
{
    public int Index { get; init; }
    public double TimeSeconds { get; init; }
    public Dictionary<string, string> Raw { get; } = new(StringComparer.OrdinalIgnoreCase);
    public Dictionary<string, double> Values { get; } = new(StringComparer.OrdinalIgnoreCase);

    public bool TryGet(string channel, out double value) => Values.TryGetValue(channel, out value);
    public double Get(string channel, double fallback = double.NaN) => Values.TryGetValue(channel, out var value) ? value : fallback;
}
