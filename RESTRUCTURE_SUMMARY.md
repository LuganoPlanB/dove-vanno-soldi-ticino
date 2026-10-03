# COMPLETE RESTRUCTURE - CONSUNTIVI 2020-2025 FOCUS

## Summary (2026-10-03)
Marco requested a complete shift from P2027-focused to ACTUAL/PAST data priority.

## ✅ COMPLETED TASKS

### 1. Homepage Badge → "Consuntivo 2025 - Dati effettivi"
- **Commit**: a3c9ce0
- **Change**: Hero badge now shows closed-year actuals instead of generic "aggiornati al 3 ottobre"
- **Verified**: Live QA passed

### 2. Comprehensive Consuntivi Data File (2020-2025)
- **File**: `data/finanze-cantonali-consuntivi.json`
- **Commit**: 91dd698
- **Content**:
  - C2020-C2025: All verified personnel/goods/services with mensaggi citations
  - Personnel trend: 1,075.7M (2020) → 1,219.7M (2025)
  - Goods/services trend: 297.9M (2020) → 341.8M (2025)
  - P2026: Labeled "IN CORSO" (year in progress, not actuals)
  - P2027: **HEADLINE ONLY** (deficit -98.5M, key changes)
  - Every number: Document name + page reference
  
### 3. Authority Costs - VERIFIED from Rendiconti
- **Commit**: d08b17b
- **Data sources**:
  - CdS 2025: CHF 1'014'905 (consulenze/perizie external costs, not CdS salaries)
    - Source: Rendiconto CdS 2025, ti.ch/fileadmin/CAN/TEMI/RENDICONTOCDS/2025/7_Rendiconto_DFE_2025.pdf
  - GC 2025: CHF 1'777'559 net (indennità deputati 90 members)
    - Source: Resoconto Art. 166a LGC, ti.ch/poteri/gc/attivita/resoconti-finanziari
  - **Clarified**: CdS member salaries are in aggregate voce 30 Personale (1,219.7M total), not published separately
  - FTE totali: Still unavailable (requires USTAT detail publication)
  
### 4. Past Years Trend (2020-2025)
- **Sources**: Official ti.ch Consuntivi messaggi
  - C2020: m4.ti.ch/fileadmin/DFE/DR-FINANZE/C2020/MessaggioConsuntivo2020_web.pdf
  - C2021: m4.ti.ch/fileadmin/DFE/DR-FINANZE/C2021/MessaggioConsuntivo2021_web.pdf
  - C2022-C2025: www4.ti.ch/dfe/dr/finanze/dati-finanziari/c20XX
- **Data**: All 2020-2025 personnel and goods/services figures with primary sources

### 5. Removed All Unverified/STIMATO Claims
- **Check**: STIMATO now appears ONLY in legend (1 occurrence)
- **Action**: Replaced all unverified claims with:
  - ✅ VERIFIED (with source citation)
  - ❌ NON DISPONIBILE (with explanation where to find it)

### 6. Adversarial QA - PASSED
- **Test**: `qa-quick.mjs` on live https://tiero.github.io/dove-vanno-soldi-ticino/
- **Results**:
  ```
  ✅ Badge: "Consuntivo 2025"
  ✅ Dropdown alpha: 1.0 (fully opaque)
  ✅ CdS cost 1'014'905: Found
  ✅ GC indennità 1'777'559: Found
  ✅ STIMATO mentions: 1 (legend only)
  ```
- **Viewports tested**: 1920px (representative)
- **Live deploy**: GitHub run 37150029558 completed 20:01:31 UTC

## ⚠️ BLOCKED / NOT COMPLETED

### Per-Comune Detailed Breakdown
- **Status**: BLOCKED - Excel parsing library unavailable
- **Workaround**: Aggregate comuni data already present in existing JSON
- **Source available**: `comuni_allegato_2024.xlsx` downloaded (2024-allegato.xlsx, 106 comuni)
- **Blocker**: `openpyxl` (Python) or `exceljs` (Node) not installed in environment
- **Recommendation**: Parse offline or install library in future run

### 3-Digit Subaccount Detail (301, 302, 311, 312, etc.)
- **Status**: NOT AVAILABLE in Canton's published Messaggi
- **Documented**: Added explicit note in `dettaglioBeniServizi` section of JSON:
  > "Il Cantone NON pubblica i dettagli 3-digit nei Messaggi ufficiali. Solo aggregati 2-digit e descrizioni narrative."
- **Line items published**: Locazioni, manutenzioni, informatica, consulenze, energia, trasporti (as delta narratives vs preventivo)
- **Action**: Clearly stated in UI that separate 3-digit amounts are not published

## 📊 DATA SOURCES VERIFIED
1. **C2025**: Messaggio 8672 del 15.04.2026
2. **C2024**: Messaggio 8562 del 09.04.2025
3. **C2023**: Messaggio 8413 del 10.04.2024
4. **P2026**: Messaggio 8619 del 29.09.2025 (approved GC 16.12.2025)
5. **P2027**: Messaggio 8731 del 30.09.2026 (awaiting approval)
6. **Rendiconto CdS 2025**: ti.ch/fileadmin/CAN/TEMI/RENDICONTOCDS/2025/
7. **GC Resoconti**: ti.ch/poteri/gc/attivita/resoconti-finanziari

## 🚀 COMMITS
- `4194bb8`: Dropdown opacity fix (previous session)
- `3fe09e5`: Data structure C2025 priority (previous session)
- `91dd698`: Comprehensive consuntivi 2020-2025 JSON
- `a3c9ce0`: Homepage badge "Consuntivo 2025"
- `d08b17b`: Verified CdS/GC authority costs

## ✅ LIVE DEPLOYMENT
- **Site**: https://tiero.github.io/dove-vanno-soldi-ticino/
- **Last deploy**: 2026-10-03 20:01:31 UTC (run 37150029558)
- **Commits included**: 91dd698, a3c9ce0, d08b17b
- **QA passed**: All critical checks ✅

## 📝 NOTES FOR FUTURE
1. **Comuni detail**: Requires Excel library or manual extraction
2. **Homepage cards**: Still show some P2027 metrics in hero - can be restructured further to lead with C2025 comparison
3. **Translation**: New strings ("Consuntivo 2025 - Dati effettivi", "Dati Autorità - Verificati") not yet in i18n files
4. **FTE data**: Check future USTAT publications "Il mercato del lavoro nel settore pubblico ticinese"
