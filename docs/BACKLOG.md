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


## Next Revision: Global Navigation Search — 2026-10-02

Jonny requests search that navigates directly to specific fields, functions and tables. Record as a next-revision feature; no delivered v0.13 application or acceptance status changes in this notes update.

Proposed behavior:
- Always-available Search App control, with Ctrl+K shortcut, Escape dismissal and keyboard result navigation.
- Index current visible labels for workspaces, fields, buttons/actions, table views and settings; include useful aliases such as MPR, Command, gear limits, AFM, fonts, pressure units and playback. Search is navigation, not full-log data search.
- Results show the matching label and its tab/section path. Selecting a result navigates to the workspace, expands enclosing sections or advanced controls when needed, scrolls to the target, highlights it briefly and places focus appropriately.
- Finding an action must never execute it; proposal updates, imports, exports, resets and edits require their normal user action. Finding a field must not change its value.
- Use current renamed workspace labels and distinguish original/proposed/custom table views. If a table/control is unavailable, explain the prerequisite rather than claim it is visible. Respect detached-window navigation and the editing lease; avoid silently taking edit ownership.
- Keep indexing lightweight and refresh labels only when needed. Provide a useful no-results state and readable keyboard/focus behavior at browser zoom.

Future UAT must specify exact Search App location/shortcut, search phrases, result paths and expected focused/highlighted targets, including a collapsed section, renamed custom workspace, an unavailable target and a read-only detached window. Verify that locating Update All Proposals or Reset does not execute it.


## Next Revision: Datalog Drag-and-Drop Import — 2026-10-02

Jonny also requests dragging and dropping datalog files. Record alongside Global Navigation Search for the next revision; delivered v0.13 code and acceptance remain unchanged.

- Provide a clearly labeled CSV drop area near Active Log / Log Playback and in Log Library. Support multiple CSV files through the existing importSession path, retaining format validation, raw data, mapping provenance and duplicate detection. Keep the file picker available.
- Show a drag-over indication and per-file imported/duplicate/failed results. Prevent accepted drops from navigating the browser away. Explain unsupported formats such as native .kdlg without claiming they can be parsed; do not bypass validation based on extension alone.
- Reuse the existing import/active-log workflow and intended-purpose selection. Pause playback when importing changes the active recording. Do not silently assign Baseline/Validation, replace calibration tables or infer pressure units. Respect the editing lease and practice-window storage isolation.
- Keyboard-accessible file picking remains an equivalent route. Future UAT must identify the exact drop area, files to drag, expected active/library changes and failure messages; include multi-file, duplicate, invalid CSV, unsupported format and read-only detached-window checks.


### Datalog File Picker Labels and TXT Support — 2026-10-02

Jonny sees MegaLogViewerHD in the file-type dropdown and asks for CSV/TXT support. Current sessionFiles picker accepts .csv; import validation uses the CSV parser. Windows file associations may explain the MegaLogViewerHD label, but the exact dialog has not been inspected. Do not equate associated application labels with file encoding/format.

Next-revision drag/drop scope should include .csv and .txt in the file picker and drop validation. TXT must contain a supported delimited datalog, not arbitrary text. Detect comma/tab delimiters deliberately, retain metadata/header and column-width validation, and reject malformed or unsupported text with a clear explanation. Do not merely relax extensions and claim all TXT files are supported. Label the import route CSV / TXT Datalogs where the app controls the wording; operating-system association labels can remain outside app control. UAT: same data in CSV and supported TXT yields equivalent channels/rows; invalid TXT and native/binary formats are rejected without losing existing logs.


## Next Revision: Go to Trace on Tables — 2026-10-02

Jonny requests a Go to Trace action on traced tables. Reveal the current recorded row's candidate table location at the existing zoom. If all currently traced cells are already visible in the table viewport, leave scrolling unchanged. At higher table zoom or a scrolled-away location, scroll the relevant table viewport just enough to expose the traced region, centering it when practical. Preserve browser/table zoom, calibration values, cell selection, log position and playback state.

- Place the action with each supported table's controls; support original/proposed tables and corresponding My Workspace/detached views. Expand a collapsed table panel when necessary and bring its visible area into view without changing the layout.
- For interpolated locations, reveal the group of candidate cells. If the group cannot fit in the viewport, prioritize the highest-weight current candidate deterministically and explain that multiple cells are involved.
- Disable or explain when no current location is available, tracing is off, or units/mapping/axes prevent a trace. Use the current playback row at click time. Do not switch recordings, advance the log or execute tuning actions.
- This is an explicit one-shot navigation action; continuously following the trace is not included unless separately requested.
- Precise UAT must name the table and Go to Trace button; check unchanged scrolling when visible at low zoom, reveal after table zoom/scroll hides the marker, correct original/proposed/custom/detached targeting, interpolation groups, missing trace, and unchanged zoom/log/calibration values.

Recorded alongside navigation search and CSV/TXT drag-and-drop for the next revision. Delivered v0.13 remains unchanged.


## Next Revision: Chart Point Readouts and Pointer Accuracy — 2026-10-02

Jonny requests values relevant to each chart at the measurement point during playback and mouse inspection. Show a visible cursor and nearby readout for that chart's displayed series, including timestamp/original row, channel names, values and units. Distinguish temporary hover inspection from the selected playback cursor; moving the mouse must not silently change playback or tuning eligibility. Missing samples/gaps must remain explicit; do not imply fabricated measurements. Match each chart's own x-axis and visible range.

Jonny also reports chart navigation clicks do not select the mouse coordinate, appearing to use total workspace width instead of the visible chart. Treat as a pointer-coordinate defect; no cause is verified merely from that description. Audit historical boost charts and synchronized raw-channel plots, including click/drag-range inspection. Translate client coordinates through the rendered SVG transform and actual plot rectangle (accounting for viewBox, aspect-ratio letterboxing, padding, scrolling, resizing and browser zoom), rather than assuming workspace or element width equals plotted width. Out-of-plot clicks must not choose unrelated samples. Preserve original-row linkage and deterministic nearest valid sample behavior.

Priority: correct pointer geometry before layering point tooltips onto it. Future UAT must name each chart/series, mouse targets at left/middle/right plotted positions, expected timestamp/original row and values, resized panels/table layouts, reduced/increased browser zoom, scrolled views and detached windows. Verify playback readouts and hover return behavior separately. Record this alongside search, CSV/TXT drag/drop and Go to Trace; no changes to delivered v0.13 in this notes update.


## Next Revision: Full-Width Playback Position Slider — 2026-10-02

Jonny requests scaling the global Playback Position slider across the window to improve pointer precision through the recording. Give it a dedicated full-width row spanning the available main/detached content area, rather than sharing a narrow flex slot with other controls. Retain nearby timestamp/original-row/RPM/gear feedback and existing one-original-row steps. Wider rendering increases pointer precision; it does not interpolate or add data samples. Preserve keyboard single-row navigation, playback/scrubbing behavior and responsive wrapping at browser zoom.

UAT must identify global Log Playback > Playback Position, compare its width against the available window, scrub near start/middle/end at wide and narrow sizes and browser zoom, verify matching original row/time and keyboard steps, and check detached-window behavior. Recorded for the next revision; delivered v0.13 unchanged.


Current v0.13 UAT: eleven Pass / one Needs Revision, explicitly reported by Jonny on 2026-10-02. V13-COMMAND needs more obvious dynamic status/error messaging; all other scenarios, including real Command tracing, pass. Earlier pending status is superseded. See docs/V0.13-UAT-FINDINGS.md and docs/V0.13-UAT-results.json. Prior v0.12 Command failure is historical, not a remaining functional failure after this retest. Delivered archives unchanged; no new build initiated.


## Next Revision: Approve All Revisions and Go to Change — 2026-10-02

Jonny requests an option to mark all revisions approved, and an additional button beside each individual approval to jump directly to its change. Integrate with existing Change Review / Edit History review records; keep review approval distinct from applying a proposal, ECU flashing or proof of safety.

- Provide clearly labeled Approve All Revisions for the current project's listed reviewable revisions. Preserve individual approval. Define scope visibly (for example current listed revisions) and record exactly which revision identifiers/current contents were approved, rather than treating later changes as automatically approved. Do not require repetitive approval dialogs for the batch action.
- Add Go to Change beside each individual revision approval. Navigate to its affected workspace/table and reveal/highlight changed cells at the existing zoom. For multiple affected regions show their locations and provide next/previous change navigation where appropriate. Structural/control changes should focus the changed setting or axis with a clear explanation rather than inventing a cell location. Historical revisions may require a read-only before/after view; navigation must not restore or apply them automatically. Reuse existing Show in Table mechanisms where applicable.
- Persist approval records in project JSON with reviewer/time/revision identity where available. Changed contents invalidate the corresponding review approval; subsequent revisions require their own review. Retain existing protection, stale-proposal and evidence gates. Keep batch approval reversible without deleting history or calibration edits.
- UAT must specify exact revision/review screen and buttons; cover individual/batch approval, approval scope, Go to Change on cell/control/structural changes, multiple changed regions, saved/reopened approvals and invalidation after further edits.

Recorded for the next revision; current v0.13 code and eleven Pass / one messaging Needs Revision status remain unchanged.


## v0.14 Approved Build — 2026-10-02

Jonny approved navigation, playback and review improvements plus a compact/resizable global log box. See docs/V0.14-SCOPE.md. Build verification and all eleven precise-navigation UAT cases are tracked separately; no user acceptance is inferred. Prior v0.13 is eleven passes / one messaging presentation revision. Longer-term features remain deferred.


## Next Revision: Collapsible Global Playback and Playback-Only Popout — 2026-10-02

Jonny requests entirely collapsing the persistent global log player, with an obvious Expand Log Playback control. Record for the next revision; v0.14 application/archives and pending UAT remain unchanged.

- Collapse the whole global playback region, including slider, tracing controls, feedback and associated drop area; leave a compact Expand Log Playback control. Other global actions such as Search App and Update All Proposals remain available. Remember the display preference and restore the chosen panel height when expanded. Collapsing must not pause playback or stop table tracing.
- Add Pop Out Log Playback for this global player only: a small dedicated controls window with Active Log, Play/Pause, steps, speed, position and essential trace/setup status. No calibration workspace or table editor is included.
- The popout should control the main application's single playback clock/cursor; main and existing table windows continue updating charts/traces. Do not duplicate playback timers or transfer calibration editing ownership merely to control playback. Existing detached workspace playback is lease-bound; a dedicated validated playback-command channel is required rather than assuming current popouts already satisfy this design.
- Returning/docking or closing the player restores accessible main controls at the same recording/position. Main-window closure/reload/disconnection gives explicit disconnected feedback. Popup blocking must offer a clear fallback; repeated Pop Out should focus the existing player. Playback commands must validate project/session/window identities and respect an ongoing calibration editing handoff.
- Future UAT must give exact routes for Collapse/Expand and Pop Out Log Playback, test continued tracing while collapsed, popout scrubbing/active-log selection/pause across tabs, one playback clock, saved height/preference, blocked popups, repeated opening, window closure and disconnected state. Scope is global playback only.

Planning notes only: no next-version build or v0.14 user signoff is inferred.


## Next Revision: Chart Drag Zoom, Context Menu and Table Wheel Zoom — 2026-10-02

Jonny requests these as next-version observations. Delivered v0.14 application/archives and pending UAT remain unchanged.

- Log Review synchronized time charts: click-drag to highlight a time interval, then zoom all synchronized charts to that interval. Update the existing Chart Zoom Start / Chart Zoom End seconds fields to match the selected interval. Preserve original measurements, active log, tuning eligibility and bookmarks. A plain click continues point inspection; a minimum drag threshold distinguishes clicks from range zoom. Show a live range highlight; support either drag direction and cancel/Escape. Existing Shift-drag evidence selection remains distinct on charts that support it. Audit actual/command time-chart gestures as well; RPM-axis charts must not mislabel RPM as seconds.
- Add a chart-local right-click context menu: Show Whole Recording (clear chart zoom), Zoom to Selected Range when one exists, Center View on Playback Position, and Copy Point Values where clipboard is available. Display useful disabled reasons; provide accessible equivalent controls/keyboard access. Resetting chart zoom must not silently clear an explicit bookmarked/evidence restriction; explain any remaining range restriction. Use rendered SVG transforms at browser zoom and resized/scrolling panels.
- Table mouse wheel up zooms in and down zooms out when the pointer is within an eligible table. Anchor zoom on the selected cell/group so it stays at the same visible position where practical; use the current visible selection's center for multiple selected cells. Without a selection, use the cell under the pointer, then viewport center as fallback. Keep browser zoom, calibration values, selection, playback and tracing unchanged. Reuse existing table zoom bounds/preferences and persistence; handle fractional trackpad deltas smoothly and prevent page scroll only for wheel events actually consumed by table zoom. Ctrl/Meta wheel retains native browser zoom. Verify native/custom/detached table views and offer existing zoom controls as the keyboard/touch route. Preserve trace/selection visibility and avoid accidental edits.
- Future UAT must name Log Review > Selected Channels / Synchronized Inspection and Chart Zoom Start/End fields, demonstrate both-direction highlight/zoom and precise seconds, point click versus drag, cancellation, Show Whole Recording and retained bookmark restriction; check resized/zoomed charts. Table cases must name selected cells, wheel directions, anchored visibility, min/max zoom, trackpad, native browser zoom, custom/detached views, saved/reopened table zoom and unchanged numeric values.

Planning only; context-menu actions above are recommended scope, subject to next-release review. No build or user signoff inferred.


## v0.14 UAT Acceptance — 2026-10-02

Jon submitted all eleven scenarios Pass in Edge at 2026-10-02T17:06:33.612Z. See docs/V0.14-UAT-SIGNOFF.md and docs/V0.14-UAT-results.json (paths relative to repo root). Earlier pending status is superseded; delivered app/archive unchanged. V14-MESSAGES closes the previously reported messaging presentation finding through v0.14 retest. V14-APPROVALS passes with a usability observation: excessive recorded edit operations make individual review impractical; investigate and group meaningful review checkpoints without erasing audit history or silently approving hidden edits. Suspected testing accumulation is unverified. Next-version player-collapse/popout and chart/table zoom notes remain planning only.


## v0.15 Approved Build — 2026-10-02

Jonny approved player collapse/popout, chart drag/context actions, anchored table wheel zoom and review checkpoints; added end-to-end exported-log tutorial and cautious destination paste-back verification during the build. See docs/V0.15-SCOPE.md. v0.14 is accepted (eleven Pass). All thirteen v0.15 exact-navigation UAT cases remain pending. No user acceptance or hardware/ECU action is inferred. Deferred work remains deferred.


## v0.15 UAT Follow-up — 2026-10-02

Jon submitted eleven Pass / zero Fail / two Not tested in Edge at 2026-10-02T17:44:00.516Z. V15-DISCONNECT and V15-CONTEXT remain untested. V15-POPOUT is Pass with a reported disconnect after tab transitions and a request for an in-popout Reconnect button. Preserve exact statuses and investigate navigation heartbeat continuity; do not infer full sign-off or silently treat the observation as resolved. See docs/V0.15-UAT-FINDINGS.md and docs/V0.15-UAT-results.json. Application/archives unchanged in this documentation update.


## v0.15 Follow-up: Ambiguous Current-Revision Review Control — 2026-10-02

Jonny's screenshot identifies Change Review > Review This Revision / Mark this revision reviewed, not the grouped Edit History checkpoint list. It already displays Reviewed with a timestamp, but the active button remains, suggesting more review is required or an endless queue. Preserve the distinction from the earlier excessive-operation finding.

Code inspection: review.js keeps one reviewAcknowledgement for a signature of current MPR/Command/AFM/gear state and evidence configuration. The signature includes active recording, profiles/calibration identifiers, analysis filters/event, evidence range/bin, review rules and calibration confirmations. It does not directly include raw playback cursor or time. The click replaces one acknowledgement/timestamp; it does not create another journal entry. Scrubbing alone is not established as an invalidation cause from this screenshot.

Follow-up: label the scope clearly (Review Current Proposals / Current Proposal Review), show an unambiguous completed state after review, disable or replace the redundant action until a relevant change requires review, and explain exactly what changed when it becomes pending. Keep calibration changes versus evidence-context changes understandable; do not silently loosen stale-evidence/calibration gates. Align with checkpoint review and explain the different scopes rather than duplicating indistinguishable approval controls. Test that ordinary playback/scrubbing does not create review operations or invalidate acknowledgement, and that material calibration/mapping/evidence edits still prompt appropriately. No application change in this documentation update.


## v0.15 UAT Acceptance — 2026-10-02

Jonny explicitly reports all UAT passed. All thirteen cases are accepted; V15-DISCONNECT and V15-CONTEXT now pass. See docs/V0.15-UAT-SIGNOFF.md/json. Preserve original submitted eleven Pass / two Not tested as historical evidence. Prior popout reconnect/navigation-continuity and Current Proposal Review clarity observations remain follow-up improvements; no code fixes are inferred from sign-off. Application/archive unchanged; packaging/publication completion is a separate remaining delivery task.


## v0.16 Whole-App Audit — 2026-10-02

Whole-app audit completed; see docs/V0.16-AUDIT.md for ranked findings, nine recommended workstreams, measurements, limitations and precise UAT routes. User authorized the audit following the next-build discussion. Application code unchanged; v0.16 implementation has not started. v0.15 retains all thirteen UAT passes. Keep deferred backlog separate.


## v0.16 Workflow Cleanup Build — 2026-10-02

Approved whole-app audit scope is implemented; see docs/V0.16-SCOPE.md and docs/V0.16-VERIFICATION.md. Compact player, reconnect, clear proposal acknowledgements, task hierarchy, optional conversion tool, tutorial/instruction routing, table actions, grouped settings and indexed hover are included. v0.15 retains all thirteen UAT passes; v0.16 has thirteen pending precise-navigation cases. Deferred work remains deferred.
