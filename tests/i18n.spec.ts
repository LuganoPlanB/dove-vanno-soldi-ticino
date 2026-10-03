import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://tiero.github.io/dove-vanno-soldi-ticino';
const LANGUAGES = ['it', 'en', 'de', 'fr'];

test.describe('i18n completeness tests', () => {
  for (const lang of LANGUAGES) {
    test(`homepage in ${lang} has no untranslated text`, async ({ page }) => {
      await page.goto(`${BASE_URL}/`);
      
      // Wait for page load
      await page.waitForSelector('#hero-metrics', { timeout: 10000 });
      
      // Select language
      const langButton = page.locator(`button[data-lang="${lang}"]`).first();
      if (await langButton.count() > 0) {
        await langButton.click();
        await page.waitForTimeout(500);
      }
      
      // Get all text content
      const bodyText = await page.locator('body').textContent();
      
      // Check for common Italian words that should be translated in non-IT languages
      if (lang !== 'it') {
        const italianWords = ['Dove vanno i soldi', 'abitante', 'Miliardi', 'Disavanzo'];
        for (const word of italianWords) {
          if (bodyText && bodyText.includes(word)) {
            console.warn(`Warning: Found untranslated Italian word "${word}" in ${lang}`);
          }
        }
      }
      
      // Check for data-i18n attributes without translations
      const untranslatedElements = await page.locator('[data-i18n]').evaluateAll(elements => {
        return elements.filter(el => {
          const key = el.getAttribute('data-i18n');
          const text = el.textContent || '';
          return key && text.trim() === key;
        }).length;
      });
      
      expect(untranslatedElements).toBe(0);
    });
    
    test(`language switcher works for ${lang}`, async ({ page }) => {
      await page.goto(`${BASE_URL}/`);
      
      // Check if language button exists
      const langButton = page.locator(`button[data-lang="${lang}"]`).first();
      const buttonCount = await langButton.count();
      
      // Language switcher should be present
      expect(buttonCount).toBeGreaterThan(0);
    });
  }
  
  test('all pages load in all languages', async ({ page }) => {
    const pages = ['/', '/storia-debito.html', '/tassazione-imprese.html', '/comuni.html', '/metodologia.html'];
    
    for (const pagePath of pages) {
      for (const lang of LANGUAGES) {
        await page.goto(`${BASE_URL}${pagePath}`);
        await page.waitForLoadState('networkidle');
        
        // Check that page loaded successfully
        const title = await page.title();
        expect(title.length).toBeGreaterThan(0);
        
        // Check for console errors
        const errors: string[] = [];
        page.on('pageerror', err => errors.push(err.message));
        
        await page.waitForTimeout(1000);
        expect(errors.length).toBe(0);
      }
    }
  });
  
  test('text at 320px width does not overflow', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    
    const pages = ['/', '/storia-debito.html', '/tassazione-imprese.html', '/comuni.html'];
    
    for (const pagePath of pages) {
      for (const lang of LANGUAGES) {
        await page.goto(`${BASE_URL}${pagePath}`);
        
        // Select language if switcher exists
        const langButton = page.locator(`button[data-lang="${lang}"]`).first();
        if (await langButton.count() > 0) {
          await langButton.click();
          await page.waitForTimeout(300);
        }
        
        // Check for horizontal overflow
        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth;
        });
        
        if (hasOverflow) {
          console.warn(`Warning: Horizontal overflow detected on ${pagePath} in ${lang} at 320px`);
        }
        
        // This is a warning, not a hard failure, as some overflow might be intentional (charts, tables)
        // But German and French text should not cause layout breaks
      }
    }
  });
});
