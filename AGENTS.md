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
