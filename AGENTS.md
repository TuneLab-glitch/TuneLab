# TuneLab development handoff

Read docs/HANDOFF.md, docs/BACKLOG.md and RELEASE-NOTES.md before editing.
The active product is portable/ (offline browser app). src/ and tests/ retain the earlier .NET v0.2 implementation; they are not the active v0.8 UI.
Preserve the enthusiast audience: plain English, contextual help, transparent assumptions, reversible changes and protected cells. Guided/Standard/Advanced must use the same calculation engine.
Do not implement the entire backlog without an explicit scoped request. v0.6 scope was approved and built. v0.7 navigation, separate windows and grid panels are approved; consult docs/V0.7-PROPOSAL.md. Its deferred features remain out of scope. v0.8 visual clarity/evidence review is approved; consult docs/V0.8-SCOPE.md. Next-version sidebar zoom/scroll feedback is tracked, not implemented in v0.8.
Official Hondata/KTuner sources first for platform claims. Record applicability and distinguish documentation from inference. Similar table names do not establish identical ECU semantics.
Keep raw user logs and project backups out of git. Never infer unseen settings of locked tunes. No ECU flashing or live hardware actions are in scope.
Run npm test and npm run test:ui in portable/ after relevant changes. Tests use synthetic fixtures by default. TUNELAB_LOG_FIXTURE can point to a private compatibility fixture. DOM tests do not establish browser rendering, clipboard, resizing or storage behavior.
Preserve project backward compatibility and migration paths; do not erase manual refinements automatically. Record release limitations honestly.

Active UI is now v0.9. Read docs/V0.9-SCOPE.md and docs/V0.9-VERIFICATION.md. Unified practice scenarios must never read/write the user browser library or shared preferences. Logging strategy must preserve source applicability; no generic public-road pull instructions or voltage-to-Hz relabeling. v0.9 acceptance is pending.
