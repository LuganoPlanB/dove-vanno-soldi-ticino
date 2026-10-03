// Comune financial data interface and utilities

export interface ComuneFinanze {
  id: string;
  nome: string;
  popolazione: number;
  anno: number;
  finanze: {
    moltiplicatore_comunale: number;
    entrate_totali_mchf: number;
    uscite_totali_mchf: number;
    debito_pubblico_mchf: number;
    entrate_pro_capite_chf: number;
    uscite_pro_capite_chf: number;
    debito_pro_capite_chf: number;
  };
  fonte: string;
}

export interface ComuniData {
  comuni: ComuneFinanze[];
  note: string[];
}

let comuniData: ComuniData | null = null;

export async function loadComuniData(): Promise<ComuniData> {
  if (comuniData) return comuniData;
  
  const basePath = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${basePath}data/comuni-finanze-2023.json`);
  comuniData = await response.json();
  return comuniData!;
}

export function searchComuni(query: string, data: ComuniData): ComuneFinanze[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return data.comuni;
  
  return data.comuni.filter(comune => 
    comune.nome.toLowerCase().includes(lowerQuery) ||
    comune.id.toLowerCase().includes(lowerQuery)
  );
}

export function renderComuneCard(comune: ComuneFinanze): string {
  const saldo = comune.finanze.entrate_pro_capite_chf - comune.finanze.uscite_pro_capite_chf;
  const saldoClass = saldo >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  const saldoIcon = saldo >= 0 ? '✅' : '⚠️';
  
  return `
    <div class="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
      <h3 class="text-xl font-bold mb-3">${comune.nome}</h3>
      
      <div class="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <div class="text-muted-foreground">Popolazione</div>
          <div class="font-semibold">${comune.popolazione.toLocaleString()}</div>
        </div>
        <div>
          <div class="text-muted-foreground">Moltiplicatore</div>
          <div class="font-semibold">${comune.finanze.moltiplicatore_comunale}%</div>
        </div>
      </div>
      
      <div class="border-t pt-3 space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-muted-foreground">Entrate pro capite:</span>
          <span class="font-semibold">${comune.finanze.entrate_pro_capite_chf.toLocaleString()} CHF</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Uscite pro capite:</span>
          <span class="font-semibold">${comune.finanze.uscite_pro_capite_chf.toLocaleString()} CHF</span>
        </div>
        <div class="flex justify-between items-center border-t pt-2">
          <span class="text-muted-foreground">Saldo pro capite:</span>
          <span class="font-bold ${saldoClass}">
            ${saldoIcon} ${saldo >= 0 ? '+' : ''}${saldo.toLocaleString()} CHF
          </span>
        </div>
        <div class="flex justify-between text-xs">
          <span class="text-muted-foreground">Debito pro capite:</span>
          <span class="font-semibold text-amber-600 dark:text-amber-400">${comune.finanze.debito_pro_capite_chf.toLocaleString()} CHF</span>
        </div>
      </div>
      
      <div class="mt-3 pt-3 border-t text-xs text-muted-foreground">
        ${comune.fonte}
      </div>
    </div>
  `;
}
