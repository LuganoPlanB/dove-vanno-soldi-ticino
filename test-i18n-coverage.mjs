#!/usr/bin/env node
/**
 * Automated i18n validation test
 * Ensures all data-i18n keys in HTML have translations in all 4 languages
 */

import { readFileSync } from 'fs';

const LANGUAGES = ['it', 'en', 'de', 'fr'];
const HTML_FILES = ['index.html', 'metodologia.html'];

// Extract all data-i18n keys from HTML files
function extractKeysFromHTML() {
  const keys = new Set();
  
  for (const file of HTML_FILES) {
    try {
      const content = readFileSync(file, 'utf-8');
      const matches = content.matchAll(/data-i18n="([^"]+)"/g);
      
      for (const match of matches) {
        keys.add(match[1]);
      }
    } catch (err) {
      console.error(`❌ Cannot read ${file}:`, err.message);
    }
  }
  
  return Array.from(keys).sort();
}

// Load a locale file and extract all keys
function extractKeysFromLocale(lang) {
  try {
    const content = readFileSync(`src/locales/${lang}.ts`, 'utf-8');
    
    // Simple extraction: find all keys in nested objects
    // This is not perfect but works for our structure
    const keys = new Set();
    
    // Match patterns like: "key: 'value'" or "key: {" 
    const matches = content.matchAll(/^\s{2,}([a-zA-Z0-9_]+):/gm);
    
    // Build nested keys by tracking depth
    const lines = content.split('\n');
    const keyStack = [];
    
    for (const line of lines) {
      const indent = line.match(/^(\s*)/)[1].length;
      const match = line.match(/^\s*([a-zA-Z0-9_]+):\s*(\{|'|"|\[)/);
      
      if (match) {
        const key = match[1];
        const isObject = match[2] === '{';
        
        // Adjust stack based on indent
        const depth = Math.floor(indent / 2) - 1;
        keyStack.length = Math.max(0, depth);
        
        if (isObject && key !== 'export' && key !== 'default') {
          keyStack.push(key);
        } else if (keyStack.length > 0) {
          const fullKey = [...keyStack, key].join('.');
          keys.add(fullKey);
        }
      }
    }
    
    return keys;
  } catch (err) {
    console.error(`❌ Cannot read locale ${lang}:`, err.message);
    return new Set();
  }
}

// Check if a key exists in a Set of keys
function hasKey(keys, key) {
  // Check exact match and partial matches for nested keys
  return keys.has(key) || Array.from(keys).some(k => k.startsWith(key + '.'));
}

console.log('🔍 Automated i18n Validation\n');

// 1. Extract HTML keys
console.log('📄 Extracting keys from HTML files...');
const htmlKeys = extractKeysFromHTML();
console.log(`   Found ${htmlKeys.length} unique keys\n`);

// 2. Extract locale keys
console.log('🌍 Loading translations...');
const localeKeys = {};
for (const lang of LANGUAGES) {
  localeKeys[lang] = extractKeysFromLocale(lang);
  console.log(`   ${lang.toUpperCase()}: ${localeKeys[lang].size} keys`);
}

// 3. Validate
console.log('\n✅ Validation Results:\n');

const missing = {};
let totalMissing = 0;

for (const lang of LANGUAGES) {
  missing[lang] = [];
  
  for (const key of htmlKeys) {
    if (!hasKey(localeKeys[lang], key)) {
      missing[lang].push(key);
      totalMissing++;
    }
  }
  
  if (missing[lang].length === 0) {
    console.log(`✓ ${lang.toUpperCase()}: All ${htmlKeys.length} keys present`);
  } else {
    console.log(`❌ ${lang.toUpperCase()}: ${missing[lang].length} missing keys`);
    missing[lang].forEach(key => {
      console.log(`     - ${key}`);
    });
  }
}

// 4. Summary
console.log('\n' + '='.repeat(50));

if (totalMissing === 0) {
  console.log('✅ All translations complete!');
  console.log(`   ${htmlKeys.length} keys × ${LANGUAGES.length} languages = ${htmlKeys.length * LANGUAGES.length} translations`);
  process.exit(0);
} else {
  console.log(`❌ ${totalMissing} translations missing`);
  console.log('   Run this test after adding missing keys to locale files');
  process.exit(1);
}
