// Expenses by economic nature - personnel, goods/services, consultancies, IT, etc.
// Visualizations: Treemap and stacked bars with drill-down

export interface SpesaNatura {
  id: string;
  categoria: string;
  descrizione: string;
  importo_mchf: number;
  percentuale: number;
  perAbitante_chf: number;
  disponibilita: 'VERIFICATO' | 'STIMATO' | 'AGGREGATO' | 'NON DISPONIBILE';
  nota: string;
  fonte: string;
  sottoCategorie?: SpesaSottocategoria[];
}

export interface SpesaSottocategoria {
  id: string;
  codice?: string;
  nome: string;
  importo_mchf: number;
  percentuale: number;
  descrizione: string;
  disponibilita: string;
  nota?: string;
}

export interface SpeseNaturaData {
  metadati: {
    titolo: string;
    descrizione: string;
    fonte: string;
    annoRiferimento: string;
    unita: string;
  };
  consuntivo2025: {
    anno: number;
    tipo: string;
    stato: string;
    spese: Array<{
      id: string;
      categoria: string;
      descrizione: string;
      importoMilioni: number;
      importoProCapite: number;
      percentualeTotale: number;
      fonte: string;
      note?: string;
    }>;
  };
  preventivo2027?: {
    anno: number;
    spese: Array<{
      categoria: string;
      importoMilioni: number;
      percentualeTotale: number;
    }>;
  };
}

let speseNaturaData: SpeseNaturaData | null = null;

export async function loadSpeseNatura(): Promise<SpeseNaturaData> {
  if (speseNaturaData) return speseNaturaData;
  
  const basePath = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${basePath}data/spese-per-natura-2025.json`);
  speseNaturaData = await response.json();
  return speseNaturaData!;
}

// Prepare data for D3 treemap
export interface TreemapNode {
  name: string;
  value: number;
  disponibilita: string;
  perAbitante?: number;
  descrizione?: string;
  children?: TreemapNode[];
}

export function prepareTreemapData(data: SpeseNaturaData): TreemapNode {
  const spese = data.consuntivo2025?.spese || [];
  return {
    name: 'Spese Canton Ticino 2025',
    value: 0,
    disponibilita: 'VERIFICATO',
    children: spese.map(spesa => ({
      name: spesa.categoria.split(' - ')[1] || spesa.categoria,
      value: spesa.importoMilioni,
      disponibilita: 'VERIFICATO',
      perAbitante: spesa.importoProCapite,
      descrizione: spesa.descrizione
    }))
  };
}

// Format currency for display
export function formatCurrency(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '\'')} CHF`;
}

// Format millions
export function formatMillions(value: number): string {
  return `${Math.round(value)} M CHF`;
}

// Get color by availability status
export function getColorByAvailability(status: string): string {
  switch (status) {
    case 'VERIFICATO':
      return '#10b981'; // green
    case 'AGGREGATO':
      return '#3b82f6'; // blue
    case 'STIMATO':
      return '#f59e0b'; // amber
    case 'NON DISPONIBILE':
      return '#ef4444'; // red
    default:
      return '#6b7280'; // gray
  }
}

export interface SpesaConto {
  id: string;
  categoria: string;
  descrizione: string;
  importoMilioni: number;
  importoProCapite: number;
  percentualeTotale: number;
  dettaglioSottoconti?: string;
  fonte: string;
  note?: string;
}

const TILE_COLORS = ['#1e3a8a', '#1d4ed8', '#0f766e', '#0369a1', '#4338ca'];

export function shortCategoria(categoria: string): string {
  return categoria.replace(/^\d+\s*-\s*/, '');
}

function formatMio(value: number): string {
  const rounded = Math.round(value);
  return rounded.toLocaleString('it-CH');
}

function tileMarkup(spesa: SpesaConto, color: string, compact: boolean): string {
  const name = shortCategoria(spesa.categoria);
  return `
    <a href="./spese.html#${spesa.id}"
       class="group relative flex h-full min-h-[5.5rem] flex-col justify-between overflow-hidden rounded-xl p-3 sm:p-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
       style="background:${color};flex:${spesa.importoMilioni} 1 0%">
      <div class="text-xs sm:text-sm font-medium leading-snug text-white/90 line-clamp-2">${name}</div>
      <div>
        <div class="${compact ? 'text-xl' : 'text-2xl sm:text-4xl'} font-bold tracking-tight tabular-nums">${formatMio(spesa.importoMilioni)}</div>
        <div class="text-xs sm:text-sm text-white/80">${spesa.percentualeTotale.toFixed(1)}% · mln CHF</div>
      </div>
    </a>`;
}

/** Area map of spending. Size follows the amount. Click opens the detail page. */
export function renderSpeseHeatmap(container: HTMLElement, spese: SpesaConto[]): void {
  const sorted = [...spese].sort((a, b) => b.importoMilioni - a.importoMilioni);
  const splitAt = sorted.findIndex((_, i) => {
    const head = sorted.slice(0, i).reduce((sum, s) => sum + s.importoMilioni, 0);
    const total = sorted.reduce((sum, s) => sum + s.importoMilioni, 0);
    return i > 0 && head >= total * 0.7;
  });
  const cut = splitAt === -1 ? Math.min(2, sorted.length) : splitAt;
  const top = sorted.slice(0, cut);
  const rest = sorted.slice(cut);

  const tiles = (items: SpesaConto[], offset: number, compact: boolean) =>
    items.map((spesa, i) => tileMarkup(spesa, TILE_COLORS[(offset + i) % TILE_COLORS.length], compact)).join('');

  container.innerHTML = `
    <div class="flex flex-col gap-2 min-h-[28rem]">
      <div class="flex flex-col sm:flex-row gap-2 flex-[3] min-h-[14rem]">
        ${tiles(top, 0, false)}
      </div>
      ${rest.length ? `<div class="flex flex-col sm:flex-row gap-2 flex-[1] min-h-[7rem]">${tiles(rest, top.length, true)}</div>` : ''}
    </div>`;
}

export function renderSpesaDetail(spesa: SpesaConto, preventivo?: SpesaConto): string {
  const name = shortCategoria(spesa.categoria);
  return `
    <article id="${spesa.id}" class="card p-6 scroll-mt-24">
      <p class="text-sm font-medium text-muted-foreground">${spesa.categoria.split(' - ')[0]}</p>
      <h2 class="text-2xl font-bold tracking-tight mt-1">${name}</h2>
      <p class="mt-4 text-4xl font-bold tabular-nums">${formatMio(spesa.importoMilioni)} <span class="text-lg font-medium text-muted-foreground">mln CHF</span></p>
      <p class="mt-1 text-sm text-muted-foreground">${spesa.percentualeTotale.toFixed(1)}% delle spese per natura · ${formatMio(spesa.importoProCapite)} CHF per abitante</p>
      <p class="mt-4 text-muted-foreground leading-relaxed">${spesa.descrizione}</p>
      ${spesa.dettaglioSottoconti ? `<div class="mt-4 rounded-lg bg-muted/60 p-4 text-sm"><p class="font-medium mb-1">Cosa c'è dentro</p><p class="text-muted-foreground">${spesa.dettaglioSottoconti}</p><p class="mt-2 text-xs text-muted-foreground">I sottoconti a tre cifre (301, 302, …) non sono pubblicati come importi separati nel Messaggio. Qui c'è solo il testo che il documento stampa accanto al totale a due cifre.</p></div>` : ''}
      ${spesa.note ? `<p class="mt-4 text-sm"><span class="font-medium">Nota del documento.</span> ${spesa.note}</p>` : ''}
      ${preventivo ? `<p class="mt-4 text-sm text-muted-foreground">Preventivo 2027, stessa voce: ${formatMio(preventivo.importoMilioni)} mln CHF (${preventivo.percentualeTotale.toFixed(1)}%). ${preventivo.fonte}</p>` : ''}
      <p class="mt-4 text-xs text-muted-foreground border-t pt-3"><span class="font-medium">Fonte.</span> ${spesa.fonte}</p>
    </article>`;
}

// Render availability badge
export function renderAvailabilityBadge(status: string): string {
  const colors: Record<string, string> = {
    'VERIFICATO': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'AGGREGATO': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'STIMATO': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    'NON DISPONIBILE': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };
  
  const icons: Record<string, string> = {
    'VERIFICATO': '✅',
    'AGGREGATO': '📊',
    'STIMATO': '⚠️',
    'NON DISPONIBILE': '❌'
  };
  
  return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}">
    <span>${icons[status] || '?'}</span>
    ${status}
  </span>`;
}
