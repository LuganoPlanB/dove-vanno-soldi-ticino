#!/usr/bin/env node
import { chromium } from 'playwright';

async function test() {
  console.log('🧪 Testing for visible CSS on page\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  
  await page.goto('http://localhost:4173/dove-vanno-soldi-ticino/');
  await page.waitForLoadState('networkidle');
  
  // Get all visible text on the page
  const bodyText = await page.evaluate(() => document.body.innerText);
  
  const cssPatterns = [
    '@media',
    'max-width:',
    '.xs:',
    '.xs\\:',
    'display: inline',
    '/* Custom',
    '/* Ensure'
  ];
  
  let failed = false;
  
  for (const pattern of cssPatterns) {
    if (bodyText.includes(pattern)) {
      console.error(`❌ FAIL: Found CSS-like text visible on page: "${pattern}"`);
      console.error(`   Context: ${bodyText.substring(bodyText.indexOf(pattern), bodyText.indexOf(pattern) + 100)}...`);
      failed = true;
    }
  }
  
  if (!failed) {
    console.log('✅ PASS: No CSS-like text visible on page');
  }
  
  // Screenshot
  await page.screenshot({
    path: 'test-screenshots/css-text-check.png',
    fullPage: false,
    clip: { x: 0, y: 0, width: 375, height: 400 }
  });
  
  await browser.close();
  
  if (failed) {
    console.log('\n❌ TEST FAILED: CSS text is visible on page');
    process.exit(1);
  }
  
  console.log('\n✅ TEST PASSED');
  process.exit(0);
}

test().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
