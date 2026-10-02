using TuneLab.Core.Models;

namespace TuneLab.Core.Analysis;

public sealed class DerivedChannelEngine
{
    public IReadOnlyDictionary<string, double[]> Calculate(TuningLog log)
    {
        var c = new ChannelResolver(log);
        var count = log.Frames.Count;
        var result = new Dictionary<string, double[]>(StringComparer.OrdinalIgnoreCase);

        if (c.Has("BoostActual") && c.Has("BoostCommand"))
            result["BoostError"] = log.Frames.Select(f => c.Get(f, "BoostActual") - c.Get(f, "BoostCommand")).ToArray();

        if (c.Has("BoostActual")) result["BoostRate"] = Differentiate(log, c, "BoostActual");
        if (c.Has("PedalPosition")) result["PedalRate"] = Differentiate(log, c, "PedalPosition");
        if (c.Has("ThrottlePosition")) result["ThrottleRate"] = Differentiate(log, c, "ThrottlePosition");

        if (c.Has("AfrActual") && c.Has("AfrCommand"))
            result["AfrError"] = log.Frames.Select(f => c.Get(f, "AfrActual") - c.Get(f, "AfrCommand")).ToArray();

        if (c.Has("FuelPressure") && c.Has("FuelPressureCommand"))
            result["FuelPressureError"] = log.Frames.Select(f => c.Get(f, "FuelPressure") - c.Get(f, "FuelPressureCommand")).ToArray();

        return result;
    }

    private static double[] Differentiate(TuningLog log, ChannelResolver c, string channel)
    {
        var values = new double[log.Frames.Count];
        values[0] = 0;
        for (var i = 1; i < log.Frames.Count; i++)
        {
            var dt = log.Frames[i].TimeSeconds - log.Frames[i - 1].TimeSeconds;
            values[i] = dt > 0 ? (c.Get(log.Frames[i], channel) - c.Get(log.Frames[i - 1], channel)) / dt : 0;
        }
        return values;
    }
}
