#!/bin/bash
# TIGHC Website — Git commit script
# v1.1.6 — Add commit.bat/commit.sh

git add -A
git commit -m "chore(v1.1.6): add commit.bat/commit.sh

Pre-written commit+tag scripts (Windows/Unix), rewritten with each
commit's exact message/tag before being run - keeps multi-line commit
messages consistent across shells and leaves a record of exactly what
each commit and its tag said.

Version: v1.1.6"

git tag -a v1.1.6 -m "TIGHC Website v1.1.6 — Add commit.bat/commit.sh"
