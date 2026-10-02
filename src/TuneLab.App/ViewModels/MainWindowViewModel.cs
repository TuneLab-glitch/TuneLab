using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using TuneLab.Core.Analysis;
using TuneLab.Core.Models;
using TuneLab.Core.Parsing;

namespace TuneLab.App.ViewModels;

public partial class MainWindowViewModel : ObservableObject
{
    [ObservableProperty] private string status = "Drop a Hondata CSV here or choose Open Log.";
    [ObservableProperty] private string logName = "No log loaded";
    [ObservableProperty] private string platform = "—";
    [ObservableProperty] private string frameSummary = "—";
    [ObservableProperty] private string eventSummary = "—";

    public ObservableCollection<BoostEventRow> BoostEvents { get; } = [];

    public void LoadLog(string path)
    {
        try
        {
            Status = "Loading…";
            var log = new HondataCsvParser().Parse(path);
            var events = new BoostEventDetector().Detect(log);
            LogName = Path.GetFileName(path);
            Platform = log.PlatformId;
            FrameSummary = $"{log.Frames.Count:N0} frames • {log.DurationSeconds:F1} sec • {log.Channels.Count} channels";
            BoostEvents.Clear();
            foreach (var e in events.OrderByDescending(x => x.PeakOvershoot).Take(100)) BoostEvents.Add(new BoostEventRow(e));
            EventSummary = $"{events.Count} boost events • worst overshoot {(events.Count == 0 ? 0 : events.Max(x => x.PeakOvershoot)):F1} psi";
            Status = "Ready. Boost event detection is active. Project architecture, data-quality foundations, and AFM engine v0.2 are active. AFM table import is the next UI slice.";
        }
        catch (Exception ex) { Status = $"Load failed: {ex.Message}"; }
    }
}

public sealed class BoostEventRow
{
    public BoostEventRow(BoostEvent e)
    {
        Severity = e.Severity; Gear = e.Gear; Rpm = $"{e.StartRpm:F0}–{e.EndRpm:F0}";
        Command = e.MaxBoostCommand.ToString("F1"); Peak = e.PeakBoost.ToString("F1"); Overshoot = e.PeakOvershoot.ToString("+0.0;-0.0;0.0");
        BoostRate = e.PeakBoostRate.ToString("F0"); WastegateCommand = e.MinWastegateCommand.ToString("F1"); CylinderAir = e.PeakCylinderAir.ToString("F0");
    }
    public string Severity { get; }
    public int Gear { get; }
    public string Rpm { get; }
    public string Command { get; }
    public string Peak { get; }
    public string Overshoot { get; }
    public string BoostRate { get; }
    public string WastegateCommand { get; }
    public string CylinderAir { get; }
}
