@echo off
REM TIGHC Website — Git commit script (Windows)
REM v1.1.6 — Add commit.bat/commit.sh

git add -A
git commit -m "chore(v1.1.6): add commit.bat/commit.sh — pre-written commit+tag scripts, rewritten with each commit's exact message/tag before being run — Version: v1.1.6"
git tag -a v1.1.6 -m "TIGHC Website v1.1.6 — Add commit.bat/commit.sh"
