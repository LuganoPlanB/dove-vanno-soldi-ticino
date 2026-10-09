import './style.css';
import * as charts from './charts';
import { i18n } from './locales';
import { enableShareableViews, addShareButtons } from './ux-enhancements';
import { loadComuniData, renderComuneCard } from './comuni';
import { renderAllInsightCards } from './insights';
import { loadSpeseNatura, renderSpeseHeatmap, type SpesaConto } from './spese-natura';
import { mountSiteNav } from './shared-nav';

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

function translateCategory(category: string): string {
  const key = `categories.${category}`;
  const translated = i18n.t(key);
  return translated === key ? category : translated;
}

function renderAllCharts() {
  Promise.all([
    loadJSON('data/storia-debito-pubblico.json'),
    loadJSON('data/deficit-storico.json'),
    loadJSON('data/preventivo-2027.json'),
  ]).then(([
    storiaDebito,
    deficitStorico,
    preventivo2027,
  ]) => {
    // Spending by function treemap removed - no verified C2025 breakdown available yet

    const debtChartEl = document.getElementById('debt-history-chart');
    if (debtChartEl && (storiaDebito as any).serieDebito) {
      const years = (storiaDebito as any).serieDebito.anni;
      const debtData = Object.keys(years)
        .map((anno: string) => ({
          anno: parseInt(anno),
          valore: years[anno].debito,
        }))
        .filter(d => d.valore != null)
        .sort((a, b) => a.anno - b.anno);
      charts.renderLineChart(
        'debt-history-chart',
        debtData,
        i18n.t('charts.debt.title'),
        i18n.t('charts.debt.yAxis'),
        (n) => n != null ? `${(n / 1000).toFixed(2)} Mia` : '—'
      );
    }

    const deficitChartEl = document.getElementById('deficit-history-chart');
    if (deficitChartEl && (deficitStorico as any).deficitSerie) {
      // Show only consuntivo (actual) years, not preventivo
      const deficitData = (deficitStorico as any).deficitSerie
        .filter((d: any) => d.tipo === 'consuntivo')
        .map((d: any) => ({
          anno: d.anno,
          valore: Math.abs(d.disavanzo),
        }));
      charts.renderLineChart(
        'deficit-history-chart',
        deficitData,
        'Disavanzo d\'esercizio (effettivo)',
        'Milioni CHF',
        (n) => `${i18n.formatNumber(n, { maximumFractionDigits: 0 })} M`
      );
    }

    // Health premiums comparison chart removed - conflicting sources
    // Text-based explanation with verified 545 CHF UFSP figure used instead

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
  mountSiteNav();
  import('./translator').then(({ translatePage }) => {
    translatePage();
  });
  window.addEventListener('themeChanged', () => {
    setTimeout(() => renderAllCharts(), 50);
  });
  renderAllCharts();
  setupResponsiveCharts();
  renderComuniPreview();
  renderInsights();
  renderSpeseNatura();
  renderBudgetCompare();
  generateContextIntro();
  
  // UX enhancements: Add share buttons after content loads
  setTimeout(() => {
    addShareButtons();
  }, 1000);
}

async function generateContextIntro() {
  try {
    const [deficit, spending] = await Promise.all([
      loadJSON('data/deficit-storico.json'),
      loadJSON('data/storia-debito-pubblico.json')
    ]);
    
    const deficit2025 = (deficit as any).deficitSerie?.find((d: any) => d.anno === 2025);
    const spending2025 = (spending as any).serieSpese?.anni?.['2025'];
    
    const introEl = document.getElementById('context-intro');
    if (introEl && deficit2025 && spending2025) {
      const deficitValue = Math.abs(deficit2025.disavanzo);
      introEl.textContent = `Il Canton Ticino chiude il 2025 con un disavanzo di ${deficitValue.toFixed(0)} milioni di franchi e spese totali di ${(spending2025.totale / 1000).toFixed(1)} miliardi. I premi sanitari ticinesi restano tra i più alti della Svizzera.`;
    }
  } catch (err) {
    console.error('Error generating context intro:', err);
  }
}

async function renderSpeseNatura() {
  const treemapContainer = document.getElementById('spese-natura-treemap');
  if (!treemapContainer) return;
  try {
    const data = await loadSpeseNatura();
    const spese = (data.consuntivo2025?.spese || []) as SpesaConto[];
    if (spese.length === 0) {
      treemapContainer.innerHTML = '<p class="text-muted-foreground">Nessuna voce verificata nel Consuntivo 2025.</p>';
      return;
    }
    renderSpeseHeatmap(treemapContainer, spese);
  } catch (err) {
    console.error('Error loading spese natura:', err);
  }
}

function renderInsights() {
  const container = document.getElementById('insights-container');
  if (!container) return;
  
  container.innerHTML = renderAllInsightCards();
}

async function renderComuniPreview() {
  const container = document.getElementById('comuni-preview');
  if (!container) return;
  try {
    const data = await loadComuniData();
    const top = [...data.comuni]
      .filter((c) => c.popolazione_2024 != null)
      .sort((a, b) => b.popolazione_2024 - a.popolazione_2024)
      .slice(0, 3);
    container.innerHTML = top.map((c) => renderComuneCard(c)).join('');
  } catch (err) {
    console.error('Error loading comuni preview:', err);
  }
}

interface AnnoBilancio {
  anno: number;
  tipo: string;
  etichetta: string;
  speseTotali?: number;
  ricaviTotali?: number;
  speseCorrenti?: number;
  disavanzo: number;
  fonte: string;
  url: string;
  promessaConsiglioStato?: { disavanzo: number; data: string; fonte: string; url: string };
}

function mio(value: number | undefined): string {
  if (value == null) return '—';
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString('it-CH', { maximumFractionDigits: 1 });
  return value < 0 ? `−${formatted}` : formatted;
}

async function renderBudgetCompare() {
  const container = document.getElementById('budget-compare');
  if (!container) return;
  try {
    const data = await loadJSON<{ metadati: { nota2026: string }; anni: AnnoBilancio[] }>('data/confronto-bilanci.json');
    const max = Math.max(...data.anni.map((a) => Math.abs(a.disavanzo)), Math.abs(data.anni.find((a) => a.promessaConsiglioStato)?.promessaConsiglioStato?.disavanzo || 0));
    const bars = data.anni.map((anno) => {
      const width = Math.max(4, (Math.abs(anno.disavanzo) / max) * 100);
      return `
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium">${anno.anno} · ${anno.etichetta}</span>
            <span class="tabular-nums">${mio(anno.disavanzo)} mln</span>
          </div>
          <div class="h-2.5 rounded-full bg-muted overflow-hidden">
            <div class="h-full rounded-full ${anno.tipo === 'consuntivo' ? 'bg-foreground' : 'bg-primary'}" style="width:${width}%"></div>
          </div>
        </div>`;
    }).join('');

    const rows = data.anni.map((anno) => `
      <tr class="border-t">
        <td class="py-3 pr-3 font-medium">${anno.anno}</td>
        <td class="py-3 pr-3 text-muted-foreground">${anno.etichetta}</td>
        <td class="py-3 pr-3 tabular-nums">${anno.speseTotali != null ? mio(anno.speseTotali) : anno.speseCorrenti != null ? `${mio(anno.speseCorrenti)} correnti` : '—'}</td>
        <td class="py-3 pr-3 tabular-nums">${mio(anno.ricaviTotali)}</td>
        <td class="py-3 pr-3 tabular-nums font-medium">${mio(anno.disavanzo)}</td>
        <td class="py-3 text-xs text-muted-foreground"><a class="hover:underline" href="${anno.url}" target="_blank" rel="noopener">${anno.fonte}</a></td>
      </tr>`).join('');

    const promessa = data.anni.find((a) => a.promessaConsiglioStato)?.promessaConsiglioStato;

    container.innerHTML = `
      <div class="grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr]">
        <div class="space-y-4">
          <p class="text-sm font-medium">Disavanzo, milioni di franchi</p>
          ${bars}
          <p class="text-xs text-muted-foreground">Barra scura: consuntivo. Barra blu: preventivo.</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-left text-muted-foreground">
                <th class="pb-2 pr-3 font-medium">Anno</th>
                <th class="pb-2 pr-3 font-medium">Stato</th>
                <th class="pb-2 pr-3 font-medium">Spese</th>
                <th class="pb-2 pr-3 font-medium">Ricavi</th>
                <th class="pb-2 pr-3 font-medium">Risultato</th>
                <th class="pb-2 font-medium">Fonte</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      ${promessa ? `<div class="card p-4 mt-6 text-sm">
        <p class="font-medium">2026, promessa e testo autorizzato</p>
        <p class="mt-2 text-muted-foreground">Il 29 settembre 2025 il Consiglio di Stato ha presentato un disavanzo di ${mio(promessa.disavanzo)} milioni. Il preventivo poi autorizzato dal Gran Consiglio chiude a ${mio(data.anni.find((a) => a.anno === 2026)?.disavanzo)} milioni. <a class="text-primary hover:underline" href="${promessa.url}" target="_blank" rel="noopener">Comunicato</a>.</p>
        <p class="mt-2 text-muted-foreground">${data.metadati.nota2026}</p>
      </div>` : ''}
    `;
  } catch (err) {
    console.error('Error loading budget compare:', err);
  }
}
