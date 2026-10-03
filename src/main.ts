import './style.css';
import * as charts from './charts';

async function loadJSON<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.statusText}`);
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
    loadJSON('/data/spese-per-funzione-2027.json'),
    loadJSON('/data/debito-storico.json'),
    loadJSON('/data/deficit-storico.json'),
    loadJSON('/data/premi-e-contributi-sanita.json'),
    loadJSON('/data/confronto-pluriennale-2025-2027.json'),
    loadJSON('/data/preventivo-2027.json'),
  ]).then(([
    spesePerFunzione,
    debitoStorico,
    deficitStorico,
    premiSanita,
    confronto,
    preventivo2027,
  ]) => {
    const treemapEl = document.getElementById('spending-function-treemap');
    if (treemapEl && (spesePerFunzione as any).spese) {
      charts.renderTreemap('spending-function-treemap', (spesePerFunzione as any).spese);
    }

    const debtChartEl = document.getElementById('debt-history-chart');
    if (debtChartEl && (debitoStorico as any).serie) {
      const debtData = (debitoStorico as any).serie.map((d: any) => ({
        anno: d.anno,
        valore: d.debito_mln,
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
    if (deficitChartEl && (deficitStorico as any).serie) {
      const deficitData = (deficitStorico as any).serie.map((d: any) => ({
        anno: d.anno,
        valore: Math.abs(d.disavanzo_mln),
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
    if (healthChartEl && (premiSanita as any).premi) {
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
    if (budgetOverviewEl && (preventivo2027 as any)) {
      const prev = preventivo2027 as any;
      const budgetData: charts.SimpleBarData[] = [
        { label: 'Uscite correnti', value: prev.uscite_correnti_mln, color: 'rgb(239 68 68)' },
        { label: 'Entrate correnti', value: prev.ricavi_correnti_mln, color: 'rgb(34 197 94)' },
        { label: 'Investimenti', value: prev.investimenti_netti_mln, color: 'rgb(59 130 246)' },
      ];
      charts.renderSimpleBarChart('budget-overview-chart', budgetData, 'Preventivo 2027 - Panoramica');
    }

    const healthSpendingEl = document.getElementById('health-spending-chart');
    if (healthSpendingEl && (confronto as any).voci) {
      const sanita = (confronto as any).voci.find((v: any) => v.voce === 'Sanità pubblica');
      if (sanita) {
        const data: charts.ComparisonData[] = [{
          categoria: 'Sanità pubblica',
          consuntivo2025: sanita.consuntivo_2025,
          preventivo2026: sanita.preventivo_2026,
          preventivo2027: sanita.preventivo_2027,
        }];
        charts.renderComparisonChart('health-spending-chart', data);
      }
    }
  }).catch(error => {
    console.error('Error loading data:', error);
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

if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
  initializeTheme();
  renderAllCharts();
  setupResponsiveCharts();
}
