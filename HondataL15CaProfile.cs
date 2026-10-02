namespace TuneLab.Core.Platforms;

public static class HondataL15CaProfile
{
    public const string Id = "honda-l15ca-hondata";

    public static readonly IReadOnlyDictionary<string, string[]> Aliases =
        new Dictionary<string, string[]>(StringComparer.OrdinalIgnoreCase)
        {
            ["EngineSpeed"] = ["RPM"],
            ["VehicleSpeed"] = ["VSS"],
            ["Gear"] = ["Gear"],
            ["BoostActual"] = ["BP"],
            ["BoostCommand"] = ["BP CMD"],
            ["Map"] = ["MAP"],
            ["AtmosphericPressure"] = ["PA"],
            ["PedalPosition"] = ["TPedal"],
            ["ThrottlePosition"] = ["TPlate"],
            ["AfmFrequency"] = ["AFM Hz"],
            ["AfmFlow"] = ["AFM"],
            ["CylinderAir"] = ["AFM.c"],
            ["Wastegate"] = ["WG"],
            ["WastegateCommand"] = ["WGCMD"],
            ["AfrActual"] = ["AF.Corr", "AF"],
            ["AfrCommand"] = ["AFCMD"],
            ["ShortTrim"] = ["S.TRIM"],
            ["LongTrim"] = ["L.TRIM"],
            ["TotalTrim"] = ["Trim"],
            ["FuelStatus"] = ["Fuel Status"],
            ["CoolantTemperature"] = ["ECT"],
            ["IntakeTemperature"] = ["IAT"],
            ["KnockCount"] = ["K.Count"],
            ["KnockRetard"] = ["K.Retard"],
            ["FuelPressure"] = ["DIFP"],
            ["FuelPressureCommand"] = ["DIFPCMD"],
            ["InjectorDuty"] = ["DUTY"]
        };

    public static bool LooksLike(IReadOnlyCollection<string> channels) =>
        channels.Contains("BP CMD", StringComparer.OrdinalIgnoreCase) &&
        channels.Contains("AFM.c", StringComparer.OrdinalIgnoreCase) &&
        channels.Contains("WGCMD", StringComparer.OrdinalIgnoreCase);

    public static double PressureRatioToGaugePsi(double pressureRatio, double atmosphericBar) =>
        (pressureRatio - 1.0) * atmosphericBar * 14.5037738;
}
