import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const HTML_FILES = [
  'index.html',
  'storia-debito.html',
  'tassazione-imprese.html',
  'comuni.html',
  'metodologia.html',
  'spese.html',
  'sanita.html',
  'controllo.html',
];

test.describe('Anti-Duplication & Anti-Slop Tests', () => {
  test('No hardcoded numbers duplicated across HTML files', async () => {
    const numberPatterns: Map<string, string[]> = new Map();
    const significantNumberRegex = /\b([\d.,]+)\s*(M|CHF|milioni?|miliardi?|%|Bn)\b/gi;

    for (const file of HTML_FILES) {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const matches = [...content.matchAll(significantNumberRegex)];
      
      for (const match of matches) {
        const fullMatch = match[0];
        const number = match[1];
        
        // Skip very common small numbers (likely UI constants, not data)
        if (['1', '2', '3', '4', '5', '0'].includes(number)) continue;
        if (number.includes('.') && parseFloat(number) < 10) continue;
        
        if (!numberPatterns.has(fullMatch)) {
          numberPatterns.set(fullMatch, []);
        }
        numberPatterns.get(fullMatch)!.push(file);
      }
    }

    const duplicates: string[] = [];
    for (const [pattern, files] of numberPatterns.entries()) {
      const uniqueFiles = [...new Set(files)];
      if (uniqueFiles.length > 1) {
        duplicates.push(`"${pattern}" appears in: ${uniqueFiles.join(', ')}`);
      }
    }

    if (duplicates.length > 0) {
      throw new Error(`Found hardcoded numbers in multiple HTML files (should come from JSON):\n${duplicates.join('\n')}`);
    }
  });

  test('No generic "Questo sito" intro filler (except metodologia)', async () => {
    const fillerPhrase = /Questo sito (rende accessibili|è una piattaforma|offre|fornisce|presenta)/i;
    
    for (const file of HTML_FILES) {
      if (file === 'metodologia.html') continue; // allowed here
      
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      const match = content.match(fillerPhrase);
      if (match) {
        throw new Error(`Found generic filler intro in ${file}: "${match[0]}..."`);
      }
    }
  });

  test('No duplicate "Limitazioni" sections (only in metodologia.html)', async () => {
    const limitationsHeading = /<h\d[^>]*>\s*Limitazioni/i;
    let limitationsCount = 0;
    const filesWithLimitations: string[] = [];

    for (const file of HTML_FILES) {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      if (limitationsHeading.test(content)) {
        limitationsCount++;
        filesWithLimitations.push(file);
      }
    }

    if (limitationsCount > 1) {
      throw new Error(`"Limitazioni" section found in ${limitationsCount} files: ${filesWithLimitations.join(', ')}. Should only be in metodologia.html.`);
    }
    
    if (limitationsCount === 1 && !filesWithLimitations.includes('metodologia.html')) {
      throw new Error(`"Limitazioni" section found in ${filesWithLimitations[0]} instead of metodologia.html.`);
    }
  });

  test('No duplicate independence disclaimer (only in metodologia.html)', async () => {
    const disclaimerText = /Questo sito è indipendente e non è affiliato/i;
    let disclaimerCount = 0;
    const filesWithDisclaimer: string[] = [];

    for (const file of HTML_FILES) {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      if (disclaimerText.test(content)) {
        disclaimerCount++;
        filesWithDisclaimer.push(file);
      }
    }

    if (disclaimerCount > 1) {
      throw new Error(`Independence disclaimer found in ${disclaimerCount} files: ${filesWithDisclaimer.join(', ')}. Should only be in metodologia.html.`);
    }
    
    // Allow 0 (removed) or 1 (in metodologia only)
    if (disclaimerCount === 1 && !filesWithDisclaimer.includes('metodologia.html')) {
      throw new Error(`Independence disclaimer found in ${filesWithDisclaimer[0]} instead of metodologia.html.`);
    }
  });

  test('Each JSON file is canonical source (not duplicated data)', async () => {
    const dataDir = path.join(process.cwd(), 'data');
    const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
    
    // Key identifiers that should be unique per JSON
    const dataSignatures: Map<string, string[]> = new Map();
    
    for (const file of jsonFiles) {
      const filePath = path.join(dataDir, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      
      // Extract a simple signature (e.g., top-level keys + first few data points)
      const signature = JSON.stringify(Object.keys(content).sort());
      
      if (!dataSignatures.has(signature)) {
        dataSignatures.set(signature, []);
      }
      dataSignatures.get(signature)!.push(file);
    }
    
    // This test is informational - having similar structure is OK,
    // but having identical data is suspicious
    const identicalStructures: string[] = [];
    for (const [sig, files] of dataSignatures.entries()) {
      if (files.length > 1) {
        identicalStructures.push(`${files.join(', ')} have identical structure`);
      }
    }
    
    // Just log, don't fail (similar structure is OK, it's the data that matters)
    if (identicalStructures.length > 0) {
      console.log(`Info: Some JSON files have identical structure (may be OK): ${identicalStructures.join('; ')}`);
    }
  });

  test('No dead/unused JSON files referenced in code', async () => {
    const dataDir = path.join(process.cwd(), 'data');
    const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
    const srcDir = path.join(process.cwd(), 'src');
    const tsFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));
    
    const allSrcContent = tsFiles.map(f => 
      fs.readFileSync(path.join(srcDir, f), 'utf-8')
    ).join('\n');
    
    const htmlContent = HTML_FILES.map(f =>
      fs.readFileSync(path.join(process.cwd(), f), 'utf-8')
    ).join('\n');
    
    const unreferencedFiles: string[] = [];
    
    for (const jsonFile of jsonFiles) {
      const fileName = jsonFile.replace('.json', '');
      // Check if the file name appears anywhere in src or HTML
      if (!allSrcContent.includes(fileName) && !htmlContent.includes(fileName)) {
        unreferencedFiles.push(jsonFile);
      }
    }
    
    if (unreferencedFiles.length > 0) {
      throw new Error(`Unreferenced JSON files (potential dead code): ${unreferencedFiles.join(', ')}`);
    }
  });
});
