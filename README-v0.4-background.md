# TuneLab v0.4 — offline calibration workbench

## Start

Extract the whole ZIP, then double-click **Start-TuneLab.bat**. Alternatively open **portable/index.html** in Edge, Chrome or Firefox. The app runs locally without an installer, subscription, AI model, API key, .NET SDK or Internet connection. It does not flash an ECU.

## New in this release

- Motorsport Dark, Workshop Light, Type R inspired and Si / Urban Gray palettes; system preference, custom accent and compact tables. Preferences persist when browser storage is available.
- Guided, Standard and Advanced presentation. Advanced exposes filters, mappings and review thresholds. Lower levels have a Show / hide advanced settings button. Calculation accuracy is identical.
- Contextual help for controls and workspace panels; atmospheric pressure and other common concepts explained in plain English.
- Editable proposed boost tables and a two-row frequency / airflow AFM preview. Click then Shift-click to select rectangles; double-click or Enter to set a cell. Select all, add/subtract, set, percentage adjustment, interpolation along either axis, smoothing and tapered added adjustments. Source protection is respected.
- Undo/redo for generated proposals and manual edits (40 steps). Restore selected source values for boost and AFM; restore native original for gear tables. Recalculating manually refined boost / AFM proposals asks before replacing refinements.
- Boost source / copy units: absolute bar, absolute kPa, absolute PSI, gauge PSI at selected atmospheric pressure, KTuner matching PSI, pressure ratio at selected reference. Changing output units preserves the physical proposal. Source-unit changes reinterpret imported values and require recalculation.
- AFM airflow display / copy: g/s, kg/h, lb/min. Copy with or without row labels. Hondata / KTuner presentation preserves imported frequency points; automatic platform-specific resampling is not asserted.
- Imported boost-by-gear: Hondata Gear × RPM, KTuner per-gear RPM × atmospheric pressure. Import KTuner gears individually; import Hondata as one grid. Gear values have explicit source units. Actual native factory axes and paste behavior still require user verification.
- Platform-format view and export: KTuner → Hondata interpolates at explicit reference pressure. Hondata → KTuner expands using user-selected atmospheric indices and constant gauge or constant absolute pressure. Original native data is retained; edits to derived formats are identifiable and undoable. No conversion proves equivalent ECU behavior.
- Selected-gear curves and a comparison of gear limit, MPR and one explicit incoming Command-table index at reference pressure. Outside-axis points are unavailable, not extrapolated. Deliberately lower gear limits remain legitimate.
- Change review: absolute/percentage changes, resulting maximum, increased neighbor steps, editable thresholds, stale proposal notices, descriptive effects and evidence limitations. JSON report includes every alert; screen lists first 150 per table.
- v0.4 project JSON preserves proposals and gear originals. v0.3 projects can be opened, with their boost tables requiring recalculation. Logs are not embedded. Reopened AFM proposals retain values as manual proposals with zero carried-over evidence and require fresh logs for validation.

## Editing rules and units

Manual percentages multiply the displayed values; +5% absolute bar differs from +5% gauge PSI. Zero / negative reference values are omitted from percentage warnings. For AFM, nonpositive source values and protected points cannot be manually adjusted. Positive-flow cells must remain positive.

Interpolation uses actual axis spacing between selected endpoints, preserving endpoints. It is directional, not a hidden surface-fitting algorithm. Smoothing uses immediate selected neighbors from the unchanged input and preserves boundaries. Tapered addition applies zero at the selection edges and the full specified amount at the center (smoothstep).

Conversions use 14.5038 PSI/bar and 14.6959 PSI standard reference. Gauge conversion uses the selected atmospheric pressure. KTuner matching applies the editable additive offset. Output is rounded to the selected displayed precision. The app's offset arithmetic retains precision until final rounding; its order can differ from a spreadsheet formula that rounds before adding 0.1.

Gear table indices are explicitly supplied: no factory gear limits or PA breakpoints are invented. The gear demo is SYNTHETIC, retained as such in saved projects. KTuner pressure-dependent values are collapsed when creating a Hondata-format grid; the saved native original preserves the information. Converting back from edited derived values is a new conversion, not recovery of lost PA variation. Restore native original recovers the imported original.

## Existing workflows retained

TC MPR / TC Boost Command generation with independent RPM and column selection, smoothstep transition widths, protected cells and source preservation. Starting MPR, Command and 129-point AFM data came from Jon's earlier workbook; paste the actual active tables before analysis.

AFM evidence: separate baseline/validation, closed-loop Fuel Status exactly 2, warm/stable operation, sampling continuity, trim rejection/cap, Gaussian averaging, local sample support, capped correction and optional factory comparison. Validation never drives automatic correction. Total Trim defaults to Trim; inspect mappings and source units.

Datalog review retains boost-versus-command plots, simultaneous overshoot, row inspection, event summaries and quality checks. CSV parser supports metadata, missing numeric values and the earlier escaped-CRLF Hondata export. Full logs are analyzed; chart display is downsampled. Large files can pause main-thread parsing.

## Important review boundaries

Review thresholds are preferences, not verified engine/component limits. A passing review is not a safety certification. The change review quantifies table effects; it does not predict actual boost, horsepower or failure probability.

Gear review currently assesses changes at the selected atmospheric reference. Inspect other atmospheric columns separately. Alignment compares candidate values and flags differences; it does not calculate the complete ECU control path or automatically synchronize all tables.

AI integration, a full histogram/scatter/calculated-channel viewer, verified log tracing on all tables, task-specific filtering outside AFM, automated multi-pull comparison, richer evidence-based outcome scoring, platform-specific automatic AFM resampling and coordinated alignment proposals remain roadmap work. v0.4 does not claim these features.

## Verification

29 engine checks passed with an optional real Hondata CSV compatibility fixture. Automated DOM integration passed for startup, manual editing, undo, pressure and airflow unit switches, format toggling, save/reopen, themes, help and review. This verifies interface state and event wiring, not browser rendering.

Visual rendering, native clipboard/download behavior and final paste acceptance still need a PC-browser check. The available cloud browser blocks local pages; no local rendering browser was used. The retained **src/** native Avalonia/.NET v0.2 shell is not this UI and was not compiled. Use Start-TuneLab.bat for this edition.

Engine tests need Node 20+:

```sh
cd portable
node --test tests/engine.test.cjs tests/workbench.test.cjs
```

For the included DOM integration test (development only):

```sh
npm install
npm run test:ui
```

## Platform references

- Hondata FlashPro table editing: https://www.hondata.com/help/flashpro/table_window.htm
- Hondata AFM guidance: https://www.hondata.com/help/flashpro/tuning_afm_flow.htm
- KTuner selection adjustment: https://www.ktuner.com/KTunerHelp/tools.htm
- KTuner undo/redo: https://www.ktuner.com/KTunerHelp/edit.htm
- KTuner boost-by-gear PA/RPM axes: https://ktuner.com/KTunerHelp/boost_by_gear_limits.htm
- KTuner Final Boost Target: https://ktuner.com/KTunerHelp/final_boost_target.htm

Generic Hondata boost-solenoid documentation is not used as proof of L15CA table behavior. Hondata gear layout follows the user's supplied platform structure and needs actual source-table/paste validation.
