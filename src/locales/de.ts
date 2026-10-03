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
        label: 'Defizit 2027',
        value: '-98.5M',
        sub: 'CHF -272 pro Einwohner'
      },
      debt: {
        label: 'Öffentliche Schulden',
        value: '>3.0 Mrd',
        sub: '+20% seit 2023'
      },
      premiums: {
        label: 'Höchste Prämien CH',
        value: '520 CHF',
        sub: '+26% vs Schweizer Durchschnitt'
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
  }
};
