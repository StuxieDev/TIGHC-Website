# Changelog

All notable changes to this project are documented here. Versioning follows
[Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`), independent
of the main [TIGHC](https://github.com/StuxieDev/TIGHC) engine's own version.

## [1.1.1]

### Changed
- Updated static fallback version badges to v3.8.0 (Engine) and v1.3.0 (Profiles).

## [1.1.0]

### Added
- **Mobile & tablet support** — hamburger nav menu, responsive layouts at 760px
  and 1000px breakpoints, touch-friendly tap targets, and horizontal scroll on
  changelog tabs for narrow screens.
- **Live version badges** via `versions.js` — fetches `version.txt` from each
  repo on page load and populates version numbers site-wide (hero badges,
  profiles page, changelogs tab labels, footer) rather than having them hardcoded.
- **`version.txt`** — single source of truth for the website's own version number,
  consumed by `versions.js` and displayed in the footer.

### Changed
- Hero badges on index and profiles pages now update live from GitHub.
- Changelogs tab buttons show inline version numbers after fetching.
- Footer shows live website version on all pages.
- Feature grid collapses to 2 columns at tablet width (1000px) before going
  single-column at mobile (760px).

## [1.0.9]

### Added
- **Changelogs page** (`/changelogs`) — fetches and renders the CHANGELOG.md
  from all three repos (Engine, Profiles, Website) live from GitHub, with
  tab switching, colour-coded section labels, and inline markdown formatting.
- `/changelog` redirects to `/changelogs` via meta-refresh and JS.
- "Changelogs" added to the nav on all pages.

## [1.0.8]

### Changed
- Profiles page hero text updated to describe the new unified binding model
  (no more continuous/pulse distinction) and cites profiles v1.2.0.
- Meta description updated to remove continuous/pulse wording.
- `profiles.js` now fetches `profile.json` instead of `keybinds.json`, and
  renders a single "Bindings:" list per card rather than separate
  "Continuous:" / "Pulse:" rows (which were always empty since mode was
  removed in profiles v1.2.0).

## [1.0.7]

### Changed
- Version badges updated: engine v3.5.0 → v3.7.0, profiles v1.2.0 badge added.
- "Continuous & pulse bindings" feature card replaced with "Hold-until-release
  bindings" — the engine now uses a single unified binding model (TIGHC 3.6.0
  / 3.7.0); the old continuous/pulse distinction no longer exists.
- "Randomized intensity bands" card removes the "(and pulse duration)" copy
  since duration is no longer a configurable field.
- Game profiles section: "keybinds and ranges" → `profile.json` (TIGHC 3.7.0).

## [1.0.6]

### Changed
- Version badge updated to v3.5.0.
- "Per-game profiles" feature card notes exact/substring window-title matching
  and case-sensitivity (added in TIGHC 3.4.0).
- "Continuous & pulse bindings" feature card notes that releasing a key
  mid-pulse cancels it immediately (added in TIGHC 3.5.0).

## [1.0.5]

### Changed
- **Navbar GitHub button (`.nav-gh`) is now a primary/filled button** -
  was an outline "ghost" style (border only, no fill); now uses the same
  accent fill as `.btn-accent` (`var(--accent)` background, white text),
  at the smaller nav padding/radius.

## [1.0.4]

### Changed
- **Internal links no longer include `.html`** - `index.html` and
  `profiles.html` linked to each other as `profiles.html` /
  `index.html#anchor`; switched to root-relative extensionless paths
  (`/profiles`, `/`, `/#anchor`) since GitHub Pages serves both
  `/profiles` and `/` without requiring the file extension.

## [1.0.3]

### Fixed
- **Profiles page listed `assets/` as a broken profile card** -
  `profiles.js` fetched `TIGHC-Profiles`' directory listing and treated
  every folder as a profile, so the submodule's own `assets/` folder
  (icon/logo images) showed up as a card with "Couldn't load this
  profile's keybinds.json." `dirs` now excludes `assets` by name, mirroring
  the same non-profile-folder skip the main TIGHC engine's
  `load_profiles()` does.

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
