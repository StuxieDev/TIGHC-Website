#!/bin/bash
# TIGHC Website — Local dev server
# Usage: ./dev-server.sh [port] [--no-dev-mode]
#   port            default: 8000
#   --no-dev-mode   fetch Engine/Profiles/Website content from GitHub
#                   instead of the local sibling checkouts (production
#                   behavior) for this run
#
# DEV_MODE is forced ON for every run of this script, regardless of what
# was passed last time — that's what makes profiles.js/changelogs.js/
# versions.js read Engine/Profiles/Website content from the sibling
# checkouts next to this one (../Engine, ../Profiles) instead of GitHub, so
# local edits to those repos show up here without pushing first. Pass
# --no-dev-mode to test the site as it behaves in production instead.
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON="$(command -v python3 || command -v python)"
if [ -z "$PYTHON" ]; then
    echo "Python 3 is required to run dev-server.py" >&2
    exit 1
fi

exec "$PYTHON" "$DIR/dev-server.py" "$@"
