import { chromium } from 'playwright';

async function debugCharts() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  
  // Capture all console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    console.log(`[CONSOLE ${type.toUpperCase()}]`, text);
  });
  
  // Capture JS errors with stack trace
  page.on('pageerror', err => {
    console.error('[PAGE ERROR]', err.message);
    console.error('[STACK]', err.stack);
  });
  
  console.log('🔍 Loading http://localhost:4173/...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Check for empty chart containers
  const charts = await page.locator('.chart-container').all();
  console.log(`\n📊 Found ${charts.length} chart containers`);
  
  for (let i = 0; i < charts.length; i++) {
    const id = await charts[i].getAttribute('id');
    const svgCount = await charts[i].locator('svg, canvas').count();
    console.log(`  - ${id || 'unnamed'}: ${svgCount > 0 ? '✅ HAS CONTENT' : '❌ EMPTY'}`);
  }
  
  await browser.close();
}

debugCharts().catch(console.error);
