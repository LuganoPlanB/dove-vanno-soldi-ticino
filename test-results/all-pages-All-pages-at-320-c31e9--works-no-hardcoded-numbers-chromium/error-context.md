# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 320px >> Storia debito page: chart renders, nav works, no hardcoded numbers
- Location: tests/all-pages.spec.ts:57:5

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
        - button "Menu" [ref=e9] [cursor=pointer]
        - generic [ref=e12]:
          - button "Change language" [active] [ref=e13] [cursor=pointer]:
            - generic [ref=e16]: EN
          - generic [ref=e18]:
            - button "🇮🇹 Italiano" [ref=e19] [cursor=pointer]
            - button "🇬🇧 English" [ref=e20] [cursor=pointer]
            - button "🇩🇪 Deutsch" [ref=e21] [cursor=pointer]
            - button "🇫🇷 Français" [ref=e22] [cursor=pointer]
        - button "Toggle theme" [ref=e23] [cursor=pointer]
  - main [ref=e26]:
    - generic [ref=e29]:
      - generic [ref=e30]:
        - generic [ref=e31]: 📉
        - generic [ref=e32]: Serie storica VERIFICATA - Solo anni con fonti primarie
      - heading "📈 Storia del debito pubblico" [level=1] [ref=e33]
      - paragraph [ref=e34]:
        - text: Evoluzione del debito netto verificato contro documenti primari.
        - strong [ref=e35]: Lacune
        - text: dove i dati non sono verificabili.
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]: Debito 2010
          - generic [ref=e39]: 1313.4M
          - generic [ref=e40]: CHF 1313.4 milioni
        - generic [ref=e41]:
          - generic [ref=e42]: Debito 2025
          - generic [ref=e43]: 3056M
          - generic [ref=e44]: +133% dal 2010
        - generic [ref=e45]:
          - generic [ref=e46]: Pro capite 2025
          - generic [ref=e47]: 8,579
          - generic [ref=e48]: CHF per abitante
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "📈 Serie storica del debito pubblico" [level=2] [ref=e53]
        - paragraph [ref=e54]: Debito netto al 31.12 di ogni anno. Solo anni VERIFICATI contro Consuntivi ufficiali.
      - heading "📊 Tabella anni verificati" [level=3] [ref=e59]
  - contentinfo [ref=e60]:
    - generic [ref=e61]:
      - paragraph [ref=e62]: Tutti i dati sono verificati contro fonti primarie ufficiali del Canton Ticino
      - paragraph [ref=e63]:
        - link "Codice sorgente su GitHub" [ref=e64] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
```

# Test source

```ts
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
  24  |       await expect(page.locator('#hero-metrics')).toBeVisible();
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
> 106 |       expect(errors).toEqual([]);
      |                      ^ Error: expect(received).toEqual(expected) // deep equality
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
  125 |       await expect(chart).toBeVisible();
  126 |       const hasCanvas = await page.locator('canvas#gettito-chart').count();
  127 |       expect(hasCanvas).toBe(1);
  128 |       
  129 |       // Test mobile menu
  130 |       const menuButton = page.locator('#mobile-menu-button');
  131 |       if (await menuButton.isVisible()) {
  132 |         await menuButton.click();
  133 |         await expect(page.locator('#mobile-menu')).toBeVisible();
  134 |       }
  135 |       
  136 |       // Test theme toggle
  137 |       await page.click('#theme-toggle');
  138 |       await page.waitForTimeout(300);
  139 |       
  140 |       expect(errors).toEqual([]);
  141 |     });
  142 | 
  143 |     test('Metodologia page: loads correctly', async ({ page }) => {
  144 |       const errors: string[] = [];
  145 |       page.on('pageerror', err => errors.push(err.message));
  146 | 
  147 |       const response = await page.goto(`${BASE_URL}/metodologia.html`);
  148 |       expect(response?.status()).toBe(200);
  149 |       
  150 |       await expect(page.locator('h1')).toContainText('Metodologia');
  151 |       
  152 |       expect(errors).toEqual([]);
  153 |     });
  154 |   });
  155 | }
  156 | 
  157 | test.describe('Home page comuni section', () => {
  158 |   test('No placeholder text, search enabled', async ({ page }) => {
  159 |     await page.goto(`${BASE_URL}/`);
  160 |     
  161 |     // Check NO placeholder warning
  162 |     const bodyText = await page.textContent('body');
  163 |     expect(bodyText).not.toContain('Dati dimostrativi');
  164 |     expect(bodyText).not.toContain('esempi per testare');
  165 |     
  166 |     // Check search input is enabled
  167 |     const searchInput = page.locator('#comuni-search');
  168 |     await expect(searchInput).toBeVisible();
  169 |     const isDisabled = await searchInput.isDisabled();
  170 |     expect(isDisabled).toBe(false);
  171 |     
  172 |     // Check comuni results render
  173 |     const results = page.locator('#comuni-results');
  174 |     await expect(results).toBeVisible();
  175 |   });
  176 | });
  177 | 
```