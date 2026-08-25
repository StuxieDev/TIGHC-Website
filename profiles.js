(function () {
  var REPO = "StuxieDev/TIGHC-Profiles";
  var BRANCH = "main";
  var API_URL = "https://api.github.com/repos/" + REPO + "/contents/";
  var RAW_BASE = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";

  var statusEl = document.getElementById("profile-status");
  var gridEl = document.getElementById("profile-grid");

  var KEY_LABELS = {
    mouse_left: "left click",
    mouse_right: "right click",
    mouse_middle: "middle click",
    scroll: "scroll wheel",
    ctrl: "Ctrl",
    shift: "Shift",
    space: "Space",
    tab: "Tab",
    left: "Left arrow",
    right: "Right arrow",
    up: "Up arrow",
    down: "Down arrow"
  };

  function keyLabel(key) {
    if (KEY_LABELS.hasOwnProperty(key)) return KEY_LABELS[key];
    if (/^[a-z]$/.test(key)) return key.toUpperCase();
    return key;
  }

  function keysLabel(keys) {
    if (!keys || !keys.length) return "";
    return keys.map(keyLabel).join(" / ");
  }

  function idLabel(id) {
    return String(id).replace(/_/g, " ");
  }

  function bindingsByMode(bindings, mode) {
    return (bindings || [])
      .filter(function (b) { return b.mode === mode && b.enabled !== false; })
      .map(function (b) {
        var keys = keysLabel(b.keys);
        return keys ? idLabel(b.id) + " (" + keys + ")" : idLabel(b.id);
      })
      .join(", ");
  }

  function renderCard(profile) {
    var data = profile.data;
    var article = document.createElement("article");
    article.className = "profile-card";

    var header = document.createElement("header");
    var h3 = document.createElement("h3");
    h3.textContent = (data && data.name) || profile.dirName;
    header.appendChild(h3);
    article.appendChild(header);

    var windowP = document.createElement("p");
    windowP.className = "profile-window";
    var windowTitles = (data && data.window_titles) || [];
    windowP.innerHTML = "Window match: " +
      (windowTitles.length
        ? windowTitles.map(function (t) { return "<code>" + escapeHtml(t) + "</code>"; }).join(", ")
        : "<em>unknown</em>");
    article.appendChild(windowP);

    var continuous = data ? bindingsByMode(data.bindings, "continuous") : "";
    var pulse = data ? bindingsByMode(data.bindings, "pulse") : "";

    if (continuous) {
      var contP = document.createElement("p");
      contP.innerHTML = "<strong>Continuous:</strong> " + escapeHtml(continuous);
      article.appendChild(contP);
    }
    if (pulse) {
      var pulseP = document.createElement("p");
      pulseP.innerHTML = "<strong>Pulse:</strong> " + escapeHtml(pulse);
      article.appendChild(pulseP);
    }
    if (!data) {
      var errP = document.createElement("p");
      errP.className = "profile-error";
      errP.textContent = "Couldn't load this profile's keybinds.json.";
      article.appendChild(errP);
    }

    var linkP = document.createElement("p");
    linkP.className = "profile-source-link";
    var a = document.createElement("a");
    a.href = "https://github.com/" + REPO + "/tree/" + BRANCH + "/" + profile.dirName;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "View source";
    linkP.appendChild(a);
    article.appendChild(linkP);

    return article;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  fetch(API_URL)
    .then(function (res) {
      if (!res.ok) throw new Error("GitHub API returned " + res.status);
      return res.json();
    })
    .then(function (entries) {
      var dirs = entries.filter(function (e) { return e.type === "dir"; });
      if (!dirs.length) throw new Error("No profile folders found");

      return Promise.all(
        dirs.map(function (dir) {
          return fetch(RAW_BASE + dir.name + "/keybinds.json")
            .then(function (res) { return res.ok ? res.json() : null; })
            .catch(function () { return null; })
            .then(function (data) { return { dirName: dir.name, data: data }; });
        })
      );
    })
    .then(function (profiles) {
      profiles.sort(function (a, b) {
        var nameA = (a.data && a.data.name) || a.dirName;
        var nameB = (b.data && b.data.name) || b.dirName;
        return nameA.localeCompare(nameB);
      });

      profiles.forEach(function (profile) {
        gridEl.appendChild(renderCard(profile));
      });

      statusEl.textContent = profiles.length + " profile" + (profiles.length === 1 ? "" : "s") + " loaded from TIGHC-Profiles.";
    })
    .catch(function (err) {
      statusEl.innerHTML = "Couldn't load profiles from GitHub right now (" +
        escapeHtml(err.message) + "). Browse them directly on " +
        "<a href=\"https://github.com/" + REPO + "\" target=\"_blank\" rel=\"noopener\">GitHub</a> instead.";
    });
})();
