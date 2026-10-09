import type { ComuneFinanze, ComuniData } from './comuni';
import './ux-enhancements';
import './style.css';
import { mountSiteNav } from './shared-nav';

mountSiteNav();

let allComuni: ComuneFinanze[] = [];
let filteredComuni: ComuneFinanze[] = [];
let currentFilter: 'all' | 'forti' | 'medi' | 'deboli' = 'all';

async function loadData(): Promise<void> {
  const basePath = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${basePath}data/comuni-finanze-2024.json`);
  const data: ComuniData = await response.json();
  allComuni = data.comuni.filter((c) => c.nome.toUpperCase() !== 'TOTALE');
  filteredComuni = [...allComuni];
  
  calculateStats();
  populateDropdowns();
  renderResults();
}

function calculateStats(): void {
  if (allComuni.length === 0) return;
  
  const totalEl = document.getElementById('total-comuni');
  const avgMpEl = document.getElementById('avg-mp-pf');
  const avgForzaEl = document.getElementById('avg-forza');
  
  if (totalEl) totalEl.textContent = allComuni.length.toString();
  
  const validMp = allComuni.filter(c => c.moltiplicatore_PF_2025 != null);
  const avgMp = validMp.length > 0 ? validMp.reduce((sum, c) => sum + c.moltiplicatore_PF_2025, 0) / validMp.length : 0;
  if (avgMpEl) avgMpEl.textContent = avgMp.toFixed(1) + '%';
  
  const validForza = allComuni.filter(c => c.indice_forza_finanziaria_2025_26 != null);
  const avgForza = validForza.length > 0 ? validForza.reduce((sum, c) => sum + c.indice_forza_finanziaria_2025_26, 0) / validForza.length : 0;
  if (avgForzaEl) avgForzaEl.textContent = avgForza.toFixed(1);
}

function populateDropdowns(): void {
  const selectA = document.getElementById('compare-a') as HTMLSelectElement;
  const selectB = document.getElementById('compare-b') as HTMLSelectElement;
  
  if (!selectA || !selectB) return;
  
  const sorted = [...allComuni].sort((a, b) => a.nome.localeCompare(b.nome));
  
  sorted.forEach(comune => {
    const optionA = document.createElement('option');
    optionA.value = comune.nome;
    optionA.textContent = comune.nome;
    selectA.appendChild(optionA);
    
    const optionB = document.createElement('option');
    optionB.value = comune.nome;
    optionB.textContent = comune.nome;
    selectB.appendChild(optionB);
  });
}

function searchComuni(query: string): void {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) {
    filteredComuni = allComuni.filter(applyFilter);
  } else {
    filteredComuni = allComuni
      .filter(c => c.nome.toLowerCase().includes(lowerQuery))
      .filter(applyFilter);
  }
  
  renderResults();
}

function applyFilter(comune: ComuneFinanze): boolean {
  const forza = comune.indice_forza_finanziaria_2025_26;
  
  switch (currentFilter) {
    case 'forti':
      return forza >= 100;
    case 'medi':
      return forza >= 80 && forza < 100;
    case 'deboli':
      return forza < 80;
    default:
      return true;
  }
}

function sortComuni(sortBy: string): void {
  switch (sortBy) {
    case 'popolazione':
      filteredComuni.sort((a, b) => b.popolazione_2024 - a.popolazione_2024);
      break;
    case 'mp-pf':
      filteredComuni.sort((a, b) => b.moltiplicatore_PF_2025 - a.moltiplicatore_PF_2025);
      break;
    case 'mp-pg':
      filteredComuni.sort((a, b) => b.moltiplicatore_PG_2025 - a.moltiplicatore_PG_2025);
      break;
    case 'forza':
      filteredComuni.sort((a, b) => b.indice_forza_finanziaria_2025_26 - a.indice_forza_finanziaria_2025_26);
      break;
    case 'risorse':
      filteredComuni.sort((a, b) => b.risorse_fiscali_procapite_2022 - a.risorse_fiscali_procapite_2022);
      break;
    default:
      filteredComuni.sort((a, b) => a.nome.localeCompare(b.nome));
  }
  
  renderResults();
}

function renderResults(): void {
  const container = document.getElementById('comuni-results');
  const countEl = document.getElementById('results-count');
  
  if (!container) return;
  
  if (countEl) countEl.textContent = filteredComuni.length.toString();
  
  if (filteredComuni.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-muted-foreground">
        <svg class="h-12 w-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <p>Nessun comune trovato</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filteredComuni
    .map(comune => renderComuneCard(comune))
    .join('');
}

function renderComuneCard(comune: ComuneFinanze): string {
  const forza = comune.indice_forza_finanziaria_2025_26;
  const forzaClass = forza >= 100 
    ? 'text-green-600 dark:text-green-400' 
    : forza >= 80 
      ? 'text-amber-600 dark:text-amber-400' 
      : 'text-red-600 dark:text-red-400';
  const forzaIcon = forza >= 100 ? '💪' : forza >= 80 ? '⚠️' : '🔴';
  
  return `
    <div class="card p-4 hover:shadow-lg transition-shadow">
      <h3 class="text-lg font-bold mb-3">${comune.nome}</h3>
      
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-muted-foreground">Popolazione (2024):</span>
          <span class="font-semibold">${comune.popolazione_2024 != null ? comune.popolazione_2024.toLocaleString() : '—'}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">MP Persone Fisiche:</span>
          <span class="font-semibold">${comune.moltiplicatore_PF_2025 != null ? comune.moltiplicatore_PF_2025 : '—'}%</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">MP Persone Giuridiche:</span>
          <span class="font-semibold">${comune.moltiplicatore_PG_2025 != null ? comune.moltiplicatore_PG_2025 : '—'}%</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">MP Coordinato:</span>
          <span class="font-semibold">${comune.moltiplicatore_coordinato_2025 != null ? comune.moltiplicatore_coordinato_2025 : '—'}%</span>
        </div>
        <div class="flex justify-between pt-2 border-t">
          <span class="text-muted-foreground">Risorse fiscali p.c. (2022):</span>
          <span class="font-semibold">${comune.risorse_fiscali_procapite_2022 != null ? Math.round(comune.risorse_fiscali_procapite_2022).toLocaleString() : '—'} CHF</span>
        </div>
        <div class="flex justify-between items-center pt-2 border-t">
          <span class="text-muted-foreground">Indice forza finanziaria:</span>
          <span class="font-bold ${forzaClass}">
            ${forzaIcon} ${comune.indice_forza_finanziaria_2025_26 != null ? comune.indice_forza_finanziaria_2025_26.toFixed(1) : '—'}
          </span>
        </div>
      </div>
    </div>
  `;
}

function compareComuni(): void {
  const selectA = document.getElementById('compare-a') as HTMLSelectElement;
  const selectB = document.getElementById('compare-b') as HTMLSelectElement;
  const resultDiv = document.getElementById('comparison-result');
  
  if (!selectA || !selectB || !resultDiv) return;
  
  const comuneAName = selectA.value;
  const comuneBName = selectB.value;
  
  if (!comuneAName || !comuneBName) {
    resultDiv.classList.add('hidden');
    return;
  }
  
  const comuneA = allComuni.find(c => c.nome === comuneAName);
  const comuneB = allComuni.find(c => c.nome === comuneBName);
  
  if (!comuneA || !comuneB) return;
  
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
    <div class="border-t pt-4 grid gap-4 sm:grid-cols-2">
      <div class="card p-4 bg-blue-50 dark:bg-blue-950/20">
        <h4 class="font-bold text-lg mb-3">${comuneA.nome}</h4>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-muted-foreground">Popolazione:</span>
            <span class="font-semibold">${comuneA.popolazione_2024 != null ? comuneA.popolazione_2024.toLocaleString() : '—'}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">MP PF:</span>
            <span class="font-semibold">${comuneA.moltiplicatore_PF_2025 != null ? comuneA.moltiplicatore_PF_2025 : '—'}%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">MP PG:</span>
            <span class="font-semibold">${comuneA.moltiplicatore_PG_2025 != null ? comuneA.moltiplicatore_PG_2025 : '—'}%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Risorse p.c.:</span>
            <span class="font-semibold">${comuneA.risorse_fiscali_procapite_2022 != null ? Math.round(comuneA.risorse_fiscali_procapite_2022).toLocaleString() : '—'} CHF</span>
          </div>
          <div class="flex justify-between pt-2 border-t">
            <span class="text-muted-foreground">Indice forza:</span>
            <span class="font-bold">${comuneA.indice_forza_finanziaria_2025_26 != null ? comuneA.indice_forza_finanziaria_2025_26.toFixed(1) : '—'}</span>
          </div>
        </div>
      </div>
      
      <div class="card p-4 bg-green-50 dark:bg-green-950/20">
        <h4 class="font-bold text-lg mb-3">${comuneB.nome}</h4>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-muted-foreground">Popolazione:</span>
            <span class="font-semibold">${comuneB.popolazione_2024 != null ? comuneB.popolazione_2024.toLocaleString() : '—'}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">MP PF:</span>
            <span class="font-semibold">${comuneB.moltiplicatore_PF_2025 != null ? comuneB.moltiplicatore_PF_2025 : '—'}%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">MP PG:</span>
            <span class="font-semibold">${comuneB.moltiplicatore_PG_2025 != null ? comuneB.moltiplicatore_PG_2025 : '—'}%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Risorse p.c.:</span>
            <span class="font-semibold">${comuneB.risorse_fiscali_procapite_2022 != null ? Math.round(comuneB.risorse_fiscali_procapite_2022).toLocaleString() : '—'} CHF</span>
          </div>
          <div class="flex justify-between pt-2 border-t">
            <span class="text-muted-foreground">Indice forza:</span>
            <span class="font-bold">${comuneB.indice_forza_finanziaria_2025_26 != null ? comuneB.indice_forza_finanziaria_2025_26.toFixed(1) : '—'}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-4 p-4 bg-accent rounded-lg space-y-2 text-sm">
      <div class="font-semibold">Differenze:</div>
      <div class="grid gap-2">
        <div class="flex justify-between">
          <span>MP PF:</span>
          <span class="${(comuneA.moltiplicatore_PF_2025 != null && comuneB.moltiplicatore_PF_2025 != null && comuneA.moltiplicatore_PF_2025 > comuneB.moltiplicatore_PF_2025) ? 'text-red-600' : 'text-green-600'}">
            ${(comuneA.moltiplicatore_PF_2025 != null && comuneB.moltiplicatore_PF_2025 != null) ? (comuneA.moltiplicatore_PF_2025 - comuneB.moltiplicatore_PF_2025).toFixed(1) : '—'}%
          </span>
        </div>
        <div class="flex justify-between">
          <span>Risorse p.c.:</span>
          <span class="${(comuneA.risorse_fiscali_procapite_2022 != null && comuneB.risorse_fiscali_procapite_2022 != null && comuneA.risorse_fiscali_procapite_2022 > comuneB.risorse_fiscali_procapite_2022) ? 'text-green-600' : 'text-red-600'}">
            ${(comuneA.risorse_fiscali_procapite_2022 != null && comuneB.risorse_fiscali_procapite_2022 != null) ? (comuneA.risorse_fiscali_procapite_2022 - comuneB.risorse_fiscali_procapite_2022).toFixed(0) : '—'} CHF
          </span>
        </div>
        <div class="flex justify-between">
          <span>Indice forza:</span>
          <span class="${(comuneA.indice_forza_finanziaria_2025_26 != null && comuneB.indice_forza_finanziaria_2025_26 != null && comuneA.indice_forza_finanziaria_2025_26 > comuneB.indice_forza_finanziaria_2025_26) ? 'text-green-600' : 'text-red-600'}">
            ${(comuneA.indice_forza_finanziaria_2025_26 != null && comuneB.indice_forza_finanziaria_2025_26 != null) ? (comuneA.indice_forza_finanziaria_2025_26 - comuneB.indice_forza_finanziaria_2025_26).toFixed(1) : '—'}
          </span>
        </div>
      </div>
    </div>
  `;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  
  const searchInput = document.getElementById('comuni-search') as HTMLInputElement;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      searchComuni(target.value);
    });
  }
  
  const sortSelect = document.getElementById('comuni-sort') as HTMLSelectElement;
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      sortComuni(target.value);
    });
  }
  
  // Filter buttons
  document.getElementById('filter-all')?.addEventListener('click', () => {
    currentFilter = 'all';
    searchComuni((searchInput as HTMLInputElement)?.value || '');
  });
  
  document.getElementById('filter-forti')?.addEventListener('click', () => {
    currentFilter = 'forti';
    searchComuni((searchInput as HTMLInputElement)?.value || '');
  });
  
  document.getElementById('filter-medi')?.addEventListener('click', () => {
    currentFilter = 'medi';
    searchComuni((searchInput as HTMLInputElement)?.value || '');
  });
  
  document.getElementById('filter-deboli')?.addEventListener('click', () => {
    currentFilter = 'deboli';
    searchComuni((searchInput as HTMLInputElement)?.value || '');
  });
  
  // Comparison
  const compareA = document.getElementById('compare-a');
  const compareB = document.getElementById('compare-b');
  
  if (compareA) compareA.addEventListener('change', compareComuni);
  if (compareB) compareB.addEventListener('change', compareComuni);
});
