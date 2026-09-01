(function () {
  var REPOS = {
    engine:   "TIGHC/Engine",
    profiles: "TIGHC/Profiles",
    website:  "TIGHC/Website"
  };
  var DEV = window.TIGHC_DEV;

  function fetchVersion(key) {
    var url = DEV
      ? DEV.repos[key] + "/VERSION.md"
      : "https://raw.githubusercontent.com/" + REPOS[key] + "/main/VERSION.md";
    return fetch(url)
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (t) { return t ? t.trim() : null; })
      .catch(function () { return null; });
  }

  Promise.all([fetchVersion("engine"), fetchVersion("profiles"), fetchVersion("website")])
    .then(function (vers) {
      var map = { engine: vers[0], profiles: vers[1], website: vers[2] };
      window.TIGHC_VERSIONS = map;

      // Elements with data-version="key" → "prefix + v + version"
      document.querySelectorAll("[data-version]").forEach(function (el) {
        var ver = map[el.dataset.version];
        if (!ver) return;
        var prefix = el.dataset.versionPrefix || "";
        el.textContent = prefix + "v" + ver;
      });

      // Inline version spans inside tab buttons (changelogs page)
      document.querySelectorAll("[data-version-inline]").forEach(function (el) {
        var ver = map[el.dataset.versionInline];
        if (ver) el.textContent = " v" + ver;
      });

      document.dispatchEvent(new CustomEvent("tighc-versions", { detail: map }));
    });
})();
