using System.Globalization;
using TuneLab.Core.Models;
using TuneLab.Core.Platforms;

namespace TuneLab.Core.Parsing;

public sealed class HondataCsvParser
{
    public TuningLog Parse(string path)
    {
        using var reader = new StreamReader(path);
        var metadata = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        string? headerLine = null;

        while (reader.ReadLine() is { } line)
        {
            if (line.StartsWith("frame,", StringComparison.OrdinalIgnoreCase))
            {
                headerLine = line;
                break;
            }

            if (line.StartsWith("Export of ", StringComparison.OrdinalIgnoreCase)) metadata["Export"] = line[10..];
            else if (line.StartsWith("Number of frames ", StringComparison.OrdinalIgnoreCase)) metadata["Frames"] = line[17..];
            else if (line.StartsWith("Length:", StringComparison.OrdinalIgnoreCase)) metadata["Length"] = line[7..].Trim();
        }

        if (headerLine is null) throw new InvalidDataException("Could not locate a Hondata CSV header row beginning with 'frame,'.");
        var channels = SplitCsvLine(headerLine).ToArray();
        var frames = new List<LogFrame>(metadata.TryGetValue("Frames", out var expected) && int.TryParse(expected, out var n) ? n : 16_384);
        var timeIndex = Array.FindIndex(channels, x => x.Equals("time_ms", StringComparison.OrdinalIgnoreCase));

        string? dataLine;
        var index = 0;
        while ((dataLine = reader.ReadLine()) is not null)
        {
            if (string.IsNullOrWhiteSpace(dataLine)) continue;
            var fields = SplitCsvLine(dataLine);
            if (fields.Count != channels.Length) continue;

            var frame = new LogFrame
            {
                Index = index++,
                TimeSeconds = timeIndex >= 0 && double.TryParse(fields[timeIndex], NumberStyles.Float, CultureInfo.InvariantCulture, out var ms) ? ms / 1000.0 : index
            };

            for (var i = 0; i < channels.Length; i++)
            {
                frame.Raw[channels[i]] = fields[i];
                if (double.TryParse(fields[i], NumberStyles.Float, CultureInfo.InvariantCulture, out var value)) frame.Values[channels[i]] = value;
            }
            frames.Add(frame);
        }

        var log = new TuningLog
        {
            SourcePath = path,
            Channels = channels,
            Frames = frames,
            Metadata = metadata
        };
        if (HondataL15CaProfile.LooksLike(channels)) log.PlatformId = HondataL15CaProfile.Id;
        return log;
    }

    private static List<string> SplitCsvLine(string line)
    {
        var result = new List<string>();
        var current = new System.Text.StringBuilder();
        var quoted = false;
        for (var i = 0; i < line.Length; i++)
        {
            var c = line[i];
            if (c == '"')
            {
                if (quoted && i + 1 < line.Length && line[i + 1] == '"') { current.Append('"'); i++; }
                else quoted = !quoted;
            }
            else if (c == ',' && !quoted) { result.Add(current.ToString()); current.Clear(); }
            else current.Append(c);
        }
        result.Add(current.ToString());
        return result;
    }
}
