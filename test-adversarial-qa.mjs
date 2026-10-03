#!/usr/bin/env node
/**
 * ADVERSARIAL QA TEST SUITE
 * Tests everything that can go wrong on mobile
 */

import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const BASE_URL = 'http://localhost:4173/dove-vanno-soldi-ticino/';
const VIEWPORTS = [
  { name: 'iPhone-portrait', width: 375, height: 812 },
  { name: 'iPhone-SE', width: 320, height: 568 },
  { name: 'iPhone-landscape', width: 812, height: 375 }
];
const LANGUAGES = ['it', 'en', 'de', 'fr'];
const THEMES = ['light', 'dark'];

const issues = [];

async function testDropdownOpacity(page, viewport, lang, theme) {
  // Open language dropdown
  await page.click('#lang-button');
  await page.waitForTimeout(300);
  
  // Check if menu is visible
  const menu = await page.$('#lang-menu');
  const isVisible = await menu?.isVisible();
  
  if (!isVisible) {
    issues.push(`${viewport.name}-${lang}-${theme}: Language menu not visible after click`);
    return;
  }
  
  // Check background opacity
  const bgColor = await page.evaluate(() => {
    const menu = document.getElementById('lang-menu');
    return menu ? window.getComputedStyle(menu).backgroundColor : null;
  });
  
  if (bgColor && bgColor.includes('rgba') && bgColor.includes(', 0')) {
    issues.push(`${viewport.name}-${lang}-${theme}: Language menu has transparent background: ${bgColor}`);
  }
  
  // Check z-index
  const zIndex = await page.evaluate(() => {
    const menu = document.getElementById('lang-menu');
    return menu ? window.getComputedStyle(menu).zIndex : null;
  });
  
  if (!zIndex || parseInt(zIndex) < 50) {
    issues.push(`${viewport.name}-${lang}-${theme}: Language menu z-index too low: ${zIndex}`);
  }
  
  // Screenshot
  await page.screenshot({
    path: `test-screenshots/adversarial-dropdown-${viewport.name}-${lang}-${theme}.png`,
    fullPage: false,
    clip: { x: 0, y: 0, width: viewport.width, height: 200 }
  });
  
  // Close by clicking outside
  await page.click('body', { position: { x: 10, y: 300 } });
  await page.waitForTimeout(200);
  
  const stillVisible = await menu?.isVisible();
  if (stillVisible) {
    issues.push(`${viewport.name}-${lang}-${theme}: Language menu doesn't close on outside click`);
  }
}

async function checkConsoleErrors(page) {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });
  return errors;
}

async function checkForUndefinedNaN(page) {
  const text = await page.evaluate(() => document.body.innerText);
  const problems = [];
  
  if (text.includes('undefined')) problems.push('Found "undefined" in page text');
  if (text.includes('NaN')) problems.push('Found "NaN" in page text');
  if (text.match(/@media|max-width:|\.xs:/)) problems.push('Found raw CSS in page text');
  
  return problems;
}

async function checkNavbarOverlap(page) {
  const overlap = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('main section:first-child');
    if (!nav || !hero) return { overlaps: false };
    
    const navRect = nav.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    
    return {
      overlaps: navRect.bottom > heroRect.top,
      navBottom: navRect.bottom,
      heroTop: heroRect.top
    };
  });
  
  return overlap;
}

async function testTextOverflow(page, lang) {
  // DE and FR have longer strings
  if (lang !== 'de' && lang !== 'fr') return [];
  
  const overflows = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const problems = [];
    
    elements.forEach(el => {
      if (el.scrollWidth > el.clientWidth + 5) {
        const text = el.textContent?.substring(0, 50);
        problems.push(`Element overflows: ${el.tagName} "${text}..."`);
      }
    });
    
    return problems.slice(0, 5); // Limit to 5
  });
  
  return overflows;
}

async function runAdversarialTests() {
  console.log('🔬 ADVERSARIAL QA TEST SUITE\n');
  console.log('Testing production build on mobile viewports...\n');
  
  const browser = await chromium.launch({ headless: true });
  
  for (const viewport of VIEWPORTS) {
    for (const lang of LANGUAGES) {
      for (const theme of THEMES) {
        const testName = `${viewport.name}-${lang}-${theme}`;
        console.log(`Testing ${testName}...`);
        
        const context = await browser.newContext({ 
          viewport,
          hasTouch: true,
          deviceScaleFactor: 2
        });
        const page = await context.newPage();
        
        // Setup console error tracking
        const consoleErrors = await checkConsoleErrors(page);
        
        await page.goto(BASE_URL);
        await page.evaluate(({ language, isDark }) => {
          localStorage.setItem('language', language);
          if (isDark) document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        }, { language: lang, isDark: theme === 'dark' });
        
        await page.reload();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1500);
        
        // Test dropdown opacity
        await testDropdownOpacity(page, viewport, lang, theme);
        
        // Check for undefined/NaN
        const textIssues = await checkForUndefinedNaN(page);
        textIssues.forEach(issue => issues.push(`${testName}: ${issue}`));
        
        // Check navbar overlap
        const navOverlap = await checkNavbarOverlap(page);
        if (navOverlap.overlaps) {
          issues.push(`${testName}: Navbar overlaps content (nav: ${navOverlap.navBottom}, hero: ${navOverlap.heroTop})`);
        }
        
        // Check text overflow for DE/FR
        const overflows = await testTextOverflow(page, lang);
        overflows.forEach(issue => issues.push(`${testName}: ${issue}`));
        
        // Test search input
        const searchInput = await page.$('#comuni-search');
        if (searchInput) {
          await searchInput.fill('test');
          await page.waitForTimeout(300);
          await searchInput.fill('');
          await page.waitForTimeout(300);
          await searchInput.fill('zzzzz'); // Non-existent
          await page.waitForTimeout(300);
        }
        
        await context.close();
      }
    }
  }
  
  await browser.close();
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 ADVERSARIAL QA RESULTS\n');
  
  if (issues.length === 0) {
    console.log('✅ NO ISSUES FOUND');
    console.log('   All adversarial tests passed');
    return 0;
  }
  
  console.log(`❌ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`${i + 1}. ${issue}`);
  });
  
  return issues.length;
}

runAdversarialTests()
  .then(issueCount => {
    process.exit(issueCount > 0 ? 1 : 0);
  })
  .catch(err => {
    console.error('Test suite error:', err);
    process.exit(1);
  });
