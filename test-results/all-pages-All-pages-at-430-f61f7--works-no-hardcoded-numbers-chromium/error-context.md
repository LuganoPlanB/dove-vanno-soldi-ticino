# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 430px >> Storia debito page: chart renders, nav works, no hardcoded numbers
- Location: tests/all-pages.spec.ts:59:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "Cannot read properties of undefined (reading 'toFixed')",
+ ]
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]: 💰
        - link "Dove vanno i soldi del Ticino" [ref=e7] [cursor=pointer]:
          - /url: /
      - generic [ref=e8]:
        - link "Metodologia" [ref=e9] [cursor=pointer]:
          - /url: ./metodologia.html
        - generic [ref=e10]:
          - button "Change language" [active] [ref=e11] [cursor=pointer]:
            - generic [ref=e14]: EN
          - generic [ref=e16]:
            - button "🇮🇹 Italiano" [ref=e17] [cursor=pointer]
            - button "🇬🇧 English" [ref=e18] [cursor=pointer]
            - button "🇩🇪 Deutsch" [ref=e19] [cursor=pointer]
            - button "🇫🇷 Français" [ref=e20] [cursor=pointer]
        - button "Toggle theme" [ref=e21] [cursor=pointer]
  - main [ref=e24]:
    - generic [ref=e27]:
      - generic [ref=e28]:
        - generic [ref=e29]: 📉
        - generic [ref=e30]: Serie storica VERIFICATA - Solo anni con fonti primarie
      - heading "📈 Storia del debito pubblico" [level=1] [ref=e31]
      - paragraph [ref=e32]:
        - text: Evoluzione del debito netto verificato contro documenti primari.
        - strong [ref=e33]: Lacune
        - text: dove i dati non sono verificabili.
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]: Debito 2010
          - generic [ref=e37]: 1313.4M
          - generic [ref=e38]: CHF 1313.4 milioni
        - generic [ref=e39]:
          - generic [ref=e40]: Debito 2025
          - generic [ref=e41]: 3056M
          - generic [ref=e42]: +133% dal 2010
        - generic [ref=e43]:
          - generic [ref=e44]: Pro capite 2025
          - generic [ref=e45]: 8,579
          - generic [ref=e46]: CHF per abitante
    - generic [ref=e49]:
      - generic [ref=e50]:
        - heading "📈 Serie storica del debito pubblico" [level=2] [ref=e51]
        - paragraph [ref=e52]: Debito netto al 31.12 di ogni anno. Solo anni VERIFICATI contro Consuntivi ufficiali.
      - heading "📊 Tabella anni verificati" [level=3] [ref=e57]
  - contentinfo [ref=e58]:
    - generic [ref=e59]:
      - paragraph [ref=e60]: Tutti i dati sono verificati contro fonti primarie ufficiali del Canton Ticino
      - paragraph [ref=e61]:
        - link "Codice sorgente su GitHub" [ref=e62] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
```

# Test source

```ts
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
  24  |       await expect(page.locator('#hero-metrics')).toBeVisible();
  25  |       const heroText = await page.locator('#hero-metrics').textContent();
  26  |       expect(heroText).toContain('M'); // Should have numbers in millions
  27  |       
  28  |       // Check charts exist and have content
  29  |       const charts = ['debt-history-chart', 'deficit-history-chart'];
  30  |       for (const chartId of charts) {
  31  |         const chart = page.locator(`#${chartId}`);
  32  |         if (await chart.count() > 0) {
  33  |           await expect(chart).toBeVisible();
  34  |           // Wait for chart to render
  35  |           await page.waitForTimeout(1000);
  36  |           // Check chart has either SVG or canvas
  37  |           const hasContent = await chart.locator('svg, canvas').count();
  38  |           expect(hasContent).toBeGreaterThan(0);
  39  |         }
  40  |       }
  41  |       
  42  |       // Test mobile menu
  43  |       const menuButton = page.locator('#mobile-menu-button');
  44  |       if (await menuButton.isVisible()) {
  45  |         await menuButton.click();
  46  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  47  |         await page.click('body'); // Close menu
  48  |       }
  49  |       
  50  |       // Test theme toggle
  51  |       await page.click('#theme-toggle');
  52  |       await page.waitForTimeout(300);
  53  |       const isDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
  54  |       expect(typeof isDark).toBe('boolean');
  55  |       
  56  |       expect(errors).toEqual([]);
  57  |     });
  58  | 
  59  |     test('Storia debito page: chart renders, nav works, no hardcoded numbers', async ({ page }) => {
  60  |       const errors: string[] = [];
  61  |       page.on('pageerror', err => errors.push(err.message));
  62  |       page.on('console', msg => {
  63  |         if (msg.type() === 'error') errors.push(msg.text());
  64  |       });
  65  | 
  66  |       await page.goto(`${BASE_URL}/storia-debito.html`);
  67  |       
  68  |       // Wait for page to load
  69  |       await page.waitForLoadState('networkidle');
  70  |       
  71  |       // Check title
  72  |       await expect(page.locator('h1')).toContainText('debito');
  73  |       
  74  |       // Check chart exists and has canvas
  75  |       const chart = page.locator('#debito-chart');
  76  |       await expect(chart).toBeVisible();
  77  |       
  78  |       // Check chart is not empty (has actual rendering)
  79  |       const chartParent = page.locator('#grafico-debito');
  80  |       await expect(chartParent).toBeVisible();
  81  |       const hasCanvas = await chartParent.locator('canvas').count();
  82  |       expect(hasCanvas).toBe(1);
  83  |       
  84  |       // Verify NO hardcoded removed numbers appear in page text
  85  |       const bodyText = await page.textContent('body');
  86  |       expect(bodyText).not.toContain('584M in 2 anni'); // Removed 2003-04 claim
  87  |       expect(bodyText).not.toContain('-353M oro BNS'); // Removed 2005 claim
  88  |       expect(bodyText).not.toContain('901M'); // Removed 2000 value
  89  |       
  90  |       // Test mobile menu
  91  |       const menuButton = page.locator('#mobile-menu-button');
  92  |       if (await menuButton.isVisible()) {
  93  |         await menuButton.click();
  94  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  95  |       }
  96  |       
  97  |       // Test theme toggle
  98  |       await page.click('#theme-toggle');
  99  |       await page.waitForTimeout(300);
  100 |       
  101 |       // Test language selector (if visible)
  102 |       const langButton = page.locator('#lang-button');
  103 |       if (await langButton.count() > 0) {
  104 |         await langButton.click();
  105 |         await expect(page.locator('#lang-menu')).toBeVisible();
  106 |       }
  107 |       
> 108 |       expect(errors).toEqual([]);
      |                      ^ Error: expect(received).toEqual(expected) // deep equality
  109 |     });
  110 | 
  111 |     test('Tassazione imprese page: chart renders, nav works', async ({ page }) => {
  112 |       const errors: string[] = [];
  113 |       page.on('pageerror', err => errors.push(err.message));
  114 |       page.on('console', msg => {
  115 |         if (msg.type() === 'error') errors.push(msg.text());
  116 |       });
  117 | 
  118 |       await page.goto(`${BASE_URL}/tassazione-imprese.html`);
  119 |       
  120 |       await page.waitForLoadState('networkidle');
  121 |       
  122 |       // Check title
  123 |       await expect(page.locator('h1')).toContainText('Tassazione');
  124 |       
  125 |       // Check chart exists
  126 |       const chart = page.locator('#gettito-chart');
  127 |       await expect(chart).toBeVisible();
  128 |       const hasCanvas = await page.locator('canvas#gettito-chart').count();
  129 |       expect(hasCanvas).toBe(1);
  130 |       
  131 |       // Test mobile menu
  132 |       const menuButton = page.locator('#mobile-menu-button');
  133 |       if (await menuButton.isVisible()) {
  134 |         await menuButton.click();
  135 |         await expect(page.locator('#mobile-menu')).toBeVisible();
  136 |       }
  137 |       
  138 |       // Test theme toggle
  139 |       await page.click('#theme-toggle');
  140 |       await page.waitForTimeout(300);
  141 |       
  142 |       expect(errors).toEqual([]);
  143 |     });
  144 | 
  145 |     test('Metodologia page: loads correctly', async ({ page }) => {
  146 |       const errors: string[] = [];
  147 |       page.on('pageerror', err => errors.push(err.message));
  148 | 
  149 |       const response = await page.goto(`${BASE_URL}/metodologia.html`);
  150 |       expect(response?.status()).toBe(200);
  151 |       
  152 |       await expect(page.locator('h1')).toContainText('Metodologia');
  153 |       
  154 |       expect(errors).toEqual([]);
  155 |     });
  156 |   });
  157 | }
  158 | 
  159 | test.describe('Home page comuni section', () => {
  160 |   test('No placeholder text, search enabled', async ({ page }) => {
  161 |     await page.goto(`${BASE_URL}/`);
  162 |     
  163 |     // Check NO placeholder warning
  164 |     const bodyText = await page.textContent('body');
  165 |     expect(bodyText).not.toContain('Dati dimostrativi');
  166 |     expect(bodyText).not.toContain('esempi per testare');
  167 |     
  168 |     // Check search input is enabled
  169 |     const searchInput = page.locator('#comuni-search');
  170 |     await expect(searchInput).toBeVisible();
  171 |     const isDisabled = await searchInput.isDisabled();
  172 |     expect(isDisabled).toBe(false);
  173 |     
  174 |     // Check comuni results render
  175 |     const results = page.locator('#comuni-results');
  176 |     await expect(results).toBeVisible();
  177 |   });
  178 | });
  179 | 
```