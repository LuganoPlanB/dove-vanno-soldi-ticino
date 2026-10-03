import './style.css';
import * as charts from './charts';
import { i18n, type Language } from './locales';
import { enableShareableViews, addShareButtons } from './ux-enhancements';
import { loadComuniData, searchComuni, renderComuneCard } from './comuni';
import { renderAllInsightCards } from './insights';
import { loadSpeseNatura, prepareTreemapData, type SpesaNatura, renderAvailabilityBadge, formatMillions, formatCurrency } from './spese-natura';

// Enable URL-based view sharing
enableShareableViews();

// Respect base path for production builds
const BASE_URL = import.meta.env?.BASE_URL || '/';

async function loadJSON<T>(path: string): Promise<T> {
  const url = `${BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.statusText}`);
  }
  return response.json();
}

function initializeTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.classList.toggle('dark', theme === 'dark');
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      setTimeout(() => {
        renderAllCharts();
      }, 50);
    });
  }
}

function createLanguageSwitcher() {
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
    <div id="lang-menu" class="hidden absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-background border border-border z-[100]">
      <div class="py-1 bg-background">
        <button data-lang="it" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'it' ? 'font-bold text-primary' : ''}">🇮🇹 Italiano</button>
        <button data-lang="en" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'en' ? 'font-bold text-primary' : ''}">🇬🇧 English</button>
        <button data-lang="de" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'de' ? 'font-bold text-primary' : ''}">🇩🇪 Deutsch</button>
        <button data-lang="fr" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ${i18n.getLanguage() === 'fr' ? 'font-bold text-primary' : ''}">🇫🇷 Français</button>
      </div>
    </div>
  `;
  
  // Insert before theme toggle
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

function translateCategory(category: string): string {
  const key = `categories.${category}`;
  const translated = i18n.t(key);
  return translated === key ? category : translated;
}

function renderAllCharts() {
  Promise.all([
    loadJSON('data/spese-per-funzione-2027.json'),
    loadJSON('data/debito-storico.json'),
    loadJSON('data/deficit-storico.json'),
    loadJSON('data/premi-e-contributi-sanita.json'),
    loadJSON('data/confronto-pluriennale-2025-2027.json'),
    loadJSON('data/preventivo-2027.json'),
  ]).then(([
    spesePerFunzione,
    debitoStorico,
    deficitStorico,
    premiSanita,
    _confronto,
    preventivo2027,
  ]) => {
    const treemapEl = document.getElementById('spending-function-treemap');
    if (treemapEl && (spesePerFunzione as any).spesePerFunzione) {
      // Translate categories
      const translatedData = (spesePerFunzione as any).spesePerFunzione.map((d: any) => ({
        categoria: translateCategory(d.funzione),
        importo: d.importo,
        percentuale: d.percentuale
      }));
      charts.renderTreemap('spending-function-treemap', translatedData, i18n.t('charts.spending.title'));
    }

    const debtChartEl = document.getElementById('debt-history-chart');
    if (debtChartEl && (debitoStorico as any).debitoSerie) {
      const debtData = (debitoStorico as any).debitoSerie.map((d: any) => ({
        anno: d.anno,
        valore: d.debito,
      }));
      charts.renderLineChart(
        'debt-history-chart',
        debtData,
        i18n.t('charts.debt.title'),
        i18n.t('charts.debt.yAxis'),
        (n) => `${(n / 1000).toFixed(2)} ${i18n.t('charts.debt.yAxis').split(' ')[1]}`
      );
    }

    const deficitChartEl = document.getElementById('deficit-history-chart');
    if (deficitChartEl && (deficitStorico as any).deficitSerie) {
      const deficitData = (deficitStorico as any).deficitSerie.map((d: any) => ({
        anno: d.anno,
        valore: Math.abs(d.disavanzo),
      }));
      charts.renderLineChart(
        'deficit-history-chart',
        deficitData,
        i18n.t('charts.deficit.title'),
        i18n.t('charts.deficit.yAxis'),
        (n) => `${i18n.formatNumber(n, { maximumFractionDigits: 0 })} M`
      );
    }

    const healthChartEl = document.getElementById('health-premiums-chart');
    if (healthChartEl && (premiSanita as any).premiMedi) {
      const healthData: charts.ComparisonData[] = [
        {
          categoria: translateCategory('Contributi cantonali'),
          consuntivo2025: 318.0,
          preventivo2026: 322.8,
          preventivo2027: 332.0,
        },
        {
          categoria: translateCategory('Premio medio TI'),
          consuntivo2025: 491.0,
          preventivo2026: 505.0,
          preventivo2027: 519.9,
        },
        {
          categoria: translateCategory('Premio medio CH'),
          consuntivo2025: 390.0,
          preventivo2026: 401.0,
          preventivo2027: 412.0,
        },
      ];
      charts.renderComparisonChart('health-premiums-chart', healthData, i18n.t('charts.health.title'));
    }

    const budgetOverviewEl = document.getElementById('budget-overview-chart');
    if (budgetOverviewEl && (preventivo2027 as any).preventivo2027) {
      const prev = (preventivo2027 as any).preventivo2027;
      const budgetData: charts.SimpleBarData[] = [
        { label: translateCategory('Uscite correnti'), value: prev.speseCorrente?.value || 0, color: 'rgb(239 68 68)' },
        { label: translateCategory('Entrate correnti'), value: prev.ricaviCorrenti?.value || 0, color: 'rgb(34 197 94)' },
        { label: translateCategory('Investimenti'), value: prev.investimentiNetti?.value || 0, color: 'rgb(59 130 246)' },
      ];
      charts.renderSimpleBarChart('budget-overview-chart', budgetData, i18n.t('charts.budget.title'));
    }
  }).catch(error => {
    console.error('Error loading data:', error);
    const chartIds = [
      'spending-function-treemap',
      'debt-history-chart', 
      'deficit-history-chart',
      'health-premiums-chart',
      'budget-overview-chart',
    ];
    chartIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = `<div class="p-4 text-center text-red-600 dark:text-red-400">
          <p class="font-semibold">Errore caricamento dati</p>
          <p class="text-sm mt-1">${error.message}</p>
        </div>`;
      }
    });
  });
}

function setupResponsiveCharts() {
  let resizeTimeout: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      renderAllCharts();
    }, 250);
  });
}

if (window.location.pathname === '/' || 
    window.location.pathname.includes('index.html') ||
    window.location.pathname === '/dove-vanno-soldi-ticino/' ||
    window.location.pathname === '/dove-vanno-soldi-ticino/index.html') {
  initializeTheme();
  // Import translator dynamically
  import('./translator').then(({ translatePage }) => {
    translatePage();
  });
  createLanguageSwitcher();
  setupMobileMenu();
  renderAllCharts();
  setupResponsiveCharts();
  setupComuniSearch();
  renderInsights();
  renderSpeseNatura();
  
  // UX enhancements: Add share buttons after content loads
  setTimeout(() => {
    addShareButtons();
  }, 1000);
}

async function renderSpeseNatura() {
  try {
    const data = await loadSpeseNatura();
    
    const treemapContainer = document.getElementById('spese-natura-treemap');
    const detailsContainer = document.getElementById('spese-natura-details');
    
    // Check if we have real data
    if (!data.spesePerNatura2027 || data.spesePerNatura2027.length === 0) {
      // Show "data unavailable" message
      if (treemapContainer) {
        treemapContainer.innerHTML = `
          <div class="flex items-center justify-center h-64 bg-muted/30 rounded-lg border-2 border-dashed">
            <div class="text-center p-8 max-w-lg">
              <div class="text-4xl mb-4">📋</div>
              <h3 class="text-xl font-bold mb-2">Dati in estrazione da fonti ufficiali</h3>
              <p class="text-muted-foreground mb-4">
                Il breakdown dettagliato per natura economica (salari, consulenze, IT, ecc.) 
                richiede il <strong>Consuntivo 2025</strong> con il "Conto economico per genere di spesa".
              </p>
              <p class="text-sm text-muted-foreground">
                Ricerca in corso su ti.ch → Divisione delle risorse → Conti consuntivi
              </p>
              <p class="text-xs text-amber-600 dark:text-amber-400 mt-4 font-semibold">
                ⚠️ NESSUN dato stimato o placeholder. Solo cifre ufficiali verificate.
              </p>
            </div>
          </div>
        `;
      }
      
      if (detailsContainer) {
        detailsContainer.innerHTML = '';
      }
      return;
    }
    
    // Render treemap (only if we have data)
    const treemapData = prepareTreemapData(data);
    charts.renderSpeseNaturaTreemap('spese-natura-treemap', treemapData);
    
    // Render detailed breakdown cards
    if (detailsContainer && data.spesePerNatura2027) {
      detailsContainer.innerHTML = data.spesePerNatura2027.map((spesa: SpesaNatura) => `
        <div class="bg-card border rounded-lg p-4 sm:p-6">
          <div class="flex items-start justify-between mb-3">
            <div>
              <h3 class="text-xl font-bold">${spesa.categoria}</h3>
              <p class="text-sm text-muted-foreground mt-1">${spesa.descrizione}</p>
            </div>
            <div>${renderAvailabilityBadge(spesa.disponibilita)}</div>
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <div>
              <div class="text-sm text-muted-foreground">Importo</div>
              <div class="text-2xl font-bold">${formatMillions(spesa.importo_mchf)}</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">% bilancio</div>
              <div class="text-2xl font-bold">${spesa.percentuale.toFixed(1)}%</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Per abitante</div>
              <div class="text-xl font-bold">${formatCurrency(spesa.perAbitante_chf)}</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Per giorno</div>
              <div class="text-lg font-bold">${formatCurrency(spesa.perAbitante_chf / 365, 2)}/g</div>
            </div>
          </div>
          
          ${spesa.sottoCategorie && spesa.sottoCategorie.length > 0 ? `
            <div class="border-t pt-4">
              <h4 class="font-semibold mb-3 text-sm">Dettaglio sottocategorie:</h4>
              <div class="space-y-2">
                ${spesa.sottoCategorie.map(sub => `
                  <div class="flex items-center justify-between text-sm p-2 rounded hover:bg-muted/50">
                    <div class="flex-1">
                      <span class="font-medium">${sub.nome}</span>
                      ${sub.codice ? `<span class="text-xs text-muted-foreground ml-2">(${sub.codice})</span>` : ''}
                      <p class="text-xs text-muted-foreground mt-0.5">${sub.descrizione}</p>
                    </div>
                    <div class="text-right ml-4">
                      <div class="font-semibold">${formatMillions(sub.importo_mchf)}</div>
                      <div class="text-xs text-muted-foreground">${sub.percentuale.toFixed(1)}%</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
          
          <div class="mt-4 pt-4 border-t text-sm">
            <p class="text-muted-foreground italic mb-2">${spesa.nota}</p>
            <p class="text-xs text-muted-foreground">📄 ${spesa.fonte}</p>
          </div>
        </div>
      `).join('');
    }
  } catch (err) {
    console.error('Error loading spese natura:', err);
  }
}

function renderInsights() {
  const container = document.getElementById('insights-container');
  if (!container) return;
  
  container.innerHTML = renderAllInsightCards();
}

function setupMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuButton || !mobileMenu) return;
  
  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close on click outside
  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!menuButton.contains(target) && !mobileMenu.contains(target)) {
      mobileMenu.classList.add('hidden');
    }
  });
  
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

async function setupComuniSearch() {
  const searchInput = document.getElementById('comuni-search') as HTMLInputElement;
  const resultsContainer = document.getElementById('comuni-results');
  
  if (!searchInput || !resultsContainer) return;
  
  const data = await loadComuniData();
  
  // Check if we have real data
  if (!data.comuni || data.comuni.length === 0) {
    resultsContainer.innerHTML = `
      <div class="flex items-center justify-center min-h-[300px] bg-muted/30 rounded-lg border-2 border-dashed">
        <div class="text-center p-8 max-w-lg">
          <div class="text-4xl mb-4">🏘️</div>
          <h3 class="text-xl font-bold mb-2">Dati comunali in estrazione</h3>
          <p class="text-muted-foreground mb-4">
            I dati finanziari per comune devono essere estratti da 
            <strong>USTAT</strong> (Ufficio di statistica) o dalla 
            <strong>Sezione enti locali</strong> con conti consuntivi ufficiali verificati.
          </p>
          <p class="text-sm text-muted-foreground">
            Fonti ufficiali: ti.ch/ustat e ti.ch/dfe/dr/sel
          </p>
          <p class="text-xs text-amber-600 dark:text-amber-400 mt-4 font-semibold">
            ⚠️ NESSUN dato placeholder. Solo cifre verificate da bilanci comunali pubblicati.
          </p>
        </div>
      </div>
    `;
    searchInput.disabled = true;
    searchInput.placeholder = 'Dati in estrazione da fonti ufficiali...';
    return;
  }
  
  // Display all comuni initially
  const renderResults = (comuni: typeof data.comuni) => {
    if (comuni.length === 0) {
      resultsContainer.innerHTML = '<div class="text-center py-8 text-muted-foreground">Nessun comune trovato</div>';
      return;
    }
    
    resultsContainer.innerHTML = `
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${comuni.map(c => renderComuneCard(c)).join('')}
      </div>
    `;
  };
  
  renderResults(data.comuni);
  
  // Search on input
  searchInput.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value;
    const results = searchComuni(query, data);
    renderResults(results);
  });
}
