import { chromium } from 'playwright';

const BASE_PATH = '/dove-vanno-soldi-ticino/';

async function testI18n() {
  console.log('🧪 Testing i18n functionality...\n');
  
  const { spawn } = await import('child_process');
  console.log('Starting vite preview...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    cwd: '/workspace',
    detached: false
  });
  
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();
  
  try {
    console.log('Testing index page...\n');
    
    await page.goto(`http://localhost:4173${BASE_PATH}`, { 
      waitUntil: 'networkidle',
      timeout: 15000 
    });
    
    await page.waitForTimeout(3000);
    
    // Check language switcher exists
    const langSwitcher = await page.$('#lang-switcher');
    console.log(`Language switcher: ${langSwitcher ? '✅ EXISTS' : '❌ NOT FOUND'}`);
    
    // Check charts rendered
    const chartCount = await page.evaluate(() => {
      return document.querySelectorAll('.chart-container svg').length;
    });
    console.log(`Charts rendered: ${chartCount >= 5 ? '✅' : '❌'} ${chartCount}/5\n`);
    
    // Test language switching
    const languages = ['en', 'de', 'fr', 'it'];
    
    for (const lang of languages) {
      console.log(`Testing ${lang.toUpperCase()}...`);
      
      // Click language switcher
      await page.click('#lang-button');
      await page.waitForTimeout(500);
      
      // Select language
      await page.click(`[data-lang="${lang}"]`);
      await page.waitForTimeout(2000); // Wait for reload
      
      // Check if page reloaded with correct language
      const currentLang = await page.evaluate(() => {
        return localStorage.getItem('language');
      });
      
      const htmlLang = await page.evaluate(() => {
        return document.documentElement.lang;
      });
      
      // Check chart titles are translated
      const chartTitles = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.chart-container h3')).map(h => h.textContent);
      });
      
      console.log(`   Language set: ${currentLang === lang ? '✅' : '❌'} ${currentLang}`);
      console.log(`   HTML lang: ${htmlLang === lang ? '✅' : '❌'} ${htmlLang}`);
      console.log(`   Chart titles: ${chartTitles[0]}`);
      
      // Screenshot
      await page.screenshot({
        path: `/workspace/screenshots/i18n-${lang}.png`,
        fullPage: true
      });
      console.log(`   📸 Screenshot: screenshots/i18n-${lang}.png\n`);
    }
    
    console.log('✅ I18N TEST COMPLETED\n');
    process.exit(0);
    
  } finally {
    await browser.close();
    server.kill();
  }
}

testI18n().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
