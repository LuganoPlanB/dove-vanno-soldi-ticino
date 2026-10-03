import { test, expect } from '@playwright/test';

const BASE_URL = 'https://tiero.github.io/dove-vanno-soldi-ticino';

test.describe('Production site smoke tests', () => {
  test('index.html loads (HTTP 200)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Ticino');
  });

  test('metodologia.html loads (HTTP 200)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/metodologia.html`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Metodologia');
  });

  test('storia-debito.html loads (HTTP 200)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/storia-debito.html`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('debito');
    
    // Check chart canvas exists
    await expect(page.locator('#debito-chart')).toBeVisible();
    
    // Check no console errors
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.waitForTimeout(2000);
    expect(errors).toEqual([]);
  });

  test('tassazione-imprese.html loads (HTTP 200)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/tassazione-imprese.html`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Tassazione');
    
    // Check chart canvas exists
    await expect(page.locator('#gettito-chart')).toBeVisible();
  });

  test('data JSON files load', async ({ page }) => {
    const dataFiles = [
      'storia-debito-pubblico.json',
      'tassazione-imprese.json',
      'comuni-finanze-2024.json'
    ];
    
    for (const file of dataFiles) {
      const response = await page.goto(`${BASE_URL}/data/${file}`);
      expect(response?.status()).toBe(200);
      const json = await response?.json();
      expect(json).toBeTruthy();
    }
  });
});
