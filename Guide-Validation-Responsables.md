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
2. **Explorer** les 3 onglets : Procédures / Formulaires / Activités
3. **Valider** avec le responsable de processus

---

## 📊 Les 7 Processus à Valider

### 1️⃣ MQA - Management de la Qualité ✅
- **Pilote** : Hamdi GHEDIR (RMQ)
- **Contenu** : 7 procédures, 19 formulaires, 5 activités
- **À valider** : Maîtrise documents, audits internes, NC, AMDEC, revue direction

### 2️⃣ CMP - Commercial et Planification ✅
- **Pilote** : Talel YAHYAOUI
- **Contenu** : 1 procédure, 16 formulaires, 5 activités
- **À valider** : Circuit offre→commande→OF, réclamations, satisfaction client

### 3️⃣ EDV - Études et Développement ✅
- **Pilote** : Issameddine BEN ALI
- **Contenu** : 1 procédure, 9 formulaires, 4 activités
- **À valider** : Études techniques, nomenclatures, calcul prix, contrôle final

### 4️⃣ MEC - Production Mécanique ✅
- **Pilote** : Slim GALLS
- **Contenu** : 2 procédures, 10 formulaires, 4 activités
- **À valider** : Fabrication, auto-contrôle, traçabilité, relation NCD/OF

### 5️⃣ AGS - Achats et Gestion des Stocks ✅
- **Pilote** : Ghassen BEN CHEIKH
- **Contenu** : 3 procédures, 20 formulaires, 5 activités
- **À valider** : Circuit DA→BC→BR, 4 dépôts (M1/M02/ML/DPF), évaluation fournisseurs

### 6️⃣ GRH - Gestion des Ressources Humaines ✅
- **Pilote** : Responsable GRH
- **Contenu** : 2 procédures, 5 formulaires, 4 activités
- **À valider** : Gestion 25 collaborateurs, compétences, formation, absences

### 7️⃣ MNT - Maintenance ✅
- **Pilote** : Mohamed Ali KHALFAOUI
- **Contenu** : 2 procédures, 25 formulaires, 5 activités
- **À valider** : Préventive/curative, parc machines, étalonnage

---

## ✅ Points de Validation par Processus

Pour chaque processus, valider :

### 📘 Procédures
- [ ] Toutes les procédures métier sont listées
- [ ] Les révisions sont à jour
- [ ] Les titres sont corrects

### 📄 Formulaires
- [ ] Tous les documents de travail sont inventoriés
- [ ] Les numérotations FOR-XXX-NN sont correctes
- [ ] Aucun formulaire manquant

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

#### Procédures
- [ ] Complètes
- [ ] Corrections : ___________________________________

#### Formulaires
- [ ] Complets
- [ ] Manquants : ___________________________________
- [ ] À supprimer : __________________________________

#### Activités Clés
- [ ] Conformes à la réalité
- [ ] Corrections workflow : __________________________

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
3. **Parcourir** les 3 onglets avec le responsable
4. **Noter** les corrections sur la feuille de validation
5. **Passer** au processus suivant

### Pour le responsable

1. **Écouter** la présentation du processus
2. **Vérifier** que toutes les procédures/formulaires sont listés
3. **Confirmer** que le workflow (activités) correspond au terrain
4. **Signaler** les corrections nécessaires
5. **Signer** la feuille de validation

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
- ✅ **Complet** : toutes les procédures/formulaires/activités
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
