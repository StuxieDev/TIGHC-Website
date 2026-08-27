(function () {
  // Age gate
  var gate = document.getElementById("age-gate");
  var confirmBtn = document.getElementById("age-confirm");

  var confirmed = false;
  try {
    confirmed = localStorage.getItem("tighc-age-confirmed") === "1";
  } catch (e) { /* localStorage unavailable */ }

  if (confirmed) gate.hidden = true;

  confirmBtn.addEventListener("click", function () {
    try { localStorage.setItem("tighc-age-confirmed", "1"); } catch (e) {}
    gate.hidden = true;
  });

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.classList.toggle("open", open);
    });

    // Close nav when a link inside it is clicked
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("open");
      }
    });

    // Close nav on outside click
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("open");
      }
    });
  }
})();
