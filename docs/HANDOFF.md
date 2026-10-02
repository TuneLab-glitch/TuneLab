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
