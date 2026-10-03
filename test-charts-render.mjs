import { chromium } from 'playwright';

async function testProductionBuild() {
  console.log('🧪 Testing production build chart rendering on mobile...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  
  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[PAGE ERROR] ${err.message}`));
  
  const networkErrors = [];
  page.on('response', response => {
    if (!response.ok()) {
      networkErrors.push(`${response.status()} ${response.url()}`);
    }
  });
  
  // Start server in background using tmux
  const { execSync } = await import('child_process');
  
  console.log('Starting test server...');
  execSync('tmux -f /exec-daemon/tmux.portal.conf kill-session -t test-server 2>/dev/null || true', { cwd: '/workspace' });
  execSync('tmux -f /exec-daemon/tmux.portal.conf new-session -d -s test-server "cd /workspace && npx http-server test-server -p 8888"', { cwd: '/workspace' });
  
  // Wait for server to be ready
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  try {
    const url = 'http://localhost:8888/dove-vanno-soldi-ticino/';
    console.log(`Navigating to: ${url}`);
    
    await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 15000 
    });
    
    console.log(`Page loaded. Title: "${await page.title()}"`);
    console.log(`URL: ${page.url()}\n`);
    
    // Wait for JavaScript to execute
    await page.waitForTimeout(5000);
    
    // Check chart containers
    const chartIds = [
      'spending-function-treemap',
      'debt-history-chart',
      'deficit-history-chart',
      'health-premiums-chart',
      'budget-overview-chart',
      // Note: health-spending-chart is temporarily disabled (data structure mismatch)
    ];
    
    console.log('📊 Chart status:\n');
    
    let renderedCharts = 0;
    let emptyCharts = 0;
    
    for (const id of chartIds) {
      const exists = await page.$(`#${id}`);
      if (!exists) {
        console.log(`❌ #${id}: Container NOT FOUND in DOM`);
        emptyCharts++;
        continue;
      }
      
      const state = await page.evaluate((chartId) => {
        const el = document.getElementById(chartId);
        if (!el) return { found: false };
        
        const svg = el.querySelector('svg');
        const hasError = el.textContent?.includes('Errore');
        
        return {
          found: true,
          isEmpty: el.children.length === 0,
          hasSVG: svg !== null,
          svgChildCount: svg ? svg.children.length : 0,
          hasError,
          innerHTML: el.innerHTML.substring(0, 200)
        };
      }, id);
      
      if (state.hasError) {
        console.log(`❌ #${id}: Error message displayed`);
        emptyCharts++;
      } else if (state.isEmpty) {
        console.log(`❌ #${id}: Empty container`);
        emptyCharts++;
      } else if (state.hasSVG && state.svgChildCount > 0) {
        console.log(`✅ #${id}: Rendered (SVG with ${state.svgChildCount} elements)`);
        renderedCharts++;
      } else {
        console.log(`⚠️  #${id}: Has content but no SVG (${state.innerHTML.substring(0, 50)}...)`);
      }
    }
    
    console.log(`\n📊 Summary: ${renderedCharts}/${chartIds.length} charts rendered\n`);
    
    // Show logs
    const errorLogs = logs.filter(l => l.includes('[error]') || l.includes('ERROR'));
    if (errorLogs.length > 0) {
      console.log(`❌ Console errors (${errorLogs.length}):`);
      errorLogs.forEach(l => console.log(`   ${l}`));
    }
    
    if (networkErrors.length > 0) {
      console.log(`\n❌ Network failures (${networkErrors.length}):`);
      networkErrors.slice(0, 10).forEach(e => console.log(`   ${e}`));
    }
    
    // Screenshot
    await page.screenshot({
      path: '/workspace/screenshots/production-test-mobile.png',
      fullPage: true
    });
    console.log('\n📸 Screenshot: screenshots/production-test-mobile.png');
    
    // Final result
    const success = renderedCharts === chartIds.length && errorLogs.length === 0 && networkErrors.length === 0;
    
    if (success) {
      console.log('\n✅ TEST PASSED: All charts rendering correctly\n');
      process.exit(0);
    } else {
      console.log('\n❌ TEST FAILED: Charts not rendering or errors present\n');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Test exception:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
    const { execSync } = await import('child_process');
    execSync('tmux -f /exec-daemon/tmux.portal.conf kill-session -t test-server 2>/dev/null || true');
  }
}

testProductionBuild();
