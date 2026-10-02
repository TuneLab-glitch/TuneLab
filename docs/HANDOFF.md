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

The active UI is v0.8 visual clarity/evidence review, approved by Jonny. See V0.8-SCOPE.md, V0.8-VERIFICATION.md and UAT-v0.8.html. User acceptance remains pending; earlier sign-offs are unchanged. Backups carry shading scales/review records, retain old project migration and clear transient evidence filters/calibration confirmations on reopen. Coverage is not confidence or ECU control influence; AFM links distinguish local support and actual bin-center kernel membership.

Next-version user feedback: native browser zoom hides lower sidebar options without a scrollbar. BACKLOG.md records the high-priority fix and zoom/reflow acceptance matrix. This issue is not fixed in v0.8. Deferred alignment, advanced viewer, AI, attachments, installer and platform semantics work remains outside the current release.

Jonny added left/right half-width grid snapping to the current v0.8 build. Explicit column choices, empty-half drag targets, keyboard controls and backup retention are included; UAT-v0.8.html now has 16 scenarios.
