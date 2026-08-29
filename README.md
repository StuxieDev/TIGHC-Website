# TIGHC-Website

**Version 1.1.1** — see [CHANGELOG.md](CHANGELOG.md) for release history.

![TIGHC](assets/logo.png)

Source for [tighc.stuxie.dev](https://tighc.stuxie.dev), the landing site
for [TIGHC](https://github.com/StuxieDev/TIGHC) (The Intiface Game Haptics
Controller). Plain HTML/CSS/JS, served directly from this repo via GitHub
Pages - no build step.

Website: https://tighc.stuxie.dev  
Repository: https://github.com/StuxieDev/TIGHC-Website

## Author

<img src="assets/author.png" width="80" height="80" alt="StuxieDev" align="left" style="margin-right: 12px;">

**[StuxieDev](https://github.com/StuxieDev)**

<br>
<br>

## Structure

```
index.html        # landing page - what TIGHC is, features, how it works, get started
profiles.html     # game profiles, fetched live from TIGHC-Profiles via the GitHub API
changelogs.html   # tabbed changelog viewer (Engine / Profiles / Website)
style.css         # shared styles across all pages
script.js         # 18+ notice (shown once per browser, via localStorage)
profiles.js       # fetches profiles.html's content from github.com/StuxieDev/TIGHC-Profiles
changelogs.js     # fetches and renders CHANGELOG.md from each repo for changelogs.html
versions.js       # fetches version.txt from each repo on load and populates version badges site-wide
assets/           # logo/icon/author avatar, copied from the main TIGHC repo's assets/
CNAME             # custom domain (tighc.stuxie.dev) for GitHub Pages
```

`profiles.html` doesn't hardcode the game list - it calls the GitHub
Contents API to list folders in
[TIGHC-Profiles](https://github.com/StuxieDev/TIGHC-Profiles), then fetches
each folder's `profile.json` from `raw.githubusercontent.com` to render its
bindings. Adding a profile there shows up here automatically, no edits
needed on this side.

## Local preview

No build tooling required - just serve the folder root and open it:

```
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

GitHub Pages is configured to serve from this repo's root on `main` - just
push. The `CNAME` file points the custom domain at GitHub Pages; don't
remove it unless the domain setup is changing too.

## Versioning and contact

Follows [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`),
independently of the main TIGHC engine's own version - see
[CHANGELOG.md](CHANGELOG.md) for what changed in each release. Questions,
issues, or contributions: https://github.com/StuxieDev/TIGHC-Website
