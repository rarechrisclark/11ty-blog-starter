/** Set the theme based on user preference or system preference
 * Credit: Alberto Roura
 * Source: https://albertoroura.com/building-a-theme-switcher-for-bootstrap/
 */

function setTheme(mode = 'auto') {
  const userMode = localStorage.getItem('bs-theme');
  const sysMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  const useSystem = mode === 'system' || (!userMode && mode === 'auto');
  const modeChosen = useSystem ? 'system' : mode === 'dark' || mode === 'light' ? mode : userMode;

  if (useSystem) {
    localStorage.removeItem('bs-theme');
  } else {
    localStorage.setItem('bs-theme', modeChosen);
  }

  document.documentElement.setAttribute('data-bs-theme', useSystem ? (sysMode ? 'light' : 'dark') : modeChosen);

  // Reset and apply classes to buttons
  const buttons = document.querySelectorAll('.mode-switch .btn');
  buttons.forEach((button) => {
    button.classList.remove('text-primary', 'text-body-secondary');
    button.classList.add('text-body-secondary');
  });

  const modeElement = document.getElementById(modeChosen);
  if (modeElement) {
    modeElement.classList.remove('text-body-secondary');
    modeElement.classList.add('text-primary');
  }
}

// Initial theme setting
setTheme();

// Event listeners for theme switch buttons
document.querySelectorAll('.mode-switch .btn').forEach((e) => {
  e.addEventListener('click', () => setTheme(e.id));
});

// System theme change listener
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => setTheme());

// Apply the saved theme (if any) on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('bs-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme();
  }

  document.querySelectorAll('.mode-switch .btn').forEach((btn) => {
    btn.addEventListener('click', () => setTheme(btn.id));
  });
});
