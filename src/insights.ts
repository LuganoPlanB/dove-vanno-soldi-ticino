// Insight and trivia cards with visible formulas
// Helping citizens understand public spending through concrete examples

import { calculatePerCapita } from './ux-enhancements';

export interface InsightCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
  amount: number;
  formula: string;
  breakdown: {
    perResident: string;
    perDay: string;
    perHousehold: string;
  };
  context: string;
}

export const INSIGHT_CARDS: InsightCard[] = [
  {
    id: 'consiglio-stato',
    emoji: '🏛️',
    title: 'Consiglio di Stato',
    description: 'Costo dell\'organo esecutivo del cantone (5 consiglieri + segretariato)',
    amount: 3_500_000, // 3.5M CHF estimated
    formula: '3\'500\'000 CHF ÷ 362\'200 abitanti',
    breakdown: {
      perResident: '9.67 CHF/anno',
      perDay: '0.03 CHF/giorno',
      perHousehold: '20.30 CHF/anno'
    },
    context: 'Circa 10 franchi all\'anno per abitante, meno di 3 centesimi al giorno'
  },
  {
    id: 'health-premiums',
    emoji: '💊',
    title: 'Contributi cantonali alla salute',
    description: 'Sussidi per i premi dell\'assicurazione malattia',
    amount: 332_000_000, // 332M CHF (2027)
    formula: '332\'000\'000 CHF ÷ 362\'200 abitanti',
    breakdown: {
      perResident: '917 CHF/anno',
      perDay: '2.51 CHF/giorno',
      perHousehold: '1\'925 CHF/anno'
    },
    context: 'Il cantone paga quasi 1000 franchi all\'anno per ogni ticinese per aiutare con i premi della cassa malati'
  },
  {
    id: 'education',
    emoji: '🎓',
    title: 'Formazione',
    description: 'Scuole pubbliche, università, formazione professionale',
    amount: 850_000_000, // Estimated from budget
    formula: '850\'000\'000 CHF ÷ 362\'200 abitanti',
    breakdown: {
      perResident: '2\'347 CHF/anno',
      perDay: '6.43 CHF/giorno',
      perHousehold: '4\'929 CHF/anno'
    },
    context: 'Ogni famiglia ticinese "investe" circa 5000 franchi all\'anno nell\'educazione pubblica'
  },
  {
    id: 'public-transport',
    emoji: '🚆',
    title: 'Trasporti pubblici',
    description: 'Contributi a FFS, TPL, e altre aziende di trasporto',
    amount: 180_000_000, // Estimated
    formula: '180\'000\'000 CHF ÷ 362\'200 abitanti',
    breakdown: {
      perResident: '497 CHF/anno',
      perDay: '1.36 CHF/giorno',
      perHousehold: '1\'044 CHF/anno'
    },
    context: 'Anche chi non prende mai il treno contribuisce con 500 franchi all\'anno ai trasporti pubblici'
  },
  {
    id: 'police',
    emoji: '👮',
    title: 'Polizia cantonale',
    description: 'Sicurezza pubblica e ordine',
    amount: 120_000_000, // Estimated
    formula: '120\'000\'000 CHF ÷ 362\'200 abitanti',
    breakdown: {
      perResident: '331 CHF/anno',
      perDay: '0.91 CHF/giorno',
      perHousehold: '696 CHF/anno'
    },
    context: 'Meno di 1 franco al giorno per la sicurezza pubblica'
  },
  {
    id: 'culture',
    emoji: '🎭',
    title: 'Cultura e tempo libero',
    description: 'Musei, teatri, biblioteche, sport',
    amount: 45_000_000, // Estimated
    formula: '45\'000\'000 CHF ÷ 362\'200 abitanti',
    breakdown: {
      perResident: '124 CHF/anno',
      perDay: '0.34 CHF/giorno',
      perHousehold: '261 CHF/anno'
    },
    context: 'Ogni ticinese "paga" l\'equivalente di un caffè all\'anno per la cultura'
  }
];

export function renderInsightCard(card: InsightCard): string {
  return `
    <div class="insight-card p-6 border-2 rounded-xl bg-gradient-to-br from-primary/5 to-background hover:shadow-lg transition-all">
      <div class="flex items-start gap-4 mb-4">
        <span class="text-4xl" role="img" aria-label="${card.title}">${card.emoji}</span>
        <div class="flex-1">
          <h3 class="text-xl font-bold mb-1">${card.title}</h3>
          <p class="text-sm text-muted-foreground">${card.description}</p>
        </div>
      </div>
      
      <div class="bg-muted/50 rounded-lg p-4 mb-4 font-mono text-sm border">
        <div class="font-semibold mb-2 text-primary">Formula:</div>
        <div class="text-xs sm:text-sm break-all">${card.formula}</div>
      </div>
      
      <div class="grid grid-cols-3 gap-3 mb-4">
        <div class="text-center">
          <div class="text-xs text-muted-foreground mb-1">Per abitante</div>
          <div class="font-bold text-sm sm:text-base">${card.breakdown.perResident}</div>
        </div>
        <div class="text-center">
          <div class="text-xs text-muted-foreground mb-1">Al giorno</div>
          <div class="font-bold text-sm sm:text-base">${card.breakdown.perDay}</div>
        </div>
        <div class="text-center">
          <div class="text-xs text-muted-foreground mb-1">Per famiglia</div>
          <div class="font-bold text-sm sm:text-base">${card.breakdown.perHousehold}</div>
        </div>
      </div>
      
      <div class="text-sm text-muted-foreground italic border-t pt-3">
        💡 ${card.context}
      </div>
    </div>
  `;
}

export function renderAllInsightCards(): string {
  return INSIGHT_CARDS.map(card => renderInsightCard(card)).join('');
}
