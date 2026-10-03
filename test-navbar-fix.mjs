#!/usr/bin/env node
import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:4173/dove-vanno-soldi-ticino/';
const VIEWPORTS = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 812 },
  { name: '430px', width: 430, height: 932 }
];
const LANGUAGES = ['it', 'en', 'de', 'fr'];

async function test() {
  console.log('🧪 Testing Navbar Fix\n');
  const browser = await chromium.launch({ headless: true });
  const results = [];
  
  for (const viewport of VIEWPORTS) {
    for (const lang of LANGUAGES) {
      for (const theme of ['light', 'dark']) {
        const context = await browser.newContext({ viewport, hasTouch: true, deviceScaleFactor: 2 });
        const page = await context.newPage();
        
        await page.goto(BASE_URL);
        await page.evaluate(({ language, isDark }) => {
          localStorage.setItem('language', language);
          if (isDark) document.documentElement.classList.add('dark');
        }, { language: lang, isDark: theme === 'dark' });
        
        await page.reload();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1500);
        
        // Check navbar height and hero overlap
        const navCheck = await page.evaluate(() => {
          const nav = document.querySelector('nav');
          const hero = document.querySelector('main section:first-child');
          if (!nav || !hero) return { error: 'Elements not found' };
          
          const navRect = nav.getBoundingClientRect();
          const heroRect = hero.getBoundingClientRect();
          
          return {
            navHeight: navRect.height,
            navBottom: navRect.bottom,
            heroTop: heroRect.top,
            overlap: navRect.bottom > heroRect.top,
            titleWraps: nav.querySelector('[data-i18n="nav.title"]')?.scrollHeight > 40
          };
        });
        
        const testName = `${viewport.name}-${lang}-${theme}`;
        
        if (navCheck.overlap) {
          console.log(`❌ ${testName}: Navbar overlaps hero (nav bottom: ${navCheck.navBottom}, hero top: ${navCheck.heroTop})`);
          results.push({ test: testName, passed: false, reason: 'Navbar overlaps hero' });
        } else if (navCheck.titleWraps) {
          console.log(`⚠️  ${testName}: Title may wrap (height > 40px)`);
          results.push({ test: testName, passed: false, reason: 'Title wrapping' });
        } else {
          console.log(`✓ ${testName}: OK (nav: ${Math.round(navCheck.navHeight)}px, gap: ${Math.round(navCheck.heroTop - navCheck.navBottom)}px)`);
          results.push({ test: testName, passed: true });
        }
        
        // Screenshot navbar area
        await page.screenshot({
          path: `test-screenshots/navbar-${testName}.png`,
          clip: { x: 0, y: 0, width: viewport.width, height: Math.min(200, viewport.height) }
        });
        
        await context.close();
      }
    }
  }
  
  await browser.close();
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  
  console.log(`\n📊 Results: ${passed}/${results.length} passed`);
  
  if (failed > 0) {
    console.log(`\n❌ ${failed} tests failed`);
    process.exit(1);
  }
  
  console.log('\n✅ All navbar tests passed');
  process.exit(0);
}

test().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
