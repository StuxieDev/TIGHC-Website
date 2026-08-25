(function () {
  var gate = document.getElementById("age-gate");
  var confirmBtn = document.getElementById("age-confirm");

  var confirmed = false;
  try {
    confirmed = localStorage.getItem("tighc-age-confirmed") === "1";
  } catch (e) {
    /* localStorage unavailable — fall back to showing the gate every visit */
  }

  if (confirmed) {
    gate.hidden = true;
  }

  confirmBtn.addEventListener("click", function () {
    try {
      localStorage.setItem("tighc-age-confirmed", "1");
    } catch (e) {
      /* ignore — gate will just reappear next visit */
    }
    gate.hidden = true;
  });
})();
