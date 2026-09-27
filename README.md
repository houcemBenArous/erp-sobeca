# Site Multi-Pages ERP SOBECA — Version 2.0

## 📋 Description

Site web professionnel **multi-pages** présentant le projet ERP SOBECA avec navigation détaillée et interactive. Destiné aux responsables et à la direction pour explorer en profondeur chaque aspect du projet sans détails techniques de développement.

## 🎯 Objectif

Présenter de manière claire, visuelle et **interactive** :
- Les 8 modules de l'ERP (**page dédiée avec sélecteur**)
- Les 22 KPI actifs du SMQ (**page dédiée avec formules complètes**)
- Les 7 processus ISO 9001:2015 (**page dédiée**)
- La stratégie de migration SQL Server → PostgreSQL (**5 phases détaillées**)
- L'architecture technique et flux de données (**chaîne de valeur visuelle**)

**Niveau de détail :** Management / Décisionnel  
**Navigation :** Multi-pages avec menu fixe + breadcrumbs  
**Exclus :** DDL des tables, scripts SQL, détails techniques de développement

## 📁 Structure

```
siteweb/
├── index.html          # 🏠 Page d'accueil (cartes cliquables)
├── modules.html        # 📦 Modules ERP (sélecteur interactif)
├── processus.html      # 🔄 Processus SMQ (7 processus)
├── kpi.html            # 📊 Indicateurs KPI (22 KPI détaillés)
├── migration.html      # 🔀 Migration (5 phases)
├── architecture.html   # 🏗️ Architecture & flux de données
├── style.css           # 🎨 Styles CSS (~900 lignes)
├── script.js           # ⚙️ JavaScript (animations, interactions)
└── README.md           # 📖 Cette documentation
```

## 🚀 Utilisation

### Ouverture locale

1. Double-cliquer sur `index.html`
2. Le site s'ouvre dans votre navigateur par défaut

### Navigation

- **Menu supérieur** : Navigation par sections (scroll fluide)
- **Bouton ↑** (coin inférieur droit) : Retour en haut de page
- **Responsive** : Adapté mobile/tablette/desktop

## 🎨 Sections du site

### 1. Hero (En-tête)
- Titre principal du projet
- Statistiques clés : 8 modules, 22 KPI, 108 tables

### 2. Présentation SOBECA
- Informations entreprise : 25 personnes, Kairouan
- Activité : pièces mécaniques de précision
- Certification ISO 9001:2015

### 3. Les 8 Modules
Cartes visuelles avec icônes colorées :
- **MQA** - Management Qualité
- **CMP** - Commercial & Planning
- **MEC** - Production Mécanique
- **EDV** - Études & Développement
- **AGS** - Achats & Stock
- **GRH** - Ressources Humaines
- **MNT** - Maintenance
- **FIN** - Finance & Comptabilité

### 4. Processus & Workflow
Diagramme visuel du flux :
Offre → Commande → Étude → Production → Livraison → Facturation

### 5. Indicateurs de Performance (KPI)
22 KPI répartis par processus :
- Code de l'indicateur
- Nom complet
- Fréquence de calcul (Mensuel/Trimestriel/Annuel)

### 6. Migration & Planning
5 phases documentées :
1. Analyse & Préparation
2. Création Base PostgreSQL
3. Migration Transactionnelle
4. Validation Métier
5. Mise en Production

## 🛠 Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Gradients, animations, responsive design
- **Bootstrap 5.3** : Framework CSS (CDN)
- **JavaScript (Vanilla)** : Aucune dépendance externe
- **Font** : Segoe UI (système)

## ⚙️ Personnalisation

### Modifier les données

Toutes les données sont dans `script.js` :

```javascript
// Modules
const modules = [ ... ];

// KPI par processus
const kpiData = { ... };

// Phases de migration
const migrationPhases = [ ... ];
```

### Modifier les couleurs

Dans `style.css`, section `:root` :

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  ...
}
```

### Ajouter une section

1. Ajouter `<li>` dans le `<nav>` de `index.html`
2. Créer la `<section id="nouvelle-section">` dans le corps
3. Ajouter le style dans `style.css`

## 📊 Chiffres Clés du Projet

| Élément | Quantité |
|---------|----------|
| **Modules ERP** | 8 |
| **KPI actifs** | 22 (+ 3 CAT désactivés) |
| **Tables PostgreSQL** | 108 |
| **Tables source SQL Server** | 246 |
| **Commandes historiques** | 18 393 |
| **Dépôts de stock** | 4 (M1, M02, ML, DPF) |

## 🔗 Sources

Les données proviennent des fichiers markdown du cahier des charges :
- `cahier-de-charge-md/00-synthese-erp.md`
- `cahier-de-charge-md/01-presentation-entreprise.md`
- `cahier-de-charge-md/ERP-08-indicateurs-kpi.md`
- `cahier-de-charge-md/ERP-10-modele-donnees.md`
- `cahier-de-charge-md/ERP-12-migration.md`

## ✅ Validation

- [x] Responsive design (mobile/tablette/desktop)
- [x] Navigation fluide (smooth scroll)
- [x] Animations au scroll
- [x] Données à jour (22 KPI validés)
- [x] Exclusion des détails techniques (DDL, SQL)
- [x] Design professionnel avec gradients
- [x] Accessibilité (structure sémantique)

## 📝 Notes

- **Pas de détails colonnes** : Les tables sont mentionnées sans lister leurs champs
- **Pas de scripts SQL** : La migration est décrite en phases, pas en code
- **Formules KPI** : Non affichées (uniquement nom + fréquence)
- **Règles métier** : Résumées dans les descriptions modules

## 🎯 Prochaines Étapes

1. ✅ Création des 3 fichiers (index.html, style.css, script.js)
2. ⬜ Validation avec le client
3. ⬜ Ajustements visuels si nécessaire
4. ⬜ Export en PDF pour présentation hors ligne
5. ⬜ Hébergement web (optionnel)

---

**Version :** 1.0  
**Date :** 14 septembre 2026  
**Contact :** SOBECA - Société Ben Cheikh Abdelhakim, Kairouan
