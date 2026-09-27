// ============================================
// SOBECA ERP - Présentation Professionnelle
// ============================================

// Données des modules
const modules = [
  {
    id: 'MQA',
    nom: 'Management Qualité',
    icon: '✓',
    iconClass: 'qualite',
    description: 'Gestion documentaire (procédures, formulaires), audits internes, actions correctives/préventives (FAA, 8D), revue de direction, analyse des risques AMDEC.',
    fonctions: [
      'Gestion des documents et enregistrements',
      'Planification et suivi des audits',
      'Traitement des non-conformités',
      'Rapports 8D clients',
      'Suivi des plans d\'action'
    ]
  },
  {
    id: 'CMP',
    nom: 'Commercial & Planning',
    icon: '📊',
    iconClass: 'ventes',
    description: 'Gestion des offres, commandes clients, planification de la production, suivi des réclamations clients, tableau de bord commercial.',
    fonctions: [
      'Création et suivi des offres',
      'Gestion des commandes clients',
      'Planification hebdomadaire',
      'Réclamations clients',
      'Satisfaction client'
    ]
  },
  {
    id: 'MEC',
    nom: 'Production Mécanique',
    icon: '⚙️',
    iconClass: 'production',
    description: 'Ordres de fabrication (OF/NCD), fiches suiveuses, contrôle production, suivi temps/machines, traçabilité complète lot → pièce.',
    fonctions: [
      'Gestion des ordres de fabrication',
      'Fiches suiveuses de production',
      'Contrôle qualité en production',
      'Suivi des temps et machines',
      'Traçabilité des lots'
    ]
  },
  {
    id: 'EDV',
    nom: 'Études & Développement',
    icon: '📐',
    iconClass: 'etudes',
    description: 'Nomenclatures (BOM), gammes opératoires, fiches techniques, validation échantillons, gestion des modifications techniques.',
    fonctions: [
      'Nomenclatures articles (BOM)',
      'Gammes opératoires',
      'Fiches techniques produits',
      'Validation échantillons',
      'Gestion des modifications'
    ]
  },
  {
    id: 'AGS',
    nom: 'Achats & Stock',
    icon: '📦',
    iconClass: 'achats',
    description: 'Demandes d\'achat, bons de commande fournisseurs, réceptions, gestion stock (4 dépôts M1/M02/ML/DPF), évaluation fournisseurs.',
    fonctions: [
      'Demandes d\'achat',
      'Bons de commande fournisseurs',
      'Réception et contrôle MP/composants',
      'Gestion multi-dépôts',
      'Évaluation fournisseurs'
    ]
  },
  {
    id: 'GRH',
    nom: 'Ressources Humaines',
    icon: '👥',
    iconClass: 'rh',
    description: 'Gestion des effectifs, matrices de compétences/polyvalence, formation, présence/absences, fiches de poste.',
    fonctions: [
      'Gestion des effectifs',
      'Matrices de compétences',
      'Plans de formation',
      'Suivi présence/absences',
      'Évaluations annuelles'
    ]
  },
  {
    id: 'MNT',
    nom: 'Maintenance',
    icon: '🔧',
    iconClass: 'maintenance',
    description: 'Inventaire machines/équipements, maintenance préventive (planification), maintenance corrective (tickets), suivi pièces de rechange.',
    fonctions: [
      'Inventaire machines/équipements',
      'Maintenance préventive planifiée',
      'Bons d\'intervention corrective',
      'Gestion pièces de rechange',
      'Historique interventions'
    ]
  },
  {
    id: 'FIN',
    nom: 'Finance & Comptabilité',
    icon: '💰',
    iconClass: 'finance',
    description: 'Facturation clients, suivi règlements, factures fournisseurs, TVA 19%, monnaie unique DT (Dinar Tunisien).',
    fonctions: [
      'Facturation clients',
      'Suivi des règlements',
      'Factures fournisseurs',
      'États TVA 19%',
      'Tableau de trésorerie'
    ]
  }
];

// Données des KPI par processus
const kpiData = {
  MQA: [
    { code: 'TMRO', nom: 'Taux Moyen de Réalisation des Objectifs', freq: 'Mensuel' },
    { code: 'TEAA', nom: 'Taux d\'Efficacité des Actions d\'Amélioration', freq: 'Mensuel' },
    { code: 'Efficacité SMQ', nom: 'Taux d\'Efficacité SMQ', freq: 'Annuel' },
    { code: '—', nom: 'Degré de réalisation des objectifs', freq: 'Annuel' }
  ],
  CMP: [
    { code: 'TRC', nom: 'Taux de Réclamations Clients', freq: 'Mensuel' },
    { code: 'TSC', nom: 'Taux de Satisfaction Client', freq: 'Annuel' },
    { code: 'TCO', nom: 'Taux de Conversion des Offres', freq: 'Trimestriel' }
  ],
  EDV: [
    { code: 'TRE', nom: 'Taux de Réussite d\'Étude (1er coup)', freq: 'Trimestriel' },
    { code: 'TRDRET', nom: 'Taux Respect Délais Études Techniques', freq: 'Trimestriel' },
    { code: 'TRDREO', nom: 'Taux Respect Délais Études Offre', freq: 'Trimestriel' }
  ],
  MEC: [
    { code: 'TNC', nom: 'Taux de Non-Conformité Produit', freq: 'Mensuel' },
    { code: 'TRD', nom: 'Taux de Respect des Délais', freq: 'Mensuel' },
    { code: 'EH', nom: 'Efficacité Horaire', freq: 'Mensuel' },
    { code: 'TRS', nom: 'Taux de Rendement Synthétique', freq: 'Trimestriel' }
  ],
  AGS: [
    { code: 'TCC', nom: 'Taux de Non-Conformité produits fournisseur', freq: 'Trimestriel' },
    { code: 'TAF', nom: 'Taux d\'Agrégation Fournisseurs', freq: 'Semestriel' }
  ],
  GRH: [
    { code: 'TC', nom: 'Taux de Compétence', freq: 'Annuel' },
    { code: 'TCPF', nom: 'Taux Couverture Plan de Formation', freq: 'Annuel' },
    { code: 'TA', nom: 'Taux d\'Absentéisme', freq: 'Mensuel' }
  ],
  MNT: [
    { code: 'TAM', nom: 'Taux d\'Arrêt Machine', freq: 'Mensuel' },
    { code: 'CAM', nom: 'Coût d\'Arrêt Machine', freq: 'Mensuel' },
    { code: 'TRP', nom: 'Taux Réalisation Plan Maintenance Préventive', freq: 'Trimestriel' }
  ]
};

// Workflow de migration
const migrationPhases = [
  {
    phase: 'Phase 1',
    titre: 'Analyse & Préparation',
    description: 'Audit de la base SQL Server existante (246 tables, 18 393 commandes historiques). Nettoyage des données (articles orphelins, montants non numériques). Extraction des données métier critiques.',
    duree: '2-3 semaines'
  },
  {
    phase: 'Phase 2',
    titre: 'Création Base PostgreSQL',
    description: 'Création du schéma PostgreSQL complet (108 tables documentées). Import des référentiels de base : articles, clients, fournisseurs, machines.',
    duree: '1 semaine'
  },
  {
    phase: 'Phase 3',
    titre: 'Migration Transactionnelle',
    description: 'Import des données historiques : commandes clients (2020-2024), ordres de fabrication, mouvements de stock, bons de commande fournisseurs. Contrôle d\'intégrité référentielle.',
    duree: '2 semaines'
  },
  {
    phase: 'Phase 4',
    titre: 'Validation Métier',
    description: 'Tests en environnement miroir. Validation des KPI (22 indicateurs actifs). Recette utilisateur par processus. Corrections et ajustements.',
    duree: '2-3 semaines'
  },
  {
    phase: 'Phase 5',
    titre: 'Mise en Production',
    description: 'Bascule définitive vers PostgreSQL. Formation utilisateurs. Support post-migration. Documentation technique complète.',
    duree: '1 semaine + suivi 1 mois'
  }
];

// ============================================
// INITIALISATION AU CHARGEMENT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Injection des modules
  renderModules();
  
  // Injection des KPI
  renderKPI();
  
  // Injection du workflow de migration
  renderMigrationTimeline();
  
  // Gestion du scroll (navbar + bouton scroll top)
  handleScroll();
  
  // Smooth scroll pour la navigation
  initSmoothScroll();
  
  // Animation au scroll
  initScrollAnimations();
});

// ============================================
// RENDU DES MODULES
// ============================================

function renderModules() {
  const container = document.getElementById('modules-container');
  if (!container) return;
  
  let html = '';
  modules.forEach(module => {
    html += `
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="card-icon ${module.iconClass}">
              ${module.icon}
            </div>
            <h4 class="card-title">${module.nom}</h4>
            <p class="card-text mb-3">${module.description}</p>
            <h6 class="mb-2"><strong>Fonctions principales :</strong></h6>
            <ul class="list-unstyled">
              ${module.fonctions.map(f => `<li class="mb-1">• ${f}</li>`).join('')}
            </ul>
            <span class="badge bg-secondary">${module.id}</span>
          </div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// ============================================
// RENDU DES KPI
// ============================================

function renderKPI() {
  const container = document.getElementById('kpi-container');
  if (!container) return;
  
  let html = '';
  
  // Pour chaque processus ayant des KPI
  Object.keys(kpiData).forEach(processus => {
    const moduleName = modules.find(m => m.id === processus)?.nom || processus;
    const kpis = kpiData[processus];
    
    html += `
      <div class="kpi-category fade-in">
        <h4 class="kpi-category-title">${moduleName} (${kpis.length} KPI)</h4>
        <div class="kpi-grid">
    `;
    
    kpis.forEach(kpi => {
      html += `
        <div class="kpi-card">
          <div class="kpi-card-code">${kpi.code}</div>
          <div class="kpi-card-name">${kpi.nom}</div>
          <div class="kpi-card-freq">📅 ${kpi.freq}</div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// ============================================
// RENDU DU WORKFLOW DE MIGRATION
// ============================================

function renderMigrationTimeline() {
  const container = document.getElementById('migration-timeline');
  if (!container) return;
  
  let html = '<div class="timeline">';
  
  migrationPhases.forEach((phase, index) => {
    html += `
      <div class="timeline-item fade-in" style="animation-delay: ${index * 0.1}s">
        <div class="timeline-phase">${phase.phase}</div>
        <h5 class="timeline-title">${phase.titre}</h5>
        <p class="timeline-description">${phase.description}</p>
        <small class="text-muted"><strong>Durée estimée :</strong> ${phase.duree}</small>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

// ============================================
// GESTION DU SCROLL
// ============================================

function handleScroll() {
  const navbar = document.querySelector('.navbar');
  const scrollBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', function() {
    // Navbar scrolled effect
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
  
  // Scroll to top on button click
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // Hauteur de la navbar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Fermer le menu mobile si ouvert
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });
}

// ============================================
// ANIMATIONS AU SCROLL
// ============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observer les cartes et éléments
  document.querySelectorAll('.card, .timeline-item, .kpi-card, .stats-box').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// UTILITAIRES
// ============================================

// Formater les nombres avec séparateurs
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Animer les compteurs
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = formatNumber(Math.round(target));
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.round(start));
    }
  }, 16);
}

// Initialiser les animations de compteurs sur les stats
window.addEventListener('load', function() {
  const statsNumbers = document.querySelectorAll('.stats-number, .hero-stat-number');
  statsNumbers.forEach(stat => {
    const target = parseInt(stat.textContent.replace(/\s/g, ''));
    if (!isNaN(target)) {
      stat.textContent = '0';
      setTimeout(() => animateCounter(stat, target), 500);
    }
  });
});

// Log de débogage
console.log('✅ SOBECA ERP - Site chargé avec succès');
console.log(`📊 ${modules.length} modules configurés`);
console.log(`📈 ${Object.values(kpiData).flat().length} KPI chargés`);
console.log(`🔄 ${migrationPhases.length} phases de migration`);
