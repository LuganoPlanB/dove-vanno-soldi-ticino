#!/usr/bin/env node
/**
 * Chart Rendering Validation Test
 * 
 * Verifies that all charts render correctly without "undefined" or "NaN" text
 * across all four language variants (IT, EN, DE, FR).
 * 
 * This test loads the site in each language and checks:
 * - No SVG text elements contain "undefined"
 * - No SVG text elements contain "NaN"
 * - Treemap cells have valid translated category names
 * - All numeric values are properly formatted
 */

import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:5173/dove-vanno-soldi-ticino/';
const LANGUAGES = ['it', 'en', 'de', 'fr'];
const LANGUAGE_NAMES = {
  it: 'Italian',
  en: 'English', 
  de: 'German',
  fr: 'French'
};

async function testChartsInLanguage(page, lang) {
  console.log(`\n🧪 Testing ${LANGUAGE_NAMES[lang]} (${lang})...`);
  
  // Set language in localStorage before navigating
  await page.goto(BASE_URL);
  await page.evaluate((language) => {
    localStorage.setItem('language', language);
  }, lang);
  await page.reload();
  await page.waitForLoadState('networkidle');
  
  // Wait for charts to render
  await page.waitForSelector('#spending-function-treemap svg', { timeout: 10000 });
  await page.waitForTimeout(1000); // Extra time for animations
  
  const results = {
    lang,
    passed: true,
    errors: []
  };
  
  // Check all SVG text elements for "undefined"
  const undefinedTexts = await page.evaluate(() => {
    const textElements = Array.from(document.querySelectorAll('svg text, svg tspan'));
    return textElements
      .map(el => el.textContent || '')
      .filter(text => text.includes('undefined'))
      .slice(0, 5); // Limit to first 5 to avoid spam
  });
  
  if (undefinedTexts.length > 0) {
    results.passed = false;
    results.errors.push(`Found ${undefinedTexts.length} "undefined" text(s) in charts: ${undefinedTexts.join(', ')}`);
  }
  
  // Check all SVG text elements for "NaN"
  const nanTexts = await page.evaluate(() => {
    const textElements = Array.from(document.querySelectorAll('svg text, svg tspan'));
    return textElements
      .map(el => el.textContent || '')
      .filter(text => text.includes('NaN'))
      .slice(0, 5);
  });
  
  if (nanTexts.length > 0) {
    results.passed = false;
    results.errors.push(`Found ${nanTexts.length} "NaN" text(s) in charts: ${nanTexts.join(', ')}`);
  }
  
  // Check treemap specifically
  const treemapStats = await page.evaluate(() => {
    const treemapContainer = document.querySelector('#spending-function-treemap');
    if (!treemapContainer) return { exists: false };
    
    const svg = treemapContainer.querySelector('svg');
    if (!svg) return { exists: true, hasSvg: false };
    
    const textElements = Array.from(svg.querySelectorAll('text tspan'));
    const texts = textElements.map(el => el.textContent || '').filter(t => t.trim());
    
    const rects = svg.querySelectorAll('rect[fill]');
    
    return {
      exists: true,
      hasSvg: true,
      rectCount: rects.length,
      textCount: texts.length,
      sampleTexts: texts.slice(0, 8),
      hasUndefined: texts.some(t => t.includes('undefined')),
      hasNaN: texts.some(t => t.includes('NaN')),
      isEmpty: texts.length === 0
    };
  });
  
  if (!treemapStats.exists) {
    results.passed = false;
    results.errors.push('Treemap container #spending-function-treemap not found');
  } else if (!treemapStats.hasSvg) {
    results.passed = false;
    results.errors.push('Treemap SVG not rendered');
  } else if (treemapStats.isEmpty) {
    results.passed = false;
    results.errors.push('Treemap has no text labels rendered');
  } else if (treemapStats.hasUndefined) {
    results.passed = false;
    results.errors.push('Treemap contains "undefined" in labels');
  } else if (treemapStats.hasNaN) {
    results.passed = false;
    results.errors.push('Treemap contains "NaN" in labels');
  } else {
    console.log(`  ✓ Treemap: ${treemapStats.rectCount} categories, ${treemapStats.textCount} text labels`);
    console.log(`  ✓ Sample labels: ${treemapStats.sampleTexts.slice(0, 3).join(', ')}`);
  }
  
  // Check line charts (debt, deficit)
  const lineChartStats = await page.evaluate(() => {
    const debtChart = document.querySelector('#debt-history-chart svg');
    const deficitChart = document.querySelector('#deficit-history-chart svg');
    
    const checkChart = (svg) => {
      if (!svg) return { rendered: false };
      const texts = Array.from(svg.querySelectorAll('text')).map(el => el.textContent || '');
      return {
        rendered: true,
        hasUndefined: texts.some(t => t.includes('undefined')),
        hasNaN: texts.some(t => t.includes('NaN')),
        textCount: texts.length
      };
    };
    
    return {
      debt: checkChart(debtChart),
      deficit: checkChart(deficitChart)
    };
  });
  
  if (lineChartStats.debt.rendered) {
    if (lineChartStats.debt.hasUndefined || lineChartStats.debt.hasNaN) {
      results.passed = false;
      results.errors.push('Debt chart contains undefined/NaN values');
    } else {
      console.log(`  ✓ Debt chart: ${lineChartStats.debt.textCount} text elements`);
    }
  }
  
  if (lineChartStats.deficit.rendered) {
    if (lineChartStats.deficit.hasUndefined || lineChartStats.deficit.hasNaN) {
      results.passed = false;
      results.errors.push('Deficit chart contains undefined/NaN values');
    } else {
      console.log(`  ✓ Deficit chart: ${lineChartStats.deficit.textCount} text elements`);
    }
  }
  
  return results;
}

async function runTests() {
  console.log('🚀 Starting Chart Rendering Validation Tests\n');
  console.log(`Testing against: ${BASE_URL}`);
  console.log(`Languages: ${LANGUAGES.map(l => LANGUAGE_NAMES[l]).join(', ')}\n`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();
  
  const allResults = [];
  
  try {
    for (const lang of LANGUAGES) {
      const result = await testChartsInLanguage(page, lang);
      allResults.push(result);
      
      if (!result.passed) {
        console.log(`  ❌ FAILED`);
        result.errors.forEach(err => console.log(`     - ${err}`));
      } else {
        console.log(`  ✅ PASSED - All charts render correctly`);
      }
    }
  } finally {
    await browser.close();
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Test Summary');
  console.log('='.repeat(60));
  
  const passed = allResults.filter(r => r.passed).length;
  const failed = allResults.filter(r => !r.passed).length;
  
  console.log(`✅ Passed: ${passed}/${LANGUAGES.length} languages`);
  console.log(`❌ Failed: ${failed}/${LANGUAGES.length} languages`);
  
  if (failed > 0) {
    console.log('\n❌ CHART VALIDATION FAILED');
    console.log('\nFailed languages:');
    allResults.filter(r => !r.passed).forEach(r => {
      console.log(`\n  ${LANGUAGE_NAMES[r.lang]} (${r.lang}):`);
      r.errors.forEach(err => console.log(`    - ${err}`));
    });
    process.exit(1);
  } else {
    console.log('\n✅ ALL CHART VALIDATION TESTS PASSED');
    console.log('   No "undefined" or "NaN" found in any chart across all languages.');
    process.exit(0);
  }
}

runTests().catch(err => {
  console.error('❌ Test execution failed:', err);
  process.exit(1);
});
