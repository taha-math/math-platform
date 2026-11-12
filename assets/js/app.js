document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadGlobalData();
});

function initTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

async function loadGlobalData() {
  try {
    const res = await fetch("data/data.json");
    window.appData = await res.json();
    if (typeof initPage === "function") {
      initPage(window.appData);
    }
  } catch (err) {
    console.error("فشل تحميل بيانات المنصة:", err);
  }
}

function renderMath() {
  if (window.MathJax) {
    MathJax.typesetPromise().catch((err) => console.log("MathJax error:", err));
  }
}
