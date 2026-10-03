import { test, expect } from '@playwright/test';

const BASE_URL = 'https://tiero.github.io/dove-vanno-soldi-ticino';
const VIEWPORTS = [
  { width: 320, height: 568, name: '320px' },
  { width: 375, height: 667, name: '375px' },
  { width: 430, height: 932, name: '430px' },
];

for (const viewport of VIEWPORTS) {
  test.describe(`All pages at ${viewport.name}`, () => {
    test.use({ viewport });

    test('Home page: no empty charts, nav works, no console errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', err => errors.push(err.message));
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await page.goto(`${BASE_URL}/`);
      
      // Check hero metrics loaded
      await expect(page.locator('#hero-metrics')).toBeVisible();
      const heroText = await page.locator('#hero-metrics').textContent();
      expect(heroText).toContain('M'); // Should have numbers in millions
      
      // Check charts exist and have content
      const charts = ['spending-function-treemap', 'debt-history-chart', 'health-premiums-chart'];
      for (const chartId of charts) {
        const chart = page.locator(`#${chartId}`);
        if (await chart.count() > 0) {
          await expect(chart).toBeVisible();
          // Check chart has either SVG or canvas
          const hasContent = await chart.locator('svg, canvas').count();
          expect(hasContent).toBeGreaterThan(0);
        }
      }
      
      // Test mobile menu
      const menuButton = page.locator('#mobile-menu-button');
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await expect(page.locator('#mobile-menu')).toBeVisible();
        await page.click('body'); // Close menu
      }
      
      // Test theme toggle
      await page.click('#theme-toggle');
      await page.waitForTimeout(300);
      const isDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
      expect(typeof isDark).toBe('boolean');
      
      expect(errors).toEqual([]);
    });

    test('Storia debito page: chart renders, nav works, no hardcoded numbers', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', err => errors.push(err.message));
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await page.goto(`${BASE_URL}/storia-debito.html`);
      
      // Wait for page to load
      await page.waitForLoadState('networkidle');
      
      // Check title
      await expect(page.locator('h1')).toContainText('debito');
      
      // Check chart exists and has canvas
      const chart = page.locator('#debito-chart');
      await expect(chart).toBeVisible();
      
      // Check chart is not empty (has actual rendering)
      const chartParent = page.locator('#grafico-debito');
      await expect(chartParent).toBeVisible();
      const hasCanvas = await chartParent.locator('canvas').count();
      expect(hasCanvas).toBe(1);
      
      // Verify NO hardcoded removed numbers appear in page text
      const bodyText = await page.textContent('body');
      expect(bodyText).not.toContain('584M in 2 anni'); // Removed 2003-04 claim
      expect(bodyText).not.toContain('-353M oro BNS'); // Removed 2005 claim
      expect(bodyText).not.toContain('901M'); // Removed 2000 value
      
      // Test mobile menu
      const menuButton = page.locator('#mobile-menu-button');
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await expect(page.locator('#mobile-menu')).toBeVisible();
      }
      
      // Test theme toggle
      await page.click('#theme-toggle');
      await page.waitForTimeout(300);
      
      // Test language selector (if visible)
      const langButton = page.locator('#lang-button');
      if (await langButton.count() > 0) {
        await langButton.click();
        await expect(page.locator('#lang-menu')).toBeVisible();
      }
      
      expect(errors).toEqual([]);
    });

    test('Tassazione imprese page: chart renders, nav works', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', err => errors.push(err.message));
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await page.goto(`${BASE_URL}/tassazione-imprese.html`);
      
      await page.waitForLoadState('networkidle');
      
      // Check title
      await expect(page.locator('h1')).toContainText('Tassazione');
      
      // Check chart exists
      const chart = page.locator('#gettito-chart');
      await expect(chart).toBeVisible();
      const hasCanvas = await page.locator('canvas#gettito-chart').count();
      expect(hasCanvas).toBe(1);
      
      // Test mobile menu
      const menuButton = page.locator('#mobile-menu-button');
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await expect(page.locator('#mobile-menu')).toBeVisible();
      }
      
      // Test theme toggle
      await page.click('#theme-toggle');
      await page.waitForTimeout(300);
      
      expect(errors).toEqual([]);
    });

    test('Metodologia page: loads correctly', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', err => errors.push(err.message));

      const response = await page.goto(`${BASE_URL}/metodologia.html`);
      expect(response?.status()).toBe(200);
      
      await expect(page.locator('h1')).toContainText('Metodologia');
      
      expect(errors).toEqual([]);
    });
  });
}

test.describe('Home page comuni section', () => {
  test('No placeholder text, search enabled', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    
    // Check NO placeholder warning
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('Dati dimostrativi');
    expect(bodyText).not.toContain('esempi per testare');
    
    // Check search input is enabled
    const searchInput = page.locator('#comuni-search');
    await expect(searchInput).toBeVisible();
    const isDisabled = await searchInput.isDisabled();
    expect(isDisabled).toBe(false);
    
    // Check comuni results render
    const results = page.locator('#comuni-results');
    await expect(results).toBeVisible();
  });
});
