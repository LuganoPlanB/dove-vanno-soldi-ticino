// One navigation for every page: same links, language switcher, theme toggle.
import { i18n, type Language } from './locales';

export const NAV_ITEMS: { id: string; href: string; label: string }[] = [
  { id: 'home', href: './', label: 'Home' },
  { id: 'spese', href: './spese.html', label: 'Spese' },
  { id: 'sanita', href: './sanita.html', label: 'Sanità' },
  { id: 'controllo', href: './controllo.html', label: 'Controllo' },
  { id: 'comuni', href: './comuni.html', label: 'Comuni' },
  { id: 'debito', href: './storia-debito.html', label: 'Debito' },
  { id: 'imprese', href: './tassazione-imprese.html', label: 'Imprese' },
  { id: 'metodologia', href: './metodologia.html', label: 'Metodologia' },
];

function linkClass(active: boolean, mobile: boolean): string {
  const base = mobile
    ? 'block px-3 py-2.5 text-sm font-medium rounded-md'
    : 'px-2 py-1 text-sm font-medium rounded-md whitespace-nowrap';
  return active
    ? `${base} text-foreground bg-accent`
    : `${base} text-muted-foreground hover:text-foreground hover:bg-accent/60`;
}

function renderLinks(activeId: string, mobile: boolean): string {
  return NAV_ITEMS.map((item) => {
    const current = item.id === activeId ? ' aria-current="page"' : '';
    const key = item.id === 'metodologia' ? 'nav.methodology' : `nav.${item.id}`;
    return `<a href="${item.href}" class="${linkClass(item.id === activeId, mobile)}" data-i18n="${key}"${current}>${item.label}</a>`;
  }).join('');
}

export function mountSiteNav(): void {
  const host = document.getElementById('site-nav');
  if (!host || host.dataset.mounted === 'true') {
    initializeTheme();
    return;
  }
  host.dataset.mounted = 'true';

  const activeId = document.body.dataset.page || '';
  const currentLang = i18n.getLanguage().toUpperCase();

  host.innerHTML = `
  <nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex h-14 items-center justify-between gap-3">
        <a href="./" class="flex items-center gap-2 min-w-0 font-bold text-sm sm:text-base hover:text-primary transition-colors">
          <span class="text-xl flex-shrink-0" aria-hidden="true">💰</span>
          <span class="truncate" data-i18n="nav.title">Dove vanno i soldi del Ticino</span>
        </a>

        <div class="hidden lg:flex items-center gap-0.5 min-w-0">
          ${renderLinks(activeId, false)}
        </div>

        <div id="nav-controls" class="flex items-center gap-1 flex-shrink-0">
          <button id="mobile-menu-button" class="inline-flex lg:hidden btn btn-secondary h-9 w-9 p-0 items-center justify-center" aria-label="Apri menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div id="lang-switcher" class="relative flex-shrink-0">
            <button id="lang-button" type="button" class="btn btn-secondary h-9 px-2.5 text-sm font-medium flex items-center gap-1" aria-label="Cambia lingua" aria-expanded="false" aria-controls="lang-menu">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span class="font-semibold">${currentLang}</span>
            </button>
            <div id="lang-menu" class="hidden absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 z-[100]">
              <div class="py-1">
                <button type="button" data-lang="it" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'it' ? 'font-bold text-primary' : ''}">Italiano</button>
                <button type="button" data-lang="en" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'en' ? 'font-bold text-primary' : ''}">English</button>
                <button type="button" data-lang="de" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'de' ? 'font-bold text-primary' : ''}">Deutsch</button>
                <button type="button" data-lang="fr" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'fr' ? 'font-bold text-primary' : ''}">Français</button>
              </div>
            </div>
          </div>

          <button id="theme-toggle" type="button" class="btn btn-secondary h-9 w-9 p-0 flex-shrink-0" aria-label="Cambia tema">
            <svg class="h-4 w-4 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg class="h-4 w-4 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden border-t bg-background">
      <div class="container mx-auto px-3 py-2 flex flex-col">
        ${renderLinks(activeId, true)}
      </div>
    </div>
  </nav>`;

  initializeTheme();
  setupLanguageSwitcher();
  setupMobileMenu();
  translateNav();
}

function translateNav() {
  document.documentElement.lang = i18n.getLanguage();
  document.querySelectorAll('#site-nav [data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const translation = i18n.t(key);
    if (translation && translation !== key) el.textContent = translation;
  });
}

export function initializeTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.classList.toggle('dark', theme === 'dark');

  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle || themeToggle.dataset.bound === 'true') return;
  themeToggle.dataset.bound = 'true';

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    window.dispatchEvent(new Event('themeChanged'));
  });
}

function setupLanguageSwitcher() {
  const button = document.getElementById('lang-button');
  const menu = document.getElementById('lang-menu');
  if (!button || !menu) return;

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('hidden') === false;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', () => {
    menu.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  });

  menu.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const lang = (e.currentTarget as HTMLElement).dataset.lang as Language;
      i18n.setLanguage(lang);
      window.location.reload();
    });
  });
}

export function setupMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = mobileMenu.classList.toggle('hidden') === false;
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!menuButton.contains(target) && !mobileMenu.contains(target)) {
      mobileMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

export function initSharedNavigation() {
  mountSiteNav();
}
