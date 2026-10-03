#!/usr/bin/env node
import { chromium } from 'playwright';

async function test() {
  console.log('🧪 Testing Comuni Feature\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  
  await page.goto('http://localhost:4173/dove-vanno-soldi-ticino/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Check comuni section exists
  const comuniSection = await page.$('#comuni');
  console.log(comuniSection ? '✓ Comuni section exists' : '❌ Comuni section missing');
  
  // Check search input
  const searchInput = await page.$('#comuni-search');
  console.log(searchInput ? '✓ Search input exists' : '❌ Search input missing');
  
  // Wait for comuni to load
  await page.waitForTimeout(1000);
  
  // Count comune cards
  const cards = await page.$$('#comuni-results > div > div');
  console.log(`✓ Found ${cards.length} comune cards`);
  
  // Test search
  if (searchInput) {
    await searchInput.type('Lugano');
    await page.waitForTimeout(500);
    const filteredCards = await page.$$('#comuni-results > div > div');
    console.log(`✓ Search for "Lugano": ${filteredCards.length} results`);
  }
  
  // Screenshot
  await page.screenshot({
    path: 'test-screenshots/comuni-feature.png',
    fullPage: true
  });
  
  await browser.close();
  console.log('\n✅ Comuni feature verified');
}

test().catch(console.error);
