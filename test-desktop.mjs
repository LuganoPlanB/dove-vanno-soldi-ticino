import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const viewports = [
  { width: 1024, height: 768, name: 'Desktop iPad Landscape' },
  { width: 1280, height: 800, name: 'Desktop 720p' },
  { width: 1920, height: 1080, name: 'Desktop 1080p' },
];

async function testDesktopResponsiveness() {
  const browser = await chromium.launch();
  const screenshotsDir = '/workspace/screenshots';
  const distDir = '/workspace/dist';
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('🖥️  Testing desktop responsiveness...\n');

  for (const viewport of viewports) {
    console.log(`🖥️  Testing ${viewport.name} (${viewport.width}x${viewport.height})`);
    
    const context = await browser.newContext({
      viewport,
      deviceScaleFactor: 1,
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
      path: path.join(screenshotsDir, `desktop-${viewport.width}px.png`),
      fullPage: false,
    });
    
    console.log(`  📸 Screenshot saved: desktop-${viewport.width}px.png\n`);
    
    await context.close();
  }

  await browser.close();
  
  console.log('✨ Desktop responsiveness test complete!');
  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
}

testDesktopResponsiveness().catch(console.error);
