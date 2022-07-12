
function toggleTheme() {
  const body = document.querySelector("body")
  currentTheme = body.getAttribute("data-theme")
  body.setAttribute("data-theme", currentTheme != "dark" ? "dark" : "light")
}