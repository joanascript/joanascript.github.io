(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var stored = null;
  try {
    stored = localStorage.getItem("joana-theme");
  } catch (e) {}
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  toggle.addEventListener("click", function () {
    theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("joana-theme", theme);
    } catch (e) {}
  });

  function applyTheme(t) {
    if (t === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }
})();
