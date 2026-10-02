using TuneLab.Core.Analysis;
using TuneLab.Core.Models;

namespace TuneLab.Core.Comparison;

public sealed record ExperimentComparison(
    int BaselineEventCount,
    int TestEventCount,
    double BaselineWorstOvershoot,
    double TestWorstOvershoot,
    double BaselinePeakBoostRate,
    double TestPeakBoostRate,
    double OvershootDelta,
    double BoostRateDelta);

public sealed class ExperimentComparator
{
    public ExperimentComparison Compare(TuningLog baseline, TuningLog test)
    {
        var detector = new BoostEventDetector();
        var a = detector.Detect(baseline);
        var b = detector.Detect(test);
        var aOver = a.Count == 0 ? 0 : a.Max(x => x.PeakOvershoot);
        var bOver = b.Count == 0 ? 0 : b.Max(x => x.PeakOvershoot);
        var aRate = a.Count == 0 ? 0 : a.Max(x => x.PeakBoostRate);
        var bRate = b.Count == 0 ? 0 : b.Max(x => x.PeakBoostRate);
        return new(a.Count, b.Count, aOver, bOver, aRate, bRate, bOver - aOver, bRate - aRate);
    }
}
