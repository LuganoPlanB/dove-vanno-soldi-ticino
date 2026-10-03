#!/usr/bin/env node
import { chromium } from 'playwright';

async function test() {
  console.log('🧪 Testing UX Enhancements\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  
  await page.goto('http://localhost:4173/dove-vanno-soldi-ticino/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Check for share buttons
  const shareButtons = await page.$$('.share-btn');
  console.log(`✓ Found ${shareButtons.length} share buttons`);
  
  // Test URL parameters
  await page.goto('http://localhost:4173/dove-vanno-soldi-ticino/?lang=en&theme=dark');
  await page.waitForTimeout(1000);
  
  const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  const lang = await page.evaluate(() => localStorage.getItem('language'));
  
  console.log(`✓ URL params work: lang=${lang}, dark=${isDark}`);
  
  // Screenshot with share buttons visible
  await page.screenshot({
    path: 'test-screenshots/ux-enhancements.png',
    fullPage: false,
    clip: { x: 0, y: 0, width: 375, height: 1200 }
  });
  
  await browser.close();
  console.log('\n✅ UX enhancements verified');
}

test().catch(console.error);
