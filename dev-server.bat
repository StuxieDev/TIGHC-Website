@echo off
REM TIGHC Website — Local dev server (Windows)
REM Usage: dev-server.bat [port] [--no-dev-mode]
REM   port            default: 8000
REM   --no-dev-mode   fetch Engine/Profiles/Website content from GitHub
REM                   instead of the local sibling checkouts (production
REM                   behavior) for this run
REM
REM DEV_MODE is forced ON for every run of this script - profiles.js/
REM changelogs.js/versions.js read Engine/Profiles/Website content from the
REM sibling checkouts next to this one (..\Engine, ..\Profiles) instead of
REM GitHub, so local edits to those repos show up here without pushing
REM first. Pass --no-dev-mode to test the site as it behaves in production
REM instead.
setlocal
set "DIR=%~dp0"

where python >nul 2>nul
if errorlevel 1 (
    where py >nul 2>nul
    if errorlevel 1 (
        echo Python 3 is required to run dev-server.py
        exit /b 1
    )
    py "%DIR%dev-server.py" %*
) else (
    python "%DIR%dev-server.py" %*
)
