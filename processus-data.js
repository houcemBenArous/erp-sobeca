// Données complètes des 7 processus SMQ SOBECA
// Sources : cahier-de-charge-md/03-processus-MQA.md à 09-processus-MNT.md (fiches processus),
//           11-documents-reference.md (inventaire des documents),
//           ERP-01 à ERP-08 (périmètre, règles), ERP-08 §8.1 (22 KPI actifs, registre officiel),
//           SUIVI-VERIFICATION-FORMULAIRES.md (titres et révisions validés par capture).
//
// Règle de réconciliation : en cas de divergence entre une fiche processus et ERP-08 §8.1,
// c'est ERP-08 §8.1 qui fait foi (réconcilié sur FOR-MQA-02 : 22 actifs + 3 CAT désactivés).
// La divergence est alors signalée dans pointsValidation.
const processusData = {
  mqa: {
    code: "MQA",
    nom: "Management de la Qualité et Amélioration",
    type: "Processus de Management (Direction)",
    pilote: "Hamdi GHEDIR (RMQ)",
    revision: "Non précisée (PCS-MQA)",
    frequenceRevue: "Annuelle + à chaque revue de direction",
    nbProcedures: 7,
    nbFormulaires: 19,
    objet: "Assurer le pilotage global du Système de Management de la Qualité de SOBECA, en garantissant la conformité à la norme ISO 9001:2015 et l'amélioration continue de tous les processus.",
    finalite: [
      "Maintenir et améliorer l'efficacité du SMQ",
      "Assurer la conformité aux exigences normatives et réglementaires",
      "Piloter les audits internes et les revues de direction",
      "Gérer les non-conformités et les actions d'amélioration"
    ],
    domaine: "Transversal : couvre l'ensemble des 6 autres processus.",
    enjeuxExternes: [],
    enjeuxInternes: [],
    partiesInteressees: [],
    entrees: [],
    sorties: [],
    synoptique: [],
    objectifs: [
      "Maintenir et améliorer l'efficacité du SMQ",
      "Assurer la conformité ISO 9001:2015",
      "Piloter audits internes et revues de direction",
      "Gérer NC et actions d'amélioration",
      "Piloter les 22 KPI actifs des 7 processus"
    ],
    procedures: [
      { ref: "PRD-MQA-01", titre: "Maîtrise des documents" },
      { ref: "PRD-MQA-02", titre: "Communication interne" },
      { ref: "PRD-MQA-03", titre: "Audit qualité interne" },
      { ref: "PRD-MQA-05", titre: "Actions d'amélioration" },
      { ref: "PRD-MQA-06", titre: "Maîtrise des produits non conformes" },
      { ref: "PRD-MQA-07", titre: "Analyse des risques processus SMQ" },
      { ref: "PRD-MQA-08", titre: "Gestion des non-conformités" }
    ],
    instructions: [
      { ref: "INS-MQA-01", titre: "Vérification Respect Standard" },
      { ref: "INS-MQA-02", titre: "Évaluation de l'action d'audit" }
    ],
    documents: [],
    formulaires: [
      "FOR-MQA-01 : Liste des documents et états de révision",
      "FOR-MQA-02 : Tableaux de bord de suivi des objectifs",
      "FOR-MQA-03 : Plan d'action d'amélioration (fichier multi-feuilles)",
      "FOR-MQA-04 : Plan de communication interne et externe",
      "FOR-MQA-05 : Liste des documents d'origine externe",
      "FOR-MQA-06 : Fiche de diffusion des documents",
      "FOR-MQA-07 : Tableau de maîtrise des enregistrements",
      "FOR-MQA-09 : Rapport de revue de direction",
      "FOR-MQA-10 : Planning d'audits internes",
      "FOR-MQA-12 : Rapport d'audit interne",
      "FOR-MQA-13 : Identification des parties intéressées et leurs exigences",
      "FOR-MQA-14 : Programme d'audit",
      "FOR-MQA-15 : Check-list VRS",
      "FOR-MQA-16 : Attestation de sensibilisation",
      "FOR-MQA-17/18 : AMDEC",
      "FOR-MQA-20/21 : Suivi rapport 8D",
      "FOR-MQA-22 : Rapport de non-conformité",
      "FOR-MQA-23 : Rapport d'évaluation de l'importance des processus pour la planification des audits",
      "FOR-MQA-24 : Évaluation de l'action d'audit"
    ],
    activites: [
      {
        titre: "Maîtrise des Documents",
        icone: "folder-open",
        couleur: "primary",
        details: [
          "Édition, diffusion et archivage de tous les documents du SMQ",
          "Contrôle des révisions et traçabilité des modifications",
          "Gestion des documents d'origine externe (FOR-MQA-05)"
        ]
      },
      {
        titre: "Audit Interne",
        icone: "clipboard-check",
        couleur: "success",
        details: [
          "Planification annuelle des audits par processus (pondération selon criticité)",
          "Réalisation des audits selon le programme établi",
          "Rapport d'audit et suivi des écarts"
        ]
      },
      {
        titre: "Gestion des NC & Actions d'amélioration",
        icone: "exclamation-triangle",
        couleur: "warning",
        details: [
          "Détection et enregistrement des non-conformités (FOR-MQA-22)",
          "Analyse des causes (outil 8D, Ishikawa, 5 Pourquoi)",
          "Définition et suivi des actions correctives / préventives",
          "Rapport 8D pour les non-conformités majeures (FOR-MQA-21)"
        ]
      },
      {
        titre: "Revue de Direction",
        icone: "users",
        couleur: "info",
        details: [
          "Bilan annuel des indicateurs de tous les processus",
          "Décisions stratégiques d'amélioration",
          "Mise à jour des objectifs qualité"
        ]
      },
      {
        titre: "Analyse des risques (AMDEC processus)",
        icone: "shield-alt",
        couleur: "danger",
        details: [
          "Identification des risques et opportunités pour chaque processus",
          "Évaluation de la criticité (occurrence × gravité × détection)",
          "Plans d'action de maîtrise des risques",
          "Mise à jour annuelle"
        ]
      }
    ],
    kpis: [
      { code: "TMRO", nom: "Taux Moyen de Réalisation des Objectifs des processus", frequence: "Mensuel", responsable: "R.MQA", formule: "COUNT(objectifs atteints) / COUNT(objectifs total) × 100" },
      { code: "TEAA", nom: "Taux d'Efficacité d'Action d'Amélioration", frequence: "Mensuel", responsable: "R.MQA", formule: "COUNT(FAA efficaces) / COUNT(FAA total) × 100" },
      { code: "SMQ", nom: "Taux d'Efficacité du SMQ", frequence: "Annuel", responsable: "R.MQA", formule: "(Taux efficacité audit interne + Taux respect délais audit) / 2" },
      { code: "—", nom: "Degré de réalisation des objectifs", frequence: "Annuel", responsable: "R.MQA", formule: "Calcul agrégé global" }
    ],
    pointsValidation: [
      "La fiche PCS-MQA est incomplète : elle ne contient ni synoptique, ni parties intéressées, ni flux d'entrées/sorties, ni tableau d'indicateurs détaillé, et sa révision n'est pas renseignée — à compléter.",
      "Effectif SOBECA non réconcilié : 25 (majorité des documents) vs 47 (SUIVI §7 et FOR-GRH-05) — arbitrage RMQ/GRH requis.",
      "Les 3 KPI du processus CAT (caoutchouc) sont désactivés : confirmer que CAT reste hors périmètre."
    ]
  },

  cmp: {
    code: "CMP",
    nom: "Commercial et Planification",
    type: "Processus de Réalisation",
    pilote: "Talel YAHYAOUI",
    revision: "Rév. 11 — 04/08/2025",
    frequenceRevue: "Annuelle, lors des revues de direction et à chaque mise à jour",
    nbProcedures: 1,
    nbFormulaires: 12,
    objet: "Maîtriser les coûts, avoir des prix compétitifs et assurer une bonne planification de production.",
    finalite: [
      "Améliorer la compétitivité",
      "Fidéliser les clients",
      "Améliorer la satisfaction client"
    ],
    domaine: "Tous les produits et services exécutés au sein de SOBECA.",
    enjeuxExternes: [
      "Maîtrise des coûts",
      "Concurrence — prospection du marché local et recherche de marchés à l'étranger",
      "Maintien et maîtrise des marchés locaux"
    ],
    enjeuxInternes: [
      "Processus SMQ",
      "Ressources humaines et financières",
      "Compétence et qualification"
    ],
    partiesInteressees: [
      { partie: "Client", niveau: "Externe" },
      { partie: "Pilotes processus (R.MEC, R.EDV…)", niveau: "Interne" },
      { partie: "Direction", niveau: "Interne" }
    ],
    entrees: [
      { origine: "Client / Commercial", donnees: "Demande d'offre de prix, commande ferme, plan, modèle, enquête client, réclamation, réponse à dérogation" },
      { origine: "EDV", donnees: "Demande d'étude d'offre de prix, modèles des pièces à réaliser, croquis et spécifications techniques" },
      { origine: "MEC", donnees: "Fiche technique, fiche de suivi mécanique" },
      { origine: "GRH", donnees: "Résultat de formations appropriées, personnel recruté" },
      { origine: "MQA", donnees: "Rapport d'audit interne, rapport de revue de direction, documents qualité" }
    ],
    sorties: [
      { destination: "Client", donnees: "Pièce réalisée selon exigences, facture, bon de livraison, enquête de satisfaction, réponse aux réclamations, offre de prix" },
      { destination: "EDV", donnees: "Étude d'offre réalisée, modèles des pièces à réaliser" },
      { destination: "MEC", donnees: "Plan et spécification technique" },
      { destination: "MQA", donnees: "Résultats de performance, actions d'amélioration réalisées, enquête satisfaction client" },
      { destination: "GRH", donnees: "Besoin en formation, besoin en recrutement" }
    ],
    synoptique: [
      { n: 1, qui: "R.CMP & Commerciaux", quoi: "Visite client & Prospection", comment: "Le service commercial effectue des visites clients et des prospections en fonction des besoins.", documents: "FOR-CMP-11", ou: "Chez le client" },
      { n: 2, qui: "Client", quoi: "Demande d'offre / Commande", comment: "Le service commercial reçoit les demandes d'offres de prix et les bons de commande.", documents: "FOR-CMP-02, FOR-CMP-01", ou: "Service CMP" },
      { n: 3, qui: "R.CMP", quoi: "Enregistrement des offres et commandes", comment: "Le responsable commercial procède à l'enregistrement des demandes d'offres et commandes.", documents: "FOR-CMP-02, FOR-CMP-01", ou: "Service CMP" },
      { n: 4, qui: "R.CMP & R.EDV", quoi: "Étude des offres", comment: "Pour toute demande reçue, une étude de prix est réalisée par le R.EDV et transmise au R.CMP pour communication au client.", documents: "FOR-EDV-08, FOR-CMP-03, FOR-CMP-02", ou: "BE / CMP" },
      { n: 5, qui: "R.CMP", quoi: "Conversion des offres / Rappel", comment: "Toute offre confirmée par le client est convertie en commande ferme. Suivi des offres dépassant la date de validation.", documents: "FOR-CMP-01, FOR-CMP-02", ou: "Service CMP" },
      { n: 6, qui: "R.CMP, R.AGS & R.MEC", quoi: "Planification réalisation", comment: "En collaboration avec R.MEC et R.AGS, le R.CMP définit la priorité de réalisation des commandes reçues.", documents: "FOR-MEC-03", ou: "Atelier / CMP" },
      { n: 7, qui: "R.CMP", quoi: "Suivi de réalisation", comment: "Toute commande planifiée est communiquée au R.MEC pour réalisation en atelier.", documents: "FOR-MEC-03, FOR-CMP-14", ou: "Atelier MEC" },
      { n: 8, qui: "R.CMP & Client", quoi: "Dérogation client", comment: "Si modification demandée par le client (confirmation écrite) ou suggérée par la production / l'étude (soumise à accord client).", documents: "FOR-CMP-15, FOR-CMP-16", ou: "CMP / Client" },
      { n: 9, qui: "R.CMP", quoi: "Mouvement des commandes réalisées", comment: "Les commandes réalisées transmises font l'objet d'un bon de sortie / bon de livraison. Conservation de la fiche technique et des plans.", documents: "FOR-CMP-04", ou: "Magasin / CMP" },
      { n: 10, qui: "R.CMP", quoi: "Traitement des réclamations client", comment: "Toute réclamation client est traitée pour déterminer les causes et procéder à la résolution des problèmes.", documents: "FOR-CMP-09, FOR-CMP-12", ou: "Service CMP" },
      { n: 11, qui: "R.CMP", quoi: "Mesure de la satisfaction client", comment: "Analyse de l'enquête de satisfaction client 1×/an. Sélection des clients sur la base du chiffre d'affaires réalisé.", documents: "FOR-CMP-07, FOR-CMP-08, FOR-CMP-12", ou: "Service CMP" }
    ],
    objectifs: [
      "Maîtriser les coûts et avoir des prix compétitifs",
      "Assurer une bonne planification de production",
      "Améliorer la compétitivité",
      "Fidéliser les clients et améliorer leur satisfaction"
    ],
    procedures: [
      { ref: "PRD-CMP-01", titre: "Traitement des réclamations clients" }
    ],
    instructions: [],
    documents: [],
    formulaires: [
      "FOR-CMP-01 : Registre de suivi des commandes client",
      "FOR-CMP-02 : Registre des devis",
      "FOR-CMP-03 : Offre de prix",
      "FOR-CMP-04 : Bon de livraison / sortie client",
      "FOR-CMP-07 : Enquête de satisfaction client SOBECA",
      "FOR-CMP-08 : Rapport d'analyse de la satisfaction clients",
      "FOR-CMP-09 : Fiche de réclamation client",
      "FOR-CMP-11 : Compte-rendu visite client",
      "FOR-CMP-12 : Registre de suivi réclamations clients",
      "FOR-CMP-14 : Fiche technique pièce mécanique",
      "FOR-CMP-15 : Dérogation client",
      "FOR-CMP-16 : Registre de suivi dérogation client"
    ],
    activites: [
      {
        titre: "Visite Client & Prospection",
        icone: "handshake",
        couleur: "primary",
        details: [
          "Visites clients et prospections",
          "Compte-rendu de visite (FOR-CMP-11)",
          "Développement du portefeuille clients"
        ]
      },
      {
        titre: "Gestion Offres & Commandes",
        icone: "file-invoice-dollar",
        couleur: "success",
        details: [
          "Réception des demandes d'offres",
          "Enregistrement des offres (FOR-CMP-02)",
          "Conversion des offres confirmées en commandes",
          "Suivi des commandes clients (FOR-CMP-01)"
        ]
      },
      {
        titre: "Planification Production",
        icone: "calendar-alt",
        couleur: "info",
        details: [
          "Collaboration R.MEC et R.AGS",
          "Définition des priorités de réalisation",
          "État des encours (FOR-MEC-03)",
          "Réunion quotidienne de planification"
        ]
      },
      {
        titre: "Livraison & Facturation",
        icone: "truck",
        couleur: "warning",
        details: [
          "Émission des bons de livraison (FOR-CMP-04)",
          "Facturation clients",
          "Conservation de la fiche technique et des plans"
        ]
      },
      {
        titre: "Réclamations & Satisfaction",
        icone: "smile",
        couleur: "danger",
        details: [
          "Traitement des réclamations (FOR-CMP-09)",
          "Enregistrement et suivi (FOR-CMP-12)",
          "Enquête de satisfaction annuelle (FOR-CMP-07)",
          "Analyse de la satisfaction (FOR-CMP-08)"
        ]
      }
    ],
    kpis: [
      { code: "TRC", nom: "Taux de Réclamations Clients", frequence: "Mensuel", responsable: "R.CMP", formule: "Nombre de réclamations / Nombre de commandes clients × 100" },
      { code: "TSC", nom: "Taux de Satisfaction Client", frequence: "Annuel", responsable: "R.CMP", formule: "Note de satisfaction / Nombre de clients × 100" },
      { code: "TCO", nom: "Taux de Conversion des Offres", frequence: "Trimestriel", responsable: "R.CMP", formule: "Nombre d'offres retenues / Nombre total d'offres × 100" }
    ],
    pointsValidation: [
      "Fréquence du KPI TCO divergente : la fiche PCS-CMP indique « Mensuel », le registre officiel ERP-08 §8.1 indique « Trimestriel ».",
      "Nombre de signatures requis sur la fiche technique (FOR-CMP-14) non déductible du SMQ — à confirmer.",
      "Seule PRD-CMP-01 est documentée côté procédure : les autres étapes du processus reposent sur des formulaires seuls."
    ]
  },

  mec: {
    code: "MEC",
    nom: "Production Mécanique",
    type: "Processus de Réalisation",
    pilote: "Slim GALLS",
    revision: "Rév. 12 — 04/08/2025",
    frequenceRevue: "Annuelle, lors des revues de direction et à chaque mise à jour",
    nbProcedures: 0,
    nbFormulaires: 6,
    objet: "Fournir des produits conformes aux exigences client, légales et réglementaires.",
    finalite: [
      "Respecter les délais prévus",
      "Fournir des produits et services conformes aux exigences client, légales et réglementaires",
      "Améliorer la productivité"
    ],
    domaine: "Fabrication d'engrenages et toutes pièces de rechange mécaniques destinées à la maintenance industrielle — unité SOBECA.",
    enjeuxExternes: [
      "Infrastructure et équipements utiles",
      "Introduction de nouvelles techniques",
      "Milieu et environnement de travail (encombrement)"
    ],
    enjeuxInternes: [
      "Processus SMQ",
      "Disponibilité de main-d'œuvre qualifiée",
      "Maîtrise des données techniques d'entrée"
    ],
    partiesInteressees: [
      { partie: "Client", niveau: "Externe" },
      { partie: "Pilotes processus (MNT, CMP, GRH, AGS, MQA)", niveau: "Interne" },
      { partie: "Direction", niveau: "Interne" }
    ],
    entrees: [
      { origine: "CMP", donnees: "Fiche technique, modèles des pièces à réaliser, données techniques (plans)" },
      { origine: "AGS", donnees: "Matière première, consommables, outillage, pièces sous-traitées" },
      { origine: "GRH", donnees: "Personnel compétent formé" },
      { origine: "MNT", donnees: "Dispositifs de mesure vérifiés et étalonnés, équipements maintenus" },
      { origine: "MQA", donnees: "Résultats d'efficacité du système, documents qualité, rapports d'audit" }
    ],
    sorties: [
      { destination: "CMP", donnees: "Pièces mécaniques conformes, fiche de suivi mécanique" },
      { destination: "AGS", donnees: "Demande de besoin (matière, consommables)" },
      { destination: "GRH", donnees: "Demande de formation, demande de recrutement" },
      { destination: "MNT", donnees: "Demande d'intervention" },
      { destination: "MQA", donnees: "Résultats de performance, actions d'amélioration réalisées, rapports de pièces non conformes" },
      { destination: "EDV", donnees: "Pièce à contrôler, rapport de non-conformité" }
    ],
    synoptique: [
      { n: 1, qui: "R.MEC", quoi: "Réception des données techniques", comment: "Fiche technique et plans / modèles fournis par CMP et EDV.", documents: "FOR-CMP-14" },
      { n: 2, qui: "R.MEC & R.AGS", quoi: "Vérification faisabilité et planning", comment: "Consultation de la disponibilité matière auprès d'AGS puis planification des opérations.", documents: "" },
      { n: 3, qui: "Opérateurs", quoi: "Opérations de fabrication", comment: "Tournage · Fraisage · Taillage / Mortaisage engrenage · Alésage · Rectification plane et cylindrique · Soudure.", documents: "INS-MEC-02" },
      { n: 4, qui: "Opérateurs", quoi: "Auto-contrôle en cours de production", comment: "Chaque opérateur contrôle ses pièces durant l'usinage selon les paramètres de la fiche technique. Toute non-conformité est signalée immédiatement au responsable MEC.", documents: "INS-MEC-01, FOR-MEC-10" },
      { n: 5, qui: "R.AGS", quoi: "Sous-traitance thermique (si requis)", comment: "AGS déclenche la commande au fournisseur.", documents: "" },
      { n: 6, qui: "R.EDV", quoi: "Contrôle final", comment: "Contrôle réalisé par EDV selon PRD-EDV-03.", documents: "FOR-MEC-04" },
      { n: 7, qui: "R.MEC & R.MQA", quoi: "Traitement des non-conformités", comment: "Déclaration des pièces non conformes puis application de la procédure de maîtrise des produits non conformes.", documents: "FOR-MEC-05, FOR-MEC-08, PRD-MQA-06" },
      { n: 8, qui: "R.MEC", quoi: "Remise au CMP pour livraison", comment: "Transmission des pièces réalisées au service commercial.", documents: "FOR-MEC-01" }
    ],
    objectifs: [
      "Produire des pièces conformes aux exigences client (TNC)",
      "Respecter les délais de production (TRD)",
      "Améliorer l'efficacité horaire des opérateurs (EH)",
      "Optimiser le rendement synthétique de l'atelier (TRS)"
    ],
    procedures: [],
    instructions: [
      { ref: "INS-MEC-01", titre: "Auto-contrôle des pièces en cours" },
      { ref: "INS-MEC-02", titre: "Instruction de soudure" }
    ],
    documents: [
      { ref: "PLQ-MEC-01", titre: "Plan qualité mécanique" }
    ],
    formulaires: [
      "FOR-MEC-01 : Fiche de Suivi Mécanique (Unique)",
      "FOR-MEC-03 : État des Encours",
      "FOR-MEC-04 : Fiche de Contrôle Mécanique",
      "FOR-MEC-05 : Rapport des Pièces Non Conformes",
      "FOR-MEC-08 : Registre de Suivi de Pièces NC",
      "FOR-MEC-10 : Fiche d'Auto-Contrôle"
    ],
    activites: [
      {
        titre: "Réception Données Techniques",
        icone: "file-alt",
        couleur: "primary",
        details: [
          "Fiche technique pièce (FOR-CMP-14)",
          "Plans et modèles fournis par EDV",
          "Vérification de la faisabilité avant lancement"
        ]
      },
      {
        titre: "Fabrication Mécanique",
        icone: "cogs",
        couleur: "success",
        details: [
          "Tournage / Fraisage / Taillage",
          "Alésage / Rectification",
          "Soudure et mortaisage d'engrenages",
          "Suivi du temps par poste et par opérateur (FOR-MEC-01)"
        ]
      },
      {
        titre: "Contrôle Qualité",
        icone: "check-circle",
        couleur: "info",
        details: [
          "Auto-contrôle en cours de fabrication (INS-MEC-01, FOR-MEC-10)",
          "Contrôle dimensionnel (FOR-MEC-04)",
          "Suivi de l'état des encours (FOR-MEC-03)",
          "Déclaration des pièces non conformes (FOR-MEC-05)"
        ]
      },
      {
        titre: "Traçabilité & Livraison",
        icone: "barcode",
        couleur: "warning",
        details: [
          "Traçabilité complète du lot jusqu'à la pièce",
          "Transmission au CMP pour livraison",
          "Conservation du dossier de fabrication",
          "Contrôle final par EDV avant expédition"
        ]
      }
    ],
    kpis: [
      { code: "EH", nom: "Efficacité Horaire", frequence: "Mensuel", responsable: "R.MEC", formule: "Temps alloué par NCD / Temps réel par NCD × 100" },
      { code: "TNC", nom: "Taux de Non-Conformité Produit", frequence: "Mensuel", responsable: "R.MEC", formule: "Nombre de pièces NC / Nombre de pièces produites × 100" },
      { code: "TRD", nom: "Taux de Respect des Délais", frequence: "Mensuel", responsable: "R.MEC", formule: "Nombre de commandes dans le délai / Nombre total de commandes × 100" },
      { code: "TRS", nom: "Taux de Rendement Synthétique", frequence: "Trimestriel", responsable: "R.MEC", formule: "Temps de production nette / Capacité de production × 100" }
    ],
    pointsValidation: [
      "La fiche PCS-MEC ne liste que 2 indicateurs (EH et un taux de NC sans code) alors que le registre officiel ERP-08 §8.1 en compte 4 : TRD et TRS manquent dans la fiche.",
      "Relation NCD = OF strictement 1:1, mais les livraisons partielles existent (2 à 3 BL par NCD) — à confirmer côté gestion des BL.",
      "Aucun seuil automatique 8D vs FAA : le RMQ tranche au cas par cas.",
      "Aucune procédure PRD n'est référencée pour MEC (ni dans la fiche PCS-MEC ni dans l'inventaire 11.3) : le processus ne repose que sur 2 instructions (INS-MEC-01, INS-MEC-02) et 1 plan qualité (PLQ-MEC-01)."
    ]
  },

  edv: {
    code: "EDV",
    nom: "Études et Développement",
    type: "Processus de Réalisation",
    pilote: "Issameddine BEN ALI",
    revision: "Rév. 14 — 04/08/2025",
    frequenceRevue: "Annuelle, lors des revues de direction et à chaque mise à jour",
    nbProcedures: 3,
    nbFormulaires: 6,
    objet: "Assurer l'étude et le développement des produits selon les exigences client.",
    finalite: [
      "Assurer la réalisation des études techniques conformes aux exigences client dès le premier coup",
      "Assurer la réalisation des études techniques dans les délais prévus",
      "Assurer une meilleure donnée technique pour simplifier et clarifier la phase d'exécution"
    ],
    domaine: "Tous les produits de SOBECA, en respectant exclusivement les exigences client.",
    enjeuxExternes: [
      "Forte évolution technologique",
      "Introduction de nouvelles techniques dues aux produits à fabriquer (y compris nouveaux produits)",
      "Nouveaux marchés"
    ],
    enjeuxInternes: [
      "Stabilité et qualification des ressources humaines",
      "Processus SMQ"
    ],
    partiesInteressees: [
      { partie: "Client", niveau: "Externe" },
      { partie: "Pilotes processus (R.CMP, R.MQA, R.GRH)", niveau: "Interne" },
      { partie: "Direction", niveau: "Interne" }
    ],
    entrees: [
      { origine: "MQA", donnees: "Résultats d'efficacité, actions d'amélioration, rapports de revue et d'audit" },
      { origine: "GRH", donnees: "Formations, personnel recruté" },
      { origine: "CMP", donnees: "Plans clients, spécifications techniques, modèles des pièces, demande d'étude d'offre de prix" },
      { origine: "MEC", donnees: "Pièce à contrôler (fiche de contrôle finale) et pièce à réparer (en cas de réparation)" }
    ],
    sorties: [
      { destination: "CMP", donnees: "Étude technique réalisée, étude de prix réalisée, fiche de contrôle finale" },
      { destination: "MEC", donnees: "Fiche technique, plan de pièce réalisée, fiche de contrôle finale, pièce à réparer (en cas de réparation)" },
      { destination: "MQA", donnees: "Résultats de performance, actions d'amélioration réalisées" },
      { destination: "GRH", donnees: "Besoin en formation, besoin en recrutement" }
    ],
    synoptique: [
      { n: 1, phase: "PRD-EDV-01 — Calcul du prix de revient", qui: "R.CMP", quoi: "Demande d'étude de prix au R.EDV et remise des modèles", documents: "FOR-EDV-08" },
      { n: 2, phase: "PRD-EDV-01 — Calcul du prix de revient", qui: "R.EDV", quoi: "Étude de faisabilité (moyens de production, disponibilité matière)", documents: "FOR-EDV-08" },
      { n: 3, phase: "PRD-EDV-01 — Calcul du prix de revient", qui: "R.EDV", quoi: "Prélèvement des cotations d'encombrement des modèles / exploitation des données techniques du schéma client", documents: "FOR-EDV-08" },
      { n: 4, phase: "PRD-EDV-01 — Calcul du prix de revient", qui: "R.EDV", quoi: "Réalisation de l'étude de prix : Coût MP + Coût MO directe + Coût Sous-traitance + Coût Composants, puis transmission au R.CMP pour approbation (accusé de réception signé)", documents: "FOR-EDV-08" },
      { n: 5, phase: "PRD-EDV-01 — Calcul du prix de revient", qui: "R.EDV", quoi: "Classement de toute offre réalisée et approuvée par le R.CMP", documents: "FOR-EDV-09" },
      { n: 6, phase: "PRD-EDV-02 — Étude technique", qui: "R.CMP", quoi: "Expression de la demande d'étude technique au R.EDV", documents: "FOR-EDV-06, FOR-EDV-01" },
      { n: 7, phase: "PRD-EDV-02 — Étude technique", qui: "R.EDV", quoi: "Planification des études selon le degré d'urgence", documents: "FOR-EDV-01" },
      { n: 8, phase: "PRD-EDV-02 — Étude technique", qui: "R.EDV", quoi: "Préparation de l'esquisse (exploitation des modèles, plans, exigences légales)", documents: "FOR-EDV-04, FOR-EDV-10" },
      { n: 9, phase: "PRD-EDV-02 — Étude technique", qui: "R.EDV", quoi: "Réalisation des études techniques selon les données enregistrées", documents: "FOR-EDV-04" },
      { n: 10, phase: "PRD-EDV-02 — Étude technique", qui: "R.EDV", quoi: "Contrôle de l'étude — révision si non conforme", documents: "FOR-EDV-06" },
      { n: 11, phase: "PRD-EDV-02 — Étude technique", qui: "R.EDV", quoi: "Enregistrement et transmission au R.CMP", documents: "FOR-EDV-01" },
      { n: 12, phase: "PRD-EDV-03 — Contrôle final", qui: "R.EDV", quoi: "Réception des pièces finies sur la table de contrôle", documents: "FOR-CMP-14, FOR-MEC-01" },
      { n: 13, phase: "PRD-EDV-03 — Contrôle final", qui: "R.EDV", quoi: "Contrôle de tous les articles — enregistrement des cotes fonctionnelles contrôlées", documents: "FOR-MEC-04" },
      { n: 14, phase: "PRD-EDV-03 — Contrôle final", qui: "R.EDV", quoi: "Traitement de tout produit non conforme selon la procédure de maîtrise des produits non conformes", documents: "PRD-MQA-06" },
      { n: 15, phase: "PRD-EDV-03 — Contrôle final", qui: "R.EDV", quoi: "Conservation d'une copie de la fiche de contrôle (original transmis au R.CMP)", documents: "FOR-MEC-04" }
    ],
    objectifs: [
      "Sécuriser la faisabilité technique des projets (TRE)",
      "Respecter les délais des études techniques (TRDRET)",
      "Respecter les délais des études d'offres (TRDREO)",
      "Optimiser les coûts de production et la compétitivité"
    ],
    procedures: [
      { ref: "PRD-EDV-01", titre: "Calcul prix de revient" },
      { ref: "PRD-EDV-02", titre: "Étude technique" },
      { ref: "PRD-EDV-03", titre: "Contrôle final" }
    ],
    instructions: [],
    documents: [],
    formulaires: [
      "FOR-EDV-01 : Registre de suivi des études techniques",
      "FOR-EDV-04 : Données techniques (Plan Technique)",
      "FOR-EDV-06 : Fiche d'étude technique / Demande d'étude et résultat de contrôle",
      "FOR-EDV-08 : Étude de l'Offre de Prix",
      "FOR-EDV-09 : Registre Suivi Offres de Prix",
      "FOR-EDV-10 : Checklist de Revue de Faisabilité"
    ],
    activites: [
      {
        titre: "Études Techniques",
        icone: "drafting-compass",
        couleur: "primary",
        details: [
          "Analyse de faisabilité technique",
          "Création des plans et modèles",
          "Définition des spécifications",
          "Suivi des études (FOR-EDV-01)"
        ]
      },
      {
        titre: "Nomenclatures & Gammes",
        icone: "list-ol",
        couleur: "success",
        details: [
          "Création des nomenclatures (BOM)",
          "Définition des gammes opératoires",
          "Sélection des matières premières avec AGS",
          "Validation des données techniques (FOR-EDV-06)"
        ]
      },
      {
        titre: "Calcul du Prix de Revient",
        icone: "calculator",
        couleur: "info",
        details: [
          "Étude de l'offre de prix (FOR-EDV-08)",
          "Calcul des temps et des coûts",
          "Définition de la marge commerciale",
          "Transmission au CMP"
        ]
      },
      {
        titre: "Contrôle Final",
        icone: "clipboard-check",
        couleur: "warning",
        details: [
          "Revue de faisabilité avant lancement (FOR-EDV-10)",
          "Validation de la conformité aux plans",
          "Contrôle du produit fini (PRD-EDV-03)",
          "Archivage du dossier technique"
        ]
      }
    ],
    kpis: [
      { code: "TRE", nom: "Taux de Réussite d'Étude (1er coup)", frequence: "Trimestriel", responsable: "R.EDV", formule: "Nombre d'études réalisées dès le premier coup / Total des études réalisées × 100" },
      { code: "TRDRET", nom: "Taux Respect Délais Études Techniques", frequence: "Trimestriel", responsable: "R.EDV", formule: "Nombre d'études techniques réalisées dans les délais / Total des études réalisées × 100" },
      { code: "TRDREO", nom: "Taux Respect Délais Études Offre", frequence: "Trimestriel", responsable: "R.EDV", formule: "Nombre d'études d'offre réalisées dans les délais / Total des études réalisées × 100" }
    ],
    pointsValidation: [
      "Fréquences divergentes : la fiche PCS-EDV indique « Mensuel » pour TRE, TRDRET et TRDREO, le registre officiel ERP-08 §8.1 indique « Trimestriel » pour les trois.",
      "TopSolid PDM est vierge (0 plan) : aucun plan EDV n'est migrable, la base démarre vide — confirmer la reprise manuelle des plans existants.",
      "Versions archivées « PER » (FOR-EDV-01/06/09 PER) exclues de l'ERP (RG-EDV-01)."
    ]
  },

  ags: {
    code: "AGS",
    nom: "Achats et Gestion des Stocks",
    type: "Processus de Réalisation",
    pilote: "Ghassen BEN CHEIKH",
    revision: "Rév. 13 — 04/10/2025",
    frequenceRevue: "Annuelle, lors des revues de direction et à chaque mise à jour",
    nbProcedures: 0,
    nbFormulaires: 15,
    objet: "Maîtriser les coûts, satisfaire les besoins des processus en temps voulu.",
    finalite: [
      "Améliorer la compétitivité et optimiser les prix de vente",
      "Maîtriser les critères de qualité des commandes",
      "Développer l'agrégation et la gamme de fournisseurs et prestataires",
      "Assurer l'organisation et la maîtrise du stock"
    ],
    domaine: "Tous les produits et services exécutés au sein de SOBECA.",
    enjeuxExternes: [
      "Situation économique et financière du pays",
      "Disponibilité des matières et services",
      "Conformité des matières et services achetés"
    ],
    enjeuxInternes: [
      "Consommation spécifique et changement de programme de production",
      "Ressources financières et moyens techniques",
      "Compétence et qualification"
    ],
    partiesInteressees: [
      { partie: "Prestataire de service", niveau: "Externe" },
      { partie: "Direction et service financier", niveau: "Interne" },
      { partie: "Partenaires et actionnaires", niveau: "Interne" }
    ],
    entrees: [],
    sorties: [],
    synoptique: [
      { n: 1, qui: "Magasin / R.AGS", quoi: "Déclenchement des achats", comment: "Demande magasin pour besoin en matière première, accessoire ou composant.", documents: "Registre de suivi des demandes" },
      { n: 2, qui: "R.AGS", quoi: "Consultation des fournisseurs", comment: "Pour toute commande supérieure à 2 000 DT : consultation en priorité des fournisseurs agréés et envoi d'une demande de devis.", documents: "FOR-AGS-21, FOR-AGS-22" },
      { n: 3, qui: "R.AGS", quoi: "Passation des commandes", comment: "Comparaison des offres (critères qualité / prix / délai), puis sélection du fournisseur agréé.", documents: "FOR-AGS-05, FOR-AGS-14" },
      { n: 4, qui: "R.AGS & Magasinier", quoi: "Contrôle des articles commandés à la réception", comment: "Contrôle qualitatif et quantitatif systématique. Si NC : isolement, étiquette NC et réclamation fournisseur.", documents: "PQL-AGS-01, FOR-AGS-07, FOR-AGS-16" },
      { n: 5, qui: "R.AGS", quoi: "Identification et emmagasinage", comment: "Stockage en présence du R.AGS selon les zones dédiées. Ne jamais stocker la matière première sans revérifier les couleurs d'identification.", documents: "INS-AGS-01, FOR-AGS-08" },
      { n: 6, qui: "R.AGS & DG", quoi: "Évaluation et agrégation des fournisseurs", comment: "Évaluation semestrielle ; la liste des fournisseurs agréés est approuvée par la Direction Générale.", documents: "FOR-AGS-09, FOR-AGS-12" }
    ],
    objectifs: [
      "Approvisionner au meilleur coût",
      "Garantir la disponibilité des matières et composants",
      "Gérer les stocks multi-dépôts (M1, M02, ML, DPF)",
      "Maîtriser le taux de non-conformité fournisseur (TCC)",
      "Développer le panel de fournisseurs agréés (TAF)"
    ],
    procedures: [],
    instructions: [
      { ref: "INS-AGS-01", titre: "Instruction de stockage" }
    ],
    documents: [
      { ref: "PQL-AGS-01", titre: "Plan qualité à la réception" }
    ],
    formulaires: [
      "FOR-AGS-01 : Demande d'Achat",
      "FOR-AGS-02 : Registre de suivi DA",
      "FOR-AGS-04 : Bon de Sortie Magasin",
      "FOR-AGS-05 : Bon de Commande",
      "FOR-AGS-07 : Bon de Réception",
      "FOR-AGS-08 : Tableau d'Identification Matière",
      "FOR-AGS-09 : Registre Évaluation Fournisseurs",
      "FOR-AGS-11 : Liste des Fournisseurs",
      "FOR-AGS-12 : Fiche Évaluation et Sélection Fournisseur",
      "FOR-AGS-13 : Registre suivi Bons de Réception",
      "FOR-AGS-14 : Registre suivi Bons de Commande",
      "FOR-AGS-16 : Rapport de non-conformité fournisseur",
      "FOR-AGS-20 : Registre de réclamation fournisseur",
      "FOR-AGS-21 : Demande d'Offre de Prix",
      "FOR-AGS-22 : Registre Demande d'Offre de Prix"
    ],
    activites: [
      {
        titre: "Demandes d'Achat",
        icone: "shopping-cart",
        couleur: "primary",
        details: [
          "Réception de la demande d'achat (FOR-AGS-01)",
          "Vérification de la disponibilité en stock",
          "Demande d'offre de prix (FOR-AGS-21)",
          "Consultation et sélection d'un fournisseur qualifié"
        ]
      },
      {
        titre: "Bons de Commande",
        icone: "file-invoice",
        couleur: "success",
        details: [
          "Émission du bon de commande (FOR-AGS-05)",
          "Suivi des livraisons (FOR-AGS-14)",
          "Relances fournisseurs",
          "Gestion des délais"
        ]
      },
      {
        titre: "Réception & Contrôle",
        icone: "clipboard-check",
        couleur: "info",
        details: [
          "Contrôle quantitatif et qualitatif à 100 % (PQL-AGS-01)",
          "Saisie du bon de réception (FOR-AGS-07)",
          "Rapport de non-conformité fournisseur (FOR-AGS-16)",
          "Réclamation fournisseur (FOR-AGS-20)"
        ]
      },
      {
        titre: "Gestion Multi-Dépôts",
        icone: "warehouse",
        couleur: "warning",
        details: [
          "4 dépôts réels : M1 (001), M02 (02), ML (03) et DPF",
          "Mouvements d'entrée, de sortie et de transfert",
          "Inventaires périodiques (~700 étagères)",
          "Traçabilité complète des articles"
        ]
      },
      {
        titre: "Évaluation Fournisseurs",
        icone: "star",
        couleur: "danger",
        details: [
          "Notation qualité sur l'échelle 1 à 4",
          "Évaluation des délais",
          "Réactivité face aux réclamations",
          "Panel de fournisseurs agréés (FOR-AGS-09, FOR-AGS-12)"
        ]
      }
    ],
    kpis: [
      { code: "TCC", nom: "Taux de Non-Conformité produits fournisseur", frequence: "Trimestriel", responsable: "R.AGS", formule: "Nombre de commandes non conformes / Nombre total de commandes × 100" },
      { code: "TAF", nom: "Taux d'Agrégation Fournisseurs", frequence: "Semestriel", responsable: "R.AGS", formule: "Nombre de fournisseurs agréés / Nombre total de fournisseurs × 100" }
    ],
    pointsValidation: [
      "Code KPI non conforme : la fiche PCS-AGS utilise « TNCC », le registre officiel ERP-08 §8.1 utilise « TCC » — à harmoniser.",
      "Fréquence du KPI de non-conformité divergente : « Mensuel » dans la fiche PCS-AGS, « Trimestriel » dans ERP-08 §8.1.",
      "Règle RG-AGS-12 contredite : elle impose de stocker huiles et lubrifiants « uniquement en M3 », alors que la fiche PCS-AGS §7.6 confirme que le dépôt M3 n'existe pas (dépôts réels : M1, M02, ML, DPF). Règle à corriger.",
      "Barème de notation fournisseur contradictoire : la base de production utilise des valeurs 1 à 4 (barème 0-4, max 20), mais RG-AGS-06 mentionne un max de 15 et évoque un « barème 0-3 ».",
      "Notation fournisseur : RG-AGS-13 évoque un score « EVA Qualité » + « EVA Délai », mais la base ne contient qu'une seule colonne eva (pas de eva_qualité).",
      "La fiche PCS-AGS ne comporte pas de section « flux d'entrées / sorties » — à compléter.",
      "Aucune procédure PRD n'est référencée pour AGS (ni dans la fiche PCS-AGS ni dans l'inventaire 11.5) : le processus ne repose que sur 1 instruction (INS-AGS-01) et 1 plan qualité (PQL-AGS-01)."
    ]
  },

  grh: {
    code: "GRH",
    nom: "Gestion des Ressources Humaines",
    type: "Processus de Support",
    pilote: "Responsable GRH",
    revision: "Rév. 12",
    frequenceRevue: "Annuelle, lors des audits internes et à chaque mise à jour",
    nbProcedures: 2,
    nbFormulaires: 19,
    objet: "Fournir un effectif compétent et polyvalent selon les besoins et critères demandés.",
    finalite: [
      "Fournir les ressources humaines nécessaires aux processus",
      "Fournir un climat social favorable",
      "Assurer l'efficacité des formations reçues par le personnel",
      "Assurer la polyvalence et la compétence des personnels"
    ],
    domaine: "Tous les personnels de la société SOBECA.",
    enjeuxExternes: [
      "Activité spécifique (mécanique de précision)",
      "Veille légale et réglementaire (droit du travail tunisien)"
    ],
    enjeuxInternes: [
      "Besoin des différents processus SMQ",
      "Ressources et budget formation",
      "Compétence et qualification des opérateurs"
    ],
    partiesInteressees: [],
    entrees: [
      { origine: "Tous les processus", donnees: "Personnel à recruter, besoins en formation" },
      { origine: "Direction", donnees: "Validation du plan de recrutement et du plan de formation" }
    ],
    sorties: [
      { destination: "Tous les processus", donnees: "Personnel qualifié recruté, actions de formation mises en place" },
      { destination: "MQA", donnees: "Rapport de revue de direction, documents qualité, résultats de performance" }
    ],
    synoptique: [
      { n: 1, qui: "R.GRH", quoi: "Définition des besoins en compétences", comment: "Analyse annuelle de la matrice de compétences et identification des écarts par rapport aux besoins.", documents: "FOR-GRH-03, FOR-GRH-06" },
      { n: 2, qui: "R.GRH", quoi: "Sélection, recrutement et intégration", comment: "Lancement de la procédure de recrutement, enregistrement des demandes, puis planning et suivi d'intégration du nouveau salarié.", documents: "PRD-GRH-01, FOR-GRH-01, FOR-GRH-02, FOR-GRH-15, FOR-GRH-16" },
      { n: 3, qui: "R.GRH", quoi: "Formation et développement", comment: "Plan de formation annuel basé sur les besoins identifiés, convocation, suivi de présence et évaluation à chaud et à froid.", documents: "PRD-GRH-02, FOR-GRH-08, FOR-GRH-10, FOR-GRH-11, FOR-GRH-12, FOR-GRH-13" },
      { n: 4, qui: "R.GRH", quoi: "Gestion de la performance", comment: "Évaluation par entretiens réguliers, suivi des indicateurs (taux de compétence) et actions correctives ou de perfectionnement si nécessaire.", documents: "FOR-GRH-18" },
      { n: 5, qui: "R.GRH", quoi: "Engagement et sensibilisation", comment: "Sensibilisation aux objectifs qualité et information du personnel.", documents: "FOR-MQA-16" },
      { n: 6, qui: "R.GRH", quoi: "Gestion des départs", comment: "Questionnaire de départ, documentation des raisons et enseignements tirés.", documents: "FOR-GRH-19, FOR-GRH-17" }
    ],
    objectifs: [
      "Développer les compétences du personnel (TC)",
      "Assurer l'efficacité du plan de formation (TCPF)",
      "Maîtriser l'absentéisme (TA)",
      "Sécuriser le recrutement et l'intégration des nouveaux arrivants"
    ],
    procedures: [
      { ref: "PRD-GRH-01", titre: "Procédure de recrutement" },
      { ref: "PRD-GRH-02", titre: "Procédure de formation" }
    ],
    instructions: [],
    documents: [],
    formulaires: [
      "FOR-GRH-01 : Demande de besoin de recrutement",
      "FOR-GRH-02 : Tableau enregistrement demandes recrutement",
      "FOR-GRH-03 : Matrice de compétences",
      "FOR-GRH-04 : Fiche de renseignements",
      "FOR-GRH-05 : Tableau identification du personnel",
      "FOR-GRH-06 : Identification des besoins en formation",
      "FOR-GRH-07 : Fiche de poste",
      "FOR-GRH-08 : Plan de formation",
      "FOR-GRH-09 : Liste des organismes de formation",
      "FOR-GRH-10 : Convocation et liste des participants",
      "FOR-GRH-11 : Feuille de présence",
      "FOR-GRH-12 : Évaluation formation à chaud (J0)",
      "FOR-GRH-13 : Évaluation formation à froid (J+30)",
      "FOR-GRH-14 : Évaluation organisme de formation",
      "FOR-GRH-15 : Fiche d'entretien d'embauche",
      "FOR-GRH-16 : Plan d'intégration",
      "FOR-GRH-17 : Questionnaire de retour d'informations",
      "FOR-GRH-18 : Fiche d'évaluation préliminaire",
      "FOR-GRH-19 : Enquête de sortie des employés"
    ],
    activites: [
      {
        titre: "Recrutement & Intégration",
        icone: "user-plus",
        couleur: "primary",
        details: [
          "Expression du besoin (FOR-GRH-01)",
          "Entretien d'embauche (FOR-GRH-15)",
          "Plan d'intégration du nouvel arrivant (FOR-GRH-16)",
          "Attestation de sensibilisation (FOR-MQA-16)"
        ]
      },
      {
        titre: "Gestion Effectifs",
        icone: "users",
        couleur: "info",
        details: [
          "Tableau d'identification du personnel (FOR-GRH-05)",
          "Fiches de poste (FOR-GRH-07)",
          "Organigramme et référentiel des postes"
        ]
      },
      {
        titre: "Compétences & Polyvalence",
        icone: "graduation-cap",
        couleur: "success",
        details: [
          "Matrice de compétences (FOR-GRH-03)",
          "Identification des besoins en formation (FOR-GRH-06)",
          "Suivi de la polyvalence des opérateurs",
          "Évaluations préliminaires (FOR-GRH-18)"
        ]
      },
      {
        titre: "Formation",
        icone: "chalkboard-teacher",
        couleur: "warning",
        details: [
          "Plan de formation annuel (FOR-GRH-08)",
          "Convocation et suivi de présence (FOR-GRH-10, FOR-GRH-11)",
          "Évaluation à chaud J0 et à froid J+30 (FOR-GRH-12, FOR-GRH-13)",
          "Évaluation des organismes de formation (FOR-GRH-14)"
        ]
      },
      {
        titre: "Présence & Absences",
        icone: "calendar-check",
        couleur: "danger",
        details: [
          "Suivi quotidien de la présence",
          "Gestion des absences et des congés",
          "Calcul du taux d'absentéisme (TA)",
          "Enquête de sortie des employés (FOR-GRH-19)"
        ]
      }
    ],
    kpis: [
      { code: "TCPF", nom: "Taux Couverture du Plan de Formation", frequence: "Annuel", responsable: "R.GRH", formule: "Formations réalisées / Formations prévues × 100" },
      { code: "TC", nom: "Taux de Compétence", frequence: "Annuel", responsable: "R.GRH", formule: "Somme des compétences / Total des personnels × 100" },
      { code: "TA", nom: "Taux d'Absentéisme", frequence: "Mensuel", responsable: "R.GRH", formule: "Nombre de jours d'absence / Total des jours travaillés par mois × 100" }
    ],
    pointsValidation: [
      "Effectif contradictoire : 25 personnes (majorité des documents) vs 47 personnes (registre FOR-GRH-05 et suivi de validation). Chiffre à arbitrer avant l'import.",
      "Les 5 tables GRH de la base de production sont vides : module créé de zéro, import des effectifs via FOR-GRH-05 au go-live.",
      "PCS-GRH, PRD-GRH-01 et PRD-GRH-02 restent au statut « à vérifier » dans le suivi de validation.",
      "La fiche PCS-GRH ne comporte pas de section « parties intéressées » — à compléter."
    ]
  },

  mnt: {
    code: "MNT",
    nom: "Maintenance Industrielle & Métrologie",
    type: "Processus de Support",
    pilote: "Mohamed Ali KHALFAOUI",
    revision: "Rév. 14 — 04/08/2025",
    frequenceRevue: "Annuelle, lors des revues de direction, des audits et à chaque mise à jour",
    nbProcedures: 3,
    nbFormulaires: 16,
    objet: "Assurer le bon fonctionnement de tous les équipements de production et de mesure et les bonnes conditions de travail. Maîtriser les équipements et s'assurer de leurs fonctionnements.",
    finalite: [
      "Assurer et maîtriser la maintenance au sein du groupe et optimiser les facteurs économiques, humains et techniques mis en jeu",
      "Minimiser le temps et le coût d'arrêt production dus aux pannes machines",
      "Respecter les plannings de maintenance préventive"
    ],
    domaine: "Appliqué sur tous les équipements de production et dispositifs de mesure disponibles au sein de SOBECA.",
    enjeuxExternes: [
      "Disponibilité des pièces de rechange et composants",
      "Nouvelles technologies d'intervention et d'assistance",
      "Coupure de courant"
    ],
    enjeuxInternes: [
      "Volume de travail",
      "Moyens, compétences et qualification du personnel",
      "Maîtrise des équipements"
    ],
    partiesInteressees: [
      { partie: "Fournisseurs, prestataires externes, organismes agréés (étalonnage et inspection)", niveau: "Externe" },
      { partie: "Pilote processus (R.MNT) et Direction Générale (DG)", niveau: "Interne" }
    ],
    entrees: [
      { origine: "MEC (Production)", donnees: "Demande d'intervention (FOR-MNT-03 / DI)" },
      { origine: "AGS (Achats & Stock)", donnees: "Demande de besoin, fourniture de composants, pièces de rechange et sous-traitance" },
      { origine: "GRH (Ressources Humaines)", donnees: "Formation continue, personnel recruté" },
      { origine: "MQA (Qualité)", donnees: "Audits, directives, revue de direction" }
    ],
    sorties: [
      { destination: "MEC (Production)", donnees: "Équipement fonctionnel et dispositifs de mesure vérifiés" },
      { destination: "AGS (Achats & Stock)", donnees: "Demande de consultation de stock, besoins d'achat" },
      { destination: "GRH (Ressources Humaines)", donnees: "Besoins en formation, besoins en recrutement technique" },
      { destination: "MQA (Qualité)", donnees: "Performance du processus (KPI), actions réalisées, documents qualité mis à jour" }
    ],
    synoptique: [
      { n: 1, qui: "R.MNT", quoi: "Établissement annuel des plannings d'étalonnage et de maintenance préventive", comment: "À partir des fiches techniques, des historiques et de l'analyse des risques.", documents: "PRD-MNT-01, PRD-MNT-03, FOR-MNT-01, FOR-MNT-02, FOR-MNT-14" },
      { n: 2, qui: "R.MNT", quoi: "Préparation, lancement et exécution des interventions préventives et des opérations d'étalonnage", comment: "Exécution selon la procédure préventive et la procédure d'étalonnage.", documents: "PRD-MNT-01, PRD-MNT-03" },
      { n: 3, qui: "R.MNT", quoi: "Intervention curative lors d'une panne", comment: "Préparation et exécution de l'intervention curative suite à une demande d'intervention.", documents: "PRD-MNT-02, FOR-MNT-03, FOR-MNT-12" },
      { n: 4, qui: "R.MNT", quoi: "Enregistrement, classement des dossiers, synthèse et calcul des indicateurs", comment: "Mise à jour du tableau de bord du processus.", documents: "FOR-MNT-13, FOR-MNT-04" }
    ],
    objectifs: [
      "Assurer la disponibilité du parc machines",
      "Réduire le taux d'arrêt machine (TAM)",
      "Contenir le coût des arrêts machine (CAM)",
      "Tenir le plan de maintenance préventive (TRP)",
      "Garantir la conformité métrologique des instruments"
    ],
    procedures: [
      { ref: "PRD-MNT-01", titre: "Maintenance préventive" },
      { ref: "PRD-MNT-02", titre: "Maintenance curative" },
      { ref: "PRD-MNT-03", titre: "Étalonnage" }
    ],
    instructions: [
      { ref: "INS-MNT-01", titre: "Entretien quotidien postes et outils" },
      { ref: "INS-MNT-02", titre: "Vérification instruments de mesure" },
      { ref: "INS-MNT-03", titre: "Mesure de la dureté" },
      { ref: "INS-MNT-04", titre: "Mesure de la concentration du lubrifiant" }
    ],
    documents: [],
    formulaires: [
      "FOR-MNT-01 : Planning de maintenance préventive annuel",
      "FOR-MNT-02 : Planning d'étalonnage",
      "FOR-MNT-03 : Demande d'intervention",
      "FOR-MNT-04 : Registre des demandes d'interventions",
      "FOR-MNT-07 : Fiche d'organes à contrôler",
      "FOR-MNT-12 : Fiche d'intervention",
      "FOR-MNT-13 : Registre fiches d'intervention",
      "FOR-MNT-14 : Fiche historique des machines",
      "FOR-MNT-16 : Rapport mensuel de maintenance",
      "FOR-MNT-17 : Fiche état fournisseurs de prestation",
      "FOR-MNT-18 : Fiche technique machine",
      "FOR-MNT-19 : Registre d'étalonnage instruments",
      "FOR-MNT-22 : Note d'intervention préventive mensuelle",
      "FOR-MNT-23 : Parc machine",
      "FOR-MNT-24 : Liste des instruments de mesure et de contrôle",
      "FOR-MNT-25 : Historique documenté interventions préventives"
    ],
    activites: [
      {
        titre: "Inventaire Parc Machines",
        icone: "industry",
        couleur: "primary",
        details: [
          "Parc machine et état F. / N.F (FOR-MNT-23)",
          "Fiches techniques équipements (FOR-MNT-18)",
          "Instruments de mesure et de contrôle (FOR-MNT-24)",
          "Historique des interventions (FOR-MNT-14)"
        ]
      },
      {
        titre: "Maintenance Préventive",
        icone: "calendar-alt",
        couleur: "success",
        details: [
          "Planning annuel selon le degré d'importance (FOR-MNT-01)",
          "Interventions planifiées et bon d'intervention (FOR-MNT-12)",
          "Note d'intervention préventive mensuelle (FOR-MNT-22)",
          "Historique documenté du préventif (FOR-MNT-25)"
        ]
      },
      {
        titre: "Maintenance Curative",
        icone: "wrench",
        couleur: "danger",
        details: [
          "Demande d'intervention depuis MEC (FOR-MNT-03)",
          "Registre des demandes d'interventions (FOR-MNT-04)",
          "Diagnostic, réparation et pièces de rechange (FOR-MNT-12)",
          "Historique machine et coûts d'arrêt (FOR-MNT-14)"
        ]
      },
      {
        titre: "Pièces de Rechange & Prestataires",
        icone: "boxes",
        couleur: "warning",
        details: [
          "Stock des pièces critiques et consommables",
          "Demandes d'achat transmises à AGS",
          "Suivi des coûts d'intervention",
          "Suivi des fournisseurs de prestation (FOR-MNT-17)"
        ]
      },
      {
        titre: "Étalonnage Instruments",
        icone: "tachometer-alt",
        couleur: "info",
        details: [
          "Planning annuel d'étalonnage (FOR-MNT-02)",
          "Registre d'étalonnage et rapports (FOR-MNT-19)",
          "Suivi de l'erreur maximale tolérée (EMT)",
          "Recherche d'organes à contrôler (FOR-MNT-07)"
        ]
      }
    ],
    kpis: [
      { code: "TAM", nom: "Taux d'Arrêt Machine", frequence: "Mensuel", responsable: "R.MNT", formule: "Nombre d'heures d'arrêt (curatif/correctif) / Nombre d'heures de production × 100" },
      { code: "CAM", nom: "Coût d'Arrêt Machine", frequence: "Mensuel", responsable: "R.MNT", formule: "Nombre d'heures d'arrêt × Coût horaire machine (DT)" },
      { code: "TRP", nom: "Taux de Respect des Plannings", frequence: "Trimestriel", responsable: "R.MNT", formule: "Nombre d'interventions réalisées dans le délai / Nombre d'interventions planifiées × 100" }
    ],
    pointsValidation: [
      "KPI TRP défini de trois façons contradictoires : « (taux respect planning étalonnage + taux respect planning préventif) / 2 », semestriel (§9.5) ; « interventions réalisées / interventions planifiées », mensuel (§9.10) ; « nb interventions dans les délais / nb total », trimestriel (ERP-08 §8.1). Arbitrage requis.",
      "La même fiche annonce 3 indicateurs officiels (§9.5) mais n'en détaille que 2 en §9.10 (CAM absent).",
      "La table gmao de la base de production appartient à CONSOMED, pas à SOBECA : module créé de zéro, aucun historique migrable.",
      "Le parc machine est initialisé par import de FOR-MNT-23 ; le planning préventif démarre vide au go-live."
    ]
  }
};
