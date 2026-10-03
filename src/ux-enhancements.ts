// Enhanced UX: Explorable breakdowns with drill-down
// Based on best practices from financial transparency sites

export function makeChartExplorable(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Add "Click to explore" hint
  const hint = document.createElement('div');
  hint.className = 'text-xs text-muted-foreground mt-2 text-center';
  hint.innerHTML = '💡 <span data-i18n="charts.hint">Tocca una categoria per vedere i dettagli</span>';
  container.appendChild(hint);
}

// URL-based sharing: Encode current view state
export function enableShareableViews() {
  const params = new URLSearchParams(window.location.search);
  
  // Restore language from URL
  const urlLang = params.get('lang');
  if (urlLang && ['it', 'en', 'de', 'fr'].includes(urlLang)) {
    localStorage.setItem('language', urlLang);
  }
  
  // Restore theme from URL
  const urlTheme = params.get('theme');
  if (urlTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (urlTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }
}

// Add share buttons to key sections
export function addShareButtons() {
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    if (!section.id || section.querySelector('.share-btn')) return;
    
    const title = section.querySelector('h2, h3');
    if (!title) return;
    
    const shareBtn = document.createElement('button');
    shareBtn.className = 'share-btn inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary ml-2';
    shareBtn.innerHTML = `
      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
      </svg>
      <span data-i18n="share">Condividi</span>
    `;
    
    shareBtn.addEventListener('click', async () => {
      const url = `${window.location.origin}${window.location.pathname}#${section.id}?lang=${localStorage.getItem('language')}&theme=${document.documentElement.classList.contains('dark') ? 'dark' : 'light'}`;
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: title.textContent || 'Dove vanno i soldi del Ticino',
            url: url
          });
        } catch (e) {
          copyToClipboard(url);
        }
      } else {
        copyToClipboard(url);
      }
    });
    
    title.appendChild(shareBtn);
  });
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    // Show toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-background border rounded-lg px-4 py-2 shadow-lg z-50';
    toast.innerHTML = '<span data-i18n="copied">Link copiato!</span>';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 2000);
  });
}

// Per-capita and per-household calculations
export interface PerCapitaMetrics {
  perResident: number;
  perHousehold: number;
  perDay: number;
  perMonth: number;
}

export function calculatePerCapita(totalAmount: number, population: number = 362200, householdSize: number = 2.1): PerCapitaMetrics {
  const perResident = totalAmount / population;
  const perHousehold = perResident * householdSize;
  const perDay = perResident / 365;
  const perMonth = perResident / 12;
  
  return {
    perResident: Math.round(perResident),
    perHousehold: Math.round(perHousehold),
    perDay: Math.round(perDay * 100) / 100,
    perMonth: Math.round(perMonth)
  };
}
