import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const viewports = [
  { width: 320, height: 568, name: 'iPhone SE' },
  { width: 375, height: 667, name: 'iPhone 8' },
  { width: 430, height: 932, name: 'iPhone 14 Pro Max' },
];

async function testMobileResponsiveness() {
  const browser = await chromium.launch();
  const screenshotsDir = '/workspace/screenshots';
  const distDir = '/workspace/dist';
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('🧪 Testing mobile responsiveness...\n');

  for (const viewport of viewports) {
    console.log(`📱 Testing ${viewport.name} (${viewport.width}x${viewport.height})`);
    
    const context = await browser.newContext({
      viewport,
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    
    await page.goto(`file://${path.join(distDir, 'index.html')}`);
    
    await page.waitForTimeout(2000);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const innerWidth = await page.evaluate(() => window.innerWidth);
    
    const hasOverflow = scrollWidth > innerWidth;
    
    console.log(`  Document scroll width: ${scrollWidth}px`);
    console.log(`  Window inner width: ${innerWidth}px`);
    console.log(`  ${hasOverflow ? '❌ OVERFLOW DETECTED' : '✅ No horizontal overflow'}\n`);
    
    await page.screenshot({
      path: path.join(screenshotsDir, `mobile-${viewport.width}px.png`),
      fullPage: true,
    });
    
    console.log(`  📸 Screenshot saved: mobile-${viewport.width}px.png\n`);
    
    await context.close();
  }

  await browser.close();
  
  console.log('✨ Mobile responsiveness test complete!');
  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
}

testMobileResponsiveness().catch(console.error);
