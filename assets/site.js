const page = document.documentElement;
const languageToggle = document.getElementById('language-toggle');
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
  const chinese = page.lang === 'zh-CN';
  const label = dark
    ? (chinese ? '切换到浅色主题' : 'Switch to light theme')
    : (chinese ? '切换到深色主题' : 'Switch to dark theme');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
  themeToggle.firstElementChild.textContent = dark ? '☼' : '☾';
}

function setTheme(theme) {
  page.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1d1d1d' : '#fafafa';
  updateThemeLabel();
}

function setLanguage(language) {
  const chinese = language === 'zh';
  page.lang = chinese ? 'zh-CN' : 'en';
  for (const element of document.querySelectorAll('[data-en][data-zh]')) {
    element.textContent = element.dataset[language];
  }
  languageToggle.textContent = chinese ? 'EN' : '中文';
  languageToggle.setAttribute('aria-label', chinese ? 'Switch to English' : '切换到中文');
  document.querySelector('nav').setAttribute('aria-label', chinese ? '主导航' : 'Main navigation');
  for (const closeButton of document.querySelectorAll('.close-dialog')) {
    closeButton.setAttribute('aria-label', chinese ? '关闭图片' : 'Close figure');
  }
  updateThemeLabel();
}

setLanguage(readPreference('qiyue-language') === 'zh' ? 'zh' : 'en');
setTheme(readPreference('qiyue-theme') === 'light' ? 'light' : 'dark');
languageToggle.addEventListener('click', () => {
  const language = page.lang === 'en' ? 'zh' : 'en';
  setLanguage(language);
  remember('qiyue-language', language);
});
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
