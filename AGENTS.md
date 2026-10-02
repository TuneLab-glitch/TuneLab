# TuneLab development handoff

Read docs/HANDOFF.md, docs/BACKLOG.md and RELEASE-NOTES.md before editing.
The active product is portable/ (offline browser app). src/ and tests/ retain the earlier .NET v0.2 implementation; they are not the active v0.8 UI.
Preserve the enthusiast audience: plain English, contextual help, transparent assumptions, reversible changes and protected cells. Guided/Standard/Advanced must use the same calculation engine.
Do not implement the entire backlog without an explicit scoped request. v0.6 scope was approved and built. v0.7 navigation, separate windows and grid panels are approved; consult docs/V0.7-PROPOSAL.md. Its deferred features remain out of scope. v0.8 visual clarity/evidence review is approved; consult docs/V0.8-SCOPE.md. Next-version sidebar zoom/scroll feedback is tracked, not implemented in v0.8.
Official Hondata/KTuner sources first for platform claims. Record applicability and distinguish documentation from inference. Similar table names do not establish identical ECU semantics.
Keep raw user logs and project backups out of git. Never infer unseen settings of locked tunes. No ECU flashing or live hardware actions are in scope.
Run npm test and npm run test:ui in portable/ after relevant changes. Tests use synthetic fixtures by default. TUNELAB_LOG_FIXTURE can point to a private compatibility fixture. DOM tests do not establish browser rendering, clipboard, resizing or storage behavior.
Preserve project backward compatibility and migration paths; do not erase manual refinements automatically. Record release limitations honestly.

Active UI is now v0.9. Read docs/V0.9-SCOPE.md and docs/V0.9-VERIFICATION.md. Unified practice scenarios must never read/write the user browser library or shared preferences. Logging strategy must preserve source applicability; no generic public-road pull instructions or voltage-to-Hz relabeling. v0.9.1 is accepted: all 14 UAT scenarios signed off on 2026-10-02; see docs/V0.9-UAT-SIGNOFF.md/json.

Active build is v0.10; read docs/V0.10-SCOPE.md and docs/V0.10-VERIFICATION.md. Calibration tables must remain accessible/restorable without an active log. Raw plots and bookmarks do not define tuning eligibility. Shared-bin comparison is descriptive and requires reviewed units/revisions and explicit condition checks. Jonny accepted all 21 v0.10 UAT scenarios on 2026-10-02; see docs/V0.10-UAT-SIGNOFF.md/json.

V10-TABLES is reopened: Boost by Gear automatic no-log restoration needs investigation and retest. The other 20 UAT passes remain recorded. See the follow-up in docs/V0.10-UAT-SIGNOFF.md/json.


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


## v0.17 Approved Build — 2026-10-02

Jonny confirmed starting the aligned build; this supersedes the prior hold. See docs/V0.17-SCOPE.md. Datalog chart gestures/navigation, page section controls, consistent EFI terminology and progressively detailed mode summaries are implemented. v0.16.2 retains all fifteen accepted UAT scenarios. v0.17 user acceptance remains pending; private datalogs stay excluded.
