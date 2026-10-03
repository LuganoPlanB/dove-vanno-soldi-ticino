import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  console.log('Loading site...');
  await page.goto('https://tiero.github.io/dove-vanno-soldi-ticino/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  
  console.log('\n=== LIVE SITE QA CHECKS ===');
  
  // Badge
  const badge = await page.locator('text=Consuntivo 2025').first().textContent().catch(() => null);
  console.log(`  1. Badge: ${badge ? '✅ "' + badge.trim() + '"' : '❌ NOT FOUND'}`);
  
  // Dropdown opacity
  await page.click('button:has-text("IT")').catch(() => {});
  await page.waitForTimeout(400);
  const menuBg = await page.locator('#lang-menu').evaluate(el => window.getComputedStyle(el).backgroundColor).catch(() => null);
  const alphaMatch = menuBg ? menuBg.match(/rgba?\([\d\s,]+,?\s*([\d.]+)?\)/) : null;
  const alpha = alphaMatch && alphaMatch[1] ? alphaMatch[1] : '1.0';
  console.log(`  2. Dropdown alpha: ${alpha === '1.0' || !menuBg ? '✅' : '❌'} ${alpha}`);
  
  // Authority costs
  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(800);
  
  const fullText = await page.textContent('body');
  const hasCds = /1[''`´]014[''`´]905/.test(fullText);
  const hasGc = /1[''`´]777[''`´]559/.test(fullText);
  
  console.log(`  3. CdS cost 1'014'905: ${hasCds ? '✅ Found' : '❌ Missing'}`);
  console.log(`  4. GC indennità 1'777'559: ${hasGc ? '✅ Found' : '❌ Missing'}`);
  
  // STIMATO count
  const stimato = (fullText.match(/STIMATO/gi) || []).length;
  console.log(`  5. STIMATO mentions: ${stimato <= 1 ? '✅' : '⚠️'} ${stimato} (≤1 expected)`);
  
  await browser.close();
  
  const passed = badge && alpha === '1.0' && hasCds && hasGc && stimato <= 1;
  console.log(`\n${passed ? '✅ ALL CRITICAL CHECKS PASSED' : '❌ SOME CHECKS FAILED'}`);
  process.exit(passed ? 0 : 1);
})();
