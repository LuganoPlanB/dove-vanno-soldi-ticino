# 🎉 Progetto Completato: Dove vanno i soldi del Ticino

## Stato Finale

✅ **Repository inizializzato** con progetto completo  
✅ **Commit e push** completati su `master`  
✅ **Sito funzionante** localmente  
✅ **Build testato** con successo  

**Repository**: https://github.com/tiero/dove-vanno-soldi-ticino  
**Commits**: 3 (Initial commit → Full project → Completion report)  
**Ultimo commit**: `560caa1`

---

## 📦 Cosa è stato costruito

### 1. Sito Web Completo

**Stack tecnologico**:
- ⚡ Vite 5 + TypeScript 5
- 📊 D3.js 7 per visualizzazioni interattive
- 🎨 CSS custom responsive (mobile-first)
- 🚀 GitHub Actions per deployment automatico

**Pagine**:
- `index.html` - Dashboard principale con 3 visualizzazioni interattive
- `metodologia.html` - Documentazione completa metodologia e fonti

**Visualizzazioni implementate**:
1. **Entrate vs Uscite 2027** - Confronto ricavi/spese con evidenza disavanzo
2. **Crescita spese 2026-2027** - Breakdown aumenti per categoria
3. **Peso della sanità** - Dettaglio spese sanitarie e contributi premi

### 2. Dati Strutturati

**File JSON** in `data/` con metadata completi:
- ✅ `preventivo-2027.json` - Tutti i dati ufficiali del Preventivo 2027
- ⏳ `debito-storico.json` - Struttura pronta per serie storica
- ⏳ `deficit-storico.json` - Struttura pronta per serie storica

**Documentazione**:
- `data/ESTRAZIONE.md` - Processo dettagliato estrazione dati
- Ogni dato tracciabile a fonte ufficiale
- Istruzioni per aggiornamenti futuri

### 3. Design Mobile-Friendly

**Caratteristiche**:
- ✅ Responsive breakpoints: 320px, 768px, 1200px
- ✅ Palette colori accessibile (WCAG AA)
- ✅ Tipografia chiara (system fonts)
- ✅ Card informative per numeri chiave
- ✅ Sezione "Dati mancanti" trasparente

### 4. Documentazione Completa

**README.md** (bilingue IT/EN):
- Scopo del progetto e contesto
- Setup sviluppo passo-passo
- Istruzioni aggiornamento dati
- Guida deployment GitHub Pages
- Come contribuire
- Struttura progetto completa

**COMPLETION_REPORT.md**:
- Riepilogo completo costruito
- Tabella dati disponibili
- Lista dati mancanti e dove trovarli
- Raccomandazioni prioritarie
- Next steps tecnici
- Checklist lancio pubblico

---

## 🚀 Come procedere

### Opzione 1: Pubblicare Subito (Base)

Il sito è già funzionante e può essere pubblicato immediatamente:

1. **Attiva GitHub Pages**:
   - Vai su https://github.com/tiero/dove-vanno-soldi-ticino/settings/pages
   - Source: **GitHub Actions**
   - Salva

2. **Verifica deployment**:
   - Tab Actions: https://github.com/tiero/dove-vanno-soldi-ticino/actions
   - Aspetta che il workflow "Deploy to GitHub Pages" completi
   - Visita: https://tiero.github.io/dove-vanno-soldi-ticino/

3. **Test finale**:
   - Verifica che le 3 visualizzazioni si caricano correttamente
   - Testa su mobile (responsive)
   - Controlla link funzionanti

✅ **PRO**: Sito subito online, trasparente sui dati mancanti  
⚠️ **CONTRO**: Solo dati 2027, nessuna serie storica (ma dichiarato chiaramente)

### Opzione 2: Completare Prima di Pubblicare (Raccomandato)

Completare almeno le **3 priorità alte** per un lancio più robusto:

#### Priorità 1: Serie storiche debito/deficit (2020-2026)

**Perché**: Grafici evoluzione temporale fondamentali per capire il trend

**Come fare**:
1. Scarica consuntivi 2020-2026 da:
   https://www4.ti.ch/dfe/dr/cosa-facciamo/ufficio-della-gestione-finanziaria/
2. Estrai da ogni PDF:
   - Debito pubblico a fine anno
   - Disavanzo/avanzo d'esercizio
3. Aggiorna `data/debito-storico.json` e `data/deficit-storico.json`
4. Implementa line chart in `src/main.ts`

**Effort**: 4-6 ore  
**Files**: `data/debito-storico.json`, `data/deficit-storico.json`, aggiorna `src/main.ts`

#### Priorità 2: Dettaglio spese per funzione

**Perché**: La domanda principale è "Dove vanno i soldi?" per categoria comprensibile

**Come fare**:
1. Consulta Messaggio n. 8731 (allegato al comunicato)
2. Estrai classificazione per funzione (sanità, educazione, sicurezza, ecc.)
3. Crea `data/spese-per-funzione-2027.json`
4. Implementa treemap in `src/main.ts`

**Effort**: 2-3 ore  
**Files**: `data/spese-per-funzione-2027.json`, nuova visualizzazione treemap

#### Priorità 3: Dati popolazione per pro-capite

**Perché**: Numeri assoluti poco comprensibili senza contesto per-abitante

**Come fare**:
1. Vai su https://www.bfs.admin.ch/bfs/it/home/statistiche/popolazione.html
2. Scarica popolazione residente TI 2020-2027
3. Crea `data/popolazione.json`
4. Aggiungi calcoli pro-capite in tutte le visualizzazioni

**Effort**: 30 minuti - 1 ora  
**Files**: `data/popolazione.json`, update `src/main.ts`

**Timeline totale**: 7-10 ore lavoro concentrato

---

## 📊 Dati Attualmente Disponibili

Dal **Preventivo 2027** (Consiglio di Stato, 30.09.2026):

| Categoria | Disponibile |
|-----------|-------------|
| Bilancio generale 2027 | ✅ Completo |
| Variazioni 2026-2027 | ✅ Completo |
| Spese sanitarie 2027 | ✅ Dettagliate |
| Entrate 2027 | ✅ Principali voci |
| Misure riequilibrio | ✅ Importi |
| Piano finanziario 2028-2030 | ✅ Stime aggregate |
| **Serie storiche 2020-2026** | ⏳ **Da estrarre** |
| **Spese per dipartimento** | ⏳ **Da estrarre** |
| **Spese per funzione** | ⏳ **Da estrarre** |
| **Dati popolazione** | ⏳ **Da aggiungere** |

Dettaglio completo in `COMPLETION_REPORT.md`

---

## 🔧 Setup Sviluppo

### Test locale immediato

```bash
cd /workspace
npm install        # Già fatto
npm run dev       # Apre su http://localhost:5173/dove-vanno-soldi-ticino/
```

### Build e verifica

```bash
npm run typecheck  # Verifica TypeScript
npm run build      # Compila per produzione
npm run preview    # Preview build locale
```

### Aggiungere nuovi dati

1. Modifica/crea file JSON in `data/`
2. Importa in `src/main.ts`:
   ```typescript
   import newData from '../data/new-data.json';
   ```
3. Crea funzione visualizzazione
4. Test: `npm run dev`
5. Commit: `git add . && git commit -m "..." && git push`

---

## 📁 File Importanti da Consultare

- **README.md** - Documentazione completa progetto
- **COMPLETION_REPORT.md** - Stato dettagliato e raccomandazioni
- **data/ESTRAZIONE.md** - Come estrarre dati dai PDF
- **.github/workflows/deploy.yml** - Deployment automatico
- **src/main.ts** - Logica visualizzazioni
- **src/charts.ts** - Funzioni D3 riutilizzabili

---

## ⚠️ Note Importanti

### Trasparenza sui Limiti

Il sito include una sezione **"Dati non ancora disponibili"** che:
- Elenca chiaramente cosa manca (serie storiche, dettaglio per dipartimento/funzione)
- Spiega dove trovare questi dati
- Invita a contribuire

Questa trasparenza è **intenzionale** e coerente con lo spirito del progetto.

### Fonti Verificabili

Ogni dato è tracciabile:
- Link diretti a comunicati ufficiali
- Metadata in file JSON con fonte e data
- Documentazione processo estrazione

### Indipendenza

Il sito dichiara esplicitamente:
> "Questo sito è indipendente e non è affiliato al governo cantonale"

### Licenza

- Codice: MIT License
- Dati: provengono da documenti pubblici ufficiali (pubblico dominio)

---

## 🎯 Decisione Raccomandata

**Per lancio pubblico immediato**:
1. ✅ Attiva GitHub Pages ora
2. ⏳ Lavora in parallelo su priorità 1-3
3. ⏳ Aggiorna sito quando completate
4. ✅ Promuovi quando hai almeno serie storiche + funzioni

**Per lancio più solido** (raccomandato):
1. ⏳ Completa almeno priorità 1 e 2 (serie storiche + funzioni)
2. ⏳ Test finale completo
3. ✅ Attiva GitHub Pages
4. ✅ Promuovi pubblicamente

In entrambi i casi, la base tecnica è **solida** e **pronta**.

---

## 📞 Supporto

- Issues: https://github.com/tiero/dove-vanno-soldi-ticino/issues
- README: Istruzioni dettagliate
- COMPLETION_REPORT.md: Roadmap completa

---

**Progetto completato con successo! 🎉**

**Repository**: https://github.com/tiero/dove-vanno-soldi-ticino  
**Branch**: master  
**Commits**: 3  
**Status**: ✅ Build OK, ✅ Code pushed, ⏳ GitHub Pages da attivare

**Prossimo step**: Attiva GitHub Pages o completa priorità 1-3 prima della pubblicazione.
