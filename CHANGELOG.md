# Changelog

All notable changes to this project are documented here. Versioning follows
[Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`), independent
of the main [TIGHC](https://github.com/StuxieDev/TIGHC) engine's own version.

## [1.0.2]

### Fixed
- `assets/icon.png`, `favicon.ico`, and `logo.png` had an opaque dark
  (`#1E1E1E`) rounded-rect fill baked in instead of a transparent
  background, showing a visible box against the site's `#14141a` page
  background. Replaced with transparent versions (copied from the main
  TIGHC repo after fixing them there via a color-to-alpha un-blend).

## [1.0.1]

### Fixed
- `README.md` had been written as UTF-16LE (every character followed by a
  null byte) instead of UTF-8, which would have rendered as garbled
  mojibake on GitHub - every other file in the repo (`index.html`,
  `style.css`, `script.js`, `profiles.html`, `profiles.js`, `CNAME`) was
  already correct UTF-8, so this was isolated to the one file. Rewritten as
  plain UTF-8 with the same content.

### Added
- Author credit: a "By StuxieDev" link in both pages' footers, plus an
  "Author" section (name + GitHub avatar at `assets/author.png`) in
  `README.md`, matching the same addition in the main TIGHC repo and
  TIGHC-Profiles.

## [1.0.0]

Initial release: the `tighc.stuxie.dev` landing site (`index.html`) and a
live game-profiles page (`profiles.html`, fetched from TIGHC-Profiles via
the GitHub API), served as a plain HTML/CSS/JS static site via GitHub
Pages with no build step.
