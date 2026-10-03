// Shared navigation functionality for all pages
import { i18n, type Language } from './locales';

export function initializeTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.classList.toggle('dark', theme === 'dark');
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Trigger custom event for pages to refresh charts
      window.dispatchEvent(new Event('themeChanged'));
    });
  }
}

export function createLanguageSwitcher() {
  const nav = document.querySelector('nav .flex.items-center.gap-1');
  if (!nav || document.getElementById('lang-switcher')) return;
  
  const switcher = document.createElement('div');
  switcher.id = 'lang-switcher';
  switcher.className = 'relative flex-shrink-0';
  
  const currentLang = i18n.getLanguage().toUpperCase();
  
  switcher.innerHTML = `
    <button id="lang-button" class="btn btn-secondary h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm font-medium flex items-center gap-1" aria-label="Change language">
      <svg class="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
      </svg>
      <span class="font-semibold">${currentLang}</span>
    </button>
    <div id="lang-menu" class="hidden absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 z-[100]">
      <div class="py-1 bg-white dark:bg-slate-900">
        <button data-lang="it" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'it' ? 'font-bold text-primary' : ''}">🇮🇹 Italiano</button>
        <button data-lang="en" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'en' ? 'font-bold text-primary' : ''}">🇬🇧 English</button>
        <button data-lang="de" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'de' ? 'font-bold text-primary' : ''}">🇩🇪 Deutsch</button>
        <button data-lang="fr" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'fr' ? 'font-bold text-primary' : ''}">🇫🇷 Français</button>
      </div>
    </div>
  `;
  
  const themeToggle = nav.querySelector('#theme-toggle');
  if (themeToggle) {
    nav.insertBefore(switcher, themeToggle);
  } else {
    nav.appendChild(switcher);
  }
  
  const button = document.getElementById('lang-button');
  const menu = document.getElementById('lang-menu');
  
  button?.addEventListener('click', (e) => {
    e.stopPropagation();
    menu?.classList.toggle('hidden');
  });
  
  document.addEventListener('click', () => {
    menu?.classList.add('hidden');
  });
  
  menu?.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = (e.target as HTMLElement).dataset.lang as Language;
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
    mobileMenu.classList.toggle('hidden');
  });
  
  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!menuButton.contains(target) && !mobileMenu.contains(target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}

export function initSharedNavigation() {
  initializeTheme();
  createLanguageSwitcher();
  setupMobileMenu();
}
