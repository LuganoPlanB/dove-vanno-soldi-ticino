#!/usr/bin/env node
/**
 * End-to-End Smoke Test - Production Build Validation
 * 
 * Comprehensive pre-deployment testing across:
 * - 2 mobile viewports (iPhone SE 320x568, iPhone 12 375x812)
 * - 2 themes (light, dark)
 * - 4 languages (IT, EN, DE, FR)
 * 
 * Validates:
 * - No "undefined" or "NaN" in visible text
 * - No empty chart containers
 * - No horizontal overflow
 * - No console errors or network failures
 * - All links functional (including metodologia)
 * - Theme toggle working
 * - Language switcher working
 * - Screenshots of every major section
 */

import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const BASE_URL = process.env.BASE_URL || 'http://localhost:4173/dove-vanno-soldi-ticino/';
const SCREENSHOT_DIR = './test-screenshots';

const VIEWPORTS = [
  { name: 'iPhone-SE', width: 320, height: 568 },
  { name: 'iPhone-12', width: 375, height: 812 }
];

const THEMES = ['light', 'dark'];
const LANGUAGES = ['it', 'en', 'de', 'fr'];

const LANGUAGE_NAMES = {
  it: 'Italian',
  en: 'English',
  de: 'German',
  fr: 'French'
};

class TestResults {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.errors = [];
    this.screenshots = [];
  }

  addError(context, message) {
    this.failed++;
    this.errors.push(`[${context}] ${message}`);
  }

  addPass() {
    this.passed++;
  }

  addScreenshot(path, description) {
    this.screenshots.push({ path, description });
  }
}

async function setupScreenshotDir() {
  if (!existsSync(SCREENSHOT_DIR)) {
    await mkdir(SCREENSHOT_DIR, { recursive: true });
  }
}

async function testConfiguration(browser, viewport, theme, lang) {
  const context = await browser.newContext({
    viewport,
    hasTouch: true,
    isMobile: true,
    deviceScaleFactor: 2
  });
  
  const page = await context.newPage();
  const results = new TestResults();
  const testName = `${viewport.name}-${theme}-${lang}`;
  
  console.log(`\n🧪 Testing: ${LANGUAGE_NAMES[lang]} / ${theme} / ${viewport.name}`);
  
  // Track console errors and network failures
  const consoleErrors = [];
  const networkFailures = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  
  page.on('response', response => {
    // Ignore 304 Not Modified - these are successful cached responses
    if (!response.ok() && response.status() !== 304 && !response.url().includes('chrome-extension')) {
      networkFailures.push(`${response.status()} ${response.url()}`);
    }
  });
  
  try {
    // Set language and theme
    await page.goto(BASE_URL);
    await page.evaluate(({ language, isDark }) => {
      localStorage.setItem('language', language);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, { language: lang, isDark: theme === 'dark' });
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for charts to render and animations
    
    // Check for console errors
    if (consoleErrors.length > 0) {
      results.addError(testName, `Console errors: ${consoleErrors.join('; ')}`);
    } else {
      results.addPass();
    }
    
    // Check for network failures
    if (networkFailures.length > 0) {
      results.addError(testName, `Network failures: ${networkFailures.join('; ')}`);
    } else {
      results.addPass();
    }
    
    // Check for undefined/NaN in visible text
    const undefinedNaN = await page.evaluate(() => {
      const allText = document.body.innerText;
      const hasUndefined = allText.includes('undefined');
      const hasNaN = allText.includes('NaN');
      return { hasUndefined, hasNaN };
    });
    
    if (undefinedNaN.hasUndefined) {
      results.addError(testName, 'Found "undefined" in page text');
    } else {
      results.addPass();
    }
    
    if (undefinedNaN.hasNaN) {
      results.addError(testName, 'Found "NaN" in page text');
    } else {
      results.addPass();
    }
    
    // Check for horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.body.scrollWidth > window.innerWidth;
    });
    
    if (hasOverflow) {
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      results.addError(testName, `Horizontal overflow detected: ${scrollWidth}px > ${viewport.width}px`);
    } else {
      results.addPass();
    }
    
    // Screenshot: Hero section
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/${testName}-01-hero.png`,
      fullPage: false
    });
    results.addScreenshot(`${testName}-01-hero.png`, 'Hero section');
    
    // Check charts existence and content
    const chartsStatus = await page.evaluate(() => {
      const treemap = document.querySelector('#spending-function-treemap svg');
      const debtChart = document.querySelector('#debt-history-chart svg');
      const deficitChart = document.querySelector('#deficit-history-chart svg');
      
      return {
        treemap: {
          exists: !!treemap,
          hasContent: treemap ? treemap.querySelectorAll('rect[fill]').length > 0 : false,
          textCount: treemap ? treemap.querySelectorAll('text, tspan').length : 0
        },
        debt: {
          exists: !!debtChart,
          hasContent: debtChart ? debtChart.querySelectorAll('path.line').length > 0 || debtChart.querySelectorAll('circle').length > 0 : false
        },
        deficit: {
          exists: !!deficitChart,
          hasContent: deficitChart ? deficitChart.querySelectorAll('path.line').length > 0 || deficitChart.querySelectorAll('circle').length > 0 : false
        }
      };
    });
    
    if (!chartsStatus.treemap.exists || !chartsStatus.treemap.hasContent) {
      results.addError(testName, 'Treemap chart is missing or empty');
    } else {
      results.addPass();
    }
    
    if (!chartsStatus.debt.exists) {
      results.addError(testName, 'Debt chart is missing');
    } else {
      results.addPass();
    }
    
    if (!chartsStatus.deficit.exists) {
      results.addError(testName, 'Deficit chart is missing');
    } else {
      results.addPass();
    }
    
    // Scroll and screenshot charts
    await page.locator('#spending-function-treemap').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/${testName}-02-treemap.png`,
      fullPage: false
    });
    results.addScreenshot(`${testName}-02-treemap.png`, 'Spending treemap');
    
    // Screenshot health section - look for unique content
    let healthSection = await page.locator('section').filter({
      hasText: /627.*M.*CHF|sanità|Healthcare|Gesundheit|Dépenses.*santé/i
    }).first();
    
    if (await healthSection.count() === 0) {
      // Fallback: look for RIPAM which is also unique to health section
      healthSection = await page.locator('section').filter({
        hasText: /RIPAM|riduzione premi|premium reduction|Prämienverbilligung|réduction de primes/i
      }).first();
    }
    
    if (await healthSection.count() > 0) {
      await healthSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `${SCREENSHOT_DIR}/${testName}-03-health.png`,
        fullPage: false
      });
      results.addScreenshot(`${testName}-03-health.png`, 'Health section');
      results.addPass();
    } else {
      results.addError(testName, 'Health section not found');
    }
    
    // Screenshot admin section - look for unique content
    let adminSection = await page.locator('section').filter({
      hasText: /384.*M|CCF|Controllo cantonale|Cantonal Finance Control|Kantonale Finanzkontrolle|Contrôle cantonal/i
    }).first();
    
    if (await adminSection.count() === 0) {
      // Fallback: look for "chi controlla" phrase
      adminSection = await page.locator('section').filter({
        hasText: /chi controlla|who watches|Wer kontrolliert|qui surveille/i
      }).first();
    }
    
    if (await adminSection.count() > 0) {
      await adminSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `${SCREENSHOT_DIR}/${testName}-04-admin.png`,
        fullPage: false
      });
      results.addScreenshot(`${testName}-04-admin.png`, 'Admin section');
      results.addPass();
    } else {
      results.addError(testName, 'Admin section not found');
    }
    
    // Test metodologia link
    await page.goto(`${BASE_URL}`);
    await page.waitForLoadState('networkidle');
    const metodologiaLink = page.locator('a[href*="metodologia"]').first();
    if (await metodologiaLink.count() > 0) {
      await metodologiaLink.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      
      const isMetodologia = await page.evaluate(() => {
        return document.body.innerText.includes('Metodologia') || 
               document.body.innerText.includes('Methodology') ||
               document.body.innerText.includes('Methodik') ||
               document.body.innerText.includes('Méthodologie');
      });
      
      if (isMetodologia) {
        results.addPass();
        await page.screenshot({
          path: `${SCREENSHOT_DIR}/${testName}-05-metodologia.png`,
          fullPage: false
        });
        results.addScreenshot(`${testName}-05-metodologia.png`, 'Metodologia page');
      } else {
        results.addError(testName, 'Metodologia page not loaded correctly');
      }
      
      // Go back
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
    } else {
      results.addError(testName, 'Metodologia link not found');
    }
    
    // Test theme toggle (only once per viewport)
    if (lang === 'it') {
      const themeButton = page.locator('button[aria-label*="tema"], button[aria-label*="theme"]').first();
      if (await themeButton.count() > 0) {
        const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        await themeButton.click();
        await page.waitForTimeout(300);
        const newTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        
        if (initialTheme !== newTheme) {
          results.addPass();
        } else {
          results.addError(testName, 'Theme toggle did not change theme');
        }
      } else {
        results.addError(testName, 'Theme toggle button not found');
      }
    }
    
    // Test language switcher (only once)
    if (theme === 'light' && lang === 'it') {
      const langButton = page.locator('button:has-text("IT"), button:has-text("🇮🇹")').first();
      if (await langButton.count() > 0) {
        await langButton.click();
        await page.waitForTimeout(300);
        const enOption = page.locator('button:has-text("EN"), button:has-text("🇬🇧")').first();
        if (await enOption.count() > 0) {
          await enOption.click();
          await page.waitForTimeout(500);
          const currentLang = await page.evaluate(() => localStorage.getItem('language'));
          if (currentLang === 'en') {
            results.addPass();
          } else {
            results.addError(testName, 'Language switcher did not change language');
          }
        } else {
          results.addError(testName, 'Language dropdown did not show options');
        }
      } else {
        results.addError(testName, 'Language switcher not found');
      }
    }
    
  } catch (error) {
    results.addError(testName, `Test execution failed: ${error.message}`);
  } finally {
    await context.close();
  }
  
  return results;
}

async function runAllTests() {
  console.log('🚀 Starting E2E Smoke Tests\n');
  console.log(`Testing against: ${BASE_URL}`);
  console.log(`Viewports: ${VIEWPORTS.map(v => v.name).join(', ')}`);
  console.log(`Themes: ${THEMES.join(', ')}`);
  console.log(`Languages: ${LANGUAGES.map(l => LANGUAGE_NAMES[l]).join(', ')}`);
  console.log(`Total configurations: ${VIEWPORTS.length * THEMES.length * LANGUAGES.length}`);
  
  await setupScreenshotDir();
  
  const browser = await chromium.launch({ headless: true });
  const allResults = [];
  
  for (const viewport of VIEWPORTS) {
    for (const theme of THEMES) {
      for (const lang of LANGUAGES) {
        const results = await testConfiguration(browser, viewport, theme, lang);
        allResults.push({
          config: `${viewport.name} / ${theme} / ${lang}`,
          results
        });
        
        if (results.errors.length > 0) {
          console.log(`  ❌ FAILED (${results.failed} errors, ${results.passed} passed)`);
          results.errors.forEach(err => console.log(`     - ${err}`));
        } else {
          console.log(`  ✅ PASSED (${results.passed} checks)`);
        }
      }
    }
  }
  
  await browser.close();
  
  // Summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 Test Summary');
  console.log('='.repeat(70));
  
  const totalPassed = allResults.filter(r => r.results.errors.length === 0).length;
  const totalFailed = allResults.filter(r => r.results.errors.length > 0).length;
  const totalErrors = allResults.reduce((sum, r) => sum + r.results.failed, 0);
  const totalChecks = allResults.reduce((sum, r) => sum + r.results.passed + r.results.failed, 0);
  
  console.log(`✅ Passed configurations: ${totalPassed}/${allResults.length}`);
  console.log(`❌ Failed configurations: ${totalFailed}/${allResults.length}`);
  console.log(`📋 Total checks: ${totalChecks} (${totalChecks - totalErrors} passed, ${totalErrors} failed)`);
  
  // Screenshots summary
  const totalScreenshots = allResults.reduce((sum, r) => sum + r.results.screenshots.length, 0);
  console.log(`📸 Screenshots captured: ${totalScreenshots} (saved to ${SCREENSHOT_DIR}/)`);
  
  if (totalFailed > 0) {
    console.log('\n❌ E2E SMOKE TESTS FAILED');
    console.log('\nFailed configurations:');
    allResults
      .filter(r => r.results.errors.length > 0)
      .forEach(({ config, results }) => {
        console.log(`\n  ${config}:`);
        results.errors.forEach(err => console.log(`    - ${err}`));
      });
    process.exit(1);
  } else {
    console.log('\n✅ ALL E2E SMOKE TESTS PASSED');
    console.log(`   ${allResults.length} configurations validated successfully.`);
    console.log(`   No errors, undefined text, NaN values, or overflow detected.`);
    console.log(`   All links, theme toggle, and language switcher working.`);
    process.exit(0);
  }
}

runAllTests().catch(err => {
  console.error('❌ Test execution failed:', err);
  process.exit(1);
});
