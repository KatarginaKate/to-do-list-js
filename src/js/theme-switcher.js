import { refs } from "./refs";
import { saveTheme, loadTheme } from "./local-storage-api";

const DARK_CLASS = 'dark';

// 🔹 застосування теми
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add(DARK_CLASS);
  } else {
    document.body.classList.remove(DARK_CLASS);
  }
}

// 🔹 перемикання
function onToggleTheme() {
  const isDark = document.body.classList.contains(DARK_CLASS);

  const newTheme = isDark ? 'light' : 'dark';

  applyTheme(newTheme);
  saveTheme(newTheme);
}

// 🔹 ініціалізація при завантаженні
export function initTheme() {
  const savedTheme = loadTheme();

  if (savedTheme) {
    applyTheme(savedTheme);
  }

  refs.themeToggle.addEventListener('click', onToggleTheme);
}
