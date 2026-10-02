# TuneLab v0.9.1 — UAT corrections

- Driving/capture instructions lead each logging plan; After loading the file is a numbered workflow. Channel details are optional and collapsed.
- Intended purpose is selected before import, saved per log, editable in Log library and linked to Review plan. Purpose never confirms a calibration match or silently assigns an evidence role.
- Run synthetic AFM example explicitly confirms the invented example roles and analyzes the matching example curve. Real-log gates remain manual.
- Initial v0.9 UAT results are retained: 12 Pass / 2 Fail. Retest V9-AFM-DEMO and V9-STRATEGY, including purpose import/edit/backup. Full acceptance remains pending.

---

# TuneLab v0.9 — reflow, practice scenarios and logging strategy

- Sidebar scrolls at native browser zoom; controls wrap in short/narrow windows. Main menu preference is remembered and keyboard/help focus is clearer.
- Half-width panels use one column when space is limited; saved left/right placement returns when widened. Expanded cards use the viewport. Reset restores the current workspace's order, side, sizes and open state.
- One header **Synthetic demos** selector offers steady AFM, sparse AFM, boost pull, gear-limit and startup/idle scenarios. Separate practice windows isolate logs, settings and library writes from your original project.
- **Logging strategy** gives AFM, boost, startup and post-change validation capture plans, channel lists, review checks and official-source applicability. Voltage-only AFM is not relabeled Hz; startup fueling and arbitrary-channel plots remain deferred.
- v0.9 backups migrate older projects and retain explicit calibration gates. Calculations remain unchanged.

57 synthetic / 60 private-fixture tests, six DOM suites and four local-file Edge suites pass. Native browser zoom matrix covers 15 size/zoom combinations across 11 workspaces plus detached checks. See docs/V0.9-VERIFICATION.md and UAT-v0.9.html (14 cases). User v0.9 UAT is pending. Full Civic/KTuner semantics and the earlier deferred backlog remain outside this build.

---

# TuneLab v0.8 — visual clarity and evidence review

- Shared original/proposed table shading with gradient legends, two palettes, no-shading mode and zero-centered absolute/percentage change views. Scales stay fixed during edits; clipped values are counted and reset is explicit.
- Linked Boost/gear operating-location coverage and AFM local-support/kernel evidence, unique sample inspection and coverage gaps.
- Time/RPM/Hz chart-range selection with Shift-drag or numeric controls; histogram selection includes the whole bin. Evidence filters do not change proposal calculations.
- Change review identifies unsupported changes, manual refinements, protection, stale evidence and missing validation. Mark a revision reviewed and export its report; later edits/evidence changes require another review.
- v0.8 backups retain shading/review records and migrate v0.3–v0.7 projects. Existing window handoff, recovery and independent panel layouts are retained.
- Half-width panels snap left/right through drag targets, buttons or Alt+Left/Right; side choices survive backups and narrow layouts.
- Quieter log-format summary with expandable mappings/provenance, plain-English labels and contextual help.
- AFM analysis button now invokes the current normalization/provenance workflow.

55 synthetic tests; 58 with three private fixtures; five DOM suites and both local-file Edge browser suites pass. See docs/V0.8-VERIFICATION.md and UAT-v0.8.html (16 cases). Jonny signed off all 16 v0.8 UAT scenarios on 2026-10-02; see docs/V0.8-UAT-SIGNOFF.md. Coverage is descriptive, not confidence, ECU influence or engine safety. The reported browser-zoom/sidebar-scroll defect is tracked for the next version. Deferred features and full Civic/KTuner applicability checks remain unchanged.

---

# TuneLab v0.7 — workspace organization

- Named sidebar without numeric prefixes; collapsible menu and a compact/narrow workspace selector.
- Open the current workspace alone in a new window with project/log context and Return to main.
- Shared project revisions with **Edit in this window** handoff, pending-action coordination and explicit stale-edit rejection. Other windows view the same project; simultaneous editing uses a single editing owner.
- Movable chart, preview and evidence panels with drag handles, highlighted grid targets, half/full width, keyboard move controls, native resize/collapse/expand and Reset panel layout. Project controls and coupled forms remain anchored.
- Separate main/detached layouts for each workspace, cached locally and included in v0.7 JSON. Older backups retain their panel sizes on migration.
- Detached recovery JSON when the main window closes/reloads. Reopen the recovery in a new main window; automatic reconnection/owner promotion is not included.

See docs/V0.7-VERIFICATION.md and UAT-v0.7.html. Jonny signed off all 12 v0.7 UAT scenarios on 2026-10-02; see docs/V0.7-UAT-SIGNOFF.md. The supplied Fit/KTuner CSV imports partially: 189 matching rows; 2,344 rejected for column mismatch. Full raw CSV is retained and the rejection count is visible. No-space timestamp/temperature headers and explicit mbar MAP units are supported; unsupported channel meanings stay unmapped. A second KTuner CSV verifies import/header structure (2,938 frames, 30 channels, zero rejected rows) and raw backup/reopen. Full KTuner/Civic analysis and destination verification still require appropriate channels and reviewed semantics. Table shading and all other agreed deferred features remain deferred. Calculation rules are unchanged.

---

# TuneLab v0.6 — editing, evidence and backup workflows

Approved scope: docs/V0.6-SCOPE.md. Verification: docs/V0.6-VERIFICATION.md.

## New

- Drag rectangle selection with edge scrolling, Shift-click/Shift-arrow extension and protected selection indication.
- Coordinated table zoom and readable fit width with scrolling; independent advanced sizing retained.
- Linked AFM original/proposed and actual percentage/g/s deltas, changed-point markers, tooltips and labeled visual magnification.
- Single baseline/optional validation library picker with adjacent import-and-assign and calibration context.
- Dedicated Settings for platform terminology, complexity, appearance inheritance, units, preview behavior, review preferences and storage/backup.
- v0.6 workspace JSON, versioned migration of v0.3–v0.5 files, preflight validation, restore failure reports and saved roles/undo/layout/provenance retention. Confirmation flags clear on reopen.
- Per-export mapping/unit profiles and uncertain platform detection. Raw CSV preserved; mixed review units normalize separately per file. AFM normalizes known time/temperature/trim/MAP units and rejects incompatible evidence conventions.
- Compact log/calibration/unit/proposal status strip and 13-case UAT-v0.6.html.

## Verified and remaining

46 synthetic tests pass; 47 with the supplied private Hondata fixture. All three DOM suites pass. Headless Edge checks passed for local-file launch, drag/protection, zoom, native resize, clipboard, download, backup reopen and IndexedDB library restore. Hondata fixture: 116,475 frames, 105 channels, zero malformed-width rows. Raw logs are not included.

Real KTuner CSV verification is pending a fixture. The user signed off all tested scenarios within the implemented release-note scope on 2026-10-02; see docs/V0.6-UAT-SIGNOFF.md. KTuner-specific destination checks remain pending. Header aliases and metadata are evidence candidates, not verified ECU semantics. AFM retains the commanded-AFR and Fuel Status = 2 convention; unsupported status/mixture conventions require further review. Browser storage remains a library store; workspace JSON is the portable calibration backup. Personal document attachments remain deferred.

All agreed deferred features remain deferred. No AI, new coordinated alignment rules, installer, live hardware or flashing was added. Retained .NET code was not compiled.

---

# TuneLab v0.5 — historical-log usability and traceability

## New

- Project-level historical CSV library: multi-file import, exact-content duplicate detection, active log shared across workspaces, separate baseline/validation/comparison selection, calibration notes, exclusion and removal.
- Raw historical files included in saved project JSON; optional IndexedDB session-library persistence on the same browser. Save JSON is the portable backup. No raw logs are bundled with the release.
- Filtered log review: loaded operation, stable pedal, spool/overshoot, AFM eligibility and raw context. Candidate segments split across excluded rows, time gaps and gear changes. Exclusion counts/reasons are visible.
- Visible inspection cursor and actual/command point markers; slider and chart clicking/dragging update synchronized values and simultaneous error. Range reset, time bounds, Y bounds, zoom around selection and time/RPM axes.
- Actual/command visibility and colors; shared-selection error histogram and RPM/error scatter. Scatter click selects its sample; histogram click selects the first bin contributor and reports the count.
- Comparison of a selected second historical segment using a dashed actual-boost trace. Time alignment uses segment starts; RPM alignment uses recorded RPM. Similar conditions are not automatically established.
- Active-sample operating-location markers on supported boost/AFM tables. Missing atmospheric input falls back to an explicitly labeled reference. Markers do not prove active ECU influence.
- Edit-history journal with page/table/coordinate links, before/after values, conservative selective undo and full editing-state restoration. Overlapping later edits and changed units/axes/controls block selective undo.
- Editable source bodies and indices, bilinear/linear resampling inside existing bounds, protected-coordinate checks, exact complete-table imports, and last-successful-import restoration.
- Explicit local advanced-option buttons, page-specific guidance, numbered task navigation, contextual help and direct official references with applicability caveats.
- Full platform terminology and cross-platform title references; separate platform pressure-representation comparison. Imported source identity is preserved.
- App/page appearance inheritance, cell/header sizing, padding and column-fit choices, resizable/collapsible/expanded panels, saved panel properties, and portable layout preferences.
- Automatic/manual proposal preview choice. Automatic generation waits briefly after control changes and pauses when manual refinements would be overwritten.
- Transparent learning entries for imports, filtered-analysis snapshots and eligibility decisions. These are observations, not validated response models.
- Printable UAT-Guide.html with 34 historical-file test cases and downloadable result JSON.

## Retained

MPR and Command generation, smooth transitions, two-row editable AFM preview, manual operations, protected points, pressure/airflow conversions, native/derived gear layouts, review thresholds and v0.3/v0.4 project import.

## Verified here

40 engine tests pass with optional earlier real Hondata CSV compatibility. Two automated DOM suites pass for startup, editing, units, filtered segments, inspection cursor, duplicate recognition, shared roles, comparison overlay, page-specific help/sources, selective undo, source resampling/restoration, page themes, history and raw-log save/reopen. The earlier real CSV has 28,697 frames and is used for compatibility, not as a matching tuning baseline.

## Remaining acceptance checks and limitations

- No real browser rendering was performed. PC visual, resize, pointer, native clipboard/download, IndexedDB and destination paste checks are in UAT. DOM tests do not prove those outcomes.
- Candidate segments use loaded conditions and continuity; they do not independently prove WOT, acceleration quality, or comparable test conditions. Stable preset filters pedal change, not every steady-state criterion.
- The viewer currently plots actual/command plus a comparison actual trace. Arbitrary extra-channel plots, a formula editor, playback speed controls and full multivariate selection are deferred.
- Histogram selection moves to its first contributing sample, not every matching sample. No display smoothing is applied.
- Selective undo is available for compatible cellwise proposal changes. Structural source/gear/control edits use revision restoration. A cell edited back to an earlier numeric value can obscure operation dependency; use revision restoration when intent is uncertain.
- Source edits invalidate dependent proposals and calibration confirmations. Out-of-range extrapolation is blocked. Duplicate MPR column axes can be retained while regridding RPM; replacing those axes requires explicit semantic resolution and is blocked here.
- Local learning records observations and limitations. It does not automatically increase outcome confidence, determine causality, train a model or validate a tune. AI remains off/unimplemented.
- Platform Compare converts one source into two pressure representations. It does not load two independent platform calibrations. Structural gear translation remains in Boost by gear, with explicit assumptions.
- Guided steps navigate and explain; they are not a fully gated wizard or proof that a novice usability study has passed. Some generic control-level help still falls back to the relevant page workflow.
- No verified model-year factory paint catalog, full ECU simulator, live hardware connection, compiled Windows executable or flashing.
