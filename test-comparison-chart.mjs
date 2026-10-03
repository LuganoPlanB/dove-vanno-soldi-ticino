#!/usr/bin/env node
import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:4173/dove-vanno-soldi-ticino/';
const VIEWPORTS = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 812 }
];

async function test() {
  const browser = await chromium.launch({ headless: true });
  
  for (const viewport of VIEWPORTS) {
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport, hasTouch: true });
      const page = await context.newPage();
      
      await page.goto(BASE_URL);
      await page.evaluate((isDark) => {
        if (isDark) document.documentElement.classList.add('dark');
      }, theme === 'dark');
      
      await page.reload();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // Scroll to comparison chart
      await page.locator('#health-premiums-chart').scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      await page.screenshot({
        path: `test-screenshots/comparison-${viewport.name}-${theme}.png`,
        fullPage: false
      });
      
      console.log(`✓ ${viewport.name} ${theme}`);
      await context.close();
    }
  }
  
  await browser.close();
  console.log('\n✅ All screenshots captured');
}

test().catch(console.error);
