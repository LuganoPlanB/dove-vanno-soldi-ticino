# Estrazione Dati - Canton Ticino

Questo documento descrive come sono stati estratti i dati finanziari del Canton Ticino.

## Fonti Primarie

### 1. Preventivo 2027 (30 settembre 2026)

**Fonte**: Consiglio di Stato del Canton Ticino  
**URL**: https://m4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato/?NEWS_ID=261157  
**Data pubblicazione**: 30 settembre 2026

**Allegati citati ma non accessibili via web pubblico**:
- Messaggio n. 8731 - Preventivo 2027 e ulteriori misure di riequilibrio finanziario
- Presentazione

**Dati estratti dal comunicato stampa**:

| Campo | Valore | Unità |
|-------|--------|-------|
| Disavanzo d'esercizio 2027 | -98.5 | milioni CHF |
| Autofinanziamento | 129.1 | milioni CHF |
| Grado di autofinanziamento | 44.4 | % |
| Investimenti netti | 290.5 | milioni CHF |
| Debito pubblico fine 2027 (stima) | >3'000 | milioni CHF |
| Capitale proprio | -336.8 | milioni CHF |
| Spese correnti 2027 | 4'318.2 | milioni CHF |
| Variazione spese correnti 2026-2027 | +101.0 (+2.4%) | milioni CHF |

**Dettaglio spese sanitarie** (variazioni 2026-2027):
- Contributi premi assicurazione malattia: +69.5M CHF
- Prestazioni complementari AVS/AI: +17.5M CHF
- Contributi ospedalizzazioni (totale): 428.7M CHF
  - In Cantone: 393.7M CHF
  - Fuori Cantone: 35.0M CHF

**Entrate**:
- Regalie e concessioni: 181.9M CHF (includono 2 quote utili BNS)

## Dati Mancanti

### Serie Storiche

I seguenti dati storici **non sono stati estratti** perché richiedono l'analisi dei documenti PDF dei consuntivi ufficiali:

1. **Debito pubblico 2020-2026**: disponibile nei consuntivi annuali
2. **Disavanzi/avanzi 2020-2026**: disponibile nei consuntivi annuali
3. **Dettaglio spese per dipartimento**: disponibile nei preventivi/consuntivi dettagliati
4. **Dettaglio spese per funzione**: disponibile nei preventivi/consuntivi dettagliati
5. **Evoluzione spese sanitarie storiche**: richede analisi serie storica

### Fonti per Completare i Dati

**Divisione delle risorse - Canton Ticino**:
- Preventivi e consuntivi: https://www4.ti.ch/dfe/dr/cosa-facciamo/ufficio-della-gestione-finanziaria/
- Opendata Ticino: https://dati.ti.ch/ (verificare disponibilità dataset finanza cantonale)

**Ufficio federale della sanità pubblica (UFSP/BAG)**:
- Statistiche premi cassa malattia per cantone
- https://www.bag.admin.ch/

**Ufficio federale di statistica (UST/BFS)**:
- Popolazione residente Canton Ticino (per calcoli pro-capite)
- https://www.bfs.admin.ch/

## Metodo di Estrazione

1. **Preventivo 2027**: lettura manuale del comunicato stampa pubblicato online
2. **Calcoli derivati**: 
   - Ricavi correnti 2027 = Spese correnti - Disavanzo = 4318.2 - 98.5 = 4219.7M CHF

## Come Aggiornare i Dati

### Quando escono nuovi preventivi/consuntivi:

1. Consultare il sito del Consiglio di Stato: https://www4.ti.ch/area-media/comunicati/
2. Scaricare il Messaggio al Gran Consiglio (PDF)
3. Estrarre i dati principali:
   - Conto economico (ricavi e spese correnti)
   - Conto degli investimenti
   - Debito pubblico
   - Capitale proprio
4. Aggiornare i file JSON in `data/`
5. Aggiornare questo documento con la nuova fonte

### Per aggiungere serie storiche:

1. Scaricare consuntivi passati da: https://www4.ti.ch/dfe/dr/cosa-facciamo/ufficio-della-gestione-finanziaria/
2. Estrarre i dati dal conto economico
3. Creare/aggiornare i file JSON con i dati storici
4. Aggiungere metadata con fonte e data di estrazione

## Note Metodologiche

- Tutti i valori sono in **milioni di franchi svizzeri (CHF)**
- Le variazioni percentuali sono arrotondate a una cifra decimale
- I valori del preventivo 2027 sono **stime** e potrebbero differire dal consuntivo 2027
- Il debito pubblico fine 2027 è indicato come ">3'000M", si utilizza 3'000M come valore di riferimento
- I calcoli pro-capite richiedono i dati di popolazione UST/BFS
