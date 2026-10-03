// Tassazione imprese page - render from audited JSON only
import './style.css';
import { Chart, registerables } from 'chart.js';
import { initSharedNavigation } from './shared-nav';

Chart.register(...registerables);

const BASE_URL = import.meta.env?.BASE_URL || '/';

interface TassazioneData {
  metadati: {
    titolo: string;
    descrizione: string;
  };
  evoluzioneAliquote: {
    descrizione: string;
    serie: Record<string, any>;
  };
  serieGettitoPersoneGiuridiche: {
    descrizione: string;
    serie: Record<string, any>;
  };
  numeroImprese: {
    descrizione: string;
    serieTotale: Record<string, any>;
  };
}

async function loadData(): Promise<TassazioneData> {
  const response = await fetch(`${BASE_URL}data/tassazione-imprese.json`);
  return response.json();
}

let chartInstance: Chart | null = null;

async function renderCharts() {
  const data = await loadData();
  const isDark = document.documentElement.classList.contains('dark');
  
  // Chart 1: Gettito evolution
  const canvas1 = document.getElementById('gettito-chart') as HTMLCanvasElement;
  if (canvas1) {
    const gettitoSerie = data.serieGettitoPersoneGiuridiche.serie;
    const years = Object.keys(gettitoSerie).sort();
    const values = years.map(y => gettitoSerie[y].gettito);
    
    if (chartInstance) chartInstance.destroy();
    
    chartInstance = new Chart(canvas1, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Gettito PG (M CHF)',
          data: values,
          borderColor: isDark ? 'rgb(59, 130, 246)' : 'rgb(37, 99, 235)',
          backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Gettito fiscale persone giuridiche',
            color: isDark ? '#e5e7eb' : '#1f2937',
            font: { size: 16, weight: 'bold' }
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
}

async function renderPage() {
  const data = await loadData();
  
  // Hero metrics
  const heroMetrics = document.getElementById('hero-metrics');
  if (heroMetrics) {
    const aliquota2024 = data.evoluzioneAliquote.serie.RFFA_fase1;
    const imprese2023 = data.numeroImprese.serieTotale['2023'];
    const gettito2025 = data.serieGettitoPersoneGiuridiche.serie['2025_consuntivo'];
    
    heroMetrics.innerHTML = `
      <div class="metric-card">
        <div class="text-sm font-medium text-muted-foreground">Aliquota 2020-2024</div>
        <div class="text-3xl font-bold text-primary">${aliquota2024.aliquota}</div>
        <div class="text-xs text-muted-foreground">RFFA fase 1</div>
      </div>
      <div class="metric-card">
        <div class="text-sm font-medium text-muted-foreground">Imprese 2023</div>
        <div class="text-3xl font-bold">${imprese2023.totale.toLocaleString()}</div>
        <div class="text-xs text-muted-foreground">${imprese2023.addetti.toLocaleString()} addetti</div>
      </div>
      <div class="metric-card">
        <div class="text-sm font-medium text-muted-foreground">Gettito 2025</div>
        <div class="text-3xl font-bold">${gettito2025.gettitoCompetenza.toFixed(1)}M</div>
        <div class="text-xs text-muted-foreground">${gettito2025.delta.toFixed(1)}M vs 2024</div>
      </div>
    `;
  }
  
  // Aliquote table
  const aliquoteContainer = document.getElementById('aliquote-table');
  if (aliquoteContainer) {
    aliquoteContainer.innerHTML = `
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        ${Object.entries(data.evoluzioneAliquote.serie).map(([key, val]: [string, any]) => `
          <div class="card p-6">
            <div class="text-sm font-medium text-muted-foreground mb-2">${val.periodo}</div>
            <div class="text-4xl font-bold mb-1 ${key.includes('discussa') ? 'text-amber-600' : 'text-primary'}">${val.aliquota}</div>
            <p class="text-xs text-muted-foreground">${val.riduzione || val.stato || ''}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Gettito table
  const gettitoTable = document.getElementById('gettito-table');
  if (gettitoTable) {
    const serie = data.serieGettitoPersoneGiuridiche.serie;
    const years = Object.keys(serie).sort();
    
    gettitoTable.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b">
              <th class="text-left p-2">Anno</th>
              <th class="text-right p-2">Gettito (M)</th>
              <th class="text-right p-2">Delta</th>
              <th class="text-left p-2">Fonte</th>
            </tr>
          </thead>
          <tbody>
            ${years.slice(-6).map(y => {
              const d = serie[y];
              const gettito = d.gettito || d.gettitoCompetenza || d.gettitoTotale;
              const delta = d.delta || 0;
              return `
                <tr class="border-b hover:bg-muted/50">
                  <td class="p-2 font-semibold">${y.replace('_consuntivo', '')}</td>
                  <td class="p-2 text-right font-mono">${gettito.toFixed(1)}</td>
                  <td class="p-2 text-right font-mono ${delta > 0 ? 'text-green-600' : 'text-destructive'}">${delta > 0 ? '+' : ''}${delta.toFixed(1)}</td>
                  <td class="p-2 text-xs text-muted-foreground">${d.fonte}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

// Init
initSharedNavigation();
renderPage();
renderCharts();

window.addEventListener('themeChanged', () => {
  renderCharts();
});
