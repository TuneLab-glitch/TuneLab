namespace TuneLab.Core.Models;

public sealed record AfmCell(double FrequencyHz, double CurrentFlow);
public enum AfmCorrectionStrategy { Mean, Median, DistanceWeighted }

public sealed class AfmAnalysisOptions
{
    public double MinimumEctF { get; init; } = 170;
    public int ClosedLoopFuelStatus { get; init; } = 2;
    public double MaximumAbsTrimPercent { get; init; } = 20;
    public double MaximumCorrectionPercent { get; init; } = 3;
    public double MaximumPedalRatePercentPerSecond { get; init; } = 15;
    public int MinimumSamplesPerCell { get; init; } = 100;
    public bool RequireClosedLoop { get; init; } = true;
    public bool ExcludeTransientThrottle { get; init; } = true;
    public AfmCorrectionStrategy Strategy { get; init; } = AfmCorrectionStrategy.Median;
    public bool SmoothProposedCurve { get; init; } = false;
    public double MaximumSmoothingPercent { get; init; } = 1.0;
}

public sealed record AfmCellResult(
    double FrequencyHz,
    double CurrentFlow,
    int Samples,
    double MeanTrim,
    double MedianTrim,
    double StandardDeviation,
    double AppliedCorrectionPercent,
    double ProposedFlow,
    string Confidence);

public sealed record AfmAnalysisResult(int AcceptedSamples, int RejectedSamples, IReadOnlyList<AfmCellResult> Cells);
