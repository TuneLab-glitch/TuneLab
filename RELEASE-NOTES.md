# TuneLab v0.10 — purpose-based evidence review

- Explicit purpose setup and channel readiness; purpose, sample filters and calibration roles remain distinct.
- Four selectable raw channels with synchronized cursor/time inspection, native-value scales, missing/gap breaks and extrema-preserving large-log display reduction. Startup review works without boost channels.
- Source-row evidence bookmarks retain channels, range, revision, purpose and notes; reopen and portable/browser retention included.
- Matched AFM trim and boost-error validation comparisons show independent eligibility, shared operating bins, support counts and coverage gaps. Reviewed units/revisions and explicit condition checks are required; no causal/safety claim.
- Central import flow, connected checklist/Review plan, Review notes, Pressure representations and purpose-relevant status reduce overlap.
- All calibration tables restore independently of active log selection, with optional atomic browser workspace caching. Project JSON is the portable backup.
- Four extra table gradients, including teal blue → green → yellow → orange → red. Extensible model/year/color theme selectors currently cover U.S. Civic Si 2022–2026, with readable contrast and existing appearance inheritance.
- Independent cursor-tracking/coverage display switches, recorded-time raw playback and a renameable custom workspace with live table views and grid layout.
- Dynamic plain-English Current setup summaries on all 12 tabs describe selected filters, units, edits and missing prerequisites.
- Version 10 JSON migrates earlier projects; calibration gates, history, protected cells and existing calculations are retained.

63 synthetic / 66 private-fixture tests, six DOM suites and five Edge browser suites pass. See docs/V0.10-VERIFICATION.md and UAT-v0.10.html (21 cases). User acceptance is pending; v0.9.1 sign-off is unchanged. Calculated channels and advanced playback layouts, AI, alignment, attachments and full expanded ECU semantics remain deferred.

---

# TuneLab v0.9.1 — UAT corrections

- Driving/capture instructions lead each logging plan; After loading the file is a numbered workflow. Channel details are optional and collapsed.
- Intended purpose is selected before import, saved per log, editable in Log library and linked to Review plan. Purpose never confirms a calibration match or silently assigns an evidence role.
- Run synthetic AFM example explicitly confirms the invented example roles and analyzes the matching example curve. Real-log gates remain manual.
- Initial v0.9 UAT results are retained: 12 Pass / 2 Fail. Jonny signed off both remaining cases on 2026-10-02; all 14 release scenarios are accepted. See docs/V0.9-UAT-SIGNOFF.md/json.

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

55 synthetic tests; 58 with three private fixtures; five DOM suites and both local-file Edge browser suites pass. See docs/V0.8-VERIFICATION.md and UAT-v0.8.html (21 cases). Jonny signed off all 16 v0.8 UAT scenarios on 2026-10-02; see docs/V0.8-UAT-SIGNOFF.md. Coverage is descriptive, not confidence, ECU influence or engine safety. The reported browser-zoom/sidebar-scroll defect is tracked for the next version. Deferred features and full Civic/KTuner applicability checks remain unchanged.

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

## v0.10 Acceptance — 2026-10-02

Jonny reported “All UAT passed.” All 21 release scenarios are accepted; see docs/V0.10-UAT-SIGNOFF.md/json (or V0.10-UAT-SIGNOFF.md/json from this directory). This supersedes earlier pending-UAT status. Delivered application commit and ZIP remain unchanged. Next-version observations remain planning items, not an approved implementation scope.


## v0.11 Workflow and Interface Build — 2026-10-02

Jonny approved the proposed six-item build. See docs/V0.11-SCOPE.md and docs/V0.11-VERIFICATION.md. Menu reorder, global conservative proposal updates/status, scoped typography, Pressure Conversion naming and named UI layouts are implemented with prior performance/appearance corrections. Gear tables render independently of logs on entry/restore. All 14 UAT-v0.11.html cases remain pending; original gear and appearance findings require user retest. Historical v0.10 is 19 prior passes / 2 reopened. Deferred features remain deferred.

Playback/table tracing added at Jonny’s request during v0.11: global controls, original-row candidate markers across native/custom views and synchronized detached windows. All 14 UAT scenarios pending; see V0.11-SCOPE/VERIFICATION.


## v0.12 Playback and Tracing Review — 2026-10-02

Jonny approved this build. See docs/V0.12-SCOPE.md and docs/V0.12-VERIFICATION.md. Playback continuity, Command tracing, original-row visit/time summaries, explicit menu saving and six-gear Hondata layout/template corrections are implemented. KTuner axis units are explicit; nine rounded -0.2 screenshot headers require a full-precision export. v0.11 is 12 Pass / 2 Fail; all 12 v0.12 UAT cases are pending. No user signoff is inferred. Deferred work remains deferred.


Current v0.12 UAT status: 11 Pass / 1 Fail, submitted by Jon in Edge on 2026-10-02. V12-COMMAND remains unresolved; all other eleven cases are signed off. See docs/V0.12-UAT-FINDINGS.md and docs/V0.12-UAT-results.json. New next-revision request: shade Log Review Original Data Row readings by per-channel min/max using selected table gradients. Prior pending counts are superseded; delivered archives remain unchanged.


## v0.13 Approved Build — 2026-10-02

Jonny approved the five-item scope in docs/V0.13-SCOPE.md. Active Log beside playback, visible per-recording Command units/status, wider four-track grids, Original Data Row gradients and obsolete-control/appearance cleanup are implemented. All twelve v0.13 UAT scenarios are pending; instructions include exact navigation and checkpoints. v0.12 retains eleven passes and one Command failure awaiting retest. Physical log-unit confirmation is separate from successful candidate tracing. Private logs/backups remain excluded. Deferred features remain deferred.


Current v0.13 UAT: eleven Pass / one Needs Revision, explicitly reported by Jonny on 2026-10-02. V13-COMMAND needs more obvious dynamic status/error messaging; all other scenarios, including real Command tracing, pass. Earlier pending status is superseded. See docs/V0.13-UAT-FINDINGS.md and docs/V0.13-UAT-results.json. Prior v0.12 Command failure is historical, not a remaining functional failure after this retest. Delivered archives unchanged; no new build initiated.


## v0.14 Approved Build — 2026-10-02

Jonny approved navigation, playback and review improvements plus a compact/resizable global log box. See docs/V0.14-SCOPE.md. Build verification and all eleven precise-navigation UAT cases are tracked separately; no user acceptance is inferred. Prior v0.13 is eleven passes / one messaging presentation revision. Longer-term features remain deferred.


## v0.14 UAT Acceptance — 2026-10-02

Jon submitted all eleven scenarios Pass in Edge at 2026-10-02T17:06:33.612Z. See docs/V0.14-UAT-SIGNOFF.md and docs/V0.14-UAT-results.json (paths relative to repo root). Earlier pending status is superseded; delivered app/archive unchanged. V14-MESSAGES closes the previously reported messaging presentation finding through v0.14 retest. V14-APPROVALS passes with a usability observation: excessive recorded edit operations make individual review impractical; investigate and group meaningful review checkpoints without erasing audit history or silently approving hidden edits. Suspected testing accumulation is unverified. Next-version player-collapse/popout and chart/table zoom notes remain planning only.


## v0.15 Approved Build — 2026-10-02

Jonny approved player collapse/popout, chart drag/context actions, anchored table wheel zoom and review checkpoints; added end-to-end exported-log tutorial and cautious destination paste-back verification during the build. See docs/V0.15-SCOPE.md. v0.14 is accepted (eleven Pass). All thirteen v0.15 exact-navigation UAT cases remain pending. No user acceptance or hardware/ECU action is inferred. Deferred work remains deferred.


## v0.15 UAT Follow-up — 2026-10-02

Jon submitted eleven Pass / zero Fail / two Not tested in Edge at 2026-10-02T17:44:00.516Z. V15-DISCONNECT and V15-CONTEXT remain untested. V15-POPOUT is Pass with a reported disconnect after tab transitions and a request for an in-popout Reconnect button. Preserve exact statuses and investigate navigation heartbeat continuity; do not infer full sign-off or silently treat the observation as resolved. See docs/V0.15-UAT-FINDINGS.md and docs/V0.15-UAT-results.json. Application/archives unchanged in this documentation update.


## v0.15 UAT Acceptance — 2026-10-02

Jonny explicitly reports all UAT passed. All thirteen cases are accepted; V15-DISCONNECT and V15-CONTEXT now pass. See docs/V0.15-UAT-SIGNOFF.md/json. Preserve original submitted eleven Pass / two Not tested as historical evidence. Prior popout reconnect/navigation-continuity and Current Proposal Review clarity observations remain follow-up improvements; no code fixes are inferred from sign-off. Application/archive unchanged; packaging/publication completion is a separate remaining delivery task.


## v0.16 Workflow Cleanup Build — 2026-10-02

Approved whole-app audit scope is implemented; see docs/V0.16-SCOPE.md and docs/V0.16-VERIFICATION.md. Compact player, reconnect, clear proposal acknowledgements, task hierarchy, optional conversion tool, tutorial/instruction routing, table actions, grouped settings and indexed hover are included. v0.15 retains all thirteen UAT passes; v0.16 has thirteen pending precise-navigation cases. Deferred work remains deferred.


## v0.16.2 Startup Loading — 2026-10-02

Startup interaction gate implemented. See docs/V0.16.2-STARTUP.md for verification and exact UAT steps. Prior UAT acceptance unchanged; chart gesture note remains pending.

## v0.16.2 UAT Acceptance — 2026-10-02

Jonny explicitly reports: "All UAT has passed" for outputs/UAT-v0.16.2.html. All 15 scenarios are accepted: the 13 v0.16 cases plus V161-WORKBOOK and V162-STARTUP. This supersedes prior pending acceptance for these scenarios. Evidence is user chat sign-off; no submitted results JSON or browser/version details are inferred. Next-build implementation remains on hold until Jonny explicitly confirms; chart mouse gestures, page Collapse/Expand All and terminology/mode review remain planning notes. Application and archive unchanged by this acceptance record.


## v0.17 Approved Build — 2026-10-02

Jonny confirmed starting the aligned build; this supersedes the prior hold. See docs/V0.17-SCOPE.md. Datalog chart gestures/navigation, page section controls, consistent EFI terminology and progressively detailed mode summaries are implemented. v0.16.2 retains all fifteen accepted UAT scenarios. v0.17 user acceptance remains pending; private datalogs stay excluded.


## v0.18 Approved Build — 2026-10-02

Jonny approved the three-item build. See docs/V0.18-SCOPE.md and docs/V0.18-VERIFICATION.md. Adjusted Table terminology, app-style launch/fallback and scoped saved-table restore are implemented. The earlier planning-only hold for these items is superseded. Restore scopes are listed explicitly; arbitrary section/tab restore remains deferred. v0.17 UAT is reported complete, with pass outcomes not supplied. v0.18 has nine pending UAT cases; no signoff is inferred. Private datalogs remain excluded.
