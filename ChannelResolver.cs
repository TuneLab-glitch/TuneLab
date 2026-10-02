using TuneLab.Core.Models;
using TuneLab.Core.Platforms;

namespace TuneLab.Core.Analysis;

public sealed class ChannelResolver
{
    private readonly IReadOnlyDictionary<string, string> _resolved;

    public ChannelResolver(TuningLog log)
    {
        var found = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        foreach (var (canonical, aliases) in HondataL15CaProfile.Aliases)
        {
            var channel = aliases.FirstOrDefault(a => log.Channels.Contains(a, StringComparer.OrdinalIgnoreCase));
            if (channel is not null) found[canonical] = channel;
        }
        _resolved = found;
    }

    public bool Has(string canonical) => _resolved.ContainsKey(canonical);
    public string this[string canonical] => _resolved[canonical];
    public double Get(LogFrame frame, string canonical, double fallback = double.NaN) =>
        _resolved.TryGetValue(canonical, out var channel) ? frame.Get(channel, fallback) : fallback;
}
