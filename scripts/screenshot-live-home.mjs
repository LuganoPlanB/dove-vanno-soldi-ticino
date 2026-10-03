import { chromium } from '@playwright/test';

const url = 'https://tiero.github.io/dove-vanno-soldi-ticino/';
const width = 390;

const browser = await chromium.launch();

// Light mode
const lightPage = await browser.newPage({
  viewport: { width, height: 2000 }
});
await lightPage.goto(url);
await lightPage.waitForLoadState('networkidle');
await lightPage.waitForTimeout(2000);
await lightPage.screenshot({ 
  path: '/workspace/live-home-390px-light.png',
  fullPage: true
});
console.log('✓ Captured light mode screenshot');

// Dark mode
const darkPage = await browser.newPage({
  viewport: { width, height: 2000 }
});
await darkPage.goto(url);
await darkPage.waitForLoadState('networkidle');
// Toggle dark mode
await darkPage.click('#theme-toggle');
await darkPage.waitForTimeout(1000);
await darkPage.screenshot({ 
  path: '/workspace/live-home-390px-dark.png',
  fullPage: true
});
console.log('✓ Captured dark mode screenshot');

await browser.close();
console.log('\nScreenshots saved:');
console.log('  - /workspace/live-home-390px-light.png');
console.log('  - /workspace/live-home-390px-dark.png');
