# TIGHC Website — Installation Guide

Setting up on your own machine to work on the code instead? See
[DEV_GUIDE.md](DEV_GUIDE.md) — this document is about deploying a copy of
this site to a real host.

---

## Requirements

Nothing beyond a place to serve static files — no PHP, no database, no
build step. GitHub Pages (what production uses) or any other static host
(Netlify, Vercel, S3, plain Apache/Nginx) all work identically, since it's
just HTML/CSS/JS.

## Option A: GitHub Pages (what production uses)

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source to **Deploy from a
   branch**, branch `main`, folder `/ (root)`.
3. For a custom domain, set it under **Settings → Pages → Custom domain** —
   GitHub writes/validates the `CNAME` file for you when you do this via the
   UI (this repo's `CNAME` is already set to `tighc.stuxie.dev`; replace it
   with your own domain, or remove it to use the default
   `<org>.github.io/Website` URL instead). Point your DNS at GitHub Pages
   per [GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site) —
   the exact record values are documented there rather than repeated here,
   since GitHub can change them.
4. Push to `main` — GitHub Pages redeploys automatically. No separate build
   or deploy step.

## Option B: Any other static host

Upload everything in this repo except `.git/`, `dev-server.py`/`.sh`/`.bat`,
and `dev-config.js` (if present — it's gitignored and only exists locally)
to your host's document root. That's it — there's no server-side code to
configure.

If you're not using GitHub Pages, delete (or don't upload) `CNAME` — it
only matters to GitHub Pages.

## Test the install

- Visit your domain — you should see the TIGHC landing page, not a 404 or
  blank page.
- Visit `/engine.html` and `/profiles.html` — these fetch live content from
  `github.com/TIGHC/Engine` and `github.com/TIGHC/Profiles` at runtime via
  `fetch()`, which needs an `http(s)://` origin. This only matters if
  you're testing by double-clicking the HTML files directly (`file://`)
  instead of through a real host — any static host, GitHub Pages included,
  serves over `http(s)://` by default.
- Visit `/legal` — confirms the legal hub and its six sub-pages made it
  across.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 on every page | Pages source isn't set to `main` / root — check Settings → Pages |
| Custom domain shows GitHub's default 404 or a DNS error | DNS record doesn't point at GitHub Pages yet, or hasn't propagated — check Settings → Pages for the domain's verification status |
| `engine.html`/`profiles.html` show nothing, or the console shows a fetch/CORS error | You're opening the file directly (`file://`) instead of via a real HTTP host — see [DEV_GUIDE.md](DEV_GUIDE.md) to serve it locally over HTTP instead |
| Certificate warning on the custom domain | GitHub Pages' automatic HTTPS cert can take up to 24h to provision after DNS is pointed correctly — wait and recheck Settings → Pages |
