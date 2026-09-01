<p align="center">
  <img src="assets/logo.png" width="500" alt="The Intiface Game Haptics Controller (TIGHC)">
</p>

# Contributing to the TIGHC Website

Issues and pull requests are welcome at
[github.com/TIGHC/Website](https://github.com/TIGHC/Website).

## Getting set up

No build tooling required - plain HTML/CSS/JS. See the [README](README.md)
for the file structure. To preview locally, run `./dev-server.sh` (or
`dev-server.bat` on Windows) and visit `http://127.0.0.1:8000` - this loads
Engine/Profiles content from the sibling checkouts next to this one instead
of GitHub, so local edits to those repos show up immediately. Pass
`--no-dev-mode` to test against live GitHub content instead.

## Making a change

- Keep pages consistent with `style.css` - avoid inline styles or one-off
  CSS unless there's a good reason.
- If you add a page, link it from the nav and footer on every existing page
  (see how `index.html` and the others do it), including the
  `/legal` "Boring Legal Stuff" footer link.
- `profiles.js`, `changelogs.js`, and `versions.js` fetch live content from
  the [TIGHC/Profiles](https://github.com/TIGHC/Profiles) and
  [TIGHC/Engine](https://github.com/TIGHC/Engine) repos at runtime - test
  changes to them with `./dev-server.sh`/`dev-server.bat` (not `file://`),
  since `fetch` needs an HTTP origin.
- Check a narrow viewport if you touch layout (the site is responsive down
  to mobile widths). There's no light theme to check - the site is dark-only.
- Any new page needs OpenGraph/Twitter meta tags and a `<link rel="canonical">`
  in its `<head>` - copy the pattern from an existing page.

## Versioning

Bump [`VERSION.md`](VERSION.md) and add a matching entry to
[`CHANGELOG.md`](CHANGELOG.md) in the same PR, following
[Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`),
independent of the main Engine's own version.

## Deploying

Merges to `main` publish automatically via GitHub Pages - no separate deploy
step. Don't remove the `CNAME` file unless the custom domain setup is
changing too.

## Reporting a bug

Open an issue with the page, browser, and what looked wrong (a screenshot
helps).
