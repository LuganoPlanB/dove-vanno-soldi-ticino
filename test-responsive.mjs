import { chromium } from 'playwright';

const BASE_PATH = '/dove-vanno-soldi-ticino/';
const WIDTHS = [320, 375, 430];

async function testResponsive() {
  console.log('🧪 Testing responsive design at multiple widths...\n');
  
  // Start vite preview
  const { spawn } = await import('child_process');
  console.log('Starting vite preview server...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    cwd: '/workspace',
    detached: false
  });
  
  // Wait for server
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  const browser = await chromium.launch({ headless: true });
  
  const results = {
    passed: [],
    failed: []
  };
  
  try {
    for (const width of WIDTHS) {
      console.log(`\n📱 Testing at ${width}px width...`);
      
      const context = await browser.newContext({
        viewport: { width, height: 667 },
        deviceScaleFactor: 2,
      });
      const page = await context.newPage();
      
      const logs = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          logs.push(`[error] ${msg.text()}`);
        }
      });
      
      // Test index page
      await page.goto(`http://localhost:4173${BASE_PATH}`, { 
        waitUntil: 'networkidle',
        timeout: 15000 
      });
      
      await page.waitForTimeout(3000);
      
      // Check horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      
      // Check charts rendered
      const chartCount = await page.evaluate(() => {
        return document.querySelectorAll('.chart-container svg').length;
      });
      
      // Test theme toggle
      const themeToggleWorks = await page.evaluate(() => {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return false;
        
        const initialDark = document.documentElement.classList.contains('dark');
        toggle.click();
        const afterClick = document.documentElement.classList.contains('dark');
        
        return initialDark !== afterClick; // Should have toggled
      });
      
      // Test metodologia link
      await page.click('a[href="./metodologia.html"]');
      await page.waitForTimeout(2000);
      
      const metodologiaLoaded = await page.evaluate(() => {
        return document.title.includes('Metodologia') || document.body.textContent.includes('Metodologia');
      });
      
      // Screenshot
      await page.goto(`http://localhost:4173${BASE_PATH}`);
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: `/workspace/screenshots/responsive-${width}px.png`,
        fullPage: true
      });
      
      // Results
      const testResult = {
        width,
        overflow: hasOverflow,
        charts: chartCount,
        themeToggle: themeToggleWorks,
        metodologia: metodologiaLoaded,
        errors: logs.length
      };
      
      console.log(`   Horizontal overflow: ${hasOverflow ? '❌ YES (FAIL)' : '✅ NO'}`);
      console.log(`   Charts rendered: ${chartCount >= 5 ? '✅' : '❌'} ${chartCount}/5`);
      console.log(`   Theme toggle: ${themeToggleWorks ? '✅ WORKS' : '❌ BROKEN'}`);
      console.log(`   Metodologia page: ${metodologiaLoaded ? '✅ LOADS' : '❌ 404'}`);
      console.log(`   Console errors: ${logs.length === 0 ? '✅ 0' : `❌ ${logs.length}`}`);
      console.log(`   📸 Screenshot: screenshots/responsive-${width}px.png`);
      
      const passed = !hasOverflow && chartCount >= 5 && themeToggleWorks && metodologiaLoaded && logs.length === 0;
      
      if (passed) {
        results.passed.push(width);
      } else {
        results.failed.push({ width, ...testResult });
      }
      
      await context.close();
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Passed: ${results.passed.length}/${WIDTHS.length} widths (${results.passed.join(', ')}px)`);
    
    if (results.failed.length > 0) {
      console.log(`❌ Failed: ${results.failed.length} widths`);
      results.failed.forEach(f => {
        console.log(`   ${f.width}px: overflow=${f.overflow}, charts=${f.charts}, theme=${f.themeToggle}, metodologia=${f.metodologia}`);
      });
    }
    
    console.log('\n');
    
    if (results.failed.length === 0) {
      console.log('✅ ALL TESTS PASSED\n');
      process.exit(0);
    } else {
      console.log('❌ SOME TESTS FAILED\n');
      process.exit(1);
    }
    
  } finally {
    await browser.close();
    server.kill();
  }
}

testResponsive().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
