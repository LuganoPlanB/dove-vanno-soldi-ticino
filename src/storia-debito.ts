// Storia debito page - render from audited JSON only
import './style.css';
import { Chart, registerables } from 'chart.js';
import { initSharedNavigation } from './shared-nav';

Chart.register(...registerables);

const BASE_URL = import.meta.env?.BASE_URL || '/';

interface StoriaDebitoData {
  metadati: {
    titolo: string;
    avvertenza: string;
    fonti: string[];
    dataRevisione?: string;
  };
  serieDebito: {
    anni: Record<string, {
      debito: number;
      delta: number;
      proCapite: number;
      fonte: string;
      pagine?: string;
      citazioneLiterale?: string;
    }>;
    lacune: {
      [key: string]: string;
    };
  };
  REMOVED: {
    anniRimossi: string[];
    motivo: string;
  };
}

async function loadData(): Promise<StoriaDebitoData> {
  const response = await fetch(`${BASE_URL}data/storia-debito-pubblico.json`);
  return response.json();
}

let chartInstance: Chart | null = null;

async function renderChart() {
  const data = await loadData();
  const canvas = document.getElementById('debito-chart') as HTMLCanvasElement;
  if (!canvas) return;

  // Get verified years
  const years = Object.keys(data.serieDebito.anni).sort();
  const values = years.map(y => data.serieDebito.anni[y].debito);
  
  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = canvas.getContext('2d')!;
  const isDark = document.documentElement.classList.contains('dark');
  
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Debito pubblico (M CHF)',
        data: values,
        backgroundColor: isDark ? 'rgba(239, 68, 68, 0.7)' : 'rgba(239, 68, 68, 0.8)',
        borderColor: isDark ? 'rgb(239, 68, 68)' : 'rgb(220, 38, 38)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Debito pubblico Canton Ticino - SOLO ANNI VERIFICATI',
          color: isDark ? '#e5e7eb' : '#1f2937',
          font: { size: 16, weight: 'bold' }
        },
        subtitle: {
          display: true,
          text: 'Lacune 2000-2009, 2013-2022: dati non verificabili rimossi',
          color: isDark ? '#9ca3af' : '#6b7280',
          font: { size: 12 }
        },
        legend: {
          labels: {
            color: isDark ? '#e5e7eb' : '#1f2937'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: isDark ? '#e5e7eb' : '#1f2937',
            callback: (value: number | string) => `${value}M`
          },
          grid: {
            color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          ticks: {
            color: isDark ? '#e5e7eb' : '#1f2937'
          },
          grid: {
            color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }
        }
      }
    }
  });
}

async function renderPage() {
  const data = await loadData();
  
  // Hero metrics - use ONLY verified data
  const years = Object.keys(data.serieDebito.anni).sort();
  const earliest = data.serieDebito.anni[years[0]];
  const latest = data.serieDebito.anni[years[years.length - 1]];
  
  const heroMetrics = document.getElementById('hero-metrics');
  if (heroMetrics) {
    heroMetrics.innerHTML = `
      <div class="metric-card">
        <div class="text-sm font-medium text-muted-foreground">Debito ${years[0]}</div>
        <div class="text-3xl font-bold">${earliest.debito.toFixed(1)}M</div>
        <div class="text-xs text-muted-foreground">CHF ${earliest.debito} milioni</div>
      </div>
      <div class="metric-card">
        <div class="text-sm font-medium text-muted-foreground">Debito ${years[years.length - 1]}</div>
        <div class="text-3xl font-bold text-destructive">${latest.debito.toFixed(0)}M</div>
        <div class="text-xs text-muted-foreground">+${((latest.debito / earliest.debito - 1) * 100).toFixed(0)}% dal ${years[0]}</div>
      </div>
      <div class="metric-card">
        <div class="text-sm font-medium text-muted-foreground">Pro capite ${years[years.length - 1]}</div>
        <div class="text-3xl font-bold text-destructive">${latest.proCapite.toLocaleString()}</div>
        <div class="text-xs text-muted-foreground">CHF per abitante</div>
      </div>
    `;
  }
  
  // Table of verified years
  const tableContainer = document.getElementById('debito-table');
  if (tableContainer) {
    tableContainer.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b">
              <th class="text-left p-2">Anno</th>
              <th class="text-right p-2">Debito (M)</th>
              <th class="text-right p-2">Delta</th>
              <th class="text-right p-2">Pro capite</th>
              <th class="text-left p-2">Fonte</th>
            </tr>
          </thead>
          <tbody>
            ${years.map(y => {
              const d = data.serieDebito.anni[y];
              return `
                <tr class="border-b hover:bg-muted/50">
                  <td class="p-2 font-semibold">${y}</td>
                  <td class="p-2 text-right font-mono">${d.debito.toFixed(1)}</td>
                  <td class="p-2 text-right font-mono ${d.delta > 0 ? 'text-destructive' : 'text-green-600'}">${d.delta > 0 ? '+' : ''}${d.delta.toFixed(1)}</td>
                  <td class="p-2 text-right font-mono">${d.proCapite.toLocaleString()}</td>
                  <td class="p-2 text-xs text-muted-foreground">${d.fonte}${d.pagine ? ', ' + d.pagine : ''}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  // Gaps notice
  const gapsContainer = document.getElementById('gaps-notice');
  if (gapsContainer) {
    gapsContainer.innerHTML = `
      <div class="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6">
        <h3 class="font-semibold mb-3 flex items-center gap-2">
          <span>⚠️</span>
          <span>Lacune nella serie storica</span>
        </h3>
        ${Object.entries(data.serieDebito.lacune).map(([key, value]) => `
          <p class="text-sm mb-2"><strong>${key.replace(/_/g, ' ')}:</strong> ${value}</p>
        `).join('')}
      </div>
      
      <div class="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-6 mt-4">
        <h3 class="font-semibold mb-3 flex items-center gap-2">
          <span>🗑️</span>
          <span>Dati rimossi (audit ${data.metadati.dataRevisione})</span>
        </h3>
        <p class="text-sm mb-2"><strong>Anni rimossi:</strong> ${data.REMOVED.anniRimossi.join(', ')}</p>
        <p class="text-sm"><strong>Motivo:</strong> ${data.REMOVED.motivo}</p>
      </div>
    `;
  }
}

// Init
initSharedNavigation();
renderPage();
renderChart();

// Re-render chart on theme change
window.addEventListener('themeChanged', () => {
  renderChart();
});
