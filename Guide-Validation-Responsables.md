# 📋 Guide de Présentation pour Validation
## Site Web ERP SOBECA - Réunion avec les Responsables

---

## 🎯 Objectif

Ce site web présente les **7 processus SMQ ISO 9001:2015** de SOBECA de manière **moderne et professionnelle** pour faciliter leur **validation par les responsables métier** avant le développement de l'ERP.

---

## 🌐 Accès Rapide

### Ouvrir le site
```
Double-cliquer sur : processus.html
```

### Navigation
1. **Cliquer** sur une carte de processus (MQA, CMP, etc.)
2. **Explorer** les 6 onglets : Déroulé / Documents / Flux / Formulaires / Activités / Indicateurs
3. **Valider** avec le responsable de processus

---

## 📊 Les 7 Processus à Valider

> **Source des chiffres** : `cahier-de-charge-md/11-documents-reference.md` (inventaire des documents) et `ERP-08` §8.1 (22 KPI actifs).
> Répartition officielle : **MQA 4 + CMP 3 + EDV 3 + MEC 4 + AGS 2 + GRH 3 + MNT 3 = 22 KPI actifs** (hors 3 KPI CAT désactivés).
> Finance est le 9ᵉ module ERP, hors périmètre SMQ : il ne porte aucun KPI.

### 1️⃣ MQA - Management de la Qualité ✅
- **Pilote** : Hamdi GHEDIR (RMQ)
- **Contenu** : 7 procédures, 2 instructions, 19 formulaires, 5 activités, 4 KPI
- **À valider** : Maîtrise documents, audits internes, NC, AMDEC, revue direction
- ⚠️ Fiche PCS-MQA incomplète : ni synoptique, ni parties intéressées, ni flux d'entrées/sorties (la page affiche « non documenté »)

### 2️⃣ CMP - Commercial et Planification ✅
- **Pilote** : Talel YAHYAOUI
- **Contenu** : 1 procédure, 12 formulaires, 5 activités, 3 KPI
- **À valider** : Circuit offre→commande→OF, réclamations, satisfaction client
- ⚠️ Nombre de signatures sur la fiche technique (FOR-CMP-14) non déductible du SMQ

### 3️⃣ MEC - Production Mécanique ✅
- **Pilote** : Slim GALLS
- **Contenu** : 2 instructions, 1 plan qualité (aucune procédure PRD), 6 formulaires, 4 activités, 4 KPI
- **À valider** : Fabrication, auto-contrôle, traçabilité, relation NCD/OF
- ⚠️ Relation NCD = OF 1:1 stricte, mais livraisons partielles (2-3 BL par NCD)
- ⚠️ La fiche PCS-MEC ne liste que 2 indicateurs, alors que le registre officiel ERP-08 §8.1 en compte 4 (TRD et TRS manquants)

### 4️⃣ EDV - Études et Développement ✅
- **Pilote** : Issameddine BEN ALI
- **Contenu** : 3 procédures, 6 formulaires, 4 activités, 3 KPI
- **À valider** : Études techniques, nomenclatures, calcul prix, contrôle final
- ⚠️ TopSolid PDM vierge (0 plan) : aucun plan migrable

### 5️⃣ AGS - Achats et Gestion des Stocks ✅
- **Pilote** : Ghassen BEN CHEIKH
- **Contenu** : 1 instruction, 1 plan qualité (aucune procédure PRD), 15 formulaires, 5 activités, 2 KPI
- **À valider** : Circuit DA→BC→BR, 4 dépôts (M1/M02/ML/DPF), évaluation fournisseurs
- ⚠️ La fiche PCS-AGS ne comporte aucune section « flux d'entrées / sorties » (la page affiche « non documenté »)
- ⚠️ RG-AGS-12 stocke « huiles et lubrifiants uniquement en **M3** » alors que **M3 n'existe pas** (M1, M02, ML, DPF)
- ⚠️ Barème notation fournisseur contradictoire : 0-4 (max 20) en base vs « max 15 / barème 0-3 » en RG-AGS-06
- ⚠️ Code KPI : « TCC » (ERP-08) vs « TNCC » (fiche processus AGS)

### 6️⃣ GRH - Gestion des Ressources Humaines ✅
- **Pilote** : Responsable GRH
- **Contenu** : 2 procédures, 19 formulaires, 5 activités, 3 KPI
- **À valider** : Compétences, formation, absences, recrutement
- ⚠️ La fiche PCS-GRH ne liste pas les parties intéressées (renvoi à la matrice FOR-MQA-13)
- ⚠️ **Effectif contradictoire** : 25 (majorité des documents) vs 47 (registre FOR-GRH-05) — à arbitrer
- ⚠️ Module créé de zéro : les 5 tables GRH de la base sont vides
- ⚠️ PCS-GRH, PRD-GRH-01 et PRD-GRH-02 restent « à vérifier »

### 7️⃣ MNT - Maintenance ✅
- **Pilote** : Mohamed Ali KHALFAOUI
- **Contenu** : 3 procédures, 4 instructions, 16 formulaires, 5 activités, 3 KPI
- **À valider** : Préventive/curative, parc machines, étalonnage
- ⚠️ Le KPI TRP est défini de trois façons différentes dans le cahier (moyenne semestrielle §9.5, mensuelle §9.10, trimestrielle ERP-08 §8.1) — ERP-08 fait foi
- ⚠️ Module créé de zéro : la table `gmao` appartient à CONSOMED, rien n'est migrable

---

## ✅ Points de Validation par Processus

Pour chaque processus, valider :

### 🗺️ Déroulé (synoptique)
- [ ] Les étapes du synoptique sont dans le bon ordre
- [ ] Les responsabilités par étape (Qui) sont correctes
- [ ] Les documents cités à chaque étape sont les bons

### 🔄 Flux
- [ ] Les entrées du processus sont complètes
- [ ] Les sorties du processus sont complètes
- [ ] Les processus amont / aval sont corrects

### 📘 Documents
- [ ] Toutes les procédures, instructions et plans qualité sont listés
- [ ] Les titres sont corrects
- [ ] Les documents manquants sont signalés (ex. MEC et AGS n'ont aucune procédure PRD)

### 📄 Formulaires
- [ ] Tous les documents de travail sont inventoriés
- [ ] Les numérotations FOR-XXX-NN sont correctes
- [ ] Aucun formulaire manquant

### 📈 Indicateurs
- [ ] Les KPI du processus sont corrects
- [ ] Les fréquences de calcul sont confirmées (ERP-08 §8.1 fait foi)
- [ ] Les formules et responsables de calcul sont validés

### ⚙️ Activités Clés
- [ ] Le workflow correspond à la réalité terrain
- [ ] Les interactions entre processus sont correctes
- [ ] Les formulaires associés sont bien liés

### 👤 Responsabilités
- [ ] Le pilote désigné est le bon
- [ ] Les responsabilités sont claires
- [ ] Les objectifs sont pertinents

---

## 🚨 Questions Bloquantes à Trancher

Ces questions nécessitent une réponse **avant le développement** :

### 🔴 PRIORITÉ CRITIQUE

#### Q1.1.1 - Validation des offres
**Question** : Qui valide les offres > 10 000 DT ?  
**Impact** : Workflow CMP, droits utilisateurs  
**Réponse** : ______________________________

#### Q3.5 - Relation NCD/OF
**Question** : Relation NCD/OF confirmée 1:1 strict ?  
**Impact** : Structure base de données MEC  
**Réponse** : ☐ Oui 1:1  ☐ Non 1:N

#### Q4.1 - Seuil 8D
**Question** : Seuil automatique NC → 8D ou décision RMQ au cas par cas ?  
**Impact** : Règles métier MQA  
**Réponse** : ☐ Seuil automatique  ☐ Décision RMQ

### 🟡 IMPORTANT

#### Q2.3.1 - Processus CAT
**Question** : Processus CAT (caoutchouc) à intégrer ou ignorer ?  
**Impact** : Périmètre EDV  
**Réponse** : ☐ Intégrer  ☐ Ignorer  ☐ Phase 2

#### Q5.3 - Dépôt M3
**Question** : Le dépôt M3 existe-t-il ? (Non trouvé dans base)  
**Impact** : Configuration AGS multi-dépôts  
**Réponse** : ☐ Existe  ☐ N'existe pas

#### Q6.2 - Import GRH
**Question** : Import manuel effectifs GRH au go-live ?  
**Impact** : Plan de migration  
**Réponse** : ☐ Import manuel  ☐ Saisie dans ERP

---

## 📝 Feuille de Validation

### Processus : ______________

**Date de validation** : __ / __ / 2026  
**Responsable présent** : ___________________________

#### Déroulé (synoptique)
- [ ] Conforme
- [ ] Corrections étapes : ______________________________

#### Flux
- [ ] Entrées / Sorties conformes
- [ ] Corrections : ___________________________________

#### Documents
- [ ] Complets
- [ ] Corrections : ___________________________________

#### Formulaires
- [ ] Complets
- [ ] Manquants : ___________________________________
- [ ] À supprimer : __________________________________

#### Activités Clés
- [ ] Conformes à la réalité
- [ ] Corrections workflow : __________________________

#### Indicateurs
- [ ] KPI, fréquences et formules validés

#### Validations
- [ ] **Processus validé** par le responsable
- [ ] **Corrections à apporter** (voir ci-dessus)
- [ ] **Questions bloquantes levées** (voir section précédente)

**Signature du responsable** : ___________________________

---

## 🔧 Utilisation du Site

### Pour le présentateur

1. **Ouvrir** `processus.html` sur écran partagé/projecteur
2. **Cliquer** sur le processus à présenter
3. **Parcourir** les 6 onglets avec le responsable (Déroulé → Documents → Flux → Formulaires → Activités → Indicateurs)
4. **Noter** les corrections sur la feuille de validation
5. **Passer** au processus suivant

### Pour le responsable

1. **Écouter** la présentation du processus
2. **Vérifier** que le déroulé (synoptique) correspond au terrain
3. **Vérifier** que les procédures/instructions/plans qualité et formulaires sont listés
4. **Confirmer** les flux d'entrées / sorties et les parties intéressées
5. **Confirmer** les KPI, leurs fréquences et leurs formules
6. **Signaler** les corrections nécessaires
7. **Signer** la feuille de validation

### Impression PDF (si besoin)

1. Cliquer sur le processus
2. Appuyer sur `Ctrl+P`
3. Choisir "Enregistrer au format PDF"
4. Distribuer aux participants

---

## 📊 Informations de Contexte

### Base de production actuelle
- **Système** : SQL Server `sihem` (246 tables)
- **Commandes** : 18 393 enregistrées
- **Effectif** : 25 personnes
- **Monnaie** : DT (Dinar Tunisien)
- **TVA** : 19%

### ERP cible
- **Base** : PostgreSQL (108 tables)
- **Modules** : 8 (+ Finance)
- **KPI** : 22 indicateurs
- **Migration** : 5 phases (J-90 à J+30)

### Points confirmés base de production
- ✅ 4 dépôts réels : M1, M02, ML, DPF (pas de M3)
- ✅ Notation fournisseur : colonne `eva` (valeurs 1-4)
- ✅ TopSolid PDM vierge (0 plan)
- ✅ Tables GRH vides (module from scratch)
- ✅ GMAO = CONSOMED (non migrable)

---

## 🎯 Après la Réunion

### Actions immédiates
1. ✅ Consolider toutes les feuilles de validation
2. ✅ Lister les corrections à apporter au cahier des charges
3. ✅ Compiler les réponses aux questions bloquantes
4. ✅ Mettre à jour `processus-data.js` si corrections mineures

### Livrables à produire
1. **Procès-verbal de validation** (1 page par processus)
2. **Liste des corrections** à apporter aux fichiers markdown
3. **Réponses aux questions ERP-14** (section 1)
4. **Accord de principe** pour phase développement

### Prochaines étapes
1. Mise à jour cahier des charges avec corrections
2. Validation finale document complet
3. Signature contrat développement
4. Lancement Phase 1 : Analyse & Mapping

---

## 📞 Contacts

### Responsables de Processus
- **MQA** : Hamdi GHEDIR (RMQ)
- **CMP** : Talel YAHYAOUI
- **EDV** : Issameddine BEN ALI
- **MEC** : Slim GALLS
- **AGS** : Ghassen BEN CHEIKH
- **GRH** : Responsable GRH (à confirmer)
- **MNT** : Mohamed Ali KHALFAOUI

### Support Technique Site Web
- Fichier : `processus-data.js` (données)
- Console : F12 pour déboguer
- Rechargement : Ctrl+F5

---

## ✨ Avantages de cette Présentation

### Pour les responsables
- ✅ **Visuel** : navigation intuitive, design moderne
- ✅ **Complet** : déroulé, flux, documents, formulaires, activités et indicateurs
- ✅ **Fidèle** : contenu issu des fiches processus `03-…` à `09-…`, divergences signalées
- ✅ **Structuré** : organisation claire par onglets
- ✅ **Rapide** : accès direct à son processus

### Pour le projet
- ✅ **Traçabilité** : validation formelle processus par processus
- ✅ **Qualité** : détection précoce des erreurs/oublis
- ✅ **Engagement** : implication responsables métier
- ✅ **Confiance** : présentation professionnelle

---

## 🎓 Conseils pour la Réunion

### Préparation
- [ ] Tester le site sur le PC de présentation
- [ ] Préparer 7 feuilles de validation (1 par processus)
- [ ] Imprimer liste questions bloquantes (ERP-14)
- [ ] Prévoir 20-30 min par processus

### Pendant
- Commencer par MQA (processus transverse)
- Enchaîner les processus de réalisation : CMP → EDV → MEC → AGS
- Terminer par les supports : GRH → MNT
- Noter **toutes** les remarques, même mineures

### Après
- Envoyer procès-verbal sous 48h
- Planifier réunion de clôture si corrections majeures
- Mettre à jour cahier des charges
- Obtenir signature finale

---

**SOBECA - Société Ben Cheikh Abdelhakim**  
Kairouan, Tunisie | ISO 9001:2015  
Cahier des Charges ERP | Septembre 2026
