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

- 📊 **Visualizzazioni interattive** del bilancio 2027
- 📈 **Grafici chiari** su entrate, uscite, deficit e debito pubblico
- 🏥 **Focus sulle spese sanitarie** e i contributi per le casse malattia
- 📚 **Fonti trasparenti**: ogni dato è tracciabile a documenti ufficiali
- 📱 **Mobile-friendly**: consultabile da smartphone e tablet

### Dati disponibili

Attualmente il sito visualizza i dati del **Preventivo 2027** pubblicato dal Consiglio di Stato il 30 settembre 2026:
- Entrate e spese correnti
- Disavanzo preventivato
- Debito pubblico stimato
- Dettaglio degli aumenti di spesa
- Focus sulle spese sanitarie

### Dati mancanti (aiutaci!)

Per completare le visualizzazioni mancano ancora:
- ⏳ Serie storiche del debito pubblico (2020-2026)
- ⏳ Serie storiche dei disavanzi (2020-2026)
- ⏳ Dettaglio delle spese per dipartimento
- ⏳ Dettaglio delle spese per funzione (educazione, sanità, giustizia, ecc.)

Questi dati sono disponibili nei consuntivi ufficiali della [Divisione delle risorse](https://www4.ti.ch/dfe/dr/cosa-facciamo/ufficio-della-gestione-finanziaria/), ma richiedono un'estrazione manuale dai PDF.

**Vuoi aiutare?** Leggi la sezione [Come contribuire](#come-contribuire).

### Fonti

Tutti i dati provengono da fonti ufficiali pubbliche:
- [Preventivo 2027 - Comunicato stampa del Consiglio di Stato](https://m4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato/?NEWS_ID=261157)
- [Divisione delle risorse - Archivio preventivi e consuntivi](https://www4.ti.ch/dfe/dr/cosa-facciamo/ufficio-della-gestione-finanziaria/)

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
