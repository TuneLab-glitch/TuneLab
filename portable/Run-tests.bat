@echo off
cd /d "%~dp0"
node --test tests\engine.test.cjs tests\workbench.test.cjs tests\sessions.test.cjs
pause
