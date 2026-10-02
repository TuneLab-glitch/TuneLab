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
