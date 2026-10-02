# TuneLab development handoff

Read docs/HANDOFF.md, docs/BACKLOG.md and RELEASE-NOTES.md before editing.
The active product is portable/ (offline browser app). src/ and tests/ retain the earlier .NET v0.2 implementation; they are not the active v0.7 UI.
Preserve the enthusiast audience: plain English, contextual help, transparent assumptions, reversible changes and protected cells. Guided/Standard/Advanced must use the same calculation engine.
Do not implement the entire backlog without an explicit scoped request. v0.6 scope was approved and built. v0.7 navigation, separate windows and grid panels are approved; consult docs/V0.7-PROPOSAL.md. Its deferred features remain out of scope.
Official Hondata/KTuner sources first for platform claims. Record applicability and distinguish documentation from inference. Similar table names do not establish identical ECU semantics.
Keep raw user logs and project backups out of git. Never infer unseen settings of locked tunes. No ECU flashing or live hardware actions are in scope.
Run npm test and npm run test:ui in portable/ after relevant changes. Tests use synthetic fixtures by default. TUNELAB_LOG_FIXTURE can point to a private compatibility fixture. DOM tests do not establish browser rendering, clipboard, resizing or storage behavior.
Preserve project backward compatibility and migration paths; do not erase manual refinements automatically. Record release limitations honestly.
