# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 375px >> Home page: no empty charts, nav works, no console errors
- Location: tests/all-pages.spec.ts:14:5

# Error details

```
Error: Channel closed
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#hero-metrics')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#hero-metrics') with timeout 5000ms
  - waiting for locator('#hero-metrics')
  - Test ended.

```

```yaml
- navigation:
  - text: 💰 Where does Ticino money go
  - button "Menu":
    - img
  - button "Change language":
    - img
    - text: EN
  - button "Toggle theme":
    - img
- main:
  - text: 📊 Official data updated October 3, 2026
  - heading "Where does Ticino money go?" [level=1]
  - paragraph: Full transparency on cantonal finances. Every figure verified, every source cited, every number traceable.
  - text: 2027 Deficit
  - img
  - text: "-98.5M CHF -272 per resident Public debt"
  - img
  - text: ">3.0 Bn +20% since 2023 Highest premiums CH"
  - img
  - text: 520 CHF +26% vs media svizzera
  - heading "La situazione finanziaria Condividi" [level=2]:
    - text: La situazione finanziaria
    - button "Condividi":
      - img
      - text: Condividi
  - paragraph: "Il Canton Ticino affronta sfide finanziarie significative: un deficit in crescita, un debito pubblico che supererà i 3 miliardi di franchi e premi di cassa malattia tra i più alti della Svizzera. Questo sito rende accessibili e comprensibili i dati finanziari ufficiali del Cantone."
  - img
  - text: Dati verificati e tracciabili Ogni numero proviene da fonti ufficiali del Canton Ticino e della Confederazione Svizzera. Tutte le cifre sono state verificate matematicamente con test automatici.
  - heading "Where does the money go? Condividi" [level=2]:
    - text: Where does the money go?
    - button "Condividi":
      - img
      - text: Condividi
  - paragraph: Explore interactive visualizations to understand how the 4.7 billion franc cantonal budget is spent
  - heading "2027 Spending by function" [level=3]
  - text: Tocca per i dettagli
  - img: Social welfare Education Public health Financeand Generaladministration Publicorder, Transport andtelecommunications
  - heading "Cantonal public debt" [level=3]
  - img: 2023 2024 2025 2026 2027 0.00 CHF 1.00 CHF 2.00 CHF 3.00 CHF
  - heading "Annual deficit" [level=3]
  - img: 2023 2024 2025 2026 2027 0 M 50 M 100 M
  - heading "2025-2027 Comparison" [level=3]
  - text: Evoluzione delle principali voci di bilancio
  - table:
    - rowgroup:
      - row "Voce 2025 2027 Δ%":
        - columnheader "Voce"
        - columnheader "2025"
        - columnheader "2027"
        - columnheader "Δ%"
    - rowgroup:
      - row "Cantonal contributions 318 332 ↑ 4.4%":
        - cell "Cantonal contributions"
        - cell "318"
        - cell "332"
        - cell "↑ 4.4%"
      - row "Average premium TI 491 520 ↑ 5.9%":
        - cell "Average premium TI"
        - cell "491"
        - cell "520"
        - cell "↑ 5.9%"
      - row "Average premium CH 390 412 ↑ 5.6%":
        - cell "Average premium CH"
        - cell "390"
        - cell "412"
        - cell "↑ 5.6%"
  - text: ↑ Aumento ↓ Diminuzione → Stabile
  - heading "2027 Budget - Overview" [level=3]
  - img: 0.0Mia 1.0Mia 2.0Mia 3.0Mia 4.0Mia Current expenditure Current revenue Investments
  - heading "Stato dei dati" [level=2]
  - paragraph: Panoramica completa dei dati disponibili e delle limitazioni
  - img
  - text: Disponibili
  - list:
    - listitem: ✓ Spese per funzione 2027
    - listitem: ✓ Confronto 2025-2027
    - listitem: ✓ Serie storiche debito/deficit
    - listitem: ✓ Dati popolazione
    - listitem: ✓ Premi e contributi sanità
  - img
  - text: Mancanti
  - list:
    - listitem: ⏳ Consuntivi 2024, 2026
    - listitem: ⏳ Spese per dipartimento
    - listitem: ⏳ Serie storiche pre-2023
  - link "Metodologia completa":
    - /url: ./metodologia.html
    - text: Metodologia completa
    - img
  - link "Codice sorgente":
    - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - img
    - text: Codice sorgente
  - 'heading "💰 Amministrazione: dove vanno i soldi? Condividi" [level=2]':
    - text: "💰 Amministrazione: dove vanno i soldi?"
    - button "Condividi":
      - img
      - text: Condividi
  - paragraph: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
  - paragraph: 📊 Classificazione per natura economica (MCA2)
  - paragraph: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
  - text: ✅ VERIFICATO 📊 AGGREGATO ⚠️ STIMATO ❌ NON DISPONIBILE
  - paragraph: ⚠️ Limitazioni dei dati
  - paragraph:
    - text: Il Preventivo 2027 (Messaggio 8731) pubblica solo totali aggregati per funzione. I dettagli economici (quanto va a stipendi vs consulenze vs IT) richiedono il
    - strong: Consuntivo dettagliato
    - text: con il "Conto economico per natura" (pubblicato a marzo dell'anno successivo).
  - paragraph:
    - text: Le cifre mostrate sono
    - strong: stime basate su proporzioni tipiche
    - text: di cantoni svizzeri o
    - strong: marcate come NON DISPONIBILI
    - text: se non verificabili da fonti primarie.
  - heading "Spese per natura economica 2027 (Treemap interattiva)" [level=3]
  - paragraph: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
  - 'heading "Healthcare spending: explanation for non-experts" [level=2]'
  - paragraph: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
  - heading "Frequently asked question" [level=3]
  - paragraph: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
  - paragraph: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
  - group: 1. LAMal only covers basic care
  - group: 2. Canton required to pay 55% of hospitals
  - group: 3. Very high premiums in Ticino, many cannot afford them
  - group: 4. Extra services for elderly and chronically ill
  - group: 5. Prevention and public health
  - img
  - heading "Verified data" [level=3]
  - text: "627 M CHF \"Public health\" function 2027 Source: P2027_spese_02.pdf 13.3% of total budget 1'731 CHF per resident"
  - img
  - heading "RIPAM (premium reduction)" [level=3]
  - text: 332 M CHF Classified in "Social welfare" ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
  - heading "Key terms glossary" [level=3]
  - text: LAMal (Federal Health Insurance Act)
  - paragraph: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
  - text: "Legal basis: RS 832.10 Transfer expenses"
  - paragraph: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
  - text: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly) Cantonal quota 55% (hospital financing)"
  - paragraph: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
  - text: "Legal basis: LAMal art. 49a PC (Supplementary Benefits AVS/AI)"
  - paragraph: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
  - img
  - heading "Data NOT available in 2027 Budget" [level=4]
  - paragraph: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
  - text: "• Hospital contributions: NOT AVAILABLE Where to find it: Detailed accounts (March), Annual reports EOC/OSC • PC health quota: NOT AVAILABLE Where to find it: Accounts, Economic account by nature"
  - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2]'
  - paragraph: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
  - text: "Spesa totale 2027 384 M Funzione \"Amministrazione generale\" Fonte: P2027_spese_02.pdf % del bilancio 8.1% 91.9% va ad altre funzioni (scuole, sanità, sicurezza) Per abitante 1'061 CHF 384M / 362'200 abitanti"
  - heading "🔍 Chi controlla?" [level=3]
  - img
  - text: Controllo cantonale delle finanze (CCF)
  - paragraph: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
  - text: "Base legale: Legge 2.4.4.1"
  - img
  - text: Commissione della gestione e delle finanze (CGF)
  - paragraph: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
  - img
  - text: Corte dei conti
  - paragraph: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
  - img
  - heading "Dati Autorità - Verificati" [level=4]
  - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905 ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale) • Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763 • FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato • Stipendi membri CdS: NON PUBBLICATI separatamente Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3 • Budget CCF: NON DISPONIBILE Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
  - heading "🏘️ Dati per comune Condividi" [level=2]:
    - text: 🏘️ Dati per comune
    - button "Condividi":
      - img
      - text: Condividi
  - paragraph: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
  - paragraph: 📊 Dati ufficiali 2024
  - paragraph: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
  - searchbox "Cerca un comune..."
  - heading "💡 Quanto costa? Le formule spiegate Condividi" [level=2]:
    - text: 💡 Quanto costa? Le formule spiegate
    - button "Condividi":
      - img
      - text: Condividi
  - paragraph: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
  - img "Consiglio di Stato": 🏛️
  - heading "Consiglio di Stato" [level=3]
  - paragraph: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
  - text: "Formula: 3'500'000 CHF ÷ 362'200 abitanti Per abitante 9.67 CHF/anno Al giorno 0.03 CHF/giorno Per famiglia 20.30 CHF/anno 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno"
  - img "Contributi cantonali alla salute": 💊
  - heading "Contributi cantonali alla salute" [level=3]
  - paragraph: Sussidi per i premi dell'assicurazione malattia
  - text: "Formula: 332'000'000 CHF ÷ 362'200 abitanti Per abitante 917 CHF/anno Al giorno 2.51 CHF/giorno Per famiglia 1'925 CHF/anno 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati"
  - img "Formazione": 🎓
  - heading "Formazione" [level=3]
  - paragraph: Scuole pubbliche, università, formazione professionale
  - text: "Formula: 850'000'000 CHF ÷ 362'200 abitanti Per abitante 2'347 CHF/anno Al giorno 6.43 CHF/giorno Per famiglia 4'929 CHF/anno 💡 Ogni famiglia ticinese \"investe\" circa 5000 franchi all'anno nell'educazione pubblica"
  - img "Trasporti pubblici": 🚆
  - heading "Trasporti pubblici" [level=3]
  - paragraph: Contributi a FFS, TPL, e altre aziende di trasporto
  - text: "Formula: 180'000'000 CHF ÷ 362'200 abitanti Per abitante 497 CHF/anno Al giorno 1.36 CHF/giorno Per famiglia 1'044 CHF/anno 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici"
  - img "Polizia cantonale": 👮
  - heading "Polizia cantonale" [level=3]
  - paragraph: Sicurezza pubblica e ordine
  - text: "Formula: 120'000'000 CHF ÷ 362'200 abitanti Per abitante 331 CHF/anno Al giorno 0.91 CHF/giorno Per famiglia 696 CHF/anno 💡 Meno di 1 franco al giorno per la sicurezza pubblica"
  - img "Cultura e tempo libero": 🎭
  - heading "Cultura e tempo libero" [level=3]
  - paragraph: Musei, teatri, biblioteche, sport
  - text: "Formula: 45'000'000 CHF ÷ 362'200 abitanti Per abitante 124 CHF/anno Al giorno 0.34 CHF/giorno Per famiglia 261 CHF/anno 💡 Ogni ticinese \"paga\" l'equivalente di un caffè all'anno per la cultura"
- contentinfo:
  - text: Where does Ticino money go
  - paragraph: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
  - text: This site is independent and is not affiliated with the cantonal government.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = 'https://tiero.github.io/dove-vanno-soldi-ticino';
  4   | const VIEWPORTS = [
  5   |   { width: 320, height: 568, name: '320px' },
  6   |   { width: 375, height: 667, name: '375px' },
  7   |   { width: 430, height: 932, name: '430px' },
  8   | ];
  9   | 
  10  | for (const viewport of VIEWPORTS) {
  11  |   test.describe(`All pages at ${viewport.name}`, () => {
  12  |     test.use({ viewport });
  13  | 
  14  |     test('Home page: no empty charts, nav works, no console errors', async ({ page }) => {
  15  |       const errors: string[] = [];
  16  |       page.on('pageerror', err => errors.push(err.message));
  17  |       page.on('console', msg => {
  18  |         if (msg.type() === 'error') errors.push(msg.text());
  19  |       });
  20  | 
  21  |       await page.goto(`${BASE_URL}/`);
  22  |       
  23  |       // Check hero metrics loaded
> 24  |       await expect(page.locator('#hero-metrics')).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
  25  |       const heroText = await page.locator('#hero-metrics').textContent();
  26  |       expect(heroText).toContain('M'); // Should have numbers in millions
  27  |       
  28  |       // Check charts exist and have content
  29  |       const charts = ['spending-function-treemap', 'debt-history-chart', 'health-premiums-chart'];
  30  |       for (const chartId of charts) {
  31  |         const chart = page.locator(`#${chartId}`);
  32  |         if (await chart.count() > 0) {
  33  |           await expect(chart).toBeVisible();
  34  |           // Check chart has either SVG or canvas
  35  |           const hasContent = await chart.locator('svg, canvas').count();
  36  |           expect(hasContent).toBeGreaterThan(0);
  37  |         }
  38  |       }
  39  |       
  40  |       // Test mobile menu
  41  |       const menuButton = page.locator('#mobile-menu-button');
  42  |       if (await menuButton.isVisible()) {
  43  |         await menuButton.click();
  44  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  45  |         await page.click('body'); // Close menu
  46  |       }
  47  |       
  48  |       // Test theme toggle
  49  |       await page.click('#theme-toggle');
  50  |       await page.waitForTimeout(300);
  51  |       const isDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
  52  |       expect(typeof isDark).toBe('boolean');
  53  |       
  54  |       expect(errors).toEqual([]);
  55  |     });
  56  | 
  57  |     test('Storia debito page: chart renders, nav works, no hardcoded numbers', async ({ page }) => {
  58  |       const errors: string[] = [];
  59  |       page.on('pageerror', err => errors.push(err.message));
  60  |       page.on('console', msg => {
  61  |         if (msg.type() === 'error') errors.push(msg.text());
  62  |       });
  63  | 
  64  |       await page.goto(`${BASE_URL}/storia-debito.html`);
  65  |       
  66  |       // Wait for page to load
  67  |       await page.waitForLoadState('networkidle');
  68  |       
  69  |       // Check title
  70  |       await expect(page.locator('h1')).toContainText('debito');
  71  |       
  72  |       // Check chart exists and has canvas
  73  |       const chart = page.locator('#debito-chart');
  74  |       await expect(chart).toBeVisible();
  75  |       
  76  |       // Check chart is not empty (has actual rendering)
  77  |       const chartParent = page.locator('#grafico-debito');
  78  |       await expect(chartParent).toBeVisible();
  79  |       const hasCanvas = await chartParent.locator('canvas').count();
  80  |       expect(hasCanvas).toBe(1);
  81  |       
  82  |       // Verify NO hardcoded removed numbers appear in page text
  83  |       const bodyText = await page.textContent('body');
  84  |       expect(bodyText).not.toContain('584M in 2 anni'); // Removed 2003-04 claim
  85  |       expect(bodyText).not.toContain('-353M oro BNS'); // Removed 2005 claim
  86  |       expect(bodyText).not.toContain('901M'); // Removed 2000 value
  87  |       
  88  |       // Test mobile menu
  89  |       const menuButton = page.locator('#mobile-menu-button');
  90  |       if (await menuButton.isVisible()) {
  91  |         await menuButton.click();
  92  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  93  |       }
  94  |       
  95  |       // Test theme toggle
  96  |       await page.click('#theme-toggle');
  97  |       await page.waitForTimeout(300);
  98  |       
  99  |       // Test language selector (if visible)
  100 |       const langButton = page.locator('#lang-button');
  101 |       if (await langButton.count() > 0) {
  102 |         await langButton.click();
  103 |         await expect(page.locator('#lang-menu')).toBeVisible();
  104 |       }
  105 |       
  106 |       expect(errors).toEqual([]);
  107 |     });
  108 | 
  109 |     test('Tassazione imprese page: chart renders, nav works', async ({ page }) => {
  110 |       const errors: string[] = [];
  111 |       page.on('pageerror', err => errors.push(err.message));
  112 |       page.on('console', msg => {
  113 |         if (msg.type() === 'error') errors.push(msg.text());
  114 |       });
  115 | 
  116 |       await page.goto(`${BASE_URL}/tassazione-imprese.html`);
  117 |       
  118 |       await page.waitForLoadState('networkidle');
  119 |       
  120 |       // Check title
  121 |       await expect(page.locator('h1')).toContainText('Tassazione');
  122 |       
  123 |       // Check chart exists
  124 |       const chart = page.locator('#gettito-chart');
```