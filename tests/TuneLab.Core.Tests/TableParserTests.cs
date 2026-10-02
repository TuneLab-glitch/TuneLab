using TuneLab.Core.Tables;

namespace TuneLab.Core.Tests;

public sealed class TableParserTests
{
    [Fact]
    public void Parses_Tab_Delimited_Table_With_Axes()
    {
        var text = "0\t1\t2\n1000\t1.1\t1.2\n2000\t1.3\t1.4";
        var table = new CalibrationTableParser().Parse("MPR", text);
        Assert.Equal(2, table.Rows);
        Assert.Equal(2, table.Columns);
        Assert.Equal(2000, table.RowAxis[1]);
        Assert.Equal(1.4, table.Values[1,1], 6);
    }
}
