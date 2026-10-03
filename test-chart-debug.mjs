import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const errors = [];
  page.on('pageerror', err => errors.push(`PAGE ERROR: ${err.message}`));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`CONSOLE ERROR: ${msg.text()}`);
    if (msg.type() === 'log') console.log(`LOG: ${msg.text()}`);
  });
  
  await page.goto('http://localhost:8766/');
  await page.waitForTimeout(2000);
  
  // Check for chart containers
  const charts = ['spending-function-treemap', 'debt-history-chart', 'health-premiums-chart'];
  
  for (const id of charts) {
    const container = await page.locator(`#${id}`);
    const count = await container.count();
    console.log(`\n${id}:`);
    console.log(`  Container exists: ${count > 0}`);
    
    if (count > 0) {
      const svgCount = await container.locator('svg').count();
      const canvasCount = await container.locator('canvas').count();
      const innerHTML = await container.innerHTML();
      console.log(`  SVG count: ${svgCount}`);
      console.log(`  Canvas count: ${canvasCount}`);
      console.log(`  Inner HTML length: ${innerHTML.length}`);
      console.log(`  First 200 chars: ${innerHTML.substring(0, 200)}`);
    }
  }
  
  console.log(`\nErrors captured: ${errors.length}`);
  errors.forEach(e => console.log(`  - ${e}`));
  
  await browser.close();
})();
