export default {
  meta: {
    title: 'Dove vanno i soldi del Ticino',
    description: 'Visualizzazione trasparente delle finanze del Canton Ticino - Dove vanno i soldi del Ticino'
  },
  nav: {
    title: 'Dove vanno i soldi del Ticino',
    home: 'Dashboard',
    methodology: 'Metodologia',
    github: 'Codice sorgente'
  },
  hero: {
    badge: 'Dati ufficiali aggiornati al 3 ottobre 2026',
    title: 'Dove vanno i soldi del',
    titleHighlight: 'Ticino',
    titleQuestion: '?',
    subtitle: 'Trasparenza totale sulle finanze cantonali. Ogni dato verificato, ogni fonte citata, ogni numero tracciabile.',
    metrics: {
      deficit: {
        label: 'Disavanzo 2027',
        value: '-98.5M',
        sub: 'CHF -272 per abitante'
      },
      debt: {
        label: 'Debito pubblico',
        value: '>3.0 Mia',
        sub: '+20% dal 2023'
      },
      premiums: {
        label: 'Premi più alti CH',
        value: '520 CHF',
        sub: '+26% vs media svizzera'
      }
    }
  },
  context: {
    title: 'La situazione finanziaria',
    intro: 'Il Canton Ticino affronta una situazione finanziaria complessa, caratterizzata da un disavanzo strutturale e un debito pubblico in crescita. Il Preventivo 2027 prevede un disavanzo di 98.5 milioni di franchi, mentre il debito pubblico supererà i 3 miliardi.',
    highlights: {
      title: 'Punti chiave',
      list: [
        'Dal 2010 il canton Ticino non ha mai chiuso un bilancio in pareggio',
        'Le spese correnti crescono più velocemente delle entrate',
        'Il Ticino ha i premi di cassa malati più alti della Svizzera',
        'Gli investimenti netti superano la capacità di autofinanziamento'
      ]
    },
    sources: {
      title: 'Fonti',
      list: [
        'Messaggio n. 8731 - Preventivo 2027 del Canton Ticino',
        'Dati UFSP (Ufficio federale della sanità pubblica)',
        'BFS/USTAT - Statistiche ufficiali popolazione',
        'Gran Consiglio - Messaggi e atti ufficiali'
      ]
    }
  },
  charts: {
    title: 'Dove vanno i soldi?',
    subtitle: 'Esplora le visualizzazioni interattive per capire come vengono spesi i 4.7 miliardi di franchi del budget cantonale',
    spending: {
      title: 'Spese per funzione 2027',
      hint: 'Tocca per i dettagli'
    },
    debt: {
      title: 'Debito pubblico cantonale',
      yAxis: 'Miliardi CHF'
    },
    deficit: {
      title: 'Disavanzo annuale',
      yAxis: 'Milioni CHF'
    },
    health: {
      title: 'Confronto 2025-2027',
      subtitle: 'Evoluzione delle principali voci di bilancio'
    },
    budget: {
      title: 'Preventivo 2027 - Panoramica'
    }
  },
  data: {
    title: 'Stato dei dati',
    available: {
      title: 'Disponibili',
      list: [
        'Preventivo 2027 completo',
        'Consuntivo 2025',
        'Debito storico 2023-2027',
        'Premi LAMal 2025-2027',
        'Dati popolazione'
      ]
    },
    missing: {
      title: 'Mancanti',
      list: [
        'Consuntivi 2024, 2026',
        'Spese per dipartimento',
        'Serie storiche pre-2023'
      ]
    },
    cta: 'Metodologia completa'
  },
  footer: {
    title: 'Dove vanno i soldi del Ticino',
    description: 'Un progetto di trasparenza finanziaria. Tutti i dati provengono da fonti ufficiali del Canton Ticino e della Confederazione Svizzera.',
    disclaimer: 'Questo sito è indipendente e non è affiliato al governo cantonale.'
  },
  methodology: {
    title: 'Metodologia e Fonti',
    intro: 'Questo progetto si basa esclusivamente su dati ufficiali e verificabili del Canton Ticino e della Confederazione Svizzera.',
    principles: {
      title: 'Principi guida',
      list: [
        {
          title: 'Trasparenza totale',
          desc: 'Ogni numero è tracciabile alla sua fonte ufficiale'
        },
        {
          title: 'Verificabilità',
          desc: 'Tutti i dati possono essere verificati indipendentemente'
        },
        {
          title: 'Aggiornamento',
          desc: 'I dati vengono aggiornati non appena disponibili'
        },
        {
          title: 'Accessibilità',
          desc: 'Visualizzazioni chiare e comprensibili per tutti'
        }
      ]
    },
    sources: {
      title: 'Fonti principali',
      list: [
        {
          title: 'Preventivo 2027',
          desc: 'Messaggio n. 8731 del Consiglio di Stato del Canton Ticino',
          link: 'https://www4.ti.ch/generale/gran-consiglio/messaggi-e-atti/ricerca-messaggi-e-atti/risultati/dettaglio/?user_gcatti_pi1%5Bid_messaggio%5D=11046'
        },
        {
          title: 'Premi LAMal',
          desc: 'UFSP - Ufficio federale della sanità pubblica',
          link: 'https://www.bag.admin.ch/bag/it/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-in-der-schweiz/praemien-kostenbeteiligung.html'
        },
        {
          title: 'Dati popolazione',
          desc: 'BFS/USTAT - Statistiche ufficiali',
          link: 'https://www.bfs.admin.ch/bfs/it/home/statistiche/popolazione.html'
        },
        {
          title: 'Codice open source',
          desc: 'Repository GitHub con tutti i dati e le visualizzazioni',
          link: 'https://github.com/tiero/dove-vanno-soldi-ticino'
        }
      ]
    },
    validation: {
      title: 'Validazione dei dati',
      desc: 'Ogni dato è verificato automaticamente tramite script di validazione. I controlli includono:',
      list: [
        'Coerenza matematica (somme, percentuali)',
        'Confronto incrociato tra fonti diverse',
        'Verifica delle variazioni anno su anno',
        'Controllo delle classificazioni contabili'
      ]
    },
    notes: {
      title: 'Note tecniche',
      list: [
        'Tutti gli importi sono espressi in milioni di CHF salvo diversa indicazione',
        'I dati seguono il Modello Contabile Armonizzato 2 (MCA2)',
        'Le percentuali possono non sommare esattamente a 100% per arrotondamenti',
        'Il Consuntivo 2025 rappresenta i dati effettivi chiusi, i Preventivi 2026 e 2027 sono stime'
      ]
    }
  },
  categories: {
    'Previdenza sociale': 'Previdenza sociale',
    'Formazione': 'Formazione',
    'Salute pubblica': 'Salute pubblica',
    'Finanze e imposte': 'Finanze e imposte',
    'Amministrazione generale': 'Amministrazione generale',
    'Ordine pubblico, sicurezza e difesa': 'Ordine pubblico, sicurezza e difesa',
    'Trasporti e telecomunicazioni': 'Trasporti e telecomunicazioni',
    'Economia': 'Economia',
    'Cultura, sport, tempo libero e chiesa': 'Cultura, sport, tempo libero e chiesa',
    'Protezione ambiente e territorio': 'Protezione ambiente e territorio',
    'Contributi cantonali': 'Contributi cantonali',
    'Premio medio TI': 'Premio medio TI',
    'Premio medio CH': 'Premio medio CH',
    'Uscite correnti': 'Uscite correnti',
    'Entrate correnti': 'Entrate correnti',
    'Investimenti': 'Investimenti'
  },
  health: {
    sectionTitle: 'Spesa sanitaria: spiegazione per non esperti',
    intro: 'La sanità rappresenta una delle voci principali del bilancio cantonale. Ecco cosa c\'è da sapere.',
    faqTitle: 'Domanda frequente',
    faqQuestion: 'Perché il Cantone spende soldi per la sanità se io pago già la cassa malati ogni mese?',
    faqAnswer: 'La cassa malati copre solo le cure di base. Il Cantone deve pagare (per legge federale) il 55% dei ricoveri ospedalieri, aiutare chi non può permettersi i premi, e pagare servizi extra non coperti da LAMal (cure anziani, prevenzione, ecc.).',
    faq1Title: '1. LAMal copre solo cure di base',
    faq1Text: 'La tua cassa malati paga visite mediche, esami, farmaci della lista federale. NON paga: dentista (salvo incidenti), molti occhiali, apparecchi acustici, cure a domicilio per anziani, rette case anziani, molti farmaci innovativi.',
    faq2Title: '2. Cantone obbligato a pagare 55% ospedali',
    faq2Text: 'La legge federale LAMal (art. 49a) obbliga i Cantoni a finanziare il 55% dei costi dei ricoveri ospedalieri. Il 45% lo paga la cassa malati. Questo è per non far gravare tutto sui premi.',
    faq3Title: '3. Premi altissimi in Ticino, molti non possono pagarli',
    faq3Text: 'I premi in Ticino sono i più alti della Svizzera: 520 CHF/mese di media nel 2027 contro 412 CHF media nazionale (+26%). Una famiglia di 4 persone può pagare oltre 2\'000 CHF/mese. Molte famiglie non possono permetterselo senza aiuto pubblico (RIPAM).',
    faq4Title: '4. Servizi extra per anziani e malati cronici',
    faq4Text: 'Cure a domicilio per anziani, case per anziani, cure dentistiche per chi ha PC: tutto questo NON è coperto dalla cassa malati base. Il Cantone deve intervenire.',
    faq5Title: '5. Prevenzione e salute pubblica',
    faq5Text: 'Vaccinazioni, screening tumori, controllo malattie infettive, medicina scolastica, lotta alle dipendenze: sono compiti del Cantone per proteggere la salute di tutta la popolazione.',
    verifiedTitle: 'Dati verificati',
    verifiedAmount: '627 M CHF',
    verifiedLabel: 'Funzione "Salute pubblica" 2027',
    verifiedSource: 'Fonte: P2027_spese_02.pdf',
    verifiedPercent: 'del bilancio totale',
    verifiedPerCapita: 'per abitante',
    ripamTitle: 'RIPAM (riduzione premi)',
    ripamAmount: '332 M CHF',
    ripamLabel: 'Classificato in "Previdenza sociale"',
    ripamNote: '⚠️ RIPAM è classificato nella funzione "Previdenza sociale" (non "Salute pubblica") perché è un trasferimento diretto alle famiglie.',
    glossaryTitle: 'Glossario termini chiave',
    glossaryLAMalTitle: 'LAMal (Legge federale sull\'assicurazione malattie)',
    glossaryLAMalText: 'L\'assicurazione malattia obbligatoria che ogni persona residente in Svizzera deve avere. Ogni mese paghi un premio alla tua cassa malati (ad esempio Helsana, CSS, Assura).',
    glossaryLAMalLegal: 'Base legale: RS 832.10',
    glossaryTransferTitle: 'Spese di trasferimento',
    glossaryTransferText: 'Soldi che il Cantone \'trasferisce\' ad altri (comuni, ospedali, casse malati, famiglie) invece di usarli direttamente per stipendi o materiali cantonali.',
    glossaryTransferEx: 'Esempi: RIPAM (trasferimento a casse malati), quota ospedaliera (trasferimento a ospedali), PC (trasferimento ad anziani)',
    glossaryQuota55Title: 'Quota cantonale 55% (finanziamento ospedaliero)',
    glossaryQuota55Text: 'Quando sei ricoverato in ospedale, il costo viene diviso per legge federale: il Cantone paga il 55%, la tua cassa malati paga il 45%. Tu paghi solo la franchigia normale.',
    glossaryQuota55Legal: 'Base legale: LAMal art. 49a',
    glossaryPCTitle: 'PC (Prestazioni Complementari AVS/AI)',
    glossaryPCText: 'Aiuto economico per anziani e persone con disabilità quando la pensione (AVS o AI) non basta per vivere. Include anche contributi per spese sanitarie extra (dentista, occhiali, farmaci non rimborsati).',
    missingTitle: 'Dati NON disponibili nel Preventivo 2027',
    missingIntro: 'Il Messaggio 8731 non contiene un breakdown dettagliato della spesa sanitaria per singola voce. I 627M sono un aggregato.',
    missing1Label: 'Contributi ospedalizzazioni:',
    missing1Value: 'NON DISPONIBILE',
    missing1Where: 'Dove trovarlo: Consuntivo dettagliato (marzo), Rapporti annuali EOC/OSC',
    missing2Label: 'PC quota sanitaria:',
    missing2Value: 'NON DISPONIBILE',
    missing2Where: 'Dove trovarlo: Consuntivo, Conto economico per natura'
  },
  admin: {
    sectionTitle: 'Amministrazione cantonale: chi controlla i controllori?',
    intro: 'Quanto costa l\'amministrazione pubblica e chi controlla che i soldi siano spesi bene?',
    totalLabel: 'Spesa totale 2027',
    totalAmount: '384 M',
    totalSource: 'Funzione "Amministrazione generale"',
    totalSourceDoc: 'Fonte: P2027_spese_02.pdf',
    percentLabel: '% del bilancio',
    percentAmount: '8.1%',
    percentNote1: '91.9% va ad altre funzioni',
    percentNote2: '(scuole, sanità, sicurezza)',
    perCapitaLabel: 'Per abitante',
    perCapitaAmount: '1\'061 CHF',
    perCapitaNote: '384M / 362\'200 abitanti',
    oversightTitle: 'Chi controlla?',
    oversightCCFTitle: 'Controllo cantonale delle finanze (CCF)',
    oversightCCFText: 'I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.',
    oversightCCFLegal: 'Base legale: Legge 2.4.4.1',
    oversightCGFTitle: 'Commissione della gestione e delle finanze (CGF)',
    oversightCGFText: 'Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.',
    oversightCorteTitle: 'Corte dei conti',
    oversightCorteText: '❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.',
    missingTitle: 'Dati NON disponibili nel Preventivo 2027',
    missing1Label: 'FTE totali Canton Ticino:',
    missing1Value: 'NON DISPONIBILE',
    missing1Where: 'Dove trovarlo: USTAT "Il mercato del lavoro nel settore pubblico ticinese" (pubblicazione annuale)',
    missing2Label: 'Stipendi Consiglio di Stato:',
    missing2Value: 'NON DISPONIBILE',
    missing2Where: 'Dove trovarlo: LStip art. 3 o comunicati ufficiali',
    missing3Label: 'Indennità Gran Consiglio:',
    missing3Value: 'NON DISPONIBILE',
    missing3Where: 'Dove trovarlo: Legge sul Gran Consiglio, Regolamento indennità',
    missing4Label: 'Budget CCF:',
    missing4Value: 'NON DISPONIBILE',
    missing4Where: 'Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato'
  }
};
