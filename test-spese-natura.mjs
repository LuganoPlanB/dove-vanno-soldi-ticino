#!/usr/bin/env node
import { chromium } from 'playwright';

async function test() {
  console.log('🧪 Testing Spese per Natura Section\n');
  const browser = await chromium.launch({ headless: true });
  
  // Test desktop
  const contextDesktop = await browser.newContext({ viewport: { width: 1280, height: 1024 } });
  const pageDesktop = await contextDesktop.newPage();
  
  await pageDesktop.goto('http://localhost:4173/dove-vanno-soldi-ticino/');
  await pageDesktop.waitForLoadState('networkidle');
  await pageDesktop.waitForTimeout(3000);
  
  // Check section exists
  const section = await pageDesktop.$('#spese-natura');
  console.log(section ? '✓ Spese natura section exists' : '❌ Section missing');
  
  // Check treemap container
  const treemap = await pageDesktop.$('#spese-natura-treemap');
  console.log(treemap ? '✓ Treemap container exists' : '❌ Treemap missing');
  
  // Check details
  const details = await pageDesktop.$('#spese-natura-details');
  const detailsContent = await details?.innerHTML();
  const hasCards = detailsContent && detailsContent.includes('bg-card');
  console.log(hasCards ? '✓ Detail cards rendered' : '❌ Details missing');
  
  // Screenshot desktop
  await pageDesktop.screenshot({
    path: 'test-screenshots/spese-natura-desktop.png',
    fullPage: false,
    clip: { x: 0, y: 1800, width: 1280, height: 1200 }
  });
  
  await contextDesktop.close();
  
  // Test mobile
  const contextMobile = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const pageMobile = await contextMobile.newPage();
  
  await pageMobile.goto('http://localhost:4173/dove-vanno-soldi-ticino/');
  await pageMobile.waitForLoadState('networkidle');
  await pageMobile.waitForTimeout(3000);
  
  // Screenshot mobile
  await pageMobile.screenshot({
    path: 'test-screenshots/spese-natura-mobile.png',
    fullPage: false,
    clip: { x: 0, y: 1800, width: 375, height: 1200 }
  });
  
  await contextMobile.close();
  await browser.close();
  
  console.log('\n✅ Screenshots captured');
}

test().catch(console.error);
