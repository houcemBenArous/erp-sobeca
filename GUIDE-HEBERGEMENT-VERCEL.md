# 🚀 Guide : Héberger le Site sur Vercel

## ✅ Étapes Déjà Réalisées

- ✅ Git installé et configuré
- ✅ Dépôt Git initialisé dans `siteweb`
- ✅ Fichiers `.gitignore` et `vercel.json` créés
- ✅ Premier commit créé avec tous les fichiers

---

## 📝 Étapes Suivantes

### Étape 7 : Créer un compte GitHub

1. Aller sur **https://github.com**
2. Cliquer sur **"Sign up"**
3. Remplir : email, mot de passe, nom d'utilisateur
4. Vérifier votre email

---

### Étape 8 : Créer un dépôt GitHub

1. Connexion à GitHub
2. Cliquer sur **"+"** → **"New repository"**
3. Configuration :
   - **Nom** : `erp-sobeca`
   - **Description** : "Site web de présentation ERP SOBECA"
   - **Visibilité** : Private (recommandé) ou Public
   - ☐ NE PAS cocher "Add a README"
4. Cliquer **"Create repository"**

---

### Étape 9 : Lier le dépôt local à GitHub

Dans PowerShell (dossier `siteweb`) :

```powershell
# 1. Ajouter le dépôt distant (remplacer VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/erp-sobeca.git

# 2. Renommer la branche
git branch -M main

# 3. Pousser vers GitHub
git push -u origin main
```

**Note** : Utiliser un **Personal Access Token** comme mot de passe GitHub

#### Créer un Personal Access Token :
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Cocher : ☑️ `repo`
5. Generate token → COPIER le token

---

### Étape 10 : Créer un compte Vercel

1. Aller sur **https://vercel.com**
2. Cliquer **"Sign Up"**
3. Choisir **"Continue with GitHub"**
4. Autoriser Vercel

---

### Étape 11 : Déployer sur Vercel

1. Connexion à Vercel
2. Cliquer **"Add New..."** → **"Project"**
3. Importer depuis GitHub :
   - Sélectionner dépôt **"erp-sobeca"**
   - Si invisible → "Adjust GitHub App Permissions"
4. Configuration :
   - **Project Name** : `erp-sobeca`
   - **Framework Preset** : Other
   - Laisser le reste par défaut
5. Cliquer **"Deploy"**
6. Attendre 30-60 secondes ⏳
7. **Site déployé** ! 🎉

---

## 🌐 URL du Site

Après déploiement : `https://erp-sobeca.vercel.app`

Partager cette URL avec les responsables pour validation.

---

## 🔄 Mises à Jour Futures

Pour modifier le site :

```powershell
# 1. Modifier les fichiers (ex: processus-data.js)

# 2. Commit et push
git add .
git commit -m "Mise à jour processus"
git push

# 3. Vercel redéploie automatiquement !
```

---

## 🔒 Protection (Optionnel)

### Option 1 : Dépôt Private
- GitHub : Private (code protégé)
- Vercel : Public (URL accessible)
- Partager URL uniquement aux autorisés

### Option 2 : Script de Protection Simple

Créer `auth.js` :
```javascript
(function() {
    const password = 'SOBECA2026';
    const stored = sessionStorage.getItem('authenticated');
    
    if (stored !== 'true') {
        const input = prompt('Mot de passe :');
        if (input !== password) {
            alert('Accès refusé');
            window.location.href = 'about:blank';
        } else {
            sessionStorage.setItem('authenticated', 'true');
        }
    }
})();
```

Ajouter dans chaque HTML :
```html
<script src="auth.js"></script>
```

---

## 📞 Support

### Problèmes Courants

**Permission denied (GitHub)**  
→ Utiliser Personal Access Token

**Site ne s'affiche pas**  
→ Vérifier console (F12), vider cache

**Vercel ne trouve pas le dépôt**  
→ Adjust GitHub App Permissions

---

## ✅ Checklist

### Préparation (Fait ✅)
- [x] Git installé
- [x] Dépôt Git initialisé
- [x] Fichiers commités

### GitHub (À Faire)
- [ ] Compte créé
- [ ] Dépôt créé
- [ ] Code poussé

### Vercel (À Faire)
- [ ] Compte créé
- [ ] Projet déployé
- [ ] URL testée

---

## 📧 Email Type

```
Objet : Site ERP SOBECA - Validation

Bonjour,

Site de présentation ERP : https://erp-sobeca.vercel.app

Merci de consulter votre processus avant la réunion.

Cordialement
```

---

**SOBECA | Kairouan, Tunisie | ISO 9001:2015**
