# TuneLab v0.7

Extract the ZIP completely and double-click **Start-TuneLab.bat**. The app opens **portable/index.html** in your browser and works offline. No installer, .NET SDK, AI model or API key is required.

Start v0.7 UAT by opening **UAT-v0.7.html** (12 cases). Keep **UAT-v0.6.html** for signed-off v0.6 scenarios. Keep **UAT-Guide.html** for the 34 baseline regression cases. Both use existing historical CSVs and tables, support printing and download result JSON. No new drive or vehicle connection is needed. See **RELEASE-NOTES.md** for implemented scope and limitations.

See **docs/V0.7-PROPOSAL.md** and **docs/V0.7-VERIFICATION.md** for v0.7 scope and checks. Use **Edit in this window** to hand off editing between windows. Drag preview/analysis panels by **Move panel**, use half/full width and reset as needed; main and detached arrangements save independently. If the main window closes or reloads, save a recovery JSON from the detached window and reopen it in a main window.

See **docs/V0.6-SCOPE.md** for approved/deferred work and **docs/V0.6-VERIFICATION.md** for fresh results and pending KTuner/UAT verification. Settings now centralizes workspace preferences. Log library stores a reviewed mapping and units per export; unknown units need explicit choices. Full workspace JSON retains raw logs, mapping provenance, proposals, history, role IDs, layout and settings.

## Suggested first session

1. Use **Import logs once** to load a few historical CSVs.
2. Open **Manage logs** and record installed calibration names only where known.
3. Open **Log review**, verify channel/time/pressure mappings, choose a preset and a candidate segment.
4. Move the slider or click/drag the chart. Compare the cursor, actual/command points and simultaneous error.
5. Assign a baseline or validation from the library in **AFM** only when it matches the intended calibration.
6. Paste your actual source tables before generating tuning proposals.
7. Inspect **Change review** and **Edit history**.
8. Save project JSON; it includes raw logs, revisions, metadata, journal and learning observations. Reloading clears AFM confirmations.

Browser session storage is optional and can vary for file URLs. Project JSON is the reliable portable backup; it may be large when several logs are embedded. Parsing and saving still use the main thread. No project files are uploaded by the app.

## Table editing

Source boost single click toggles protection; double click edits its value. Edit source indices explicitly and preview resampling before applying. Whole-table import uses supplied values exactly. Removing protected coordinates or adding out-of-range indices is blocked. Duplicate MPR atmospheric columns are preserved when that axis is unchanged; they are not silently merged.

Proposed tables support pointer-drag rectangles, edge scrolling and Shift selection, coordinated zoom, add/set/percent/interpolation/smoothing/tapered addition, protected points and undo. The AFM two-row preview is editable. Percentages use displayed values, so absolute-pressure and gauge-pressure percentages differ. Display and export precision is explicit.

Automatic preview updates generated boost proposals after a short pause. If a proposal has manual refinements, it pauses and requests an explicit update rather than erasing them. This choice currently applies to boost generation; AFM analysis remains explicit.

## Historical-log interpretation

Filters and event selection are shared by the log chart, histogram, scatter and associated inspection. The same underlying log can be assigned separately for AFM evidence. AFM eligibility uses the existing warm/closed-loop/stability rules. Boost review retains transients in its spool/overshoot preset; no smoothing masks spikes.

Comparison time traces align segment starts, not timestamps from separate days. Gear, fuel, temperature and hardware need independent checks. Operating markers identify table coordinates, not ECU control causality. Missing atmosphere uses a clearly labeled reference.

Learning entries record observations only. More samples or logs do not automatically increase confidence. Review rules are user preferences, not verified hardware limits, and passing them is not calibration safety certification.

## Sources and naming

Official Hondata and KTuner links are available in contextual help. Hondata's turbo-Civic tuning notes used for naming cover 10th-generation cars; they do not establish every 11th-generation L15CA behavior. Platform terminology changes do not erase source provenance or prove equivalent tables. Source URLs and assumptions are also listed in the v0.4 background notes retained below.

## Verification

Node 20+ engine tests:

```
cd portable
npm test
```

DOM integration (development only):

```
npm install
npm run test:ui
```

48 synthetic tests and all four DOM suites pass; 50 tests pass with the private Hondata fixture and explicit rejection/retention checks for the malformed Fit/KTuner CSV. Local-file headless Edge checks passed for pointer selection, edge scrolling, protection, zoom, resizing, clipboard, downloads, backup reopen and IndexedDB. User acceptance of implemented release-note scenarios is signed off in **docs/V0.6-UAT-SIGNOFF.md**. The Fit CSV has mismatched header/data widths, so full KTuner analysis and destination checks remain pending. See **docs/V0.7-VERIFICATION.md** and **docs/V0.7-UAT-FINDINGS.md**.

The retained **src/** and **tests/** Windows/Avalonia shell is older v0.2 code, not this interface; it was not compiled. **README-native-v0.2.md** describes that older shell.
