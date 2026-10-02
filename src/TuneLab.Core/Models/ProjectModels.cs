namespace TuneLab.Core.Models;

public sealed class TuneProject
{
    public string Name { get; set; } = "Untitled Project";
    public string PlatformId { get; set; } = "honda-l15ca-hondata";
    public string Vehicle { get; set; } = "2026 Honda Civic Si";
    public List<CalibrationSnapshot> Calibrations { get; } = [];
    public List<LogReference> Logs { get; } = [];
    public List<TuningExperiment> Experiments { get; } = [];
    public Dictionary<string, string> Notes { get; } = new(StringComparer.OrdinalIgnoreCase);
}

public sealed class CalibrationSnapshot
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = "Calibration";
    public DateTimeOffset CreatedAt { get; init; } = DateTimeOffset.Now;
    public Dictionary<string, CalibrationTable> Tables { get; } = new(StringComparer.OrdinalIgnoreCase);
    public Dictionary<string, string> Settings { get; } = new(StringComparer.OrdinalIgnoreCase);
    public string Notes { get; set; } = string.Empty;
}

public sealed record LogReference(Guid Id, string Path, Guid? CalibrationId, string Notes = "");

public sealed class TuningExperiment
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = "Experiment";
    public Guid? BaselineCalibrationId { get; set; }
    public Guid? TestCalibrationId { get; set; }
    public Guid? BaselineLogId { get; set; }
    public Guid? TestLogId { get; set; }
    public string Hypothesis { get; set; } = string.Empty;
    public string ResultNotes { get; set; } = string.Empty;
}

public sealed class CalibrationTable
{
    public required string Name { get; init; }
    public string Unit { get; init; } = string.Empty;
    public IReadOnlyList<double> ColumnAxis { get; init; } = [];
    public IReadOnlyList<double> RowAxis { get; init; } = [];
    public required double[,] Values { get; init; }
    public int Rows => Values.GetLength(0);
    public int Columns => Values.GetLength(1);
}
