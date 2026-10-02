# Future builds and v0.7 planning

Status: the user approved the scoped v0.6 build on 2026-10-02. See V0.6-SCOPE.md for included and explicitly deferred items. The user signed off implemented v0.6 release-note scenarios on 2026-10-02; real KTuner export verification awaits a private fixture. The list below retains the original requests, including deferred work. Prioritize defects before expanding scope.

## v0.7 acceptance

Jonny signed off all 12 v0.7 UAT scenarios on 2026-10-02; see V0.7-UAT-SIGNOFF.md. PR #5 is merged. Deferred features and separately pending platform applicability checks remain unchanged.

## v0.7 requests and proposal

- Remove numeric sidebar prefixes; retain named navigation with a compact-layout dropdown option.
- Open a specific workspace in its own window, showing only that workspace and necessary context.
- Shared-state coordination, conflict handling and owner-window lifecycle are required for editable separate windows.
- Movable/resizable preview and evidence panels with grid snapping, keyboard movement, reset and separate main/detached saved layouts. Anchored controls stay fixed.
- See V0.7-PROPOSAL.md for suggested prioritization and acceptance. Jonny approved these features and drag-and-snap panels on 2026-10-02. Table shading is deferred; a Fit/KTuner CSV was supplied but has mismatched columns; a second export verifies headers/import. Full analysis compatibility still needs appropriate turbo/Civic channels and reviewed semantics.

## New v0.6 feedback
- Dedicated Settings tab for cross-app units, platform, complexity, appearance inheritance, calculation behavior, warning thresholds, storage and backup. Local controls stay near their tables.
- Verify actual original Hondata and KTuner exports: headers, units, timestamps, missing values, channel semantics. Detect platform with evidence and uncertainty; allow correction. Preserve raw data and mapping provenance. Normalize before comparing/combining, retain separate platform review option.
- AFM small-change visibility: linked original/proposed curves and percentage/g/s delta plot, changed-point highlights and tooltips; clearly labeled magnification.
- User-added links/documents/notes by topic with source, platform, vehicle/software applicability and verification status. Optional future agent can summarize with citations and reviewed acceptance.
- Full persistence/upgrade audit: project backup versus full user backup, personal sources, settings and learning retention; versioned migrations and failure reports.
- Fix natural click-drag multi-cell selection, selection rectangle, edge scrolling, Shift extension and clear protected-cell behavior.
- Cross-table boost scaling/alignment: consistent conditions and units, in-bounds interpolation, discrepancy amount/percentage/explanation, advanced configurable tolerances and documented Guided/Standard defaults. Separate discrepancy severity from evidence confidence. Coordinated proposal preview, protected cells and explicit acceptance.
- Record intentional restrictive gear limits (traction/valet/custom); informational differences versus intent conflicts. Preserve limits by default. Alignment means coherent relationships, not identical values; green means configured rules satisfied, not engine safety.
- Platform-inspired table gradients, colorblind/no shading options, legends. Values color bodies; indexes can color headers independently. Shared source/proposal scale and optional common physical boost scale. Advanced min/max/midpoint/outlier handling, zero-centered absolute/percent delta shading. Stable range during edits, explicit reset. High-value red distinct from warnings/protection/selection.
- Simplify AFM evidence entry: single Baseline selector and optional Validation selector each with library/import choices, one-step import assignment and visible calibration. Baseline drives correction; validation does not. Post-change validation must match applied table; unrelated historical logs are contextual evidence.
- Coordinated table zoom scales cells/text/headers; fit width with readable minimum and scrolling, especially AFM. Panel expansion versus zoom clearly distinguished. Retain independent advanced sizing.
- Searchable official knowledge index: Hondata FlashPro help, KTuner Help and curated forum clarifications. Official sources first, source hierarchy, applicability, verified author role/date, disagreements and inference labels. Check permissions before redistributing full documentation. Version knowledge used in prior recommendations.
- Compact status strip: platform, active log/calibration, units and current/stale proposal.

## Earlier incomplete/deferred commitments
- Optional local or user-connected online AI; embedded local model distribution/management, no AI required for core functions.
- Searchable versioned local knowledge database; scrutinized user feedback, approval/reversal of learned claims.
- Evidence-based learning across independent logs, contradictions and validation outcomes; confidence not based on row/file count alone.
- Change summary with transparent uncertainty; no unsupported prediction of actual boost, power or safety.
- Unified MPR/command/gear relationship analysis and supported alignment suggestions. Verify each ECU/software scope before defaults.
- Compare independently imported Hondata/KTuner calibrations, semantic/axis reconciliation and unsupported mappings; existing Compare is one-source pressure representation only.
- Full advanced log viewer: arbitrary channels, synchronized plots, calculated fields, saved layouts, playback and multivariate selection.
- Linked range/bin selections across charts/tables; filtered coverage heatmaps, counts and confidence. Current histogram selects first contributor only.
- Guided prerequisite/progress workflow and beginner usability validation; exhaustive individual plain-English control help.
- Verified Civic year/factory-color themes; cohesive Si/Type R motorsport polish and responsive layout.
- Dependency-aware selective undo of structural operations; current compatible cell undo and revision restore limits.
- Consider deliberate/automatic AFM analysis after evidence role gates; currently explicit.
- Packaged desktop installer if requested; current release portable static browser app. No flashing/live ECU simulator.

## Canonical reference starting points
https://www.ktuner.com/KTunerHelp/
https://www.hondata.com/help/flashpro/index.html
https://www.hondata.com/forum/
Forum access previously returned 403; contents not reviewed in that attempt. Do not bypass access restrictions.
