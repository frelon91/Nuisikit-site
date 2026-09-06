# NUISIKIT — Projet prêt à déployer

Ce dossier est un projet React/Vite complet et fonctionnel, prêt à être connecté à Hostinger.

## Contenu

- `index.html` — page d'entrée, charge Tailwind CSS via CDN (pas de configuration à faire)
- `src/App.jsx` — le site complet (catalogue, panier, CGV, mentions légales, etc.)
- `src/main.jsx` — point d'entrée React
- `package.json` — dépendances (React + lucide-react pour les icônes)
- `vite.config.js` — configuration du build

## Étapes pour mettre en ligne depuis un téléphone (sans ordinateur)

### 1. Créer un compte GitHub (gratuit)
Depuis votre navigateur mobile : github.com → "Sign up".

### 2. Créer un nouveau dépôt (repository)
- Bouton "New repository"
- Nom : `nuisikit-site`
- Laissez "Public" ou "Private" selon votre préférence
- Ne cochez PAS "Add a README" (on a déjà le nôtre)

### 3. Uploader tous les fichiers de ce dossier
Sur la page du dépôt vide, GitHub propose un lien "uploading an existing file" — cliquez dessus et glissez tous les fichiers de ce dossier (en gardant la structure : `src/` doit rester un sous-dossier). Sur mobile, ça se fait fichier par fichier ou par petits groupes.

### 4. Connecter le dépôt à Hostinger
Dans hPanel (panneau Hostinger) :
- Créez une nouvelle application / site
- Choisissez "Connecter un dépôt Git" et donnez l'accès à votre compte GitHub
- Sélectionnez le dépôt `nuisikit-site`
- Type d'application : `react`
- Build script : `build`
- Output directory : `dist`
- Lancez le déploiement

Hostinger installera les dépendances et construira le site automatiquement — vous n'avez rien à exécuter vous-même.

## ⚠️ Ce qui ne fonctionnera pas encore après ce déploiement

Le bouton de paiement final appelle une route `/api/create-checkout-session` qui n'existe pas encore. Le site s'affichera et sera parcourable entièrement, mais **le paiement par carte ne fonctionnera pas tant que ce backend Stripe n'est pas ajouté séparément**. C'est la prochaine étape une fois le site visible en ligne.

## En cas d'erreur de build sur Hostinger

Si Hostinger affiche une erreur pendant le build, copiez le message d'erreur exact et montrez-le-moi (capture d'écran) — je n'ai pas pu tester la compilation moi-même (pas d'accès internet dans mon environnement), donc il peut y avoir un ajustement à faire.
