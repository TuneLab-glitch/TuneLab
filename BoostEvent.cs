namespace TuneLab.Core.Models;

public sealed record BoostEvent(
    int StartIndex,
    int EndIndex,
    int Gear,
    double StartRpm,
    double EndRpm,
    double MaxPedal,
    double MaxBoostCommand,
    double PeakBoost,
    double PeakOvershoot,
    double PeakBoostRate,
    double MinWastegate,
    double MinWastegateCommand,
    double PeakCylinderAir,
    double PeakKnockCount)
{
    public string Severity => PeakOvershoot switch
    {
        >= 5 => "Severe",
        >= 3 => "High",
        >= 1.5 => "Moderate",
        _ => "Controlled"
    };
}
