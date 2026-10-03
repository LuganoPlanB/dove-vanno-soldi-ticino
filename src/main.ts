import { renderBudgetOverview, renderBarChart, renderTreemap, renderLineChart, type BudgetData, type BarChartData, type TreemapData, type LineChartData } from './charts';
import preventivo2027Data from '../data/preventivo-2027.json';
import spesePerFunzioneData from '../data/spese-per-funzione-2027.json';
import debitoStoricoData from '../data/debito-storico.json';
import deficitStoricoData from '../data/deficit-storico.json';
import premiContributiData from '../data/premi-e-contributi-sanita.json';

async function init(): Promise<void> {
  renderAllCharts();

  window.addEventListener('resize', () => {
    renderAllCharts();
  });
}

function renderAllCharts(): void {
  if (document.getElementById('budget-overview-chart')) {
    renderBudgetOverviewChart();
  }

  if (document.getElementById('spending-growth-chart')) {
    renderSpendingGrowthChart();
  }

  if (document.getElementById('health-spending-chart')) {
    renderHealthSpendingChart();
  }

  if (document.getElementById('spending-function-treemap')) {
    renderSpendingFunctionTreemap();
  }

  if (document.getElementById('debt-history-chart')) {
    renderDebtHistoryChart();
  }

  if (document.getElementById('deficit-history-chart')) {
    renderDeficitHistoryChart();
  }

  if (document.getElementById('health-premiums-chart')) {
    renderHealthPremiumsChart();
  }
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

  const popolazione2027 = 362200;
  const disavanzoProCapite = ((ricavi - spese) / popolazione2027) * 1000000;

  const container = document.getElementById('budget-overview-chart');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#f5f5f5';
    summary.style.borderRadius = '8px';
    summary.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; text-align: center;">
        <div>
          <div style="font-size: 0.85rem; color: #757575; margin-bottom: 0.25rem;">Disavanzo totale</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #d32f2f;">${(ricavi - spese).toLocaleString('it-CH')} M CHF</div>
        </div>
        <div>
          <div style="font-size: 0.85rem; color: #757575; margin-bottom: 0.25rem;">Disavanzo pro-capite</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #d32f2f;">${Math.round(disavanzoProCapite).toLocaleString('it-CH')} CHF</div>
          <div style="font-size: 0.75rem; color: #757575;">per abitante</div>
        </div>
      </div>
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

function renderSpendingFunctionTreemap(): void {
  const treemapData: TreemapData = {
    name: 'Spese Canton Ticino 2027',
    value: 0,
    children: spesePerFunzioneData.spesePerFunzione.map(item => ({
      name: item.funzione,
      value: item.importo
    }))
  };

  renderTreemap('spending-function-treemap', treemapData);

  const popolazione2027 = 362200;
  const container = document.getElementById('spending-function-treemap');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#f5f5f5';
    summary.style.borderRadius = '8px';
    
    const top3 = [...spesePerFunzioneData.spesePerFunzione]
      .sort((a, b) => b.importo - a.importo)
      .slice(0, 3);
    
    summary.innerHTML = `
      <div style="font-size: 0.9rem; color: #757575; margin-bottom: 0.75rem; font-weight: bold;">Le 3 funzioni con maggiore spesa:</div>
      <div style="display: grid; gap: 0.75rem;">
        ${top3.map((item, i) => {
          const proCapite = (item.importo / popolazione2027) * 1000000;
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: white; border-radius: 4px;">
              <div>
                <span style="font-weight: bold; margin-right: 0.5rem;">${i + 1}.</span>
                <span>${item.funzione}</span>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: bold;">${item.importo.toLocaleString('it-CH')} M CHF</div>
                <div style="font-size: 0.85rem; color: #757575;">${Math.round(proCapite).toLocaleString('it-CH')} CHF/ab.</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    container.appendChild(summary);
  }
}

function renderDebtHistoryChart(): void {
  const data: LineChartData[] = debitoStoricoData.debitoSerie.map(d => ({
    year: d.anno,
    value: d.debito,
    type: d.tipo
  }));

  renderLineChart('debt-history-chart', data, {
    yLabel: 'Debito pubblico (milioni CHF)',
    valueFormatter: (v: number) => `${(v / 1000).toFixed(1)} Mia`,
    color: '#d32f2f'
  });

  const popolazione2027 = 362200;
  const debito2027 = 3000;
  const debitoProCapite2027 = (debito2027 / popolazione2027) * 1000000;

  const container = document.getElementById('debt-history-chart');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#ffebee';
    summary.style.borderRadius = '8px';
    summary.style.textAlign = 'center';
    summary.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div>
          <div style="font-size: 0.85rem; color: #757575; margin-bottom: 0.25rem;">Debito pubblico 2027</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #d32f2f;">>3.0 Mia CHF</div>
        </div>
        <div>
          <div style="font-size: 0.85rem; color: #757575; margin-bottom: 0.25rem;">Debito pro-capite 2027</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #d32f2f;">${Math.round(debitoProCapite2027).toLocaleString('it-CH')} CHF</div>
          <div style="font-size: 0.75rem; color: #757575;">per abitante</div>
        </div>
        <div>
          <div style="font-size: 0.85rem; color: #757575; margin-bottom: 0.25rem;">Crescita 2023-2027</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #d32f2f;">+500 M CHF</div>
          <div style="font-size: 0.75rem; color: #757575;">+20% in 4 anni</div>
        </div>
      </div>
    `;
    container.appendChild(summary);
  }
}

function renderDeficitHistoryChart(): void {
  const data: LineChartData[] = deficitStoricoData.deficitSerie.map(d => ({
    year: d.anno,
    value: d.disavanzo,
    type: d.tipo
  }));

  renderLineChart('deficit-history-chart', data, {
    yLabel: 'Disavanzo (milioni CHF)',
    valueFormatter: (v: number) => `${v.toLocaleString('it-CH')} M`,
    color: '#d32f2f'
  });

  const container = document.getElementById('deficit-history-chart');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#fff3e0';
    summary.style.borderRadius = '8px';
    summary.innerHTML = `
      <div style="font-size: 0.9rem; color: #757575; margin-bottom: 0.5rem;">⚠️ Trend preoccupante</div>
      <p style="margin: 0; line-height: 1.5;">
        Dopo un miglioramento significativo dal 2023 (-122M) al 2025 (-32.5M), il disavanzo torna ad aumentare nel 2027 (-98.5M). 
        Il <strong>piano finanziario 2028-2030</strong> prevede un ulteriore peggioramento con deficit che superano i <strong>400 milioni CHF annui</strong>.
      </p>
    `;
    container.appendChild(summary);
  }
}

function renderHealthPremiumsChart(): void {
  const premiData = premiContributiData.premiMedi;

  const lineData: LineChartData[] = premiData.map(d => ({
    year: d.anno,
    value: d.premioMedioMensile,
    type: 'premio'
  }));

  renderLineChart('health-premiums-chart', lineData, {
    yLabel: 'Premio medio mensile (CHF)',
    valueFormatter: (v: number) => `${v.toFixed(0)} CHF`,
    color: '#0066cc'
  });

  const container = document.getElementById('health-premiums-chart');
  if (container) {
    const summary = document.createElement('div');
    summary.style.marginTop = '1rem';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = '#e3f2fd';
    summary.style.borderRadius = '8px';
    summary.innerHTML = `
      <div style="font-size: 0.9rem; color: #757575; margin-bottom: 0.75rem; font-weight: bold;">Premi e contributi cantonali:</div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
        <div style="background: white; padding: 1rem; border-radius: 4px;">
          <div style="font-size: 0.85rem; color: #757575;">Premio medio Ticino 2027</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #0066cc;">519.90 CHF/mese</div>
          <div style="font-size: 0.85rem; color: #d32f2f;">+26% vs media svizzera</div>
        </div>
        <div style="background: white; padding: 1rem; border-radius: 4px;">
          <div style="font-size: 0.85rem; color: #757575;">Contributi cantonali 2027</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #0066cc;">332 M CHF</div>
          <div style="font-size: 0.85rem; color: #757575;">+57M vs 2026</div>
        </div>
      </div>
      <div style="margin-top: 1rem; padding: 0.75rem; background: #fff3e0; border-radius: 4px; font-size: 0.9rem;">
        <strong>⚠️ Nota:</strong> Il Ticino ha i premi più alti della Svizzera. I contributi cantonali per la riduzione dei premi (RIPAM) 
        sono una delle principali voci di crescita del bilancio cantonale.
      </div>
    `;
    container.appendChild(summary);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
