# Transition baseline

Target repository: https://github.com/TuneLab-glitch/TuneLab
Baseline: TuneLab v0.5, preserved unchanged in this handoff except added documentation and git ignore rules.
Launch: Start-TuneLab.bat or portable/index.html. No production dependencies or server required.
Development: cd portable; npm install; npm test; npm run test:ui.
UAT: open UAT-Guide.html (34 cases; historical logs only).

## Product context
2026 Civic Si L15CA, 93 octane; expand beyond 11th-gen Si only with verified platform support. Transparent, friendly enthusiast workflows grounded in engineering and tuning evidence. AI remains optional and deferred.
Hondata gear tables use Gear x RPM. KTuner gear tables use per-gear RPM x atmospheric pressure. Translation must expose assumptions and preserve originals.
User source boost bodies are treated as absolute bar; atmospheric pressure is a header/reference, not automatically the body unit.
Original workbook matching formulas: ROUND(bar*14.5038-14.6959,1)+0.1 and ROUND((psi+14.6959)/14.5038,3). Current app retains precision until final rounding, which can differ at tenths; preserve and document this distinction.

## Verification baseline
Previous release: 40 engine tests with private real-log fixture, both DOM integration suites passed. No actual browser visual/clipboard/storage/resize verification; no .NET compilation. Run fresh checks on this handoff. Original historical data is intentionally not included.

## User data transition
User should export v0.5 project JSON and retain original logs and release ZIP separately. Project JSON includes raw stored CSV, editing state and learning observations; complete preference/attachment backup coverage still needs an audit. Browser IndexedDB is not a portable full calibration backup. Migration must not depend on browser-origin continuity.

## Next session
1. Verify repository contents and tag unchanged application baseline v0.5.0.
2. Run tests and PC UAT; prioritize failures before feature work.
3. Scope v0.6 from BACKLOG.md with user approval of scope.
4. Maintain backlog, release notes, decisions and UAT inside the repository.

This handoff is a requirements summary, not a verbatim chat archive. It does not contain personal logs, project exports or prior binary release archives.

## Repository verification update (2026-10-02)

The flattened initial upload was repaired without changing application/test bytes. Fresh synthetic tests: 39 pass; both DOM suites pass. See BASELINE-VERIFICATION.md for scope, limitations and UAT order. The optional private-log test was not run. PC UAT remains pending.

## v0.6 build handoff (2026-10-02)

The user approved the scoped v0.6 proposal. See V0.6-SCOPE.md; do not implement its deferred list without further scope approval. Current application is portable/ v0.6, with v0.5 calculations retained. v0.6 UAT: UAT-v0.6.html; retain the original 34-case guide for regressions.

47 tests passed with the supplied private Hondata CSV, all three DOM suites passed, and local-file headless Edge interaction/storage/download checks passed. See V0.6-VERIFICATION.md. The private CSV is outside Git and deliverables. Real KTuner compatibility remains pending; do not infer it from synthetic headers. User v0.6 acceptance of implemented release-note scenarios was signed off on 2026-10-02; see V0.6-UAT-SIGNOFF.md.

Workspace JSON includes raw logs, per-log profiles, saved proposals, roles, journal, learning, settings, layout and edit undo/redo. Older projects migrate after validation; calibration confirmations clear. Browser IndexedDB still stores the library rather than a full workspace. Save/download JSON before changing origin or upgrading. Attachments are unsupported and not part of backups.

## Next development round

v0.6 user sign-off is recorded. See V0.7-PROPOSAL.md for navigation and single-workspace windows, shared-state acceptance requirements and suggested priorities. Jonny subsequently approved v0.7 navigation, separate windows and drag-and-snap grids. Real KTuner format verification is still pending an original export.

## v0.7 build handoff — 2026-10-02

The active UI is v0.7. See V0.7-PROPOSAL.md for approved scope and V0.7-VERIFICATION.md for test evidence and limitations. Jonny reported "All UAT passed" on 2026-10-02. All 12 v0.7 guide cases are signed off in V0.7-UAT-SIGNOFF.md/json. PR #5 is merged; the delivered application build remains unchanged. Prior v0.6 sign-off is retained.

One window edits at a time through an explicit handoff; others view synchronized revisions. Detached windows pause on owner closure/reload and can save a recovery backup. Main and detached panel arrangements are independently backed up in v0.7 JSON; v0.3–v0.6 imports remain supported. Save JSON before upgrading or changing origins. The supplied Fit/KTuner CSV has mismatched header/data widths; a second export verifies 30-channel CSV structure and raw backup/reopen. Full Civic/KTuner analysis still needs appropriate channels/semantics (see V0.7-UAT-FINDINGS.md). Table shading remains deferred.

## v0.8 build handoff — 2026-10-02

The active UI is v0.8 visual clarity/evidence review, approved by Jonny. See V0.8-SCOPE.md, V0.8-VERIFICATION.md and UAT-v0.8.html. Jonny reported “All UAT has passed” on 2026-10-02. All 16 guide cases are signed off in V0.8-UAT-SIGNOFF.md/json; earlier sign-offs are unchanged. Backups carry shading scales/review records, retain old project migration and clear transient evidence filters/calibration confirmations on reopen. Coverage is not confidence or ECU control influence; AFM links distinguish local support and actual bin-center kernel membership.

Next-version user feedback: native browser zoom hides lower sidebar options without a scrollbar. BACKLOG.md records the high-priority fix and zoom/reflow acceptance matrix. This issue is not fixed in v0.8. Deferred alignment, advanced viewer, AI, attachments, installer and platform semantics work remains outside the current release.

Jonny added left/right half-width grid snapping to the current v0.8 build. Explicit column choices, empty-half drag targets, keyboard controls and backup retention are included; UAT-v0.8.html now has 16 scenarios.

## v0.9 build — 2026-10-02

Jonny approved v0.9 and added unified synthetic scenarios plus logging strategy. See V0.9-SCOPE.md and V0.9-VERIFICATION.md. Sidebar native-zoom/reflow fix, navigation/focus/reset improvements, isolated practice scenarios and four purpose-specific logging plans are built. Prior sign-offs are retained; v0.9 UAT remains pending in UAT-v0.9.html (14 cases). Deferred alignment, advanced viewer, AI, attachments, installer and platform semantics remain deferred.

## v0.9.1 UAT correction

Initial v0.9 UAT: 12 Pass / 2 Fail. See V0.9-UAT-FINDINGS.md/json. Corrected AFM practice action, driving-first numbered review plans and persistent intended-purpose import metadata are built. Jonny subsequently reported “All remaining UAT Passed” on 2026-10-02. Both corrected cases are signed off; all 14 scenarios are accepted. See V0.9-UAT-SIGNOFF.md/json.

## v0.9.1 acceptance — 2026-10-02

Jonny signed off both remaining UAT cases. All 14 scenarios are accepted; see V0.9-UAT-SIGNOFF.md/json. Accepted app commit ebc577ac49fc6eae30f6d1f97bf300157912f846 and delivered archive stay unchanged. Earlier sign-offs and deferred platform work are retained.

## v0.10 build — 2026-10-02

Jonny approved purpose setup, readiness, synchronized raw plots, bookmarks, validation comparison and related cleanup. Tables must not depend on a log; current calibration state is restored independently. See V0.10-SCOPE.md and V0.10-VERIFICATION.md. UAT-v0.10.html has 21 pending cases. Earlier sign-offs and deferred hardware/platform work remain unchanged.

Next-version notes (2026-10-02): Jonny requests draggable navigation order and a globally visible Update all proposals action. See BACKLOG.md. These are observations only; no v0.10 UAT has been completed and no next-version implementation is authorized by this note. Delivered v0.10 files remain unchanged.

Next-version appearance note: stronger Title Case titles/headers plus font display and capitalization preferences. Preserve original channel/unit/acronym spelling and user-entered names. See BACKLOG.md; v0.10 UAT remains pending.

## v0.10 Acceptance — 2026-10-02

Jonny reported “All UAT passed.” All 21 release scenarios are accepted; see docs/V0.10-UAT-SIGNOFF.md/json (or V0.10-UAT-SIGNOFF.md/json from this directory). This supersedes earlier pending-UAT status. Delivered application commit and ZIP remain unchanged. Next-version observations remain planning items, not an approved implementation scope.

Current v0.10 acceptance: V10-TABLES reopened following Jonny's report that Boost by Gear only appeared after loading a log. Retain the other 20 passes. Investigate startup cache restoration/rendering and upgrade/old-library migration before next-version feature work.

V10-CLEANUP also reopened: Appearance Inheritance labels drifted after workspace renames and omitted later-added tabs. Local synchronization now follows current workspace titles, retaining the selected target; verification/delivery pending. Review final pressure-workspace wording with Jonny. Current acceptance: 19 passes / 2 reopened.

Appearance font follow-up: app-scope controls were showing selected-page override values (e.g. 22px). Local fix separates scope and applies table sizing across pages. New browser-appearance.cjs checks both pressure tables and backup retention. Delivery/user retest pending; V10-CLEANUP remains reopened.


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
