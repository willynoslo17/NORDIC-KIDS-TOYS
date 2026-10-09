/* Region switch for Ludispel /pe/ only — does not alter the Norway storefront. */
(function () {
  "use strict";
  function go(value) {
    if (value === "europa" || value === "NO" || value === "EU") {
      try { localStorage.setItem("ludispel-region", "europa"); } catch (_) {}
      location.href = "/";
      return;
    }
    try { localStorage.setItem("ludispel-region", "peru"); } catch (_) {}
    if (!location.pathname.startsWith("/pe")) location.href = "/pe/";
  }
  document.querySelectorAll("#regionSwitch").forEach(function (el) {
    el.addEventListener("change", function () { go(el.value); });
  });
  try { localStorage.setItem("ludispel-region", "peru"); } catch (_) {}
})();
