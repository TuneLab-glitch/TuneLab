using TuneLab.Core.Platforms;

namespace TuneLab.Core.Tests;

public sealed class PressureRatioTests
{
    [Fact]
    public void ConvertsPressureRatioUsingActualAtmosphericPressure()
    {
        var psi = HondataL15CaProfile.PressureRatioToGaugePsi(2.599, 0.98);
        Assert.InRange(psi, 22.70, 22.75);
    }
}
