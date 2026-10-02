# Future builds and accepted release history

Status: the user approved the scoped v0.6 build on 2026-10-02. See V0.6-SCOPE.md for included and explicitly deferred items. The user signed off implemented v0.6 release-note scenarios on 2026-10-02; real KTuner export verification awaits a private fixture. The list below retains the original requests, including deferred work. Prioritize defects before expanding scope.

## v0.8 build and next-version priorities

Jonny approved visual clarity and evidence review on 2026-10-02. See V0.8-SCOPE.md and V0.8-VERIFICATION.md; Jonny signed off all 16 UAT-v0.8.html scenarios on 2026-10-02; see V0.8-UAT-SIGNOFF.md. Shading, linked evidence and change-review improvements are implemented in this scope. Other deferred features remain deferred.

### High priority: browser zoom and sidebar scrolling

User report: “When zooming I cannot see all of the options in the left hand menu and no scroller appears.” Requested as notes for the next version. Review HTML scaling/reflow and fix menu reachability before adding features. The fixed sidebar currently has no explicit vertical overflow handling; this is a likely mechanism, not a verified native-zoom reproduction.

Acceptance: at 100%, 125%, 150%, 175% and 200% native browser zoom, short/tall desktop windows and narrow layouts, every workspace and sidebar action is reachable by mouse wheel/scrollbar and keyboard. Scroll containers must size to available height without clipping the brand, active navigation or footer actions. Test focus visibility, compact selector, main/detached windows, page controls, dialogs and table scrolling. Distinguish browser zoom from table zoom; verify both. No sidebar fix is included in v0.8.

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

## v0.9 build — 2026-10-02

Jonny approved v0.9 and added unified synthetic scenarios plus logging strategy. See V0.9-SCOPE.md and V0.9-VERIFICATION.md. Sidebar native-zoom/reflow fix, navigation/focus/reset improvements, isolated practice scenarios and four purpose-specific logging plans are built. Prior sign-offs are retained; v0.9 UAT remains pending in UAT-v0.9.html (14 cases). Deferred alignment, advanced viewer, AI, attachments, installer and platform semantics remain deferred.

## v0.9.1 UAT correction

Initial v0.9 UAT: 12 Pass / 2 Fail. See V0.9-UAT-FINDINGS.md/json. Corrected AFM practice action, driving-first numbered review plans and persistent intended-purpose import metadata are built. Jonny subsequently reported “All remaining UAT Passed” on 2026-10-02. Both corrected cases are signed off; all 14 scenarios are accepted. See V0.9-UAT-SIGNOFF.md/json.

## v0.9.1 acceptance — 2026-10-02

Jonny signed off both remaining UAT cases. All 14 scenarios are accepted; see V0.9-UAT-SIGNOFF.md/json. Accepted app commit ebc577ac49fc6eae30f6d1f97bf300157912f846 and delivered archive stay unchanged. Earlier sign-offs and deferred platform work are retained.

## v0.10 build — 2026-10-02

Jonny approved purpose setup, readiness, synchronized raw plots, bookmarks, validation comparison and related cleanup. Tables must not depend on a log; current calibration state is restored independently. See V0.10-SCOPE.md and V0.10-VERIFICATION.md. UAT-v0.10.html has 16 pending cases. Earlier sign-offs and deferred hardware/platform work remain unchanged.

Additional v0.10 scope approved and built: four table gradients, U.S. Civic Si 2022–2026 vehicle themes through an extensible model/year/color catalog, cursor/coverage display toggles, basic recorded-time playback and a renameable My workspace tab with live table views. Multiple custom tabs, inline custom editors, calculated channels and broader vehicle catalogs remain deferred.
