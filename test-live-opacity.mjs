#!/usr/bin/env node
import { chromium } from 'playwright';

const LIVE_URL = 'https://tiero.github.io/dove-vanno-soldi-ticino/';

(async () => {
  console.log('🔬 Testing LIVE site opacity fix\n');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  
  await page.goto(LIVE_URL);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Test light mode
  console.log('Testing light mode...');
  await page.click('#lang-button');
  await page.waitForTimeout(500);
  
  const lightBg = await page.evaluate(() => {
    const menu = document.getElementById('lang-menu');
    const style = window.getComputedStyle(menu);
    const bg = style.backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    return {
      bgColor: bg,
      alpha: match && match[4] ? parseFloat(match[4]) : 1,
      zIndex: style.zIndex
    };
  });
  
  console.log(`  Light: ${lightBg.bgColor}, alpha=${lightBg.alpha}, z=${lightBg.zIndex}`);
  
  await page.screenshot({ path: 'test-screenshots/live-light-dropdown.png' });
  await page.click('body', { position: { x: 10, y: 400 } });
  
  // Test dark mode
  console.log('\nTesting dark mode...');
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });
  await page.waitForTimeout(500);
  
  await page.click('#lang-button');
  await page.waitForTimeout(500);
  
  const darkBg = await page.evaluate(() => {
    const menu = document.getElementById('lang-menu');
    const style = window.getComputedStyle(menu);
    const bg = style.backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    return {
      bgColor: bg,
      alpha: match && match[4] ? parseFloat(match[4]) : 1
    };
  });
  
  console.log(`  Dark:  ${darkBg.bgColor}, alpha=${darkBg.alpha}`);
  
  await page.screenshot({ path: 'test-screenshots/live-dark-dropdown.png' });
  
  await browser.close();
  
  console.log('\n' + '='.repeat(60));
  if (lightBg.alpha === 1 && darkBg.alpha === 1) {
    console.log('✅ OPACITY FIX VERIFIED ON LIVE SITE');
    console.log('   Both light and dark modes: 100% opaque');
  } else {
    console.log('❌ OPACITY STILL HAS ISSUES');
    console.log(`   Light: ${lightBg.alpha}, Dark: ${darkBg.alpha}`);
  }
})();
