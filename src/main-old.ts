import './style.css';
import * as charts from './charts';

// Respect base path for production builds
// In production (GitHub Pages): /dove-vanno-soldi-ticino/
// In development: /
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
    confronto,
    preventivo2027,
  ]) => {
    const treemapEl = document.getElementById('spending-function-treemap');
    if (treemapEl && (spesePerFunzione as any).spesePerFunzione) {
      charts.renderTreemap('spending-function-treemap', (spesePerFunzione as any).spesePerFunzione);
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
        'Debito pubblico cantonale',
        'Miliardi CHF',
        (n) => `${(n / 1000).toFixed(2)} Mia`
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
        'Disavanzo annuale',
        'Milioni CHF',
        (n) => `${n.toLocaleString('it-CH')} M`
      );
    }

    const healthChartEl = document.getElementById('health-premiums-chart');
    if (healthChartEl && (premiSanita as any).premiMedi) {
      const healthData: charts.ComparisonData[] = [
        {
          categoria: 'Contributi cantonali',
          consuntivo2025: 318.0,
          preventivo2026: 322.8,
          preventivo2027: 332.0,
        },
        {
          categoria: 'Premio medio TI',
          consuntivo2025: 491.0,
          preventivo2026: 505.0,
          preventivo2027: 519.9,
        },
        {
          categoria: 'Premio medio CH',
          consuntivo2025: 390.0,
          preventivo2026: 401.0,
          preventivo2027: 412.0,
        },
      ];
      charts.renderComparisonChart('health-premiums-chart', healthData);
    }

    const budgetOverviewEl = document.getElementById('budget-overview-chart');
    if (budgetOverviewEl && (preventivo2027 as any).preventivo2027) {
      const prev = (preventivo2027 as any).preventivo2027;
      const budgetData: charts.SimpleBarData[] = [
        { label: 'Uscite correnti', value: prev.speseCorrente?.value || 0, color: 'rgb(239 68 68)' },
        { label: 'Entrate correnti', value: prev.ricaviCorrenti?.value || 0, color: 'rgb(34 197 94)' },
        { label: 'Investimenti', value: prev.investimentiNetti?.value || 0, color: 'rgb(59 130 246)' },
      ];
      charts.renderSimpleBarChart('budget-overview-chart', budgetData, 'Preventivo 2027 - Panoramica');
    }

    const healthSpendingEl = document.getElementById('health-spending-chart');
    if (healthSpendingEl && (confronto as any).contoEconomico) {
      // Data not available in correct format yet - skip for now
      // TODO: Add health spending comparison data
    }
  }).catch(error => {
    console.error('Error loading data:', error);
    // Display error in chart containers
    const chartIds = [
      'spending-function-treemap',
      'debt-history-chart', 
      'deficit-history-chart',
      'health-premiums-chart',
      'budget-overview-chart',
      'health-spending-chart'
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
  renderAllCharts();
  setupResponsiveCharts();
}
