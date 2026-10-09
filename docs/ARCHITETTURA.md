# Architettura Informativa

**Dove vanno i soldi del Ticino** - Struttura dati e navigazione

## Principi
1. **Una fonte canonica per numero**: ogni cifra ha una sola origine (un JSON), mostrata in full in un solo posto, altrove solo link
2. **Zero approssimazioni**: solo cifre stampate in documenti primari con citazione esatta (documento+pagina)
3. **Zero filler**: testi brevi, specifici, sourcati; nessun intro generico/emoji-spam/boilerplate
4. **Struttura gerarchica chiara**: ogni argomento una sola pagina, nessuna sovrapposizione

## Gerarchia Pagine

### `index.html` — Home
**Scopo**: Hero, formule «quanto costa», quadro 2025, mappa delle spese, tre richiami e il confronto 2024–2027. Il dettaglio sta nelle pagine dedicate.

**Contenuti**:
- Hero: metriche Consuntivo 2025
- Quanto costa: formule per abitante
- Quadro finanziario 2025
- Mappa spese per natura: il click apre `spese.html`
- Richiami a `sanita.html` e `controllo.html`
- Tre comuni più grandi, link a `comuni.html`
- Confronto consuntivi 2024–2025 e preventivi 2026–2027 (`data/confronto-bilanci.json`)

**Dati canonici qui**:
- `data/spese-per-natura-2025.json` → treemap Spese per natura economica 2025
- `data/premi-e-contributi-sanita.json` → Premi sanitari 545 CHF (UFSP p.18)

### `storia-debito.html` — Debito pubblico: serie storica 2010-2025
**Scopo**: Evoluzione del debito pubblico cantonale verificata anno per anno (MCA2 / indebitamento netto).

**Contenuti**:
- Grafico linea: debito 2010-2025 (asse Y inizia a zero, lacune esplicite 2013-2023)
- Tabella: anno | debito | tipo (consuntivo/stima/lacuna) | fonte (Messaggio + pagina)
- Breve spiegazione: quando/perché si è accumulato il debito (solo dove sourcato)

**Dati canonici qui**:
- `data/storia-debito-pubblico.json` → Serie storica debito (2010, 2011, 2012, 2024, 2025 verificati; 2013-2023 lacune documentate)

### `tassazione-imprese.html` — Tassazione imprese: aliquote vs gettito
**Scopo**: Aliquote imposta utile imprese Ticino, gettito effettivo, split per settore (dove stampato da Ustat/STATENT).

**Contenuti**:
- Aliquota nominale e effettiva: fonte Ustat (con pagina esatta)
- Gettito: fonte DFE (con documento e pagina)
- Split settoriale: solo dove Ustat/STATENT stampa il breakdown, altrimenti lacuna esplicita

**Dati canonici qui**:
- `data/tassazione-imprese.json` → Aliquote, gettito, split settori

### `comuni.html` — Comuni: finanze comunali 2024
**Scopo**: Ricerca, confronto e classifica comuni per finanze 2024.

**Contenuti**:
- Ricerca comune per nome
- Ordinamento: debito pro capite, avanzo, moltiplicatore
- Confronto side-by-side di 2 comuni
- Fonte: Excel tabs comuni 2024 (DFE)

**Dati canonici qui**:
- `data/comuni-finanze-2024.json` → Finanze comunali 2024 (da Excel DFE)

### `metodologia.html` — Metodologia e Fonti
**Scopo**: Spiegazione della metodologia di raccolta dati, lista completa documenti primari con URL+pagina, limitazioni esplicite (dati mancanti/approssimati).

**Contenuti**:
- Metodologia raccolta (scan PDF Messaggi, verifica matematica, test automatici)
- Lista fonti primarie: ogni Messaggio/documento con URL, data, pagine usate
- Limitazioni: quali dati mancano, perché, quando saranno disponibili (se noto)
- Disclaimer indipendenza: UNA SOLA VOLTA (non ripetuto in footer altre pagine)

**No dati canonici qui**: solo metadati e documenti

## Dati Canonici

Ogni file JSON ha uno scopo singolo e non duplica dati:

| File | Contenuto | Usato in | Verifica |
|------|-----------|----------|----------|
| `data/spese-per-natura-2025.json` | Spese per natura economica C2025 | `index.html` treemap | C2025 Msg 8672 p.42 |
| `data/storia-debito-pubblico.json` | Serie storica debito 2010-2025 | `storia-debito.html` + `index.html` metric | C2024 Msg 8562 p.48, C2025 Msg 8672 |
| `data/deficit-storico.json` | Serie disavanzi 2023-2027 | `index.html` deficit chart | C2023/2024/2025, P2027 |
| `data/premi-e-contributi-sanita.json` | Premi sanitari UFSP 2025 | `index.html` health card | UFSP rapporto p.18 |
| `data/tassazione-imprese.json` | Aliquote + gettito imprese | `tassazione-imprese.html` | Ustat, DFE |
| `data/comuni-finanze-2024.json` | Finanze comunali 2024 | `comuni.html` | Excel DFE comuni 2024 |
| `data/popolazione.json` | Popolazione cantonale annuale | `index.html` metric | Ustat popolazione |
| `data/preventivo-2027.json` | Preventivo 2027 (teaser home) | `index.html` sezione 2027 | P2027 Msg 8703 |

**Eliminati** (duplicati o con approssimazioni):
- `data/debito-storico.json` → aveva stime/approssimazioni, duplicava `storia-debito-pubblico.json`
- `data/confronto-pluriennale-2025-2027.json` → dati sparsi già in altri JSON

## Navigazione

Lo stesso header, montato da `src/shared-nav.ts`, sta su ogni pagina:
- Logo (torna alla home)
- Link: Home, Spese, Sanità, Controllo, Comuni, Debito, Imprese, Metodologia
- Selettore lingua (IT/EN/DE/FR)
- Toggle tema (light/dark)

Sotto `lg` i link stanno nel menu. La home tiene l'hero, le formule, il quadro 2025, la mappa delle spese e tre richiami. Il dettaglio sta nelle pagine Spese, Sanità, Controllo e Comuni.

Footer (tutte le pagine):
- Descrizione breve (una riga)
- Link: Metodologia, GitHub
- **Nessun disclaimer ripetuto** (solo in metodologia.html)

## Test Anti-Duplicazione

File: `tests/anti-duplication.spec.ts`

Verifica:
1. Nessuna cifra hardcoded in più di un file HTML (deve venire da JSON)
2. Ogni JSON referenziato da massimo una pagina come fonte canonica
3. Nessuna stringa "Questo sito" nelle pagine (eccetto metodologia.html disclaimer unico)
4. Nessuna sezione "Limitazioni" ripetuta (solo in metodologia.html)

## Changelog Dedup

### Rimosso
- ❌ `src/main-old.ts`, `debug-live-charts.mjs`, `test-*.mjs` (dead code)
- ❌ `data/debito-storico.json` (duplicato + approssimazioni)
- ❌ Intro generici "Questo sito rende accessibili..." (AI filler)
- ❌ Disclaimer indipendenza ripetuto in ogni footer (ora solo metodologia.html)
- ❌ Sezioni "Limitazioni" duplicate (ora solo metodologia.html)

### Consolidato
- ✅ Debito: una sola fonte `storia-debito-pubblico.json`, referenziata da home metric + storia-debito page
- ✅ Popolazione: `data/popolazione.json`, usato solo per metric home
- ✅ Premi sanitari: `data/premi-e-contributi-sanita.json`, card home

### Strutturato
- ✅ Home: focus C2025 (dati effettivi) + anticipo P2026 + teaser P2027 compatto fondo pagina
- ✅ Storia debito: pagina dedicata serie storica con lacune esplicite
- ✅ Tassazione: pagina dedicata aliquote + gettito
- ✅ Comuni: pagina dedicata ricerca/confronto
- ✅ Metodologia: unico posto per fonti complete + limitazioni + disclaimer

---

**Ultima revisione**: 2026-10-03  
**Autore**: Cloud Agent dedup pass
