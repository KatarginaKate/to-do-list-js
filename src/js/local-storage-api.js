const KEY = 'tasks';

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

// ✅ тема
export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  return localStorage.getItem(THEME_KEY);
}
