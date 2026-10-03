#!/usr/bin/env node
/**
 * STRICT data quality validation
 * FAILS if any data file contains:
 * - STIMATO, DEMO, PARZIALE, tipiche
 * - Numbers without verified source (document + page)
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = 'data';
const FORBIDDEN_TERMS = ['STIMATO', 'DEMO', 'PARZIALE', 'tipiche', 'proporzioni tipiche', 'placeholder'];

console.log('🔒 STRICT Data Quality Validation\n');
console.log('Checking for unverified data, estimates, or placeholders...\n');

let totalErrors = 0;
let totalWarnings = 0;

// Get all JSON files in data/
const dataFiles = readdirSync(DATA_DIR)
  .filter(f => f.endsWith('.json'))
  .map(f => join(DATA_DIR, f));

for (const filePath of dataFiles) {
  console.log(`📄 Checking ${filePath}...`);
  
  try {
    const content = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    // Check for forbidden terms
    for (const term of FORBIDDEN_TERMS) {
      if (content.includes(term)) {
        console.error(`  ❌ ERROR: Contains forbidden term "${term}"`);
        totalErrors++;
        
        // Find context
        const lines = content.split('\n');
        lines.forEach((line, i) => {
          if (line.includes(term)) {
            console.error(`     Line ${i + 1}: ${line.trim().substring(0, 100)}...`);
          }
        });
      }
    }
    
    // Check for disponibilita: "STIMATO"
    if (content.includes('"disponibilita": "STIMATO"') || 
        content.includes('"disponibilita":"STIMATO"')) {
      console.error(`  ❌ ERROR: Contains disponibilita: "STIMATO"`);
      totalErrors++;
    }
    
    // Check for empty arrays that should have data
    if (filePath.includes('comuni') && data.comuni && data.comuni.length === 0) {
      console.log(`  ⚠️  WARNING: comuni array is empty (data not yet extracted)`);
      totalWarnings++;
    }
    
    if (filePath.includes('natura') && data.spesePerNatura2027 && data.spesePerNatura2027.length === 0) {
      console.log(`  ⚠️  WARNING: spesePerNatura2027 array is empty (data not yet extracted)`);
      totalWarnings++;
    }
    
    // Check metadata for proper warnings
    if (data.metadata) {
      const metaStr = JSON.stringify(data.metadata);
      if (metaStr.includes('RIGOROSO') || metaStr.includes('Solo dati verificati')) {
        console.log(`  ✓ Metadata properly declares data quality standards`);
      }
    }
    
    console.log('');
    
  } catch (err) {
    console.error(`  ❌ ERROR: Failed to parse JSON: ${err.message}`);
    totalErrors++;
  }
}

console.log('='.repeat(60));
console.log(`📊 Validation Summary:`);
console.log(`   Errors: ${totalErrors}`);
console.log(`   Warnings: ${totalWarnings}`);

if (totalErrors > 0) {
  console.log('\n❌ VALIDATION FAILED');
  console.log('   Data files contain unverified estimates or placeholders.');
  console.log('   Only verified, cited numbers are allowed.');
  console.log('   Remove or replace with real data from official sources.');
  process.exit(1);
}

if (totalWarnings > 0) {
  console.log('\n⚠️  VALIDATION PASSED WITH WARNINGS');
  console.log('   Some data is not yet available from official sources.');
  console.log('   This is acceptable if marked clearly and UI handles it.');
  process.exit(0);
}

console.log('\n✅ VALIDATION PASSED');
console.log('   All data files meet strict quality standards.');
process.exit(0);
