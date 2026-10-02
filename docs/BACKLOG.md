# Future builds and accepted release history

## Current next-revision priorities — 2026-10-02

1. Boost Command tracing remains unresolved in Jonny's v0.12 use despite automated passes. Reproduce with the actual saved project/log/mapping and correct the verified cause; retest native/custom/detached tables.
2. Wider responsive grids: normal browser zoom retains the current layout; zooming out allows two full-size or four half-size panels side by side with horizontal snapping. Preserve saved layouts and reachability when zooming in.
3. Verify the exact KTuner Boost By Gear Limits table when a full-precision export is available; nine repeated displayed -0.2 PSI headers are not exact distinct axes.

The project (3) default menu correction is accepted by Jonny. This is not overall v0.12 acceptance. See V0.12-UAT-FINDINGS.md. These next-revision notes do not authorize a build yet.

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

Jonny approved purpose setup, readiness, synchronized raw plots, bookmarks, validation comparison and related cleanup. Tables must not depend on a log; current calibration state is restored independently. See V0.10-SCOPE.md and V0.10-VERIFICATION.md. UAT-v0.10.html has 21 pending cases. Earlier sign-offs and deferred hardware/platform work remain unchanged.

Additional v0.10 scope approved and built: four table gradients, U.S. Civic Si 2022–2026 vehicle themes through an extensible model/year/color catalog, cursor/coverage display toggles, basic recorded-time playback and a renameable My workspace tab with live table views. Multiple custom tabs, inline custom editors, calculated channels and broader vehicle catalogs remain deferred.

## Next-version observations — 2026-10-02

Jonny has not completed any v0.10 UAT. These are planning observations, not acceptance results or authorization to implement them in v0.10.

- Rearrange the left-hand navigation with drag and drop, similar to table panels. Suggested design: remember the order, provide keyboard movement and a reset-to-default option; retain renamed custom workspace labels.
- Add an Update all proposals button that remains visible throughout the app. Suggested design: explicitly recalculate eligible proposals using their current settings, retain protected cells and calibration gates, summarize updated/skipped/blocked tables, and avoid silently replacing manual refinements. Define how this interacts with manual proposals and undo before implementation.

v0.10 UAT remains pending (21 scenarios). The delivered app/ZIP is unchanged. Priorities and final next-version scope still need alignment.

### Titles, Headers and Text Appearance

Jonny requests stronger capitalization and a more deliberate title/header hierarchy. Include this with the next-version interface work; current v0.10 UAT remains pending.

- Default app titles and section headers to Title Case; keep explanatory paragraphs in sentence case.
- Add font display preferences, including font family and separate title/header sizing or weight. Existing table body/header sizing remains available.
- Offer title/header capitalization choices: Title Case, Sentence case and UPPERCASE. Apply as presentation preferences with app defaults and page overrides where appropriate; preserve them in workspace backups.
- Preserve the spelling/case of imported channel headers, units, acronyms, filenames and user-entered names. Capitalization must not change data, mappings or exported values.
- Verify readable hierarchy, wrapping and menu reachability at narrow widths and browser zoom.

This is a next-version planning item; no changes to the delivered v0.10 build or acceptance records.

## v0.10 Acceptance — 2026-10-02

Jonny reported “All UAT passed.” All 21 release scenarios are accepted; see docs/V0.10-UAT-SIGNOFF.md/json (or V0.10-UAT-SIGNOFF.md/json from this directory). This supersedes earlier pending-UAT status. Delivered application commit and ZIP remain unchanged. Next-version observations remain planning items, not an approved implementation scope.

Current v0.10 acceptance: V10-TABLES reopened following Jonny's report that Boost by Gear only appeared after loading a log. Retain the other 20 passes. Investigate startup cache restoration/rendering and upgrade/old-library migration before next-version feature work.

V10-CLEANUP also reopened: Appearance Inheritance labels drifted after workspace renames and omitted later-added tabs. Local synchronization now follows current workspace titles, retaining the selected target; verification/delivery pending. Review final pressure-workspace wording with Jonny. Current acceptance: 19 passes / 2 reopened.


Efficiency correction: see docs/V0.10-EFFICIENCY.md. Local test build includes appearance corrections and avoids redundant parsing/rendering. Current acceptance is 19 prior passes / 2 reopened (V10-TABLES, V10-CLEANUP); performance user retest pending. No next-version features implemented.


## v0.11 Workflow and Interface Build — 2026-10-02

Jonny approved the proposed six-item build. See docs/V0.11-SCOPE.md and docs/V0.11-VERIFICATION.md. Menu reorder, global conservative proposal updates/status, scoped typography, Pressure Conversion naming and named UI layouts are implemented with prior performance/appearance corrections. Gear tables render independently of logs on entry/restore. All 14 UAT-v0.11.html cases remain pending; original gear and appearance findings require user retest. Historical v0.10 is 19 prior passes / 2 reopened. Deferred features remain deferred.

Playback/table tracing added at Jonny’s request during v0.11: global controls, original-row candidate markers across native/custom views and synchronized detached windows. All 14 UAT scenarios pending; see V0.11-SCOPE/VERIFICATION.


Current v0.11 UAT: 12 Pass / 2 Fail, from Jonny’s supplied results and chat notes on 2026-10-02. V11-TABLES (gear 1–6/import issue) and V11-TRACE (navigation pause/resume and missing Command tracing) require fixes and retest. Most-visited recorded cell summaries and explicit Save Menu Order are next-revision requests. See docs/V0.11-UAT-FINDINGS.md and V0.11-UAT-results.json. Earlier pending status is superseded; delivered build unchanged. No implementation authorized by these planning notes.


## v0.12 Playback and Tracing Review — 2026-10-02

Jonny approved this build. See docs/V0.12-SCOPE.md and docs/V0.12-VERIFICATION.md. Playback continuity, Command tracing, original-row visit/time summaries, explicit menu saving and six-gear Hondata layout/template corrections are implemented. KTuner axis units are explicit; nine rounded -0.2 screenshot headers require a full-precision export. v0.11 is 12 Pass / 2 Fail; all 12 v0.12 UAT cases are pending. No user signoff is inferred. Deferred work remains deferred.


## Future UAT Instruction Requirements — 2026-10-02

Jonny requests precise navigation instructions for every future UAT case. Each case must state:
- Required starting state, fixture/log/calibration, units and any setup.
- Exact workspace/menu name and subsection to open, using current visible labels.
- Numbered actions naming each button, selector, toggle or field; specify main, custom or detached window when relevant.
- Expected visible result at each meaningful checkpoint, including values/units where applicable.
- Save/reopen/reset steps and what must persist when persistence is under test.

Avoid instructions such as “check tracing” or “test settings” without a complete route and observable result. Separate materially different navigation paths into distinct cases or clearly labeled subcases. Review the instructions against the built app before delivery. This applies to future guides; existing delivered guides and acceptance history are unchanged.


### Change Review Advanced Options Control — 2026-10-02

Jonny reports Show/Hide Advanced Options is awkwardly placed on Change Review and its effect is unclear. Code inspection confirms sessions.js creates the button when warningSettings is advanced-only; workflows.js later moves warningSettings to Settings > reviewSettings and removes advanced-only. The old Change Review button remains with no advanced-only content to reveal. This is an obsolete control, not a hidden tuning behavior.

Next revision: remove the orphaned Change Review control and audit other generated advanced-option buttons against their final page content. Where a reveal control remains useful, place it next to the affected section, label what it reveals and make its expanded state accessible. UAT must specify Change Review, the old button's absence, and Settings > review rules as the route to the actual thresholds. No delivered application code changed in this notes update.


### Log Selector Beside Global Playback — 2026-10-02

Jonny requests selecting the active log beside the global Log Playback controls. Add a selector using the existing project log library, available across workspaces. Clearly identify the selected recording. Switching recordings should pause playback, reset the cursor/range appropriately, refresh markers and visit summaries, and synchronize detached windows. It must not silently reassign AFM Baseline/Validation roles or replace calibration tables/proposals. Retain a clear empty-library state and access to log import.

Future UAT: specify the global Log Playback bar, exact selector label, two imported recordings and their expected row/readout differences; check paused switching, synchronized traces, unchanged evidence roles/calibrations and detached-window behavior. This is a next-revision request; no implementation in this notes update.


### Appearance Selector Cleanup — 2026-10-02

Jonny requested removing the redundant Si / Urban Gray Appearance choice because it is available through Vehicle Color Theme > Civic Si > year > Urban Gray Pearl. Source updated for the next revision: legacy option hidden/disabled, and old saved si selections resolve to Civic Si 2026 Urban Gray Pearl. Existing legacy palettes remain accepted for migration; no calibration values change. Delivered v0.12 ZIPs are unchanged.


Current v0.12 UAT status: 11 Pass / 1 Fail, submitted by Jon in Edge on 2026-10-02. V12-COMMAND remains unresolved; all other eleven cases are signed off. See docs/V0.12-UAT-FINDINGS.md and docs/V0.12-UAT-results.json. New next-revision request: shade Log Review Original Data Row readings by per-channel min/max using selected table gradients. Prior pending counts are superseded; delivered archives remain unchanged.


## v0.13 Approved Build — 2026-10-02

Jonny approved the five-item scope in docs/V0.13-SCOPE.md. Active Log beside playback, visible per-recording Command units/status, wider four-track grids, Original Data Row gradients and obsolete-control/appearance cleanup are implemented. All twelve v0.13 UAT scenarios are pending; instructions include exact navigation and checkpoints. v0.12 retains eleven passes and one Command failure awaiting retest. Physical log-unit confirmation is separate from successful candidate tracing. Private logs/backups remain excluded. Deferred features remain deferred.
