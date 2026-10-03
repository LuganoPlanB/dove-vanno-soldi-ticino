# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n completeness tests >> all pages load in all languages
- Location: tests/i18n.spec.ts:58:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f19e1]:
  - navigation [ref=f19e2]:
    - generic [ref=f19e4]:
      - generic [ref=f19e5]:
        - generic [ref=f19e6]: 💰
        - generic [ref=f19e7]: Dove vanno i soldi del Ticino
      - generic [ref=f19e8]:
        - link "Dashboard" [ref=f19e9] [cursor=pointer]:
          - /url: ./
        - button "Toggle theme" [ref=f19e10] [cursor=pointer]
  - main [ref=f19e13]:
    - article [ref=f19e15]:
      - generic [ref=f19e16]:
        - heading "Metodologia" [level=1] [ref=f19e17]
        - paragraph [ref=f19e18]: Come sono raccolti, verificati e presentati i dati sulle finanze del Canton Ticino
      - generic [ref=f19e19]:
        - heading "Obiettivo del progetto" [level=2] [ref=f19e20]
        - generic [ref=f19e21]:
          - paragraph [ref=f19e22]: Questo progetto nasce per rendere accessibili e comprensibili i dati finanziari del Canton Ticino. L'obiettivo è permettere a ogni cittadino di capire dove vanno i soldi pubblici, quanto si spende per ciascuna funzione e qual è l'evoluzione del debito e del deficit cantonale.
          - generic [ref=f19e23]: Tutti i dati sono pubblici e verificabili
      - generic [ref=f19e27]:
        - heading "Fonti dei dati" [level=2] [ref=f19e28]
        - heading "Canton Ticino" [level=3] [ref=f19e29]
        - list [ref=f19e30]:
          - listitem [ref=f19e31]:
            - strong [ref=f19e32]: Messaggio 8731
            - text: "(28 agosto 2024): Preventivo 2025 e Piano finanziario 2026-2028"
            - link "Fonte ufficiale →" [ref=f19e33] [cursor=pointer]:
              - /url: https://www4.ti.ch/generale/gran-consiglio/messaggi-e-atti/ricerca-messaggi-e-atti/risultati/dettaglio/?user_gcatti_pi1%5Bid_messaggio%5D=11046
          - listitem [ref=f19e34]:
            - strong [ref=f19e35]: Consuntivo 2024
            - text: "(previsto marzo 2025): attualmente non ancora pubblicato"
          - listitem [ref=f19e36]:
            - strong [ref=f19e37]: Piano finanziario 2026-2029
            - text: "(agosto 2025): atteso con il Messaggio sul preventivo 2026"
          - listitem [ref=f19e38]:
            - strong [ref=f19e39]: Consuntivo 2025
            - text: "(marzo 2026): atteso"
          - listitem [ref=f19e40]:
            - strong [ref=f19e41]: Messaggio sul preventivo 2027 e Piano finanziario 2028-2030
            - text: "(agosto 2026): atteso"
        - heading "Confederazione Svizzera" [level=3] [ref=f19e42]
        - list [ref=f19e43]:
          - listitem [ref=f19e44]:
            - strong [ref=f19e45]: Ufficio federale della sanità pubblica (UFSP)
            - text: ": statistiche premi malattia"
            - link "Fonte ufficiale →" [ref=f19e46] [cursor=pointer]:
              - /url: https://www.bag.admin.ch/bag/it/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-in-der-schweiz/praemien-kostenbeteiligung.html
          - listitem [ref=f19e47]:
            - strong [ref=f19e48]: Ufficio federale di statistica (BFS)
            - text: ": popolazione residente"
            - link "Fonte ufficiale →" [ref=f19e49] [cursor=pointer]:
              - /url: https://www.bfs.admin.ch/bfs/it/home/statistiche/popolazione.html
      - generic [ref=f19e50]:
        - heading "Verifica e validazione" [level=2] [ref=f19e51]
        - paragraph [ref=f19e52]: "Ogni dato è verificato automaticamente tramite script di validazione. I controlli includono:"
        - list [ref=f19e53]:
          - listitem [ref=f19e54]:
            - strong [ref=f19e55]: Coerenza matematica
            - text: ": somme, differenze e percentuali sono verificate"
          - listitem [ref=f19e56]:
            - strong [ref=f19e57]: Correttezza strutturale
            - text: ": i dati JSON seguono lo schema definito"
          - listitem [ref=f19e58]:
            - strong [ref=f19e59]: Presenza delle fonti
            - text: ": ogni file di dati ha una sezione \"fonti\" con riferimenti completi"
          - listitem [ref=f19e60]:
            - strong [ref=f19e61]: Cross-validation
            - text: ": i totali di un file sono coerenti con i valori di altri file"
        - generic [ref=f19e66]:
          - generic [ref=f19e67]: Test automatici
          - generic [ref=f19e68]:
            - text: Il comando
            - code [ref=f19e69]: npm test
            - text: esegue 45+ controlli sui dati. Tutti devono passare prima di ogni pubblicazione.
      - generic [ref=f19e70]:
        - heading "Metodi di calcolo" [level=2] [ref=f19e71]
        - heading "Calcoli per abitante" [level=3] [ref=f19e72]
        - paragraph [ref=f19e73]: "I valori \"per abitante\" sono calcolati dividendo la cifra totale per la popolazione residente stimata nell'anno di riferimento:"
        - list [ref=f19e74]:
          - listitem [ref=f19e75]: "2023: 358,600 abitanti (consuntivo BFS)"
          - listitem [ref=f19e76]: "2024: 358,903 abitanti (stima BFS)"
          - listitem [ref=f19e77]: "2025: ~360,000 abitanti (stima lineare)"
          - listitem [ref=f19e78]: "2026: ~361,100 abitanti (stima lineare)"
          - listitem [ref=f19e79]: "2027: ~362,200 abitanti (stima lineare)"
        - heading "Percentuali e variazioni" [level=3] [ref=f19e80]
        - paragraph [ref=f19e81]: "Le percentuali di variazione anno su anno sono calcolate con la formula standard:"
        - generic [ref=f19e82]: Variazione % = ((Valore_nuovo - Valore_vecchio) / Valore_vecchio) × 100
      - generic [ref=f19e84]:
        - heading "Limitazioni e dati mancanti" [level=2] [ref=f19e85]
        - generic [ref=f19e86]:
          - generic [ref=f19e91]:
            - generic [ref=f19e92]: Consuntivi 2024-2026 non ancora disponibili
            - generic [ref=f19e93]: I consuntivi vengono pubblicati ~3 mesi dopo la fine dell'anno fiscale. Il consuntivo 2024 sarà disponibile marzo 2025, il 2025 marzo 2026, il 2026 marzo 2027.
          - generic [ref=f19e98]:
            - generic [ref=f19e99]: Spese per dipartimento non dettagliate
            - generic [ref=f19e100]: Attualmente sono disponibili le spese aggregate per funzione. Il breakdown per dipartimento richiederebbe un'analisi più dettagliata del Messaggio.
      - generic [ref=f19e101]:
        - heading "Visualizzazioni" [level=2] [ref=f19e102]
        - paragraph [ref=f19e103]: "I dati sono presentati attraverso diverse visualizzazioni interattive, tutte ottimizzate per dispositivi mobili e desktop:"
        - list [ref=f19e104]:
          - listitem [ref=f19e105]:
            - strong [ref=f19e106]: Treemap
            - text: ": mostra la proporzione delle spese per funzione"
          - listitem [ref=f19e107]:
            - strong [ref=f19e108]: Grafici a linee
            - text: ": evoluzioni storiche di debito e deficit"
          - listitem [ref=f19e109]:
            - strong [ref=f19e110]: Grafici a barre
            - text: ": confronti diretti tra anni (2025, 2026, 2027)"
        - paragraph [ref=f19e111]: Tutte le visualizzazioni sono accessibili (contrasto colori WCAG AA, supporto per screen reader) e rispettano le preferenze di movimento ridotto dell'utente.
      - generic [ref=f19e112]:
        - heading "Aggiornamenti futuri" [level=2] [ref=f19e113]
        - paragraph [ref=f19e114]: "Questo progetto sarà aggiornato man mano che nuovi dati ufficiali saranno pubblicati:"
        - list [ref=f19e115]:
          - listitem [ref=f19e116]: "Marzo 2025: aggiungeremo il consuntivo 2024"
          - listitem [ref=f19e117]: "Agosto 2025: aggiungeremo il preventivo 2026 e il piano finanziario 2027-2029"
          - listitem [ref=f19e118]: "Marzo 2026: aggiungeremo il consuntivo 2025"
      - generic [ref=f19e119]:
        - heading "Contribuire" [level=2] [ref=f19e120]
        - generic [ref=f19e121]:
          - paragraph [ref=f19e122]: "Questo è un progetto open source. Se trovi errori, hai suggerimenti o vuoi contribuire con nuovi dati o visualizzazioni, visita il repository su GitHub:"
          - link "Vai al repository" [ref=f19e123] [cursor=pointer]:
            - /url: https://github.com/tiero/dove-vanno-soldi-ticino
      - link "Torna alla dashboard" [ref=f19e128] [cursor=pointer]:
        - /url: /
  - contentinfo [ref=f19e132]:
    - generic [ref=f19e134]:
      - generic [ref=f19e135]:
        - generic [ref=f19e136]: Dove vanno i soldi del Ticino
        - paragraph [ref=f19e137]: Un progetto di trasparenza finanziaria. Tutti i dati provengono da fonti ufficiali del Canton Ticino e della Confederazione Svizzera.
      - generic [ref=f19e138]: Questo sito è indipendente e non è affiliato al governo cantonale.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = process.env.BASE_URL || 'https://tiero.github.io/dove-vanno-soldi-ticino';
  4   | const LANGUAGES = ['it', 'en', 'de', 'fr'];
  5   | 
  6   | test.describe('i18n completeness tests', () => {
  7   |   for (const lang of LANGUAGES) {
  8   |     test(`homepage in ${lang} has no untranslated text`, async ({ page }) => {
  9   |       await page.goto(`${BASE_URL}/`);
  10  |       
  11  |       // Wait for page load
  12  |       await page.waitForSelector('#hero-metrics', { timeout: 10000 });
  13  |       
  14  |       // Select language
  15  |       const langButton = page.locator(`button[data-lang="${lang}"]`).first();
  16  |       if (await langButton.count() > 0) {
  17  |         await langButton.click();
  18  |         await page.waitForTimeout(500);
  19  |       }
  20  |       
  21  |       // Get all text content
  22  |       const bodyText = await page.locator('body').textContent();
  23  |       
  24  |       // Check for common Italian words that should be translated in non-IT languages
  25  |       if (lang !== 'it') {
  26  |         const italianWords = ['Dove vanno i soldi', 'abitante', 'Miliardi', 'Disavanzo'];
  27  |         for (const word of italianWords) {
  28  |           if (bodyText && bodyText.includes(word)) {
  29  |             console.warn(`Warning: Found untranslated Italian word "${word}" in ${lang}`);
  30  |           }
  31  |         }
  32  |       }
  33  |       
  34  |       // Check for data-i18n attributes without translations
  35  |       const untranslatedElements = await page.locator('[data-i18n]').evaluateAll(elements => {
  36  |         return elements.filter(el => {
  37  |           const key = el.getAttribute('data-i18n');
  38  |           const text = el.textContent || '';
  39  |           return key && text.trim() === key;
  40  |         }).length;
  41  |       });
  42  |       
  43  |       expect(untranslatedElements).toBe(0);
  44  |     });
  45  |     
  46  |     test(`language switcher works for ${lang}`, async ({ page }) => {
  47  |       await page.goto(`${BASE_URL}/`);
  48  |       
  49  |       // Check if language button exists
  50  |       const langButton = page.locator(`button[data-lang="${lang}"]`).first();
  51  |       const buttonCount = await langButton.count();
  52  |       
  53  |       // Language switcher should be present
  54  |       expect(buttonCount).toBeGreaterThan(0);
  55  |     });
  56  |   }
  57  |   
  58  |   test('all pages load in all languages', async ({ page }) => {
  59  |     const pages = ['/', '/storia-debito.html', '/tassazione-imprese.html', '/comuni.html', '/metodologia.html'];
  60  |     
  61  |     for (const pagePath of pages) {
  62  |       for (const lang of LANGUAGES) {
  63  |         await page.goto(`${BASE_URL}${pagePath}`);
  64  |         await page.waitForLoadState('networkidle');
  65  |         
  66  |         // Check that page loaded successfully
  67  |         const title = await page.title();
  68  |         expect(title.length).toBeGreaterThan(0);
  69  |         
  70  |         // Check for console errors
  71  |         const errors: string[] = [];
  72  |         page.on('pageerror', err => errors.push(err.message));
  73  |         
> 74  |         await page.waitForTimeout(1000);
      |                    ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  75  |         expect(errors.length).toBe(0);
  76  |       }
  77  |     }
  78  |   });
  79  |   
  80  |   test('text at 320px width does not overflow', async ({ page }) => {
  81  |     await page.setViewportSize({ width: 320, height: 568 });
  82  |     
  83  |     const pages = ['/', '/storia-debito.html', '/tassazione-imprese.html', '/comuni.html'];
  84  |     
  85  |     for (const pagePath of pages) {
  86  |       for (const lang of LANGUAGES) {
  87  |         await page.goto(`${BASE_URL}${pagePath}`);
  88  |         
  89  |         // Select language if switcher exists
  90  |         const langButton = page.locator(`button[data-lang="${lang}"]`).first();
  91  |         if (await langButton.count() > 0) {
  92  |           await langButton.click();
  93  |           await page.waitForTimeout(300);
  94  |         }
  95  |         
  96  |         // Check for horizontal overflow
  97  |         const hasOverflow = await page.evaluate(() => {
  98  |           return document.documentElement.scrollWidth > window.innerWidth;
  99  |         });
  100 |         
  101 |         if (hasOverflow) {
  102 |           console.warn(`Warning: Horizontal overflow detected on ${pagePath} in ${lang} at 320px`);
  103 |         }
  104 |         
  105 |         // This is a warning, not a hard failure, as some overflow might be intentional (charts, tables)
  106 |         // But German and French text should not cause layout breaks
  107 |       }
  108 |     }
  109 |   });
  110 | });
  111 | 
```