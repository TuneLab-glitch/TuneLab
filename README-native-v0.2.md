# TuneLab v0.2

TuneLab is a Windows-first, calibration-aware datalog analysis application aimed initially at Honda L15CA tuning with Hondata and KTuner.

## V1 direction

TuneLab is intentionally **project-centric** rather than just a generic CSV viewer. A project can represent a car/tune development effort and links logs to the calibration state that produced them.

Core V1 capabilities:

1. AFM / MAF calibration analysis using Total Trim with configurable mean, median, or distance-weighted correction strategies.
2. Automatic boost-event and transient detection with overshoot, dBP/dt, WG/WGCMD, cylinder fill, gear and RPM context.
3. Calibration-aware boost strategy reconstruction foundations for TC MPR, Boost by Gear and Final Boost Target / TB Boost CMD.
4. Baseline-vs-test experiment comparison.
5. Explainable data-quality and tuning diagnostics. Recommendations remain proposals; TuneLab never silently modifies calibration data.

## New in v0.2

- Project, calibration snapshot, log reference and experiment models.
- Generic calibration table object and clipboard-friendly table parser.
- Derived-channel engine for boost error/rate, pedal/throttle rate, AFR error and fuel-pressure error.
- Data-quality analyzer that flags missing/frozen/unusable channels.
- Experiment comparator for boost-event behavior between logs.
- Expanded AFM analyzer with selectable Mean / Median / DistanceWeighted strategies and optional bounded smoothing.
- Added unit test for table parsing.

## Existing v0.1 functionality retained

- Hondata CSV parser supporting the metadata lines used by current logs.
- L15CA/Hondata channel aliases.
- Automatic boost-event detection.
- Pressure-ratio to gauge-boost conversion using atmospheric pressure.
- Avalonia desktop shell and drag/drop CSV loading.

## Build

Requires .NET 10 SDK.

```bash
dotnet restore
dotnet build
dotnet run --project src/TuneLab.App
```

The current execution environment used to generate this source does not have the .NET SDK installed, so source-level validation was possible here but a real compiler pass must be done on a machine with .NET 10.

## Next implementation slice

The next useful UI slice is the AFM Analyzer:

- Load one or more Hondata logs.
- Paste/import AFM breakpoints and flow values.
- Choose correction strategy and filters.
- Inspect accepted/rejected sample counts and confidence.
- View current vs proposed flow.
- Copy proposed values back to Hondata.

After that, wire calibration-table interpolation into the Boost Strategy Analyzer so a log frame can show actual BP, BP CMD, interpolated TC MPR target and BBG ceiling at the same instant.
