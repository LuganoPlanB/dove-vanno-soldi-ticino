# 💰 Dove vanno i soldi del Ticino

[![Licenza: MIT](https://img.shields.io/badge/Licenza-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un sito web di trasparenza finanziaria per visualizzare in modo chiaro e accessibile i dati sul bilancio del Canton Ticino.

🌐 **[Vai al sito web](https://tiero.github.io/dove-vanno-soldi-ticino/)** (quando pubblicato)

[English version below](#english-version)

---

## 🇮🇹 Versione Italiana

### Perché questo progetto?

Il Canton Ticino si trova in una situazione finanziaria difficile:
- **Deficit crescente**: il preventivo 2027 prevede un disavanzo di 98.5 milioni di franchi
- **Debito pubblico**: superiore ai 3 miliardi di franchi a fine 2027
- **Premi cassa malattia**: in continuo aumento, con un impatto significativo sul bilancio cantonale

I dati finanziari ufficiali sono disponibili, ma spesso presentati in documenti PDF complessi e poco accessibili. 

**Questo progetto rende i dati finanziari del Cantone facilmente comprensibili**, con visualizzazioni chiare e interattive, per permettere a ogni cittadino di capire dove vanno i soldi pubblici.

### Cosa trovi nel sito

- 📊 **Treemap spese per funzione**: visualizzazione chiara di dove vanno i 4.7 miliardi del budget (previdenza sociale 30%, formazione 22%, sanità 13%, ecc.)
- 📈 **Serie storiche**: evoluzione debito pubblico e disavanzi 2023-2027 con proiezioni fino al 2030
- 💰 **Calcoli pro-capite**: ogni cifra è presentata anche per abitante (debito, deficit, spese)
- 🏥 **Focus sanità**: premi cassa malati Ticino (i più alti della Svizzera) e contributi cantonali
- 📚 **Fonti trasparenti**: ogni dato è tracciabile a documenti ufficiali
- 📱 **Mobile-friendly**: consultabile da smartphone e tablet

### Dati disponibili (aggiornamento 03.10.2026)

✅ **Spese per funzione 2027** (10 categorie): da Preventivo 2027, classificazione funzionale federale  
✅ **Serie storica debito pubblico** (2023-2027): da Consuntivi 2023, 2025 e Preventivo 2027  
✅ **Serie storica disavanzi** (2023-2027 + piano finanziario 2028-2030): da Consuntivi e Preventivo  
✅ **Popolazione Canton Ticino** (2022-2027): da Ustat e UST/BFS  
✅ **Premi cassa malati** (2026-2027): da UFSP/BAG, premi medi mensili Ticino  
✅ **Contributi cantonali sanità** (2023-2027): da Preventivi e Consuntivi CT  

### Dati mancanti

⏳ **Consuntivi 2024 e 2026**: non ancora pubblicati al 03.10.2026  
⏳ **Serie storiche pre-2023**: richiederebbero estrazione da consuntivi PDF anni precedenti  
⏳ **Spese per dipartimento**: disponibile nel Messaggio completo al Gran Consiglio (non estratto)  

### Fonti

Tutti i dati provengono da fonti ufficiali pubbliche:
- [Preventivo 2027 - Comunicato stampa del Consiglio di Stato](https://m4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato/?NEWS_ID=261157)
- [Messaggio n. 8731 - Preventivo 2027 (PDF)](https://www4.ti.ch/fileadmin/DFE/DR-FINANZE/P2027/Messaggio_P2027.pdf)
- [Divisione delle risorse - Dati finanziari](https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/)
- [Consuntivi 2023-2025](https://www4.ti.ch/dfe/dr/finanze/)
- [UFSP/BAG - Premi cassa malati](https://www.bag.admin.ch/)
- [UST/BFS - Popolazione](https://www.bfs.admin.ch/)

Il processo di estrazione è documentato in `data/ESTRAZIONE.md`.

---

## 🛠️ Sviluppo

### Requisiti

- Node.js 18 o superiore
- npm o pnpm

### Installazione

```bash
git clone https://github.com/tiero/dove-vanno-soldi-ticino.git
cd dove-vanno-soldi-ticino
npm install
```

### Sviluppo locale

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

### Build di produzione

```bash
npm run build
```

I file statici saranno generati nella cartella `dist/`.

### Test

```bash
npm run lint        # Controllo del codice
npm run typecheck   # Verifica dei tipi TypeScript
```

### Struttura del progetto

```
.
├── data/                           # Dati JSON e documentazione estrazione
│   ├── preventivo-2027.json        # Dati preventivo 2027
│   ├── spese-per-funzione-2027.json # Spese per classificazione funzionale
│   ├── debito-storico.json         # Serie storica debito pubblico
│   ├── deficit-storico.json        # Serie storica disavanzi
│   ├── popolazione.json            # Popolazione residente CT
│   ├── premi-e-contributi-sanita.json # Premi e contributi sanitari
│   └── ESTRAZIONE.md               # Documentazione processo estrazione
├── src/
│   ├── main.ts                     # Punto di ingresso, orchestrazione visualizzazioni
│   ├── charts.ts                   # Funzioni D3 per le visualizzazioni
│   └── style.css                   # Stili CSS responsive
├── index.html                      # Pagina principale
├── metodologia.html                # Pagina metodologia e fonti
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📊 Come aggiornare i dati

### Quando esce un nuovo preventivo o consuntivo

1. **Scarica il documento ufficiale** dal [sito del Canton Ticino](https://www4.ti.ch/dfe/dr/finanze/)

2. **Estrai i dati principali**:
   - Entrate e spese correnti
   - Disavanzo/avanzo
   - Debito pubblico
   - Dettagli per categoria di spesa

3. **Aggiorna i file JSON** in `data/`:
   - Aggiungi i nuovi dati alle serie storiche
   - Aggiungi sempre i metadata con fonte e data di estrazione

4. **Aggiorna ESTRAZIONE.md** con le informazioni sulla nuova fonte

5. **Testa in locale**:
   ```bash
   npm run dev
   ```

6. **Commit e push**:
   ```bash
   git add data/
   git commit -m "Aggiunti dati [Preventivo/Consuntivo] YYYY"
   git push
   ```

Consulta `data/ESTRAZIONE.md` per istruzioni dettagliate.

---

## 🚀 Deployment

Il sito è configurato per essere pubblicato su **GitHub Pages** con deployment automatico.

### Setup GitHub Pages

1. Vai su **Settings → Pages** nel repository GitHub
2. Seleziona **Source**: Deploy from a branch → **GitHub Actions**
3. Ogni push su `master` pubblicherà automaticamente il sito

Il workflow `.github/workflows/deploy.yml` è già configurato.

URL finale: https://tiero.github.io/dove-vanno-soldi-ticino/

---

## 🤝 Come contribuire

Contributi benvenuti! Puoi aiutare in diversi modi:

### 1. Aggiungere dati mancanti

- Estrarre consuntivi 2024 e 2026 quando disponibili
- Completare serie storiche pre-2023
- Aggiungere dettaglio per dipartimento
- Verificare l'accuratezza dei dati esistenti

### 2. Migliorare le visualizzazioni

- Proporre nuovi tipi di grafici
- Migliorare l'esperienza utente
- Ottimizzare per mobile

### 3. Tradurre

- Aggiungere traduzioni in tedesco, francese o romancio
- Migliorare i testi esistenti

### 4. Segnalare problemi

Apri una [issue](https://github.com/tiero/dove-vanno-soldi-ticino/issues) per:
- Segnalare errori nei dati
- Proporre nuove funzionalità
- Riportare bug tecnici

### Pull Request

1. Fai un fork del repository
2. Crea un branch per la tua modifica: `git checkout -b feature/nome-feature`
3. Commit delle modifiche: `git commit -m 'Aggiunta nuova feature'`
4. Push del branch: `git push origin feature/nome-feature`
5. Apri una Pull Request

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza [MIT](LICENSE).

I dati visualizzati provengono da documenti ufficiali pubblici del Canton Ticino e della Confederazione Svizzera e sono di pubblico dominio.

---

## 🙏 Ringraziamenti

Ispirato da [Dove vanno i nostri soldi](https://github.com/Italian-Builders-Org/DoveVannoINostriSoldi), progetto di trasparenza sul bilancio italiano.

---

## 📧 Contatti

Per domande o suggerimenti, apri una [issue](https://github.com/tiero/dove-vanno-soldi-ticino/issues) su GitHub.

---

<a name="english-version"></a>

## 🇬🇧 English Version

### Where does Ticino's money go?

A financial transparency website to visualize Canton Ticino's (Switzerland) budget data in a clear and accessible way.

### Why this project?

Canton Ticino is facing financial challenges:
- Growing deficit (CHF 98.5M forecasted for 2027)
- Public debt exceeding CHF 3 billion by end of 2027
- Rising health insurance premiums impacting the cantonal budget

This project makes official financial data easily understandable through clear, interactive visualizations, enabling every citizen to understand where public money goes.

### What you'll find

- 📊 **Spending treemap by function**: clear visualization of where the CHF 4.7 billion budget goes
- 📈 **Historical series**: public debt and deficit evolution 2023-2027 with projections to 2030
- 💰 **Per-capita figures**: every number also shown per inhabitant
- 🏥 **Healthcare focus**: Ticino health insurance premiums (highest in Switzerland) and cantonal contributions
- 📚 **Transparent sources**: every data point traceable to official documents
- 📱 **Mobile-friendly** interface

### Available data (updated Oct 3, 2026)

✅ **Spending by function 2027** (10 categories): from Budget 2027, federal functional classification  
✅ **Public debt history** (2023-2027): from Financial Statements 2023, 2025 and Budget 2027  
✅ **Deficit history** (2023-2027 + financial plan 2028-2030): from Statements and Budget  
✅ **Canton Ticino population** (2022-2027): from Ustat and Swiss Federal Statistical Office  
✅ **Health insurance premiums** (2026-2027): from Swiss Federal Office of Public Health  
✅ **Cantonal health contributions** (2023-2027): from Budgets and Financial Statements  

### Missing data

⏳ **2024 and 2026 Statements**: not yet published as of Oct 3, 2026  
⏳ **Pre-2023 historical series**: would require extraction from previous years' PDF statements  
⏳ **Spending by department**: available in full Message to Parliament (not extracted)  

### Development

**Requirements**: Node.js 18+

```bash
git clone https://github.com/tiero/dove-vanno-soldi-ticino.git
cd dove-vanno-soldi-ticino
npm install
npm run dev
```

### Deployment

The site is configured for **GitHub Pages** with automatic deployment via GitHub Actions.

See the Italian documentation above for detailed instructions.

### Contributing

Contributions welcome! You can help by:
- Extracting missing data from official documents
- Improving visualizations
- Translating content (German, French, Romansh)
- Reporting issues

### License

Released under [MIT License](LICENSE). Data comes from public official documents.

---

**Made with ❤️ for financial transparency**

---

## 🛠️ Sviluppo

### Requisiti

- Node.js 18 o superiore
- npm o pnpm

### Installazione

```bash
git clone https://github.com/tiero/dove-vanno-soldi-ticino.git
cd dove-vanno-soldi-ticino
npm install
```

### Sviluppo locale

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

### Build di produzione

```bash
npm run build
```

I file statici saranno generati nella cartella `dist/`.

### Test

```bash
npm run lint        # Controllo del codice
npm run typecheck   # Verifica dei tipi TypeScript
```

### Struttura del progetto

```
.
├── data/                    # Dati JSON e documentazione estrazione
│   ├── preventivo-2027.json
│   ├── debito-storico.json
│   ├── deficit-storico.json
│   └── ESTRAZIONE.md
├── src/
│   ├── main.ts              # Punto di ingresso principale
│   ├── charts.ts            # Funzioni per le visualizzazioni D3
│   └── style.css            # Stili CSS
├── index.html               # Pagina principale
├── metodologia.html         # Pagina metodologia e fonti
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📊 Come aggiornare i dati

### Quando esce un nuovo preventivo o consuntivo

1. **Scarica il documento ufficiale** dal [sito del Canton Ticino](https://www4.ti.ch/dfe/dr/cosa-facciamo/ufficio-della-gestione-finanziaria/)

2. **Estrai i dati principali**:
   - Entrate e spese correnti
   - Disavanzo/avanzo
   - Debito pubblico
   - Dettagli per categoria di spesa

3. **Aggiorna i file JSON** in `data/`:
   - `preventivo-YYYY.json` o `consuntivo-YYYY.json`
   - Aggiungi sempre i metadata con fonte e data di estrazione

4. **Aggiorna ESTRAZIONE.md** con le informazioni sulla nuova fonte

5. **Testa in locale**:
   ```bash
   npm run dev
   ```

6. **Commit e push**:
   ```bash
   git add data/
   git commit -m "Aggiunti dati [Preventivo/Consuntivo] YYYY"
   git push
   ```

### Per aggiungere serie storiche

Consulta `data/ESTRAZIONE.md` per le istruzioni dettagliate su come estrarre i dati dai consuntivi PDF.

---

## 🚀 Deployment

Il sito è configurato per essere pubblicato su **GitHub Pages**.

### Setup GitHub Pages

1. Vai su **Settings → Pages** nel repository GitHub
2. Seleziona **Source**: Deploy from a branch
3. Seleziona **Branch**: `master` e cartella `/` (root)
4. Salva

### Deployment automatico (opzionale)

Per abilitare il deployment automatico a ogni push, crea il file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Dopo il setup, ogni push su `master` publicherà automaticamente il sito.

---

## 🤝 Come contribuire

Contributi benvenuti! Puoi aiutare in diversi modi:

### 1. Aggiungere dati mancanti

- Estrarre serie storiche dai consuntivi PDF
- Aggiungere dettaglio per dipartimento/funzione
- Verificare l'accuratezza dei dati esistenti

### 2. Migliorare le visualizzazioni

- Proporre nuovi tipi di grafici
- Migliorare l'esperienza utente
- Ottimizzare per mobile

### 3. Tradurre

- Aggiungere traduzioni in tedesco, francese o romancio
- Migliorare i testi esistenti

### 4. Segnalare problemi

Apri una [issue](https://github.com/tiero/dove-vanno-soldi-ticino/issues) per:
- Segnalare errori nei dati
- Proporre nuove funzionalità
- Riportare bug tecnici

### Pull Request

1. Fai un fork del repository
2. Crea un branch per la tua modifica: `git checkout -b feature/nome-feature`
3. Commit delle modifiche: `git commit -m 'Aggiunta nuova feature'`
4. Push del branch: `git push origin feature/nome-feature`
5. Apri una Pull Request

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza [MIT](LICENSE).

I dati visualizzati provengono da documenti ufficiali pubblici del Canton Ticino e sono di pubblico dominio.

---

## 🙏 Ringraziamenti

Ispirato da [Dove vanno i nostri soldi](https://github.com/Italian-Builders-Org/DoveVannoINostriSoldi), progetto di trasparenza sul bilancio italiano.

---

## 📧 Contatti

Per domande o suggerimenti, apri una [issue](https://github.com/tiero/dove-vanno-soldi-ticino/issues) su GitHub.

---

<a name="english-version"></a>

## 🇬🇧 English Version

### Where does Ticino's money go?

A financial transparency website to visualize Canton Ticino's (Switzerland) budget data in a clear and accessible way.

### Why this project?

Canton Ticino is facing financial challenges:
- Growing deficit (CHF 98.5M forecasted for 2027)
- Public debt exceeding CHF 3 billion by end of 2027
- Rising health insurance premiums impacting the cantonal budget

This project makes official financial data easily understandable through clear, interactive visualizations, enabling every citizen to understand where public money goes.

### What you'll find

- 📊 Interactive visualizations of the 2027 budget
- 📈 Clear charts on revenue, spending, deficit, and public debt
- 🏥 Focus on healthcare spending and health insurance contributions
- 📚 Transparent sources: every data point is traceable to official documents
- 📱 Mobile-friendly interface

### Current data

The site currently displays data from the **2027 Budget** published by the State Council on September 30, 2026.

### Missing data (help us!)

To complete the visualizations, we still need:
- ⏳ Historical public debt series (2020-2026)
- ⏳ Historical deficit series (2020-2026)
- ⏳ Spending breakdown by department
- ⏳ Spending breakdown by function (education, health, justice, etc.)

### Development

**Requirements**: Node.js 18+

```bash
git clone https://github.com/tiero/dove-vanno-soldi-ticino.git
cd dove-vanno-soldi-ticino
npm install
npm run dev
```

### Deployment

The site is configured for **GitHub Pages**. See the Italian section above for detailed deployment instructions.

### Contributing

Contributions welcome! You can help by:
- Extracting missing data from official PDF documents
- Improving visualizations
- Translating content (German, French, Romansh)
- Reporting issues

See the full Italian documentation above for details.

### License

Released under [MIT License](LICENSE). Data comes from public official documents.

---

**Made with ❤️ for financial transparency**
