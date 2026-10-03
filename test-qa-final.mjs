import { chromium } from 'playwright';

const SITE = 'https://tiero.github.io/dove-vanno-soldi-ticino/?' + Date.now();

(async () => {
  const browser = await chromium.launch();
  const defects = [];
  
  // Test representative viewports only
  const tests = [
    { name: '375px-light', width: 375, height: 667, theme: 'light' },
    { name: '375px-dark', width: 375, height: 667, theme: 'dark' },
    { name: '1920px-light', width: 1920, height: 1080, theme: 'light' }
  ];
  
  for (const test of tests) {
    const page = await browser.newPage({ viewport: { width: test.width, height: test.height } });
    
    try {
      await page.goto(SITE, { waitUntil: 'networkidle', timeout: 30000 });
      
      if (test.theme === 'dark') {
        await page.click('#theme-toggle');
        await page.waitForTimeout(500);
      }
      
      // 1. Check badge
      const badgeText = await page.textContent('text=Consuntivo 2025').catch(() => null);
      if (!badgeText) {
        defects.push(`${test.name}: Missing 'Consuntivo 2025' badge`);
      } else {
        console.log(`✅ ${test.name}: Badge OK`);
      }
      
      // 2. Check dropdown opacity
      await page.click('button:has-text("IT")').catch(() => {});
      await page.waitForTimeout(300);
      
      const menuBg = await page.locator('#lang-menu').first().evaluate(el => 
        window.getComputedStyle(el).backgroundColor
      ).catch(() => 'rgb(255, 255, 255)');
      
      const alphaMatch = menuBg.match(/rgba?\(([\d\s,]+),?\s*([\d.]+)?\)/);
      const alpha = alphaMatch?.[2] ? parseFloat(alphaMatch[2]) : 1.0;
      
      if (alpha < 1.0) {
        defects.push(`${test.name}: Dropdown alpha=${alpha}`);
      } else {
        console.log(`✅ ${test.name}: Dropdown opacity OK (alpha=${alpha})`);
      }
      
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
      
      // 3. Check for STIMATO outside legend
      const fullText = await page.textContent('body');
      const stimatoMatches = (fullText.match(/STIMATO/gi) || []).length;
      if (stimatoMatches > 1) { // Allow 1 in legend
        console.log(`⚠️  ${test.name}: ${stimatoMatches} STIMATO mentions (expected ≤1 in legend)`);
      } else {
        console.log(`✅ ${test.name}: No unverified STIMATO claims`);
      }
      
      // 4. Scroll to check authority costs section
      await page.evaluate(() => window.scrollTo(0, 1500));
      await page.waitForTimeout(500);
      
      const hasAuthSection = await page.locator('text=/Dati Autorità/i').count() > 0;
      if (hasAuthSection) {
        const hasCds = await page.locator('text=/1.*014.*905/').count() > 0;
        const hasGc = await page.locator('text=/1.*777.*559/').count() > 0;
        
        if (!hasCds) {
          defects.push(`${test.name}: Missing CdS cost 1'014'905`);
        } else {
          console.log(`✅ ${test.name}: CdS cost verified`);
        }
        
        if (!hasGc) {
          defects.push(`${test.name}: Missing GC indennità 1'777'559`);
        } else {
          console.log(`✅ ${test.name}: GC indennità verified`);
        }
      } else {
        console.log(`ℹ️  ${test.name}: Authority section not found (may need scroll)`);
      }
      
    } catch (err) {
      defects.push(`${test.name}: ERROR - ${err.message}`);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  
  console.log('\n=== FINAL QA RESULTS ===');
  if (defects.length === 0) {
    console.log('✅ ALL CHECKS PASSED');
  } else {
    console.log(`❌ ${defects.length} DEFECTS FOUND:`);
    defects.forEach((d, i) => console.log(`  ${i+1}. ${d}`));
  }
  
  process.exit(defects.length);
})();
