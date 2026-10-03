#!/usr/bin/env node
import { chromium } from 'playwright';

async function test() {
  console.log('🧪 Testing Mobile Menu Accessibility\n');
  const browser = await chromium.launch({ headless: true });
  
  const viewports = [
    { name: '320px', width: 320, height: 568 },
    { name: '375px', width: 375, height: 812 },
    { name: '430px', width: 430, height: 932 }
  ];
  
  for (const viewport of viewports) {
    for (const theme of ['light', 'dark']) {
      console.log(`Testing ${viewport.name} ${theme}...`);
      
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      
      if (theme === 'dark') {
        await page.evaluate(() => document.documentElement.classList.add('dark'));
      }
      
      await page.goto('http://localhost:4173/dove-vanno-soldi-ticino/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      
      // Check if mobile menu button exists for narrow screens
      const menuButton = await page.$('#mobile-menu-button');
      const metodologiaLink = await page.$('a[href="./metodologia.html"]:not([data-i18n="nav.methodology"])');
      
      if (viewport.width < 400) {
        if (!menuButton) {
          console.error(`  ❌ ${viewport.name}: Mobile menu button not found`);
        } else {
          console.log(`  ✓ ${viewport.name}: Mobile menu button exists`);
          
          // Click to open menu
          await menuButton.click();
          await page.waitForTimeout(300);
          
          const mobileMenu = await page.$('#mobile-menu');
          const isVisible = await mobileMenu?.isVisible();
          
          if (!isVisible) {
            console.error(`  ❌ ${viewport.name}: Mobile menu not visible after click`);
          } else {
            console.log(`  ✓ ${viewport.name}: Mobile menu opens`);
            
            // Check Metodologia link in menu
            const menuLink = await page.$('#mobile-menu a[data-i18n="nav.methodology"]');
            if (!menuLink) {
              console.error(`  ❌ ${viewport.name}: Metodologia link not in mobile menu`);
            } else {
              console.log(`  ✓ ${viewport.name}: Metodologia accessible via mobile menu`);
            }
          }
          
          // Screenshot
          await page.screenshot({
            path: `test-screenshots/mobile-menu-${viewport.name}-${theme}.png`,
            fullPage: false,
            clip: { x: 0, y: 0, width: viewport.width, height: 200 }
          });
        }
      } else {
        // On wider screens, Metodologia should be visible directly
        const metodologiaVisible = await page.isVisible('a.xs\\:inline-block[data-i18n="nav.methodology"]');
        if (!metodologiaVisible) {
          console.error(`  ❌ ${viewport.name}: Metodologia link not visible (should be on wider screens)`);
        } else {
          console.log(`  ✓ ${viewport.name}: Metodologia link visible in navbar`);
        }
      }
      
      // Check language switcher label
      const langButton = await page.$('#lang-button');
      if (langButton) {
        const buttonText = await langButton.innerText();
        if (buttonText && buttonText.match(/IT|EN|DE|FR/)) {
          console.log(`  ✓ ${viewport.name}: Language button shows code: "${buttonText.trim()}"`);
        } else {
          console.error(`  ❌ ${viewport.name}: Language button text unclear: "${buttonText}"`);
        }
      }
      
      await context.close();
    }
  }
  
  await browser.close();
  console.log('\n✅ Mobile menu accessibility test complete');
}

test().catch(console.error);
