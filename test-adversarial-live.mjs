import { chromium } from 'playwright';

const SITE = 'https://tiero.github.io/dove-vanno-soldi-ticino';
const VIEWPORTS = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 667 },
  { name: '430px', width: 430, height: 932 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1920px', width: 1920, height: 1080 }
];

(async () => {
  const browser = await chromium.launch();
  const defects = [];

  for (const vp of VIEWPORTS) {
    for (const theme of ['light', 'dark']) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      
      try {
        await page.goto(SITE, { waitUntil: 'networkidle', timeout: 30000 });
        
        if (theme === 'dark') {
          await page.click('#theme-toggle');
          await page.waitForTimeout(300);
        }
        
        // Check badge text
        const badge = await page.locator('text=Consuntivo 2025').first();
        if (await badge.count() === 0) {
          defects.push(`${vp.name} ${theme}: Missing 'Consuntivo 2025' badge`);
        }
        
        // Check language dropdown opacity
        const langBtn = await page.locator('button:has-text("IT")').or(page.locator('button[aria-label*="language"]')).first();
        if (await langBtn.count() > 0) {
          await langBtn.click();
          await page.waitForTimeout(200);
          
          const menu = await page.locator('#lang-menu').first();
          if (await menu.count() > 0) {
            const bgColor = await menu.evaluate(el => {
              const styles = window.getComputedStyle(el);
              return styles.backgroundColor;
            });
            
            // Check if alpha is 1.0
            const alphaMatch = bgColor.match(/rgba?\([\d\s,]+,?\s*([\d.]+)?\)/);
            const alpha = alphaMatch?.[1] ? parseFloat(alphaMatch[1]) : 1.0;
            
            if (alpha < 1.0) {
              defects.push(`${vp.name} ${theme}: Lang dropdown alpha=${alpha} (expected 1.0)`);
            }
          }
          
          await page.keyboard.press('Escape');
          await page.waitForTimeout(200);
        }
        
        // Check mobile menu (< 430px)
        if (vp.width < 430) {
          const mobileBtn = await page.locator('#mobile-menu-button').first();
          if (await mobileBtn.isVisible()) {
            await mobileBtn.click();
            await page.waitForTimeout(200);
            
            const mobileMenu = await page.locator('#mobile-menu').first();
            if (!(await mobileMenu.isVisible())) {
              defects.push(`${vp.name} ${theme}: Mobile menu button exists but menu not visible`);
            } else {
              const bg = await mobileMenu.evaluate(el => window.getComputedStyle(el).backgroundColor);
              const alphaMatch = bg.match(/rgba?\([\d\s,]+,?\s*([\d.]+)?\)/);
              const alpha = alphaMatch?.[1] ? parseFloat(alphaMatch[1]) : 1.0;
              if (alpha < 1.0) {
                defects.push(`${vp.name} ${theme}: Mobile menu alpha=${alpha} (expected 1.0)`);
              }
            }
          }
        }
        
        // Check for any STIMATO without context
        const stimatoCount = await page.locator('text=/STIMATO/i').count();
        const legendStimato = await page.locator('.inline-flex:has-text("STIMATO")').count();
        if (stimatoCount > legendStimato) {
          defects.push(`${vp.name} ${theme}: Found ${stimatoCount} STIMATO mentions (${legendStimato} in legend)`);
        }
        
        // Check for verified authority costs
        const cdsText = await page.locator('text=/1\'014\'905/i').count();
        const gcText = await page.locator('text=/1\'777\'559/i').count();
        if (cdsText === 0) {
          defects.push(`${vp.name} ${theme}: Missing verified CdS cost (1'014'905)`);
        }
        if (gcText === 0) {
          defects.push(`${vp.name} ${theme}: Missing verified GC indennità (1'777'559)`);
        }
        
      } catch (err) {
        defects.push(`${vp.name} ${theme}: ERROR - ${err.message}`);
      } finally {
        await page.close();
      }
    }
  }
  
  await browser.close();
  
  console.log('\n=== ADVERSARIAL QA RESULTS ===');
  if (defects.length === 0) {
    console.log('✅ NO DEFECTS FOUND');
  } else {
    console.log(`❌ ${defects.length} DEFECTS:`);
    defects.forEach((d, i) => console.log(`  ${i+1}. ${d}`));
  }
  
  process.exit(defects.length);
})();
