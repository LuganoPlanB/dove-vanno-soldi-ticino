export default {
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
  }
};
