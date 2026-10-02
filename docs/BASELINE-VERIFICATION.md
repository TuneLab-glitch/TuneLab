# v0.5 repository baseline verification

Verified 2026-10-02 with Node v24.19.0. Original upload commit: `b9ce085b7ba32c4098153ecda3b7d785f2eb3ec9`.

## Repair scope

The initial GitHub upload flattened the folder layout. Restored `portable/`, `portable/tests/`, `docs/`, and the older .NET project folders using existing namespace and project references. Renamed the uploaded `download` ignore-rules file to `.gitignore`. Every moved tracked file was verified byte-identical to the upload. No v0.6 feature or application calculation changes were made. Added an npm lockfile for reproducible development dependencies.

## Fresh checks

- `cd portable; npm install --ignore-scripts --no-audit --no-fund`: passed.
- `npm test`: 39 synthetic engine/workbench/session tests passed; zero failures.
- `npm run test:ui`: both DOM integration suites passed.
- Windows launcher destination and local HTML asset paths: present.
- Private historical-log compatibility check: not run; fixture unavailable. The earlier 40-test count includes this optional test.
- Real browser rendering, pointer/resize, clipboard/download, IndexedDB, destination-software paste and PC UAT: not tested.
- Retained .NET v0.2 projects: not compiled.
- Original release ZIP equivalence: not established; byte identity was checked against the uploaded GitHub files.

## UAT order and triage

1. SET-01: confirm Windows launch after extracting the complete repository archive.
2. SAVE-01, UNIT-01, EXPORT-01, EDIT-02, SOURCE-03, HIST-02/03: prioritize data retention, physical values, destination paste, protection and restoration. Wrong values or lost data are Critical and block acceptance.
3. LOG-01 through LOG-12: check actual export mappings, calibration roles, missing channels, filtering and linked inspection. Blocked core workflows are Major.
4. GUIDE, HELP and LAYOUT cases: check beginner usability, pointer selection, resizing and readability. Escalate presentation defects when they prevent reliable editing.

No completed UAT results or GitHub issues were available at verification. Keep Not tested distinct from Pass. Report case ID, steps, units/filter, expected and actual values, browser/version and screenshot references. Keep personal logs and project exports outside git. Scope v0.6 only after actual failures are triaged.

## Release checkpoint

Use the repaired, reviewed commit for the v0.5.0 repository checkpoint; it represents layout recovery of the uploaded baseline, not proof of original ZIP equivalence. Do not label outstanding PC acceptance checks as passed.
