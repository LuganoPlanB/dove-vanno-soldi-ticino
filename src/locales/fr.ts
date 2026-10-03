export default {
  meta: {
    title: 'Où va l\'argent du Tessin',
    description: 'Visualisation transparente des finances du Canton du Tessin - Où va l\'argent du Tessin'
  },
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
  },
  health: {
    sectionTitle: 'Dépenses de santé : explication pour non-experts',
    intro: 'La santé représente l\'un des principaux postes du budget cantonal. Voici ce qu\'il faut savoir.',
    faqTitle: 'Question fréquente',
    faqQuestion: 'Pourquoi le Canton dépense-t-il de l\'argent pour la santé si je paie déjà des primes d\'assurance maladie chaque mois ?',
    faqAnswer: 'L\'assurance maladie ne couvre que les soins de base. Le Canton doit payer (par loi fédérale) 55% des hospitalisations, aider ceux qui ne peuvent pas payer les primes, et payer des services supplémentaires non couverts par LAMal (soins aux personnes âgées, prévention, etc.).',
    faq1Title: '1. LAMal ne couvre que les soins de base',
    faq1Text: 'Votre assurance maladie paie les consultations médicales, les examens, les médicaments de la liste fédérale. Elle ne paie PAS : le dentiste (sauf accidents), la plupart des lunettes, les appareils auditifs, les soins à domicile pour personnes âgées, les frais de maison de retraite, de nombreux médicaments innovants.',
    faq2Title: '2. Canton obligé de payer 55% des hôpitaux',
    faq2Text: 'La loi fédérale LAMal (art. 49a) oblige les Cantons à financer 55% des coûts des hospitalisations. L\'assurance maladie paie 45%. Cela permet de ne pas tout faire peser sur les primes.',
    faq3Title: '3. Primes très élevées au Tessin, beaucoup ne peuvent pas les payer',
    faq3Text: 'Les primes au Tessin sont les plus élevées de Suisse : 520 CHF/mois en moyenne en 2027 contre 412 CHF de moyenne nationale (+26%). Une famille de 4 personnes peut payer plus de 2\'000 CHF/mois. Beaucoup de familles ne peuvent pas se le permettre sans aide publique (RIPAM).',
    faq4Title: '4. Services supplémentaires pour personnes âgées et malades chroniques',
    faq4Text: 'Soins à domicile pour personnes âgées, maisons de retraite, soins dentaires pour les bénéficiaires de PC : tout cela n\'est PAS couvert par l\'assurance maladie de base. Le Canton doit intervenir.',
    faq5Title: '5. Prévention et santé publique',
    faq5Text: 'Vaccinations, dépistage du cancer, contrôle des maladies infectieuses, médecine scolaire, lutte contre les dépendances : ce sont des tâches cantonales pour protéger la santé de toute la population.',
    verifiedTitle: 'Données vérifiées',
    verifiedAmount: '627 M CHF',
    verifiedLabel: 'Fonction "Santé publique" 2027',
    verifiedSource: 'Source : P2027_spese_02.pdf',
    verifiedPercent: 'du budget total',
    verifiedPerCapita: 'par habitant',
    ripamTitle: 'RIPAM (réduction de primes)',
    ripamAmount: '332 M CHF',
    ripamLabel: 'Classé dans "Prévoyance sociale"',
    ripamNote: '⚠️ RIPAM est classé dans la fonction "Prévoyance sociale" (pas "Santé publique") car c\'est un transfert direct aux familles.',
    glossaryTitle: 'Glossaire des termes clés',
    glossaryLAMalTitle: 'LAMal (Loi fédérale sur l\'assurance maladie)',
    glossaryLAMalText: 'L\'assurance maladie obligatoire que toute personne résidant en Suisse doit avoir. Chaque mois, vous payez une prime à votre assureur maladie (par exemple Helsana, CSS, Assura).',
    glossaryLAMalLegal: 'Base légale : RS 832.10',
    glossaryTransferTitle: 'Dépenses de transfert',
    glossaryTransferText: 'Argent que le Canton "transfère" à d\'autres (communes, hôpitaux, assureurs, familles) au lieu de l\'utiliser directement pour les salaires ou le matériel cantonaux.',
    glossaryTransferEx: 'Exemples : RIPAM (transfert aux assureurs), quote-part hospitalière (transfert aux hôpitaux), PC (transfert aux personnes âgées)',
    glossaryQuota55Title: 'Quote-part cantonale 55% (financement hospitalier)',
    glossaryQuota55Text: 'Lorsque vous êtes hospitalisé, le coût est réparti par la loi fédérale : le Canton paie 55%, votre assurance maladie paie 45%. Vous ne payez que la franchise normale.',
    glossaryQuota55Legal: 'Base légale : LAMal art. 49a',
    glossaryPCTitle: 'PC (Prestations Complémentaires AVS/AI)',
    glossaryPCText: 'Aide économique pour les personnes âgées et les personnes handicapées lorsque la pension (AVS ou AI) ne suffit pas pour vivre. Comprend également des contributions pour les dépenses de santé supplémentaires (dentiste, lunettes, médicaments non remboursés).',
    missingTitle: 'Données NON disponibles dans le Budget 2027',
    missingIntro: 'Le Message 8731 ne contient pas de ventilation détaillée des dépenses de santé par poste individuel. Les 627M sont un agrégat.',
    missing1Label: 'Contributions hospitalisations :',
    missing1Value: 'NON DISPONIBLE',
    missing1Where: 'Où le trouver : Comptes détaillés (mars), Rapports annuels EOC/OSC',
    missing2Label: 'PC quote-part santé :',
    missing2Value: 'NON DISPONIBLE',
    missing2Where: 'Où le trouver : Comptes, Compte économique par nature'
  },
  admin: {
    sectionTitle: 'Administration cantonale : qui surveille les surveillants ?',
    intro: 'Combien coûte l\'administration publique et qui s\'assure que l\'argent est bien dépensé ?',
    totalLabel: 'Dépense totale 2027',
    totalAmount: '384 M',
    totalSource: 'Fonction "Administration générale"',
    totalSourceDoc: 'Source : P2027_spese_02.pdf',
    percentLabel: '% du budget',
    percentAmount: '8,1%',
    percentNote1: '91,9% va aux autres fonctions',
    percentNote2: '(écoles, santé, sécurité)',
    perCapitaLabel: 'Par habitant',
    perCapitaAmount: '1\'061 CHF',
    perCapitaNote: '384M / 362\'200 habitants',
    oversightTitle: 'Qui contrôle ?',
    oversightCCFTitle: 'Contrôle cantonal des finances (CCF)',
    oversightCCFText: 'Les "réviseurs des comptes" du Canton. Ils vérifient que l\'argent public est dépensé correctement et légalement. Indépendant du Gouvernement, répond au Parlement.',
    oversightCCFLegal: 'Base légale : Loi 2.4.4.1',
    oversightCGFTitle: 'Commission de gestion et des finances (CGF)',
    oversightCGFText: 'Commission parlementaire permanente qui surveille la gestion financière du Gouvernement. Environ 15 députés du Grand Conseil.',
    oversightCorteTitle: 'Cour des comptes',
    oversightCorteText: '❌ Le Canton du Tessin n\'a PAS de Cour des comptes autonome (contrairement à GE, VD). Le contrôle se fait via CCF + CGF.',
    missingTitle: 'Données NON disponibles dans le Budget 2027',
    missing1Label: 'EPT total Canton Tessin :',
    missing1Value: 'NON DISPONIBLE',
    missing1Where: 'Où le trouver : USTAT "Le marché du travail dans le secteur public tessinois" (publication annuelle)',
    missing2Label: 'Salaires Conseil d\'État :',
    missing2Value: 'NON DISPONIBLE',
    missing2Where: 'Où le trouver : LStip art. 3 ou communications officielles',
    missing3Label: 'Indemnités Grand Conseil :',
    missing3Value: 'NON DISPONIBLE',
    missing3Where: 'Où le trouver : Loi sur le Grand Conseil, Règlement des indemnités',
    missing4Label: 'Budget CCF :',
    missing4Value: 'NON DISPONIBLE',
    missing4Where: 'Où le trouver : Rapport annuel CCF ou Comptes détaillés'
  }
};
