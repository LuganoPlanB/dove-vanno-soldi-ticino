export default {
  nav: {
    title: 'Où va l\'argent du Tessin',
    home: 'Tableau de bord',
    methodology: 'Méthodologie',
    github: 'Code source'
  },
  hero: {
    badge: 'Données officielles mises à jour le 3 octobre 2026',
    title: 'Où va l\'argent du',
    titleHighlight: 'Tessin',
    titleQuestion: ' ?',
    subtitle: 'Transparence totale sur les finances cantonales. Chaque chiffre vérifié, chaque source citée, chaque nombre traçable.',
    metrics: {
      deficit: {
        label: 'Déficit 2027',
        value: '-98.5M',
        sub: 'CHF -272 par habitant'
      },
      debt: {
        label: 'Dette publique',
        value: '>3.0 Mrd',
        sub: '+20% depuis 2023'
      },
      premiums: {
        label: 'Primes les plus élevées CH',
        value: '520 CHF',
        sub: '+26% vs moyenne suisse'
      }
    }
  },
  context: {
    title: 'La situation financière',
    intro: 'Le Canton du Tessin fait face à une situation financière complexe, caractérisée par un déficit structurel et une dette publique croissante. Le Budget 2027 prévoit un déficit de 98,5 millions de francs, tandis que la dette publique dépassera les 3 milliards.',
    highlights: {
      title: 'Points clés',
      list: [
        'Depuis 2010, le Canton du Tessin n\'a jamais clôturé un budget équilibré',
        'Les dépenses courantes augmentent plus rapidement que les recettes',
        'Le Tessin a les primes d\'assurance maladie les plus élevées de Suisse',
        'Les investissements nets dépassent la capacité d\'autofinancement'
      ]
    },
    sources: {
      title: 'Sources',
      list: [
        'Message no 8731 - Budget 2027 du Canton du Tessin',
        'Données OFSP (Office fédéral de la santé publique)',
        'OFS/USTAT - Statistiques officielles de population',
        'Grand Conseil - Messages et actes officiels'
      ]
    }
  },
  charts: {
    title: 'Où va l\'argent ?',
    subtitle: 'Explorez les visualisations interactives pour comprendre comment sont dépensés les 4,7 milliards de francs du budget cantonal',
    spending: {
      title: 'Dépenses par fonction 2027',
      hint: 'Toucher pour les détails'
    },
    debt: {
      title: 'Dette publique cantonale',
      yAxis: 'Milliards CHF'
    },
    deficit: {
      title: 'Déficit annuel',
      yAxis: 'Millions CHF'
    },
    health: {
      title: 'Comparaison 2025-2027',
      subtitle: 'Évolution des principaux postes budgétaires'
    },
    budget: {
      title: 'Budget 2027 - Aperçu'
    }
  },
  data: {
    title: 'État des données',
    available: {
      title: 'Disponibles',
      list: [
        'Budget 2027 complet',
        'Comptes 2025',
        'Dette historique 2023-2027',
        'Primes LAMal 2025-2027',
        'Données de population'
      ]
    },
    missing: {
      title: 'Manquantes',
      list: [
        'Comptes 2024, 2026',
        'Dépenses par département',
        'Séries historiques avant 2023'
      ]
    },
    cta: 'Méthodologie complète'
  },
  footer: {
    title: 'Où va l\'argent du Tessin',
    description: 'Un projet de transparence financière. Toutes les données proviennent de sources officielles du Canton du Tessin et de la Confédération suisse.',
    disclaimer: 'Ce site est indépendant et n\'est pas affilié au gouvernement cantonal.'
  },
  methodology: {
    title: 'Méthodologie et Sources',
    intro: 'Ce projet est basé exclusivement sur des données officielles et vérifiables du Canton du Tessin et de la Confédération suisse.',
    principles: {
      title: 'Principes directeurs',
      list: [
        {
          title: 'Transparence totale',
          desc: 'Chaque chiffre est traçable à sa source officielle'
        },
        {
          title: 'Vérifiabilité',
          desc: 'Toutes les données peuvent être vérifiées indépendamment'
        },
        {
          title: 'Mise à jour',
          desc: 'Les données sont mises à jour dès qu\'elles sont disponibles'
        },
        {
          title: 'Accessibilité',
          desc: 'Visualisations claires et compréhensibles pour tous'
        }
      ]
    },
    sources: {
      title: 'Sources principales',
      list: [
        {
          title: 'Budget 2027',
          desc: 'Message no 8731 du Conseil d\'État du Canton du Tessin',
          link: 'https://www4.ti.ch/generale/gran-consiglio/messaggi-e-atti/ricerca-messaggi-e-atti/risultati/dettaglio/?user_gcatti_pi1%5Bid_messaggio%5D=11046'
        },
        {
          title: 'Primes LAMal',
          desc: 'OFSP - Office fédéral de la santé publique',
          link: 'https://www.bag.admin.ch/bag/fr/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-in-der-schweiz/praemien-kostenbeteiligung.html'
        },
        {
          title: 'Données de population',
          desc: 'OFS/USTAT - Statistiques officielles',
          link: 'https://www.bfs.admin.ch/bfs/fr/home/statistiques/population.html'
        },
        {
          title: 'Code open source',
          desc: 'Dépôt GitHub avec toutes les données et visualisations',
          link: 'https://github.com/tiero/dove-vanno-soldi-ticino'
        }
      ]
    },
    validation: {
      title: 'Validation des données',
      desc: 'Chaque chiffre est automatiquement vérifié par des scripts de validation. Les contrôles comprennent :',
      list: [
        'Cohérence mathématique (sommes, pourcentages)',
        'Vérifications croisées entre différentes sources',
        'Vérification des variations d\'une année sur l\'autre',
        'Contrôle des classifications comptables'
      ]
    },
    notes: {
      title: 'Notes techniques',
      list: [
        'Tous les montants sont exprimés en millions de CHF sauf indication contraire',
        'Les données suivent le Modèle comptable harmonisé 2 (MCH2)',
        'Les pourcentages peuvent ne pas totaliser exactement 100% en raison des arrondis',
        'Les Comptes 2025 représentent des données réelles clôturées, les Budgets 2026 et 2027 sont des estimations'
      ]
    }
  },
  categories: {
    'Previdenza sociale': 'Prévoyance sociale',
    'Formazione': 'Formation',
    'Salute pubblica': 'Santé publique',
    'Finanze e imposte': 'Finances et impôts',
    'Amministrazione generale': 'Administration générale',
    'Ordine pubblico, sicurezza e difesa': 'Ordre public, sécurité et défense',
    'Trasporti e telecomunicazioni': 'Transports et télécommunications',
    'Economia': 'Économie',
    'Cultura, sport, tempo libero e chiesa': 'Culture, sport, loisirs et église',
    'Protezione ambiente e territorio': 'Protection de l\'environnement et du territoire',
    'Contributi cantonali': 'Contributions cantonales',
    'Premio medio TI': 'Prime moyenne TI',
    'Premio medio CH': 'Prime moyenne CH',
    'Uscite correnti': 'Dépenses courantes',
    'Entrate correnti': 'Recettes courantes',
    'Investimenti': 'Investissements'
  }
};
