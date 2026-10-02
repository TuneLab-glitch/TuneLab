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
