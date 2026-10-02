# TuneLab v0.10

Extract the ZIP completely and double-click **Start-TuneLab.bat**. The app opens **portable/index.html** in your browser and works offline. No installer, .NET SDK, AI model or API key is required.

Start v0.10 UAT by opening **UAT-v0.10.html** (21 cases). Keep **UAT-v0.9.html** for the accepted v0.9.1 scenarios. Keep **UAT-v0.8.html** for the 16 signed-off review scenarios. Keep **UAT-v0.7.html** for the signed-off workspace scenarios. Keep **UAT-v0.6.html** for signed-off v0.6 scenarios. Keep **UAT-Guide.html** for the 34 baseline regression cases. Both use existing historical CSVs and tables, support printing and download result JSON. No new drive or vehicle connection is needed. See **RELEASE-NOTES.md** for implemented scope and limitations.

Use **Synthetic demos** in the header to choose one of five isolated practice scenarios; your original workspace stays open and practice does not write to its browser library. Use **Logging strategy** for purpose-specific capture instructions, channels and applicability. See **docs/V0.9-SCOPE.md** and **docs/V0.9-VERIFICATION.md** for the current release.

See **docs/V0.8-SCOPE.md** and **docs/V0.8-VERIFICATION.md** for the current release. Table shading is in Settings; Shift-drag charts or use Log review’s Evidence selection controls to inspect coverage. Use Review changes before exporting, and mark the inspected revision reviewed.

See **docs/V0.7-PROPOSAL.md** and **docs/V0.7-VERIFICATION.md** for v0.7 scope and checks. Use **Edit in this window** to hand off editing between windows. Drag preview/analysis panels by **Move panel**, use half/full width and reset as needed; main and detached arrangements save independently. If the main window closes or reloads, save a recovery JSON from the detached window and reopen it in a main window.

See **docs/V0.6-SCOPE.md** for approved/deferred work and **docs/V0.6-VERIFICATION.md** for fresh results and pending KTuner/UAT verification. Settings now centralizes workspace preferences. Log library stores a reviewed mapping and units per export; unknown units need explicit choices. Full workspace JSON retains raw logs, mapping provenance, proposals, history, role IDs, layout and settings.

Use Log review’s purpose setup, readiness, synchronized raw channels, evidence bookmarks and matched validation comparison. Calibration tables restore independently of active logs when browser storage is enabled. Download JSON as the portable backup. See **docs/V0.10-SCOPE.md** and **docs/V0.10-VERIFICATION.md**.

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

Proposed tables support pointer-drag rectangles, edge scrolling and Shift selection, coordinated zoom, add/set/percent/interpolation/smoothing/tapered addition, protected points and undo. The frequency/proposed airflow rows remain the two-row copy format; a read-only original airflow row is also visible for review. Percentages use displayed values, so absolute-pressure and gauge-pressure percentages differ. Display and export precision is explicit.

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

55 synthetic tests and all five DOM suites pass; 58 tests pass with the private Hondata fixture, malformed Fit/KTuner rejection checks and consistent KTuner header/import checks. Local-file headless Edge checks passed for pointer selection, edge scrolling, protection, zoom, resizing, clipboard, downloads, backup reopen and IndexedDB. User acceptance of all 12 v0.7 scenarios is signed off in **docs/V0.7-UAT-SIGNOFF.md** (2026-10-02); prior v0.6 acceptance remains in **docs/V0.6-UAT-SIGNOFF.md**. The first Fit CSV has mismatched header/data widths; the second KTuner CSV verifies 30-channel import and raw backup/reopen. Full Civic/KTuner analysis and destination checks remain pending. See **docs/V0.8-VERIFICATION.md** for current results; Jonny signed off all 16 v0.8 scenarios on 2026-10-02; see **docs/V0.8-UAT-SIGNOFF.md**. Browser zoom/sidebar scrolling is a known next-version issue. Historical export findings remain in **docs/V0.7-UAT-FINDINGS.md**.

The retained **src/** and **tests/** Windows/Avalonia shell is older v0.2 code, not this interface; it was not compiled. **README-native-v0.2.md** describes that older shell.
