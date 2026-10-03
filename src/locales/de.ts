export default {
  meta: {
    title: 'Wohin geht das Tessiner Geld',
    description: 'Transparente Visualisierung der Tessiner Kantonsfinanzen - Wohin geht das Tessiner Geld'
  },
  nav: {
    title: 'Wohin geht das Tessiner Geld',
    home: 'Dashboard',
    methodology: 'Methodik',
    github: 'Quellcode'
  },
  hero: {
    badge: 'Offizielle Daten aktualisiert am 3. Oktober 2026',
    title: 'Wohin geht das Geld des',
    titleHighlight: 'Tessins',
    titleQuestion: '?',
    subtitle: 'Vollständige Transparenz über die kantonalen Finanzen. Jede Zahl überprüft, jede Quelle zitiert, jede Nummer nachvollziehbar.',
    metrics: {
      deficit: {
        label: 'Ergebnis 2025',
        value: '-32M',
        sub: 'Tatsächliches Defizit (C2025)'
      },
      debt: {
        label: 'Schulden 2025',
        value: '3.056 Mrd',
        sub: 'CHF +51M vs 2024'
      },
      spending: {
        label: 'Ausgaben 2025',
        value: '4.583 Mrd',
        sub: 'Tatsächliche Ausgaben (C2025)'
      }
    }
  },
  context: {
    title: 'Die Finanzlage',
    intro: 'Der Kanton Tessin steht vor einer komplexen Finanzlage, die durch ein strukturelles Defizit und wachsende öffentliche Schulden gekennzeichnet ist. Das Budget 2027 sieht ein Defizit von 98,5 Millionen Franken vor, während die öffentlichen Schulden 3 Milliarden übersteigen werden.',
    highlights: {
      title: 'Kernpunkte',
      list: [
        'Seit 2010 hat der Kanton Tessin nie ein ausgeglichenes Budget abgeschlossen',
        'Die laufenden Ausgaben wachsen schneller als die Einnahmen',
        'Das Tessin hat die höchsten Krankenkassenprämien der Schweiz',
        'Die Nettoinvestitionen übersteigen die Selbstfinanzierungskapazität'
      ]
    },
    sources: {
      title: 'Quellen',
      list: [
        'Botschaft Nr. 8731 - Voranschlag 2027 des Kantons Tessin',
        'BAG-Daten (Bundesamt für Gesundheit)',
        'BFS/USTAT - Offizielle Bevölkerungsstatistiken',
        'Grosser Rat - Offizielle Botschaften und Akten'
      ]
    }
  },
  charts: {
    title: 'Wohin geht das Geld?',
    subtitle: 'Erkunden Sie interaktive Visualisierungen, um zu verstehen, wie das kantonale Budget von 4,7 Milliarden Franken ausgegeben wird',
    spending: {
      title: 'Ausgaben nach Funktion 2027',
      hint: 'Tippen für Details'
    },
    debt: {
      title: 'Kantonale öffentliche Schulden',
      yAxis: 'Milliarden CHF'
    },
    deficit: {
      title: 'Jährliches Defizit',
      yAxis: 'Millionen CHF'
    },
    health: {
      title: 'Vergleich 2025-2027',
      subtitle: 'Entwicklung der wichtigsten Budgetposten'
    },
    budget: {
      title: 'Voranschlag 2027 - Übersicht'
    }
  },
  data: {
    title: 'Datenstatus',
    available: {
      title: 'Verfügbar',
      list: [
        'Vollständiges Budget 2027',
        'Rechnung 2025',
        'Historische Schulden 2023-2027',
        'KVG-Prämien 2025-2027',
        'Bevölkerungsdaten'
      ]
    },
    missing: {
      title: 'Fehlend',
      list: [
        'Rechnungen 2024, 2026',
        'Ausgaben nach Departement',
        'Historische Serien vor 2023'
      ]
    },
    cta: 'Vollständige Methodik'
  },
  footer: {
    title: 'Wohin geht das Tessiner Geld',
    description: 'Ein Projekt für Finanztransparenz. Alle Daten stammen aus offiziellen Quellen des Kantons Tessin und der Schweizerischen Eidgenossenschaft.',
    disclaimer: 'Diese Website ist unabhängig und steht in keiner Verbindung zur Kantonsregierung.'
  },
  methodology: {
    title: 'Methodik und Quellen',
    intro: 'Dieses Projekt basiert ausschliesslich auf offiziellen und überprüfbaren Daten des Kantons Tessin und der Schweizerischen Eidgenossenschaft.',
    principles: {
      title: 'Leitprinzipien',
      list: [
        {
          title: 'Vollständige Transparenz',
          desc: 'Jede Zahl ist zu ihrer offiziellen Quelle zurückverfolgbar'
        },
        {
          title: 'Überprüfbarkeit',
          desc: 'Alle Daten können unabhängig überprüft werden'
        },
        {
          title: 'Aktualisierung',
          desc: 'Daten werden aktualisiert, sobald sie verfügbar sind'
        },
        {
          title: 'Zugänglichkeit',
          desc: 'Klare und verständliche Visualisierungen für alle'
        }
      ]
    },
    sources: {
      title: 'Hauptquellen',
      list: [
        {
          title: 'Voranschlag 2027',
          desc: 'Botschaft Nr. 8731 des Staatsrats des Kantons Tessin',
          link: 'https://www4.ti.ch/generale/gran-consiglio/messaggi-e-atti/ricerca-messaggi-e-atti/risultati/dettaglio/?user_gcatti_pi1%5Bid_messaggio%5D=11046'
        },
        {
          title: 'KVG-Prämien',
          desc: 'BAG - Bundesamt für Gesundheit',
          link: 'https://www.bag.admin.ch/bag/de/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-in-der-schweiz/praemien-kostenbeteiligung.html'
        },
        {
          title: 'Bevölkerungsdaten',
          desc: 'BFS/USTAT - Offizielle Statistiken',
          link: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung.html'
        },
        {
          title: 'Open-Source-Code',
          desc: 'GitHub-Repository mit allen Daten und Visualisierungen',
          link: 'https://github.com/tiero/dove-vanno-soldi-ticino'
        }
      ]
    },
    validation: {
      title: 'Datenvalidierung',
      desc: 'Jede Zahl wird automatisch durch Validierungsskripte überprüft. Die Prüfungen umfassen:',
      list: [
        'Mathematische Konsistenz (Summen, Prozentsätze)',
        'Quervergleiche zwischen verschiedenen Quellen',
        'Überprüfung der Jahr-zu-Jahr-Veränderungen',
        'Prüfung der Buchführungsklassifizierungen'
      ]
    },
    notes: {
      title: 'Technische Hinweise',
      list: [
        'Alle Beträge sind in Millionen CHF angegeben, sofern nicht anders angegeben',
        'Die Daten folgen dem Harmonisierten Rechnungslegungsmodell 2 (HRM2)',
        'Prozentsätze können aufgrund von Rundungen nicht genau 100% ergeben',
        'Die Rechnung 2025 stellt tatsächliche abgeschlossene Daten dar, Voranschläge 2026 und 2027 sind Schätzungen'
      ]
    }
  },
  categories: {
    'Previdenza sociale': 'Soziale Wohlfahrt',
    'Formazione': 'Bildung',
    'Salute pubblica': 'Öffentliche Gesundheit',
    'Finanze e imposte': 'Finanzen und Steuern',
    'Amministrazione generale': 'Allgemeine Verwaltung',
    'Ordine pubblico, sicurezza e difesa': 'Öffentliche Ordnung, Sicherheit und Verteidigung',
    'Trasporti e telecomunicazioni': 'Verkehr und Telekommunikation',
    'Economia': 'Wirtschaft',
    'Cultura, sport, tempo libero e chiesa': 'Kultur, Sport, Freizeit und Kirche',
    'Protezione ambiente e territorio': 'Umwelt- und Raumschutz',
    'Contributi cantonali': 'Kantonale Beiträge',
    'Premio medio TI': 'Durchschnittsprämie TI',
    'Premio medio CH': 'Durchschnittsprämie CH',
    'Uscite correnti': 'Laufende Ausgaben',
    'Entrate correnti': 'Laufende Einnahmen',
    'Investimenti': 'Investitionen'
  },
  health: {
    sectionTitle: 'Gesundheitsausgaben: Erklärung für Nicht-Experten',
    intro: 'Das Gesundheitswesen ist einer der Hauptposten im kantonalen Budget. Hier ist, was Sie wissen müssen.',
    faqTitle: 'Häufig gestellte Frage',
    faqQuestion: 'Warum gibt der Kanton Geld für Gesundheit aus, wenn ich bereits jeden Monat Krankenkassenprämien zahle?',
    faqAnswer: 'Die Krankenkasse deckt nur die Grundversorgung ab. Der Kanton muss (nach Bundesgesetz) 55% der Krankenhausaufenthalte zahlen, denen helfen, die sich keine Prämien leisten können, und Zusatzleistungen bezahlen, die nicht von LAMal gedeckt sind (Altenpflege, Prävention usw.).',
    faq1Title: '1. LAMal deckt nur Grundversorgung ab',
    faq1Text: 'Ihre Krankenkasse zahlt für Arztbesuche, Untersuchungen, Medikamente der Bundesliste. Sie zahlt NICHT für: Zahnarzt (außer bei Unfällen), die meisten Brillen, Hörgeräte, häusliche Pflege für ältere Menschen, Pflegeheimgebühren, viele innovative Medikamente.',
    faq2Title: '2. Kanton verpflichtet, 55% der Krankenhäuser zu zahlen',
    faq2Text: 'Das Bundesgesetz LAMal (Art. 49a) verpflichtet die Kantone, 55% der Kosten für Krankenhausaufenthalte zu finanzieren. Die Krankenkasse zahlt 45%. Dies soll verhindern, dass alles auf die Prämien gelegt wird.',
    faq3Title: '3. Sehr hohe Prämien im Tessin, viele können sie nicht bezahlen',
    faq3Text: 'Die Prämien im Tessin sind die höchsten in der Schweiz: 520 CHF/Monat Durchschnitt im Jahr 2027 gegenüber 412 CHF nationaler Durchschnitt (+26%). Eine 4-köpfige Familie kann über 2\'000 CHF/Monat zahlen. Viele Familien können sich dies nicht ohne öffentliche Hilfe leisten (RIPAM).',
    faq4Title: '4. Zusätzliche Dienstleistungen für ältere und chronisch Kranke',
    faq4Text: 'Häusliche Pflege für ältere Menschen, Pflegeheime, zahnärztliche Versorgung für EL-Bezüger: All dies wird NICHT von der Grundversicherung gedeckt. Der Kanton muss eingreifen.',
    faq5Title: '5. Prävention und öffentliche Gesundheit',
    faq5Text: 'Impfungen, Krebsvorsorge, Kontrolle von Infektionskrankheiten, Schulmedizin, Suchtprävention: Dies sind kantonale Aufgaben zum Schutz der Gesundheit der gesamten Bevölkerung.',
    verifiedTitle: 'Überprüfte Daten',
    verifiedAmount: '627 Mio. CHF',
    verifiedLabel: 'Funktion "Öffentliche Gesundheit" 2027',
    verifiedSource: 'Quelle: P2027_spese_02.pdf',
    verifiedPercent: 'des Gesamtbudgets',
    verifiedPerCapita: 'pro Einwohner',
    ripamTitle: 'RIPAM (Prämienverbilligung)',
    ripamAmount: '332 Mio. CHF',
    ripamLabel: 'Klassifiziert in "Soziale Wohlfahrt"',
    ripamNote: '⚠️ RIPAM ist in der Funktion "Soziale Wohlfahrt" klassifiziert (nicht "Öffentliche Gesundheit"), da es sich um einen direkten Transfer an Familien handelt.',
    glossaryTitle: 'Glossar wichtiger Begriffe',
    glossaryLAMalTitle: 'LAMal (Bundesgesetz über die Krankenversicherung)',
    glossaryLAMalText: 'Die obligatorische Krankenversicherung, die jede in der Schweiz wohnhafte Person haben muss. Jeden Monat zahlen Sie eine Prämie an Ihre Krankenkasse (z.B. Helsana, CSS, Assura).',
    glossaryLAMalLegal: 'Rechtsgrundlage: SR 832.10',
    glossaryTransferTitle: 'Transferausgaben',
    glossaryTransferText: 'Geld, das der Kanton an andere (Gemeinden, Krankenhäuser, Versicherer, Familien) "überträgt", anstatt es direkt für kantonale Gehälter oder Materialien zu verwenden.',
    glossaryTransferEx: 'Beispiele: RIPAM (Transfer an Versicherer), Krankenhausquote (Transfer an Krankenhäuser), EL (Transfer an ältere Menschen)',
    glossaryQuota55Title: 'Kantonale Quote 55% (Krankenhausfinanzierung)',
    glossaryQuota55Text: 'Wenn Sie ins Krankenhaus eingeliefert werden, werden die Kosten nach Bundesgesetz aufgeteilt: Der Kanton zahlt 55%, Ihre Krankenkasse zahlt 45%. Sie zahlen nur die normale Franchise.',
    glossaryQuota55Legal: 'Rechtsgrundlage: LAMal Art. 49a',
    glossaryPCTitle: 'EL (Ergänzungsleistungen AHV/IV)',
    glossaryPCText: 'Wirtschaftliche Hilfe für ältere Menschen und Menschen mit Behinderungen, wenn die Rente (AHV oder IV) nicht zum Leben ausreicht. Umfasst auch Beiträge für zusätzliche Gesundheitsausgaben (Zahnarzt, Brillen, nicht erstattete Medikamente).',
    missingTitle: 'Daten NICHT im Budget 2027 verfügbar',
    missingIntro: 'Botschaft 8731 enthält keine detaillierte Aufschlüsselung der Gesundheitsausgaben nach Einzelposten. Die 627 Mio. sind ein Aggregat.',
    missing1Label: 'Krankenhausbeiträge:',
    missing1Value: 'NICHT VERFÜGBAR',
    missing1Where: 'Wo zu finden: Detaillierte Rechnung (März), Jahresberichte EOC/OSC',
    missing2Label: 'EL-Gesundheitsquote:',
    missing2Value: 'NICHT VERFÜGBAR',
    missing2Where: 'Wo zu finden: Rechnung, Erfolgsrechnung nach Art'
  },
  admin: {
    sectionTitle: 'Kantonale Verwaltung: Wer kontrolliert die Kontrolleure?',
    intro: 'Wie viel kostet die öffentliche Verwaltung und wer stellt sicher, dass das Geld gut ausgegeben wird?',
    totalLabel: 'Gesamtausgaben 2027',
    totalAmount: '384 Mio.',
    totalSource: 'Funktion "Allgemeine Verwaltung"',
    totalSourceDoc: 'Quelle: P2027_spese_02.pdf',
    percentLabel: '% des Budgets',
    percentAmount: '8,1%',
    percentNote1: '91,9% gehen an andere Funktionen',
    percentNote2: '(Schulen, Gesundheit, Sicherheit)',
    perCapitaLabel: 'Pro Einwohner',
    perCapitaAmount: '1\'061 CHF',
    perCapitaNote: '384 Mio. / 362\'200 Einwohner',
    oversightTitle: 'Wer kontrolliert?',
    oversightCCFTitle: 'Kantonale Finanzkontrolle (CCF)',
    oversightCCFText: 'Die "Rechnungsprüfer" des Kantons. Sie überprüfen, ob öffentliche Gelder korrekt und rechtmäßig ausgegeben werden. Unabhängig von der Regierung, berichtet an das Parlament.',
    oversightCCFLegal: 'Rechtsgrundlage: Gesetz 2.4.4.1',
    oversightCGFTitle: 'Verwaltungs- und Finanzkommission (CGF)',
    oversightCGFText: 'Ständige parlamentarische Kommission, die das Finanzmanagement der Regierung überwacht. Etwa 15 Abgeordnete des Grossen Rates.',
    oversightCorteTitle: 'Rechnungshof',
    oversightCorteText: '❌ Der Kanton Tessin hat KEINEN autonomen Rechnungshof (im Gegensatz zu GE, VD). Die Kontrolle erfolgt über CCF + CGF.',
    missingTitle: 'Daten NICHT im Budget 2027 verfügbar',
    missing1Label: 'Gesamt-FTE Kanton Tessin:',
    missing1Value: 'NICHT VERFÜGBAR',
    missing1Where: 'Wo zu finden: USTAT "Der Arbeitsmarkt im öffentlichen Sektor des Tessins" (jährliche Veröffentlichung)',
    missing2Label: 'Gehälter des Staatsrats:',
    missing2Value: 'NICHT VERFÜGBAR',
    missing2Where: 'Wo zu finden: LStip Art. 3 oder offizielle Mitteilungen',
    missing3Label: 'Entschädigungen des Grossen Rates:',
    missing3Value: 'NICHT VERFÜGBAR',
    missing3Where: 'Wo zu finden: Gesetz über den Grossen Rat, Entschädigungsverordnung',
    missing4Label: 'Budget CCF:',
    missing4Value: 'NICHT VERFÜGBAR',
    missing4Where: 'Wo zu finden: CCF-Jahresbericht oder detaillierte Rechnung'
  }
};
