export default {
  nav: {
    title: 'Where does Ticino money go',
    home: 'Dashboard',
    methodology: 'Methodology',
    github: 'Source code'
  },
  hero: {
    badge: 'Official data updated October 3, 2026',
    title: 'Where does',
    titleHighlight: 'Ticino',
    titleQuestion: ' money go?',
    subtitle: 'Full transparency on cantonal finances. Every figure verified, every source cited, every number traceable.',
    metrics: {
      deficit: {
        label: '2027 Deficit',
        value: '-98.5M',
        sub: 'CHF -272 per resident'
      },
      debt: {
        label: 'Public debt',
        value: '>3.0 Bn',
        sub: '+20% since 2023'
      },
      premiums: {
        label: 'Highest premiums CH',
        value: '520 CHF',
        sub: '+26% vs Swiss average'
      }
    }
  },
  context: {
    title: 'The financial situation',
    intro: 'Canton Ticino faces a complex financial situation, characterized by a structural deficit and growing public debt. The 2027 Budget forecasts a deficit of 98.5 million francs, while public debt will exceed 3 billion.',
    highlights: {
      title: 'Key points',
      list: [
        'Since 2010, Canton Ticino has never closed a balanced budget',
        'Current expenditures grow faster than revenues',
        'Ticino has the highest health insurance premiums in Switzerland',
        'Net investments exceed self-financing capacity'
      ]
    },
    sources: {
      title: 'Sources',
      list: [
        'Message no. 8731 - 2027 Budget of Canton Ticino',
        'FOPH data (Federal Office of Public Health)',
        'FSO/USTAT - Official population statistics',
        'Grand Council - Official messages and acts'
      ]
    }
  },
  charts: {
    title: 'Where does the money go?',
    subtitle: 'Explore interactive visualizations to understand how the 4.7 billion franc cantonal budget is spent',
    spending: {
      title: '2027 Spending by function',
      hint: 'Tap for details'
    },
    debt: {
      title: 'Cantonal public debt',
      yAxis: 'Billions CHF'
    },
    deficit: {
      title: 'Annual deficit',
      yAxis: 'Millions CHF'
    },
    health: {
      title: '2025-2027 Comparison',
      subtitle: 'Evolution of main budget items'
    },
    budget: {
      title: '2027 Budget - Overview'
    }
  },
  data: {
    title: 'Data status',
    available: {
      title: 'Available',
      list: [
        'Complete 2027 budget',
        '2025 accounts',
        'Historical debt 2023-2027',
        'LAMal premiums 2025-2027',
        'Population data'
      ]
    },
    missing: {
      title: 'Missing',
      list: [
        '2024, 2026 accounts',
        'Spending by department',
        'Pre-2023 historical series'
      ]
    },
    cta: 'Complete methodology'
  },
  footer: {
    title: 'Where does Ticino money go',
    description: 'A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.',
    disclaimer: 'This site is independent and is not affiliated with the cantonal government.'
  },
  methodology: {
    title: 'Methodology and Sources',
    intro: 'This project is based exclusively on official and verifiable data from Canton Ticino and the Swiss Confederation.',
    principles: {
      title: 'Guiding principles',
      list: [
        {
          title: 'Total transparency',
          desc: 'Every number is traceable to its official source'
        },
        {
          title: 'Verifiability',
          desc: 'All data can be independently verified'
        },
        {
          title: 'Updates',
          desc: 'Data is updated as soon as available'
        },
        {
          title: 'Accessibility',
          desc: 'Clear and understandable visualizations for everyone'
        }
      ]
    },
    sources: {
      title: 'Main sources',
      list: [
        {
          title: '2027 Budget',
          desc: 'Message no. 8731 of the State Council of Canton Ticino',
          link: 'https://www4.ti.ch/generale/gran-consiglio/messaggi-e-atti/ricerca-messaggi-e-atti/risultati/dettaglio/?user_gcatti_pi1%5Bid_messaggio%5D=11046'
        },
        {
          title: 'LAMal premiums',
          desc: 'FOPH - Federal Office of Public Health',
          link: 'https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-in-der-schweiz/praemien-kostenbeteiligung.html'
        },
        {
          title: 'Population data',
          desc: 'FSO/USTAT - Official statistics',
          link: 'https://www.bfs.admin.ch/bfs/en/home/statistics/population.html'
        },
        {
          title: 'Open source code',
          desc: 'GitHub repository with all data and visualizations',
          link: 'https://github.com/tiero/dove-vanno-soldi-ticino'
        }
      ]
    },
    validation: {
      title: 'Data validation',
      desc: 'Every figure is automatically verified through validation scripts. Checks include:',
      list: [
        'Mathematical consistency (sums, percentages)',
        'Cross-checking between different sources',
        'Year-over-year variation verification',
        'Accounting classification checks'
      ]
    },
    notes: {
      title: 'Technical notes',
      list: [
        'All amounts are expressed in millions of CHF unless otherwise indicated',
        'Data follows the Harmonized Accounting Model 2 (HAM2)',
        'Percentages may not add up to exactly 100% due to rounding',
        'The 2025 Accounts represent actual closed data, 2026 and 2027 Budgets are estimates'
      ]
    }
  },
  categories: {
    'Previdenza sociale': 'Social welfare',
    'Formazione': 'Education',
    'Salute pubblica': 'Public health',
    'Finanze e imposte': 'Finance and taxes',
    'Amministrazione generale': 'General administration',
    'Ordine pubblico, sicurezza e difesa': 'Public order, security and defense',
    'Trasporti e telecomunicazioni': 'Transport and telecommunications',
    'Economia': 'Economy',
    'Cultura, sport, tempo libero e chiesa': 'Culture, sports, leisure and church',
    'Protezione ambiente e territorio': 'Environmental and land protection',
    'Contributi cantonali': 'Cantonal contributions',
    'Premio medio TI': 'Average premium TI',
    'Premio medio CH': 'Average premium CH',
    'Uscite correnti': 'Current expenditure',
    'Entrate correnti': 'Current revenue',
    'Investimenti': 'Investments'
  }
};
