// Comune financial data interface and utilities

export interface ComuneFinanze {
  nome: string;
  popolazione_2024: number;
  moltiplicatore_PF_2025: number;
  moltiplicatore_PG_2025: number;
  moltiplicatore_coordinato_2025: number;
  risorse_fiscali_procapite_2022: number;
  indice_forza_finanziaria_2025_26: number;
}

export interface ComuniData {
  metadati: {
    titolo: string;
    fonte: string;
    numeroComuni: number;
    note: string[];
  };
  comuni: ComuneFinanze[];
}

let comuniData: ComuniData | null = null;

export async function loadComuniData(): Promise<ComuniData> {
  if (comuniData) return comuniData;
  
  const basePath = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${basePath}data/comuni-finanze-2024.json`);
  comuniData = await response.json();
  return comuniData!;
}

export function searchComuni(query: string, data: ComuniData): ComuneFinanze[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return data.comuni;
  
  return data.comuni.filter(comune => 
    comune.nome.toLowerCase().includes(lowerQuery)
  );
}

export function renderComuneCard(comune: ComuneFinanze): string {
  const forza = comune.indice_forza_finanziaria_2025_26;
  const forzaClass = forza >= 100 ? 'text-green-600 dark:text-green-400' : forza >= 80 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400';
  const forzaIcon = forza >= 100 ? '💪' : forza >= 80 ? '⚠️' : '🔴';
  
  return `
    <div class="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
      <h3 class="text-xl font-bold mb-3">${comune.nome}</h3>
      
      <div class="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <div class="text-muted-foreground">Popolazione 2024</div>
          <div class="font-semibold">${comune.popolazione_2024 != null ? comune.popolazione_2024.toLocaleString() : '—'}</div>
        </div>
        <div>
          <div class="text-muted-foreground">MP PF 2025</div>
          <div class="font-semibold">${comune.moltiplicatore_PF_2025 != null ? comune.moltiplicatore_PF_2025 : '—'}%</div>
        </div>
      </div>
      
      <div class="border-t pt-3 space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-muted-foreground">MP PG:</span>
          <span class="font-semibold">${comune.moltiplicatore_PG_2025 != null ? comune.moltiplicatore_PG_2025 : '—'}%</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Risorse fiscali p.c. (2022):</span>
          <span class="font-semibold">${comune.risorse_fiscali_procapite_2022 != null ? Math.round(comune.risorse_fiscali_procapite_2022).toLocaleString() : '—'} CHF</span>
        </div>
        <div class="flex justify-between items-center border-t pt-2">
          <span class="text-muted-foreground">Indice forza finanziaria:</span>
          <span class="font-bold ${forzaClass}">
            ${forzaIcon} ${comune.indice_forza_finanziaria_2025_26 != null ? comune.indice_forza_finanziaria_2025_26.toFixed(1) : '—'}
          </span>
        </div>
      </div>
      
      <div class="mt-3 pt-3 border-t text-xs text-muted-foreground">
        Fonte: Rapporto conti comuni 2024 - Allegato statistico tab.8
      </div>
    </div>
  `;
}
