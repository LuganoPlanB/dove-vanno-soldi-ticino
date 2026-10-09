export default {
  meta: {
    title: 'Where does Ticino money go',
    description: 'Transparent visualization of Canton Ticino finances - Where does Ticino money go'
  },
  nav: {
    title: 'Where does Ticino money go',
    home: 'Home',
    spese: 'Spending',
    sanita: 'Health',
    controllo: 'Oversight',
    comuni: 'Municipalities',
    debito: 'Debt',
    imprese: 'Companies',
    methodology: 'Methodology',
    github: 'Source code'
  },
  hero: {
    badge: 'Actual data 2025 - Consuntivo',
    title: 'Where does',
    titleHighlight: 'Ticino',
    titleQuestion: ' money go?',
    subtitle: 'Full transparency on cantonal finances. Every figure verified, every source cited, every number traceable.',
    metrics: {
      deficit: {
        label: '2025 Result',
        value: '-32M',
        sub: 'Actual deficit (C2025)'
      },
      debt: {
        label: '2024 Debt',
        value: '2.654 Bn',
        sub: 'CHF (most recent verified)'
      },
      spending: {
        label: '2025 Spending',
        value: '4.583 Bn',
        sub: 'Actual spending (C2025)'
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
  },
  health: {
    sectionTitle: 'Healthcare spending: explanation for non-experts',
    intro: 'Healthcare represents one of the main items in the cantonal budget. Here\'s what you need to know.',
    faqTitle: 'Frequently asked question',
    faqQuestion: 'Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?',
    faqAnswer: 'Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).',
    faq1Title: '1. LAMal only covers basic care',
    faq1Text: 'Your health insurance pays for doctor visits, tests, federal list medications. It does NOT pay for: dentist (except accidents), most glasses, hearing aids, home care for elderly, nursing home fees, many innovative drugs.',
    faq2Title: '2. Canton required to pay 55% of hospitals',
    faq2Text: 'Federal LAMal law (art. 49a) requires Cantons to finance 55% of hospital admission costs. Health insurance pays 45%. This is to avoid putting all the burden on premiums.',
    faq3Title: '3. Very high premiums in Ticino, many cannot afford them',
    faq3Text: 'Premiums in Ticino are the highest in Switzerland: 520 CHF/month average in 2027 vs 412 CHF national average (+26%). A family of 4 can pay over 2,000 CHF/month. Many families cannot afford this without public help (RIPAM).',
    faq4Title: '4. Extra services for elderly and chronically ill',
    faq4Text: 'Home care for elderly, nursing homes, dental care for those on PC: all this is NOT covered by basic health insurance. The Canton must step in.',
    faq5Title: '5. Prevention and public health',
    faq5Text: 'Vaccinations, cancer screening, infectious disease control, school medicine, addiction prevention: these are Canton duties to protect the health of the entire population.',
    verifiedTitle: 'Verified data',
    verifiedAmount: '627 M CHF',
    verifiedLabel: '"Public health" function 2027',
    verifiedSource: 'Source: P2027_spese_02.pdf',
    verifiedPercent: 'of total budget',
    verifiedPerCapita: 'per resident',
    ripamTitle: 'RIPAM (premium reduction)',
    ripamAmount: '332 M CHF',
    ripamLabel: 'Classified in "Social welfare"',
    ripamNote: '⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.',
    glossaryTitle: 'Key terms glossary',
    glossaryLAMalTitle: 'LAMal (Federal Health Insurance Act)',
    glossaryLAMalText: 'The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).',
    glossaryLAMalLegal: 'Legal basis: RS 832.10',
    glossaryTransferTitle: 'Transfer expenses',
    glossaryTransferText: 'Money that the Canton \'transfers\' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.',
    glossaryTransferEx: 'Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)',
    glossaryQuota55Title: 'Cantonal quota 55% (hospital financing)',
    glossaryQuota55Text: 'When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible.',
    glossaryQuota55Legal: 'Legal basis: LAMal art. 49a',
    glossaryPCTitle: 'PC (Supplementary Benefits AVS/AI)',
    glossaryPCText: 'Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).',
    missingTitle: 'Data NOT available in 2027 Budget',
    missingIntro: 'Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.',
    missing1Label: 'Hospital contributions:',
    missing1Value: 'NOT AVAILABLE',
    missing1Where: 'Where to find it: Detailed accounts (March), Annual reports EOC/OSC',
    missing2Label: 'PC health quota:',
    missing2Value: 'NOT AVAILABLE',
    missing2Where: 'Where to find it: Accounts, Economic account by nature'
  },
  admin: {
    sectionTitle: 'Cantonal administration: who watches the watchers?',
    intro: 'How much does public administration cost and who ensures money is spent well?',
    totalLabel: 'Total spending 2027',
    totalAmount: '384 M',
    totalSource: '"General administration" function',
    totalSourceDoc: 'Source: P2027_spese_02.pdf',
    percentLabel: '% of budget',
    percentAmount: '8.1%',
    percentNote1: '91.9% goes to other functions',
    percentNote2: '(schools, health, security)',
    perCapitaLabel: 'Per resident',
    perCapitaAmount: '1,061 CHF',
    perCapitaNote: '384M / 362,200 residents',
    oversightTitle: 'Who controls?',
    oversightCCFTitle: 'Cantonal Finance Control (CCF)',
    oversightCCFText: 'The Canton\'s "auditors". They check that public money is spent correctly and legally. Independent from Government, reports to Parliament.',
    oversightCCFLegal: 'Legal basis: Law 2.4.4.1',
    oversightCGFTitle: 'Management and Finance Commission (CGF)',
    oversightCGFText: 'Permanent parliamentary commission that oversees Government financial management. About 15 deputies from the Grand Council.',
    oversightCorteTitle: 'Court of Auditors',
    oversightCorteText: '❌ Canton Ticino does NOT have an autonomous Court of Auditors (unlike GE, VD). Control is via CCF + CGF.',
    missingTitle: 'Data NOT available in 2027 Budget',
    missing1Label: 'Total FTE Canton Ticino:',
    missing1Value: 'NOT AVAILABLE',
    missing1Where: 'Where to find it: USTAT "The labor market in the Ticino public sector" (annual publication)',
    missing2Label: 'State Council salaries:',
    missing2Value: 'NOT AVAILABLE',
    missing2Where: 'Where to find it: LStip art. 3 or official communications',
    missing3Label: 'Grand Council allowances:',
    missing3Value: 'NOT AVAILABLE',
    missing3Where: 'Where to find it: Grand Council Law, Allowances Regulation',
    missing4Label: 'CCF budget:',
    missing4Value: 'NOT AVAILABLE',
    missing4Where: 'Where to find it: CCF annual report or detailed Accounts'
  },
  comuni: {
    badge: 'Municipal financial data 2024',
    title: 'Ticino Municipal Finances',
    description: 'Compare tax multipliers, financial strength indices and per-capita fiscal resources for all 108 Ticino municipalities. Official 2024 data from "Municipal accounts 2024" report - Statistical appendix.',
    totalComuni: 'Total municipalities',
    avgMpPf: 'Avg MP individuals',
    avgForza: 'Avg strength index',
    searchPlaceholder: 'Search municipality by name...',
    filtersTitle: 'Financial strength filters',
    filterAll: 'All',
    filterForti: 'Strong (&gt;120)',
    filterMedi: 'Medium (80-120)',
    filterDeboli: 'Weak (&lt;80)',
    sortBy: 'Sort by',
    sortPop: 'Population',
    sortMpPf: 'MP individuals',
    sortMpPg: 'MP companies',
    sortForza: 'Strength index',
    sortRisorse: 'Resources per capita',
    tableComune: 'Municipality',
    tablePop: 'Population',
    tableMpPf: 'MP ind.',
    tableMpPg: 'MP comp.',
    tableForza: 'Strength index',
    tableRisorse: 'Fiscal resources per capita',
    compareTitle: 'Compare 2 municipalities',
    compareSelect1: 'Select first municipality',
    compareSelect2: 'Select second municipality',
    compareBtn: 'Compare',
    noData: 'No data',
    source: 'Source: "Municipal accounts 2024" report - Statistical appendix (Local authorities section)',
    note: 'MP = Tax multiplier. Ind. = Individuals, Comp. = Companies. Financial strength index: measure of fiscal capacity (100 = cantonal average).'
  },
  storiaDebito: {
    badge: 'Historical series 2010-2025',
    title: 'Public Debt History',
    description: 'Evolution of Canton Ticino public debt from 2010 to present. Only data verified from official documents.',
    chartTitle: 'Net public debt (millions CHF)',
    gap: 'Gap: data not verifiable',
    perCapita: 'Per capita',
    total: 'Total',
    source: 'Source: Canton Ticino Budget Messages, DFE Historical series',
    note: 'Gap 2014-2022: exact numbers not printed in accessible official documents. Only approximations available.'
  },
  tassazioneImprese: {
    badge: 'Data 2021-2025',
    title: 'Corporate Taxation in Ticino',
    description: 'Evolution of ordinary taxation of legal entities and intercantonal comparison.',
    chartTitle: 'Taxed corporate profits (millions CHF)',
    rate: 'Effective rate',
    revenue: 'Tax revenue',
    comparison: 'Intercantonal comparison',
    source: 'Source: DFE, Ustat, Federal Tax Administration',
    note: 'Data to be verified against official primary documents.'
  },
  metodologia: {
    title: 'Methodology and Sources',
    intro: 'This site uses only official data verified from primary documents.',
    principlesTitle: 'Principles',
    principle1: 'Only numbers printed in official documents',
    principle2: 'Every figure has source and exact page',
    principle3: 'No estimates, rounding or interpolation',
    principle4: 'Explicit gaps where data not available',
    sourcesTitle: 'Primary sources',
    source1: 'Canton Ticino Budget Messages (DFE)',
    source2: 'Canton Ticino Forecasts (DFE)',
    source3: 'Statistical Office (Ustat)',
    source4: 'Federal Finance Administration (FFA)',
    source5: 'Federal Office of Public Health (FOPH)',
    limitationsTitle: 'Limitations',
    limitation1: 'Some years lack verifiable data',
    limitation2: 'Press releases with "about X billion" not accepted',
    limitation3: 'Derived calculations (e.g. from per-capita) not accepted',
    updateInfo: 'Last update: October 2026'
  }
};
