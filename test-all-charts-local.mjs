import { chromium } from '@playwright/test';
import { spawn } from 'child_process';

// Start local server
const server = spawn('python3', ['-m', 'http.server', '8899'], { cwd: '/workspace/dist' });
await new Promise(resolve => setTimeout(resolve, 2000));

const browser = await chromium.launch();
const page = await browser.newPage();

const errors = [];
const requests = [];

page.on('pageerror', err => errors.push(`PAGE: ${err.message}`));
page.on('console', msg => { if (msg.type() === 'error') errors.push(`CONSOLE: ${msg.text()}`); });
page.on('response', resp => {
  if (resp.url().includes('data/') || resp.url().includes('.json')) {
    requests.push({ url: resp.url().split('/').pop(), status: resp.status() });
  }
});

console.log('Testing http://localhost:8899/dove-vanno-soldi-ticino/\n');
await page.goto('http://localhost:8899/dove-vanno-soldi-ticino/');
await page.waitForTimeout(3000);

console.log('=== DATA FILE REQUESTS ===');
requests.forEach(r => console.log(`${r.status === 200 ? '✓' : '✗'} ${r.status} ${r.url}`));

console.log('\n=== CHART RENDERING ===');
const charts = [
  'spending-function-treemap',
  'debt-history-chart',
  'health-premiums-chart',
  'budget-overview-chart'
];

for (const id of charts) {
  const container = await page.locator(`#${id}`);
  const exists = await container.count() > 0;
  if (exists) {
    const svgCount = await container.locator('svg').count();
    const canvasCount = await container.locator('canvas').count();
    const hasContent = svgCount + canvasCount > 0;
    console.log(`${hasContent ? '✓' : '✗'} ${id}: SVG=${svgCount} Canvas=${canvasCount}`);
  } else {
    console.log(`✗ ${id}: NOT FOUND`);
  }
}

console.log(`\n=== ERRORS (${errors.length}) ===`);
errors.forEach(e => console.log(`  ${e}`));

// Screenshot
await page.screenshot({ path: '/tmp/homepage-charts.png', fullPage: true });
console.log('\n✓ Screenshot saved to /tmp/homepage-charts.png');

await browser.close();
server.kill();
process.exit(errors.length > 0 ? 1 : 0);
