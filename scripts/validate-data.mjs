#!/usr/bin/env node

/**
 * Data Validation Script - Dove vanno i soldi del Ticino
 * 
 * Verifica la consistenza matematica e logica dei dati finanziari:
 * - Verifica somme e delta
 * - Controlla presenza fonti
 * - Valida coerenza tra file
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOLERANCE = 0.6; // Tolleranza per arrotondamenti (milioni CHF)
const dataDir = path.join(__dirname, '..', 'data');

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`❌ ERROR: ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`⚠️  WARNING: ${msg}`);
  warnings++;
}

function ok(msg) {
  console.log(`✓ ${msg}`);
}

function checkClose(a, b, tolerance, label) {
  const diff = Math.abs(a - b);
  if (diff > tolerance) {
    error(`${label}: ${a} ≠ ${b} (diff: ${diff.toFixed(2)})`);
    return false;
  }
  ok(`${label}: ${a} ≈ ${b} (diff: ${diff.toFixed(2)})`);
  return true;
}

console.log('🔍 Validating data files...\n');

// 1. Validate preventivo-2027.json
console.log('📄 Checking preventivo-2027.json');
const preventivo2027 = JSON.parse(fs.readFileSync(path.join(dataDir, 'preventivo-2027.json'), 'utf8'));

if (!preventivo2027.metadata || !preventivo2027.metadata.source) {
  error('preventivo-2027.json: Missing metadata.source');
}

const spese2027 = preventivo2027.preventivo2027.speseCorrente.value;
const ricavi2027 = preventivo2027.preventivo2027.ricaviCorrenti.value;
const disavanzo2027 = preventivo2027.preventivo2027.disavanzo.value;

// Check: ricavi - spese = disavanzo
checkClose(ricavi2027 - spese2027, disavanzo2027, TOLERANCE, 
  'Preventivo 2027: ricavi - spese = disavanzo');

// Check variazioni sum
const varSpeseTrasf = preventivo2027.variazioni2026_2027.speseTrasferimento.value;
const varSpesePersonale = preventivo2027.variazioni2026_2027.spesePersonale.value;
const varSpeseCorrente = preventivo2027.variazioni2026_2027.speseCorrente.value;
// Note: altre spese = totale - (trasferimento + personale)
const altreSpese = varSpeseCorrente - varSpeseTrasf - varSpesePersonale;
if (altreSpese < 0) {
  error(`Preventivo 2027: variazioni spese inconsistent (altre spese: ${altreSpese})`);
}

// Check health spending sum
const health = preventivo2027.speseSanitarie;
const healthTotal = health.contributiPremiAssicurazione.value + 
                    health.prestazioniComplementariAVS_AI.value + 
                    health.contributiOspedalizzazioni.total;
ok(`Health spending increase 2026-2027: ${healthTotal.toFixed(1)}M`);

// 2. Validate confronto-pluriennale-2025-2027.json
console.log('\n📄 Checking confronto-pluriennale-2025-2027.json');
const confronto = JSON.parse(fs.readFileSync(path.join(dataDir, 'confronto-pluriennale-2025-2027.json'), 'utf8'));

if (!confronto.metadata || !confronto.metadata.source) {
  error('confronto-pluriennale: Missing metadata.source');
}

// Verify all mathematical checks
const ce = confronto.contoEconomico;
const ci = confronto.contoInvestimenti;

// Check P2027 total spese
const speseTot2027 = ce.speseCorrente.P2027 + ce.riversamenti.P2027 + ce.addebitiInterni.P2027;
checkClose(speseTot2027, ce.totaleSpese.P2027, TOLERANCE, 
  'P2027 total spese = speseCorrente + riversamenti + addebiti');

// Check P2027 total ricavi  
const ricaviTot2027 = ce.ricaviCorrente.P2027 + ce.contributiDaRiversare.P2027 + ce.accreditiInterni.P2027 + (ce.posteStraorinarie?.P2027 || 0);
checkClose(ricaviTot2027, ce.totaleRicavi.P2027, TOLERANCE,
  'P2027 total ricavi = ricaviCorrente + contributi + accrediti + poste straordinarie');

// Check P2027 risultato esercizio
const risultato2027 = ce.totaleRicavi.P2027 - ce.totaleSpese.P2027;
checkClose(risultato2027, ce.risultatoEsercizio.P2027, TOLERANCE,
  'P2027 risultato esercizio = ricavi - spese');

// Check P2027 investimenti netti
const invNetti2027 = ci.usciteInvestimenti.P2027 - ci.entrateInvestimenti.P2027;
checkClose(invNetti2027, ci.investimentiNetti.P2027, TOLERANCE,
  'P2027 investimenti netti = uscite - entrate');

// Check P2027 risultato totale
const risultatoTot2027 = ci.autofinanziamento.P2027 - ci.investimentiNetti.P2027;
checkClose(risultatoTot2027, ci.risultatoTotale.P2027, TOLERANCE,
  'P2027 risultato totale = autofinanziamento - investimenti');

// Check variations
const varSpeseTot = ce.totaleSpese.P2027 - ce.totaleSpese.P2026;
checkClose(varSpeseTot, ce.totaleSpese.var_P27_P26, TOLERANCE,
  'Variazione spese totali P2027-P2026');

const varRicaviTot = ce.totaleRicavi.P2027 - ce.totaleRicavi.P2026;
checkClose(varRicaviTot, ce.totaleRicavi.var_P27_P26, TOLERANCE,
  'Variazione ricavi totali P2027-P2026');

// Verify documented variations
if (!confronto.variazioni_verificate.speseCorrente.match) {
  error('Documented spending variation mismatch');
}
if (!confronto.variazioni_verificate.ricaviCorrente.match) {
  error('Documented revenue variation mismatch');
}

// 3. Validate debito-storico.json
console.log('\n📄 Checking debito-storico.json');
const debito = JSON.parse(fs.readFileSync(path.join(dataDir, 'debito-storico.json'), 'utf8'));

if (!debito.metadata || !debito.metadata.sources) {
  error('debito-storico.json: Missing metadata.sources');
}

// Check monotonic increase
const debitoSerie = debito.debitoSerie;
for (let i = 1; i < debitoSerie.length; i++) {
  if (debitoSerie[i].debito < debitoSerie[i-1].debito) {
    warn(`Debt decrease between ${debitoSerie[i-1].anno} and ${debitoSerie[i].anno}`);
  }
}

// Check each entry has fonte
for (const entry of debitoSerie) {
  if (!entry.fonte) {
    error(`Debt ${entry.anno}: missing fonte`);
  }
  if (!entry.tipo) {
    error(`Debt ${entry.anno}: missing tipo`);
  }
}

// 4. Validate deficit-storico.json
console.log('\n📄 Checking deficit-storico.json');
const deficit = JSON.parse(fs.readFileSync(path.join(dataDir, 'deficit-storico.json'), 'utf8'));

if (!deficit.metadata || !deficit.metadata.sources) {
  error('deficit-storico.json: Missing metadata.sources');
}

// Check 2027 deficit matches confronto
const deficit2027 = deficit.deficitSerie.find(d => d.anno === 2027);
if (deficit2027) {
  // Note: disavanzo has opposite sign convention in different files
  checkClose(Math.abs(deficit2027.disavanzo), Math.abs(disavanzo2027), TOLERANCE,
    'Deficit 2027 consistency across files');
}

// 5. Validate spese-per-funzione-2027.json
console.log('\n📄 Checking spese-per-funzione-2027.json');
const speseFunzione = JSON.parse(fs.readFileSync(path.join(dataDir, 'spese-per-funzione-2027.json'), 'utf8'));

if (!speseFunzione.metadata || !speseFunzione.metadata.source) {
  error('spese-per-funzione-2027.json: Missing metadata.source');
}

// Check sum of functions equals total
const sumFunzioni = speseFunzione.spesePerFunzione.reduce((sum, f) => sum + f.importo, 0);
checkClose(sumFunzioni, speseFunzione.totale.importo, TOLERANCE,
  'Sum of function spending = total');

// Check percentages sum to ~100%
const sumPercentuali = speseFunzione.spesePerFunzione.reduce((sum, f) => sum + f.percentuale, 0);
checkClose(sumPercentuali, 100, 1.0,
  'Sum of percentages ≈ 100%');

// Check each function has correct percentage
for (const funz of speseFunzione.spesePerFunzione) {
  const calcPercent = (funz.importo / speseFunzione.totale.importo) * 100;
  checkClose(calcPercent, funz.percentuale, 0.2,
    `${funz.funzione} percentage`);
}

// 6. Validate popolazione.json
console.log('\n📄 Checking popolazione.json');
const popolazione = JSON.parse(fs.readFileSync(path.join(dataDir, 'popolazione.json'), 'utf8'));

if (!popolazione.metadata || !popolazione.metadata.sources) {
  error('popolazione.json: Missing metadata.sources');
}

// Check monotonic increase
const popSerie = popolazione.popolazioneSerie;
for (let i = 1; i < popSerie.length; i++) {
  const growth = popSerie[i].popolazione - popSerie[i-1].popolazione;
  if (growth < 0) {
    error(`Population decrease between ${popSerie[i-1].anno} and ${popSerie[i].anno}`);
  }
  if (growth > 5000) {
    warn(`Unusually high population growth: ${growth} between ${popSerie[i-1].anno} and ${popSerie[i].anno}`);
  }
}

// 7. Validate premi-e-contributi-sanita.json
console.log('\n📄 Checking premi-e-contributi-sanita.json');
const premiSanita = JSON.parse(fs.readFileSync(path.join(dataDir, 'premi-e-contributi-sanita.json'), 'utf8'));

if (!premiSanita.metadata || !premiSanita.metadata.sources) {
  error('premi-e-contributi-sanita.json: Missing metadata.sources');
}

// Check annual premium calculation
for (const premio of premiSanita.premiMedi) {
  const annualCalc = premio.premioMedioMensile * 12;
  checkClose(annualCalc, premio.premioMedioAnnuo, 0.1,
    `Premium ${premio.anno}: monthly * 12 = annual`);
}

// Check premium variation
if (premiSanita.premiMedi.length >= 2) {
  const p1 = premiSanita.premiMedi[0];
  const p2 = premiSanita.premiMedi[1];
  if (p2.variazionePrecedente) {
    const calcVar = p2.premioMedioMensile - p1.premioMedioMensile;
    checkClose(calcVar, p2.variazionePrecedente, 0.1,
      `Premium variation ${p2.anno}`);
  }
}

// 8. Cross-file consistency checks
console.log('\n🔗 Cross-file consistency checks');

// Check 2027 spese correnti consistency
const speseCorr2027Confronto = ce.speseCorrente.P2027;
checkClose(spese2027, speseCorr2027Confronto, TOLERANCE * 2,
  'Spese correnti 2027: preventivo-2027 vs confronto-pluriennale');

// Check 2027 deficit consistency  
const risultato2027Confronto = ce.risultatoEsercizio.P2027;
checkClose(Math.abs(disavanzo2027), Math.abs(risultato2027Confronto), TOLERANCE * 2,
  'Disavanzo 2027: preventivo-2027 vs confronto-pluriennale');

// Check spending by function total vs confronto total spese
checkClose(speseFunzione.totale.importo, ce.totaleSpese.P2027, 2.0,
  'Total spending: spese-per-funzione vs confronto (allows for classification differences)');

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 VALIDATION SUMMARY');
console.log('='.repeat(60));

if (errors === 0 && warnings === 0) {
  console.log('✅ All checks passed! Data is consistent.');
  process.exit(0);
} else {
  console.log(`❌ Errors: ${errors}`);
  console.log(`⚠️  Warnings: ${warnings}`);
  if (errors > 0) {
    console.log('\n❌ VALIDATION FAILED - Please fix errors above');
    process.exit(1);
  } else {
    console.log('\n⚠️  Validation completed with warnings');
    process.exit(0);
  }
}
