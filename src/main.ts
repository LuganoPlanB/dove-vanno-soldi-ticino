import { renderBudgetOverview, renderBarChart, type BudgetData, type BarChartData } from './charts';
import preventivo2027Data from '../data/preventivo-2027.json';

async function init(): Promise<void> {
  if (document.getElementById('budget-overview-chart')) {
    renderBudgetOverviewChart();
  }

  if (document.getElementById('spending-growth-chart')) {
    renderSpendingGrowthChart();
  }

  if (document.getElementById('health-spending-chart')) {
    renderHealthSpendingChart();
  }

  window.addEventListener('resize', () => {
    if (document.getElementById('budget-overview-chart')) {
      renderBudgetOverviewChart();
    }
    if (document.getElementById('spending-growth-chart')) {
      renderSpendingGrowthChart();
    }
    if (document.getElementById('health-spending-chart')) {
      renderHealthSpendingChart();
    }
  });
}

function renderBudgetOverviewChart(): void {
  const spese = preventivo2027Data.preventivo2027.speseCorrente.value;
  const ricavi = preventivo2027Data.preventivo2027.ricaviCorrenti.value;
  
  const data: BudgetData[] = [
    {
      category: 'Ricavi correnti',
      value: ricavi,
      color: '#388e3c'
    },
    {
      category: 'Spese correnti',
      value: spese,
      color: '#d32f2f'
    }
  ];

  renderBudgetOverview('budget-overview-chart', data);

  const container = document.getElementById('budget-overview-chart');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#f5f5f5';
    summary.style.borderRadius = '8px';
    summary.style.textAlign = 'center';
    summary.innerHTML = `
      <div style="font-size: 0.9rem; color: #757575; margin-bottom: 0.5rem;">Differenza (Disavanzo)</div>
      <div style="font-size: 1.75rem; font-weight: bold; color: #d32f2f;">${(ricavi - spese).toLocaleString('it-CH')} M CHF</div>
    `;
    container.appendChild(summary);
  }
}

function renderSpendingGrowthChart(): void {
  const speseTrasferimento = preventivo2027Data.variazioni2026_2027.speseTrasferimento.value;
  const spesePersonale = preventivo2027Data.variazioni2026_2027.spesePersonale.value;
  const altreSpese = preventivo2027Data.variazioni2026_2027.speseCorrente.value - speseTrasferimento - spesePersonale;

  const data: BarChartData[] = [
    {
      label: 'Spese di trasferimento',
      value: speseTrasferimento,
      type: 'negative'
    },
    {
      label: 'Spese per il personale',
      value: spesePersonale,
      type: 'negative'
    },
    {
      label: 'Altre spese',
      value: altreSpese,
      type: 'negative'
    }
  ];

  renderBarChart('spending-growth-chart', data);
}

function renderHealthSpendingChart(): void {
  const contributiPremi = preventivo2027Data.speseSanitarie.contributiPremiAssicurazione.value;
  const prestazioniComplementari = preventivo2027Data.speseSanitarie.prestazioniComplementariAVS_AI.value;
  const ospedalizzazioni = preventivo2027Data.speseSanitarie.contributiOspedalizzazioni.total;

  const data: BarChartData[] = [
    {
      label: 'Contributi premi assicurazione malattia',
      value: contributiPremi,
      type: 'negative'
    },
    {
      label: 'Prestazioni complementari AVS/AI',
      value: prestazioniComplementari,
      type: 'negative'
    },
    {
      label: 'Contributi ospedalizzazioni',
      value: ospedalizzazioni,
      type: 'negative'
    }
  ];

  renderBarChart('health-spending-chart', data);

  const container = document.getElementById('health-spending-chart');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#fff3e0';
    summary.style.borderRadius = '8px';
    summary.style.textAlign = 'center';
    summary.innerHTML = `
      <div style="font-size: 0.9rem; color: #757575; margin-bottom: 0.5rem;">Aumento totale spese sanitarie 2026-2027</div>
      <div style="font-size: 1.75rem; font-weight: bold; color: #d32f2f;">+${(contributiPremi + prestazioniComplementari + ospedalizzazioni).toLocaleString('it-CH')} M CHF</div>
    `;
    container.appendChild(summary);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
