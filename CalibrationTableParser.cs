using System.Globalization;
using TuneLab.Core.Models;

namespace TuneLab.Core.Tables;

public sealed class CalibrationTableParser
{
    public CalibrationTable Parse(string name, string text, bool firstRowIsColumnAxis = true, bool firstColumnIsRowAxis = true, string unit = "")
    {
        if (string.IsNullOrWhiteSpace(text)) throw new ArgumentException("Table text is empty.", nameof(text));

        var rows = text.Replace("\r", string.Empty)
            .Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .Select(ParseRow)
            .ToList();
        if (rows.Count == 0) throw new FormatException("No numeric table rows were found.");

        var width = rows.Max(x => x.Count);
        if (rows.Any(x => x.Count != width)) throw new FormatException("Pasted table has inconsistent column counts.");

        var dataRowStart = firstRowIsColumnAxis ? 1 : 0;
        var dataColStart = firstColumnIsRowAxis ? 1 : 0;
        if (rows.Count <= dataRowStart || width <= dataColStart) throw new FormatException("Table contains axes but no data cells.");

        var rowAxis = firstColumnIsRowAxis ? rows.Skip(dataRowStart).Select(x => x[0]).ToArray() : Array.Empty<double>();
        var columnAxis = firstRowIsColumnAxis ? rows[0].Skip(dataColStart).ToArray() : Array.Empty<double>();
        var values = new double[rows.Count - dataRowStart, width - dataColStart];
        for (var r = dataRowStart; r < rows.Count; r++)
            for (var c = dataColStart; c < width; c++)
                values[r - dataRowStart, c - dataColStart] = rows[r][c];

        return new CalibrationTable { Name = name, Unit = unit, RowAxis = rowAxis, ColumnAxis = columnAxis, Values = values };
    }

    private static List<double> ParseRow(string line)
    {
        var tokens = line.Contains('\t')
            ? line.Split('\t', StringSplitOptions.TrimEntries)
            : line.Split([',', ';', ' '], StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
        var result = new List<double>(tokens.Length);
        foreach (var token in tokens)
        {
            if (!double.TryParse(token, NumberStyles.Float, CultureInfo.InvariantCulture, out var value))
                throw new FormatException($"'{token}' is not a numeric table value.");
            result.Add(value);
        }
        return result;
    }
}
