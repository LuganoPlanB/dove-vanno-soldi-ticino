import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const logs = [];
  const errors = [];
  
  page.on('pageerror', err => errors.push(`PAGE ERROR: ${err.message}\n${err.stack}`));
  page.on('console', msg => {
    const text = msg.text();
    logs.push(`${msg.type().toUpperCase()}: ${text}`);
    if (msg.type() === 'error') errors.push(text);
  });
  
  console.log('Loading https://tiero.github.io/dove-vanno-soldi-ticino/\n');
  await page.goto('https://tiero.github.io/dove-vanno-soldi-ticino/');
  await page.waitForTimeout(3000);
  
  // Check if main.js loaded
  const scripts = await page.locator('script[src*="main"]').count();
  console.log(`Main script tags: ${scripts}`);
  
  // Check chart containers
  const charts = ['spending-function-treemap', 'debt-history-chart', 'health-premiums-chart'];
  
  for (const id of charts) {
    const container = await page.locator(`#${id}`);
    const count = await container.count();
    
    if (count > 0) {
      const svgCount = await container.locator('svg').count();
      const innerHTML = await container.innerHTML();
      console.log(`\n${id}: SVG=${svgCount}, HTML length=${innerHTML.length}`);
      if (innerHTML.length > 0 && innerHTML.length < 500) {
        console.log(`  Content: ${innerHTML}`);
      }
    }
  }
  
  console.log(`\n=== CONSOLE LOGS (${logs.length}) ===`);
  logs.slice(0, 20).forEach(log => console.log(log));
  
  console.log(`\n=== ERRORS (${errors.length}) ===`);
  errors.forEach(err => console.log(err));
  
  await browser.close();
})();
