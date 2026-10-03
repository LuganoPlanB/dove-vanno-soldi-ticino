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
  metadata: {
    dataQualityNote: string;
    sources: Array<{
      name: string;
      url?: string;
      note: string;
    }>;
    limitazioni: string[];
  };
  anni: Record<string, {
    anno: number;
    tipo: string;
    note: string;
    disponibilita: string;
    speseTotali: number;
    fonte: string;
  }>;
  spesePerNatura2027: SpesaNatura[];
  note: string[];
}

let speseNaturaData: SpeseNaturaData | null = null;

export async function loadSpeseNatura(): Promise<SpeseNaturaData> {
  if (speseNaturaData) return speseNaturaData;
  
  const basePath = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${basePath}data/spese-per-natura-2027.json`);
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
  return {
    name: 'Spese Canton Ticino',
    value: 0,
    disponibilita: 'AGGREGATO',
    children: data.spesePerNatura2027.map(spesa => ({
      name: spesa.categoria.split(' - ')[1] || spesa.categoria,
      value: spesa.importo_mchf,
      disponibilita: spesa.disponibilita,
      perAbitante: spesa.perAbitante_chf,
      descrizione: spesa.descrizione,
      children: spesa.sottoCategorie?.map(sub => ({
        name: sub.nome,
        value: sub.importo_mchf,
        disponibilita: sub.disponibilita,
        descrizione: sub.descrizione
      }))
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
