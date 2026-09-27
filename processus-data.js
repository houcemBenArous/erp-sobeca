// Données complètes des 7 processus SMQ SOBECA
const processusData = {
  mqa: {
    code: "MQA",
    nom: "Management de la Qualité et Amélioration",
    type: "Processus de Management (Direction)",
    pilote: "Hamdi GHEDIR (RMQ)",
    revision: "Annuelle + Revue de direction",
    nbProcedures: 7,
    nbFormulaires: 19,
    objectifs: [
      "Maintenir et améliorer l'efficacité du SMQ",
      "Assurer la conformité ISO 9001:2015",
      "Piloter audits internes et revues de direction",
      "Gérer NC et actions d'amélioration"
    ],
    procedures: [
      { ref: "PRD-MQA-01", titre: "Maîtrise des documents", revision: "Rév. 9 — 01/08/2019" },
      { ref: "PRD-MQA-02", titre: "Communication interne", revision: "En vigueur" },
      { ref: "PRD-MQA-03", titre: "Audit interne", revision: "Rév. 11 — 01/08/2019" },
      { ref: "PRD-MQA-05", titre: "Actions d'amélioration", revision: "Rév. 10 — 23/10/2019" },
      { ref: "PRD-MQA-06", titre: "Maîtrise des produits non conformes", revision: "Rév. 9 — 01/08/2024" },
      { ref: "PRD-MQA-07", titre: "Analyse des risques processus SMQ", revision: "En vigueur" },
      { ref: "PRD-MQA-08", titre: "Gestion des non-conformités", revision: "Rév. 00 — 24/10/2024" }
    ],
    formulaires: [
      "FOR-MQA-01 : Liste des documents et états de révision",
      "FOR-MQA-02 : Tableaux de bord MQA",
      "FOR-MQA-03 : Plan d'action",
      "FOR-MQA-04 : Plan de communication interne",
      "FOR-MQA-05 : Liste des documents d'origine externe",
      "FOR-MQA-06 : Fiche diffusion documents",
      "FOR-MQA-07 : Tableau de maîtrise des enregistrements qualité",
      "FOR-MQA-09 : Revue de direction",
      "FOR-MQA-10 : Planning d'audits internes",
      "FOR-MQA-12 : Rapport d'audit interne",
      "FOR-MQA-13 : Identification des parties intéressées",
      "FOR-MQA-14 : Programme d'audit",
      "FOR-MQA-15 : Check-list VRS",
      "FOR-MQA-16 : Attestation de sensibilisation",
      "FOR-MQA-17/18 : AMDEC",
      "FOR-MQA-20/21 : Suivi rapport 8D",
      "FOR-MQA-22 : Rapport de non-conformité",
      "FOR-MQA-23 : Évaluation importance processus pour audits",
      "FOR-MQA-24 : Évaluation de l'action d'audit"
    ],
    activites: [
      {
        titre: "Maîtrise des Documents",
        icone: "folder-open",
        couleur: "primary",
        details: [
          "Édition, diffusion et archivage documents SMQ",
          "Contrôle des révisions et traçabilité",
          "Gestion documents d'origine externe"
        ]
      },
      {
        titre: "Audit Interne",
        icone: "clipboard-check",
        couleur: "success",
        details: [
          "Planification annuelle (pondération criticité)",
          "Réalisation selon programme établi",
          "Rapport d'audit et suivi des écarts"
        ]
      },
      {
        titre: "Gestion des NC & Actions",
        icone: "exclamation-triangle",
        couleur: "warning",
        details: [
          "Détection et enregistrement NC (FOR-MQA-22)",
          "Analyse causes (8D, Ishikawa, 5 Pourquoi)",
          "Actions correctives/préventives (FAA)",
          "Rapport 8D pour NC majeures"
        ]
      },
      {
        titre: "Revue de Direction",
        icone: "users",
        couleur: "info",
        details: [
          "Bilan annuel indicateurs tous processus",
          "Décisions stratégiques d'amélioration",
          "Mise à jour objectifs qualité"
        ]
      },
      {
        titre: "Analyse des Risques (AMDEC)",
        icone: "shield-alt",
        couleur: "danger",
        details: [
          "Identification risques et opportunités par processus",
          "Évaluation criticité (occurrence × gravité × détection)",
          "Plans d'action de maîtrise des risques",
          "Mise à jour annuelle"
        ]
      }
    ]
  },
  
  cmp: {
    code: "CMP",
    nom: "Commercial et Planification",
    type: "Processus de Réalisation",
    pilote: "Talel YAHYAOUI",
    revision: "Rév. 11 — 04/08/2025",
    nbProcedures: 1,
    nbFormulaires: 16,
    objectifs: [
      "Maîtriser les coûts et avoir des prix compétitifs",
      "Assurer une bonne planification de production",
      "Améliorer la compétitivité",
      "Fidéliser les clients et améliorer leur satisfaction"
    ],
    procedures: [
      { ref: "PRD-CMP-01", titre: "Traitement des réclamations clients", revision: "Rév. 03 — 04/08/2025" }
    ],
    formulaires: [
      "FOR-CMP-01 : Registre de suivi des commandes client",
      "FOR-CMP-02 : Registre des devis",
      "FOR-CMP-03 : Offre de prix",
      "FOR-CMP-04 : Bon de livraison / sortie client",
      "FOR-CMP-07 : Enquête de satisfaction client",
      "FOR-CMP-08 : Rapport d'analyse satisfaction",
      "FOR-CMP-09 : Fiche de réclamation client",
      "FOR-CMP-11 : Compte-rendu visite client",
      "FOR-CMP-12 : Registre suivi réclamations clients",
      "FOR-CMP-14 : Fiche technique pièce mécanique",
      "FOR-CMP-15 : Dérogation client",
      "FOR-CMP-16 : Registre suivi dérogation client"
    ],
    activites: [
      {
        titre: "Visite Client & Prospection",
        icone: "handshake",
        couleur: "primary",
        details: [
          "Visites clients et prospections",
          "Compte-rendu visite (FOR-CMP-11)",
          "Développement portefeuille clients"
        ]
      },
      {
        titre: "Gestion Offres & Commandes",
        icone: "file-invoice-dollar",
        couleur: "success",
        details: [
          "Réception demandes d'offres",
          "Enregistrement offres (FOR-CMP-02)",
          "Conversion offres confirmées en commandes",
          "Suivi commandes (FOR-CMP-01)"
        ]
      },
      {
        titre: "Planification Production",
        icone: "calendar-alt",
        couleur: "info",
        details: [
          "Collaboration R.MEC et R.AGS",
          "Définition priorités de réalisation",
          "État des encours (FOR-MEC-03)",
          "Réunion quotidienne de planification"
        ]
      },
      {
        titre: "Livraison & Facturation",
        icone: "truck",
        couleur: "warning",
        details: [
          "Émission bons de livraison (FOR-CMP-04)",
          "Facturation clients",
          "Conservation fiche technique et plans"
        ]
      },
      {
        titre: "Réclamations & Satisfaction",
        icone: "smile",
        couleur: "danger",
        details: [
          "Traitement réclamations (FOR-CMP-09)",
          "Enregistrement et suivi (FOR-CMP-12)",
          "Enquête satisfaction annuelle (FOR-CMP-07)",
          "Analyse satisfaction (FOR-CMP-08)"
        ]
      }
    ]
  },
  
  mec: {
    code: "MEC",
    nom: "Production Mécanique",
    type: "Processus de Réalisation",
    pilote: "Slim GALLS",
    revision: "Rév. 12 — 04/08/2025",
    nbProcedures: 2,
    nbFormulaires: 10,
    objectifs: [
      "Fournir produits conformes aux exigences client",
      "Respecter les délais prévus",
      "Assurer conformité légale et réglementaire",
      "Améliorer la productivité"
    ],
    procedures: [
      { ref: "INS-MEC-01", titre: "Auto-contrôle des pièces en cours", revision: "En vigueur" },
      { ref: "PRD-MEC-01", titre: "Contrôle et surveillance production", revision: "En vigueur" }
    ],
    formulaires: [
      "FOR-MEC-01 : Ordre de Fabrication (OF) / Fiche taillage",
      "FOR-MEC-03 : Fiche suiveuse de production",
      "FOR-MEC-04 : Fiche contrôle dimensionnel",
      "FOR-MEC-05 : Analyse non-conformité production",
      "FOR-MEC-07 : Programme hebdomadaire production",
      "FOR-MEC-10 : Autocontrôle opérateur"
    ],
    activites: [
      {
        titre: "Réception Données Techniques",
        icone: "file-alt",
        couleur: "primary",
        details: [
          "Fiche technique (FOR-CMP-14)",
          "Plans et modèles (CMP/EDV)",
          "Vérification faisabilité"
        ]
      },
      {
        titre: "Fabrication Mécanique",
        icone: "cogs",
        couleur: "success",
        details: [
          "Tournage / Fraisage / Taillage",
          "Alésage / Rectification",
          "Soudure / Mortaisage engrenages",
          "Suivi temps par poste/opérateur"
        ]
      },
      {
        titre: "Contrôle Qualité",
        icone: "check-circle",
        couleur: "info",
        details: [
          "Auto-contrôle en cours (INS-MEC-01)",
          "Contrôle dimensionnel (FOR-MEC-04)",
          "Contrôle final par EDV",
          "Fiche suiveuse (FOR-MEC-03)"
        ]
      },
      {
        titre: "Traçabilité & Livraison",
        icone: "barcode",
        couleur: "warning",
        details: [
          "Traçabilité complète lot → pièce",
          "Transmission CMP pour livraison",
          "Conservation dossier fabrication"
        ]
      }
    ]
  },
  
  edv: {
    code: "EDV",
    nom: "Études et Développement",
    type: "Processus de Réalisation",
    pilote: "Issameddine BEN ALI",
    revision: "Rév. 14 — 04/08/2025",
    nbProcedures: 1,
    nbFormulaires: 9,
    objectifs: [
      "Assurer faisabilité technique des projets",
      "Optimiser les coûts de production",
      "Garantir conformité des études",
      "Respecter délais d'étude"
    ],
    procedures: [
      { ref: "PRD-EDV-01", titre: "Gestion des études techniques", revision: "Rév. 09 — 04/08/2025" }
    ],
    formulaires: [
      "FOR-EDV-01 : Suivi études techniques",
      "FOR-EDV-06 : Liste des plans",
      "FOR-EDV-08 : Étude d'offre de prix",
      "FOR-EDV-09 : Suivi études d'offres",
      "FOR-EDV-10 : Contrôle final produit fini"
    ],
    activites: [
      {
        titre: "Études Techniques",
        icone: "drafting-compass",
        couleur: "primary",
        details: [
          "Analyse faisabilité technique",
          "Création plans et modèles",
          "Définition spécifications",
          "Suivi études (FOR-EDV-01)"
        ]
      },
      {
        titre: "Nomenclatures & Gammes",
        icone: "list-ol",
        couleur: "success",
        details: [
          "Création nomenclatures (BOM)",
          "Définition gammes opératoires",
          "Sélection matières premières",
          "Validation avec AGS"
        ]
      },
      {
        titre: "Calcul Prix de Revient",
        icone: "calculator",
        couleur: "info",
        details: [
          "Étude d'offre de prix (FOR-EDV-08)",
          "Calcul temps et coûts",
          "Définition marge commerciale",
          "Transmission à CMP"
        ]
      },
      {
        titre: "Contrôle Final",
        icone: "clipboard-check",
        couleur: "warning",
        details: [
          "Contrôle produit fini (FOR-EDV-10)",
          "Validation conformité plans",
          "Rapport de contrôle",
          "Archivage dossier technique"
        ]
      }
    ]
  },
  
  ags: {
    code: "AGS",
    nom: "Achats et Gestion des Stocks",
    type: "Processus de Réalisation",
    pilote: "Ghassen BEN CHEIKH",
    revision: "Rév. 13 — 04/10/2025",
    nbProcedures: 3,
    nbFormulaires: 20,
    objectifs: [
      "Approvisionner au meilleur coût",
      "Garantir disponibilité matières et composants",
      "Gérer stocks multi-dépôts (M1, M02, ML, DPF)",
      "Évaluer et qualifier fournisseurs"
    ],
    procedures: [
      { ref: "PRD-AGS-01", titre: "Gestion des achats", revision: "Rév. 08 — 04/10/2025" },
      { ref: "PRD-AGS-02", titre: "Évaluation fournisseurs", revision: "Rév. 06 — 04/10/2025" },
      { ref: "INS-AGS-01", titre: "Identification matières premières", revision: "En vigueur" }
    ],
    formulaires: [
      "FOR-AGS-01 : Liste des articles",
      "FOR-AGS-02 : Demande d'achat (DA)",
      "FOR-AGS-07 : Évaluation fournisseurs",
      "FOR-AGS-08 : Fiche d'entrée matière première",
      "FOR-AGS-09 : Liste fournisseurs qualifiés",
      "FOR-AGS-13 : Bon de réception (BR)",
      "FOR-AGS-14 : Suivi bons de commande",
      "FOR-AGS-20 : Réclamation fournisseur"
    ],
    activites: [
      {
        titre: "Demandes d'Achat",
        icone: "shopping-cart",
        couleur: "primary",
        details: [
          "Réception DA (FOR-AGS-02)",
          "Vérification disponibilité stock",
          "Demandes de prix fournisseurs",
          "Sélection fournisseur qualifié"
        ]
      },
      {
        titre: "Bons de Commande",
        icone: "file-invoice",
        couleur: "success",
        details: [
          "Émission BC fournisseurs",
          "Suivi livraisons (FOR-AGS-14)",
          "Relances fournisseurs",
          "Gestion délais"
        ]
      },
      {
        titre: "Réception & Contrôle",
        icone: "clipboard-check",
        couleur: "info",
        details: [
          "Contrôle quantitatif/qualitatif",
          "Bon de réception (FOR-AGS-13)",
          "Entrée stock (FOR-AGS-08)",
          "Réclamation si NC (FOR-AGS-20)"
        ]
      },
      {
        titre: "Gestion Multi-Dépôts",
        icone: "warehouse",
        couleur: "warning",
        details: [
          "4 dépôts : M1, M02, ML, DPF",
          "Mouvements entrée/sortie/transfert",
          "Inventaires périodiques",
          "Traçabilité complète"
        ]
      },
      {
        titre: "Évaluation Fournisseurs",
        icone: "star",
        couleur: "danger",
        details: [
          "Notation qualité (1-4)",
          "Évaluation délais",
          "Réactivité réclamations",
          "Liste fournisseurs agréés (FOR-AGS-09)"
        ]
      }
    ]
  },
  
  grh: {
    code: "GRH",
    nom: "Gestion des Ressources Humaines",
    type: "Processus de Support",
    pilote: "Responsable GRH",
    revision: "Rév. 12",
    nbProcedures: 2,
    nbFormulaires: 5,
    objectifs: [
      "Développer compétences du personnel (25 pers.)",
      "Assurer disponibilité ressources qualifiées",
      "Gérer formation et polyvalence",
      "Suivre présence et absences"
    ],
    procedures: [
      { ref: "PRD-GRH-01", titre: "Gestion des compétences", revision: "En vigueur" },
      { ref: "PRD-GRH-02", titre: "Gestion de la formation", revision: "En vigueur" }
    ],
    formulaires: [
      "FOR-GRH-01 : Fiche de poste",
      "FOR-GRH-02 : Plan de formation",
      "FOR-GRH-03 : Matrice de compétences",
      "FOR-GRH-04 : Évaluation annuelle",
      "FOR-GRH-05 : Fiche personnel"
    ],
    activites: [
      {
        titre: "Gestion Effectifs",
        icone: "users",
        couleur: "primary",
        details: [
          "Gestion 25 collaborateurs",
          "Fiches de poste (FOR-GRH-01)",
          "Organigramme",
          "Fiches personnelles (FOR-GRH-05)"
        ]
      },
      {
        titre: "Compétences & Polyvalence",
        icone: "graduation-cap",
        couleur: "success",
        details: [
          "Matrice de compétences (FOR-GRH-03)",
          "Identification besoins formation",
          "Suivi polyvalence opérateurs",
          "Évaluations annuelles (FOR-GRH-04)"
        ]
      },
      {
        titre: "Formation",
        icone: "chalkboard-teacher",
        couleur: "info",
        details: [
          "Plan de formation annuel (FOR-GRH-02)",
          "Organisation formations internes/externes",
          "Évaluation efficacité formations",
          "KPI : TCPF (Taux Couverture Plan Formation)"
        ]
      },
      {
        titre: "Présence & Absences",
        icone: "calendar-check",
        couleur: "warning",
        details: [
          "Suivi quotidien présence",
          "Gestion absences/congés",
          "Calcul taux absentéisme (TA)",
          "Indicateurs mensuels"
        ]
      }
    ]
  },
  
  mnt: {
    code: "MNT",
    nom: "Maintenance",
    type: "Processus de Support",
    pilote: "Mohamed Ali KHALFAOUI",
    revision: "Rév. 14 — 04/08/2025",
    nbProcedures: 2,
    nbFormulaires: 25,
    objectifs: [
      "Assurer disponibilité du parc machines",
      "Réduire temps d'arrêt machines",
      "Planifier maintenance préventive",
      "Gérer interventions curatives"
    ],
    procedures: [
      { ref: "PRD-MNT-01", titre: "Maintenance préventive", revision: "Rév. 08 — 04/08/2025" },
      { ref: "PRD-MNT-02", titre: "Maintenance curative", revision: "En vigueur" }
    ],
    formulaires: [
      "FOR-MNT-01 : Planning maintenance préventive",
      "FOR-MNT-13 : Bon d'intervention",
      "FOR-MNT-14 : Suivi arrêts machines",
      "FOR-MNT-16 : Calcul TAM (Taux Arrêt Machine)",
      "FOR-MNT-19 : Rapport étalonnage",
      "FOR-MNT-23 : Parc machines",
      "FOR-MNT-24 : Liste instruments de mesure"
    ],
    activites: [
      {
        titre: "Inventaire Parc Machines",
        icone: "industry",
        couleur: "primary",
        details: [
          "Parc machines (FOR-MNT-23)",
          "Instruments mesure (FOR-MNT-24)",
          "Fiches techniques équipements",
          "Historique interventions"
        ]
      },
      {
        titre: "Maintenance Préventive",
        icone: "calendar-alt",
        couleur: "success",
        details: [
          "Planning annuel (FOR-MNT-01)",
          "Interventions planifiées",
          "Vérifications périodiques",
          "KPI : TRP (Taux Réalisation Plan)"
        ]
      },
      {
        titre: "Maintenance Curative",
        icone: "wrench",
        couleur: "danger",
        details: [
          "Signalement pannes (MEC)",
          "Bon d'intervention (FOR-MNT-13)",
          "Diagnostic et réparation",
          "Suivi arrêts (FOR-MNT-14)"
        ]
      },
      {
        titre: "Pièces de Rechange",
        icone: "boxes",
        couleur: "warning",
        details: [
          "Stock pièces critiques",
          "Demandes d'achat AGS",
          "Gestion consommables",
          "Historique consommations"
        ]
      },
      {
        titre: "Étalonnage Instruments",
        icone: "tachometer-alt",
        couleur: "info",
        details: [
          "Planning étalonnages",
          "Rapports étalonnage (FOR-MNT-19)",
          "Vérifications périodiques",
          "Conformité métrologique"
        ]
      }
    ]
  }
};
