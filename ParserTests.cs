using TuneLab.Core.Parsing;

namespace TuneLab.Core.Tests;

public sealed class ParserTests
{
    [Fact]
    public void FindsHeaderAfterHondataMetadata()
    {
        var path = Path.GetTempFileName();
        File.WriteAllText(path, "Export of x\nNumber of frames 2\nLength: 0:00:00.010s\nframe,time_ms,RPM,BP,BP CMD,AFM.c,WGCMD\n0,0,3000,1,2,500,3\n1,10,3100,2,3,600,2\n");
        var log = new HondataCsvParser().Parse(path);
        Assert.Equal(2, log.Frames.Count);
        Assert.Equal("honda-l15ca-hondata", log.PlatformId);
    }
}
