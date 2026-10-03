#!/usr/bin/env node
/**
 * DROPDOWN OPACITY TEST
 * Verifies language dropdown and mobile menu have 100% opaque backgrounds
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE_URL = 'http://localhost:4173/dove-vanno-soldi-ticino/';
const VIEWPORTS = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 812 },
  { name: '430px', width: 430, height: 932 }
];
const THEMES = ['light', 'dark'];

const failures = [];

mkdirSync('test-screenshots/opacity', { recursive: true });

async function testDropdownOpacity(page, viewport, theme) {
  const testName = `${viewport.name}-${theme}`;
  console.log(`\nTesting ${testName}...`);

  // Open language dropdown
  await page.click('#lang-button');
  await page.waitForTimeout(500);

  const menu = await page.$('#lang-menu');
  if (!menu) {
    failures.push(`${testName}: Language menu not found`);
    return;
  }

  const isVisible = await menu.isVisible();
  if (!isVisible) {
    failures.push(`${testName}: Language menu not visible after click`);
    return;
  }

  // Check computed background-color alpha channel
  const bgCheck = await page.evaluate(() => {
    const menu = document.getElementById('lang-menu');
    if (!menu) return { error: 'Menu not found' };
    
    const computed = window.getComputedStyle(menu);
    const bgColor = computed.backgroundColor;
    
    // Parse rgba/rgb
    let alpha = 1;
    if (bgColor.startsWith('rgba')) {
      const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match && match[4] !== undefined) {
        alpha = parseFloat(match[4]);
      }
    }
    
    return {
      bgColor,
      alpha,
      zIndex: computed.zIndex
    };
  });

  console.log(`  Background: ${bgCheck.bgColor}`);
  console.log(`  Alpha: ${bgCheck.alpha}`);
  console.log(`  Z-index: ${bgCheck.zIndex}`);

  if (bgCheck.alpha < 1.0) {
    failures.push(`${testName}: Menu background alpha is ${bgCheck.alpha}, expected 1.0`);
  }

  // Test elementFromPoint for each menu item
  const menuItems = await page.$$('#lang-menu button[data-lang]');
  for (const item of menuItems) {
    const box = await item.boundingBox();
    if (!box) continue;

    const centerX = box.x + box.width / 2;
    const centerY = box.y + box.height / 2;

    const elementAtPoint = await page.evaluate(({ x, y }) => {
      const el = document.elementFromPoint(x, y);
      return {
        tagName: el?.tagName,
        id: el?.id,
        hasDataLang: el?.hasAttribute('data-lang'),
        isMenuItem: el?.tagName === 'BUTTON' && el?.hasAttribute('data-lang')
      };
    }, { x: centerX, y: centerY });

    if (!elementAtPoint.isMenuItem) {
      failures.push(`${testName}: Element at menu item center is ${elementAtPoint.tagName}#${elementAtPoint.id}, not the menu button`);
    }
  }

  // Screenshot
  await page.screenshot({
    path: `test-screenshots/opacity/dropdown-${testName}.png`,
    fullPage: false
  });

  // Close menu
  await page.click('body', { position: { x: 10, y: 400 } });
  await page.waitForTimeout(300);
}

async function testMobileMenuOpacity(page, viewport, theme) {
  if (viewport.width >= 400) return; // Mobile menu only shows below 400px

  const testName = `${viewport.name}-${theme}-mobile`;
  console.log(`\nTesting mobile menu ${testName}...`);

  const button = await page.$('#mobile-menu-button');
  if (!button) {
    console.log(`  Skipped: No mobile menu button at ${viewport.width}px`);
    return;
  }

  await button.click();
  await page.waitForTimeout(500);

  const menu = await page.$('#mobile-menu');
  if (!menu) {
    failures.push(`${testName}: Mobile menu not found`);
    return;
  }

  const isVisible = await menu.isVisible();
  if (!isVisible) {
    failures.push(`${testName}: Mobile menu not visible after click`);
    return;
  }

  // Check computed background-color alpha
  const bgCheck = await page.evaluate(() => {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return { error: 'Menu not found' };
    
    const computed = window.getComputedStyle(menu);
    const bgColor = computed.backgroundColor;
    
    let alpha = 1;
    if (bgColor.startsWith('rgba')) {
      const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match && match[4] !== undefined) {
        alpha = parseFloat(match[4]);
      }
    }
    
    return {
      bgColor,
      alpha,
      zIndex: computed.zIndex
    };
  });

  console.log(`  Background: ${bgCheck.bgColor}`);
  console.log(`  Alpha: ${bgCheck.alpha}`);

  if (bgCheck.alpha < 1.0) {
    failures.push(`${testName}: Mobile menu background alpha is ${bgCheck.alpha}, expected 1.0`);
  }

  // Screenshot
  await page.screenshot({
    path: `test-screenshots/opacity/mobile-menu-${testName}.png`,
    fullPage: false
  });

  // Close menu
  await button.click();
  await page.waitForTimeout(300);
}

async function runTests() {
  console.log('🔬 DROPDOWN OPACITY TEST\n');
  console.log('Testing for 100% opaque backgrounds on all dropdowns\n');

  const browser = await chromium.launch({ headless: true });

  for (const viewport of VIEWPORTS) {
    for (const theme of THEMES) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();

      await page.goto(BASE_URL);
      
      // Set theme
      if (theme === 'dark') {
        await page.evaluate(() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        });
      } else {
        await page.evaluate(() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        });
      }

      await page.reload();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      await testDropdownOpacity(page, viewport, theme);
      await testMobileMenuOpacity(page, viewport, theme);

      await context.close();
    }
  }

  await browser.close();

  console.log('\n' + '='.repeat(60));
  if (failures.length === 0) {
    console.log('✅ ALL TESTS PASSED');
    console.log('   All dropdowns have 100% opaque backgrounds');
    process.exit(0);
  } else {
    console.log(`❌ ${failures.length} FAILURES:\n`);
    failures.forEach(f => console.log(`   - ${f}`));
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test suite error:', err);
  process.exit(1);
});
