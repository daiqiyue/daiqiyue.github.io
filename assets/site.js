const page = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function remember(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The controls also work when storage is unavailable.
  }
}

function updateThemeLabel() {
  const dark = page.dataset.theme === 'dark';
  const label = dark ? 'Switch to light theme' : 'Switch to dark theme';
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
  themeToggle.firstElementChild.textContent = dark ? '☼' : '☾';
}

function setTheme(theme) {
  page.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1d1d1d' : '#fafafa';
  updateThemeLabel();
}

setTheme(readPreference('qiyue-theme') === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', () => {
  const theme = page.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  remember('qiyue-theme', theme);
});

for (const button of document.querySelectorAll('[data-panel]')) {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.dataset.panel);
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
  });
}
for (const link of document.querySelectorAll('[data-figure]')) {
  const dialog = document.getElementById(link.dataset.figure + '-figure');
  link.addEventListener('click', event => {
    if (!dialog.showModal || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
  });
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}
