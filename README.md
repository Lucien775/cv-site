# CV Virtuel 

## Structure du projet

```
cv-site/
├── index.html           
├── assets/
│   ├── style.css        
│   ├── data.js           
│   └── app.js             
├── cv.pdf                
└── README.md
```

## Tester en local

Aucune installation nécessaire : ouvrez simplement `index.html` dans un
navigateur. Pour un rendu plus fiable (certains navigateurs bloquent les
requêtes locales), lancez un petit serveur :

```bash
# Python
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Déployer sur GitHub Pages

1. Créez un dépôt GitHub (public, ou privé avec un compte payant).
2. Poussez le contenu de ce dossier à la racine du dépôt :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement du CV"
   git branch -M main
   git remote add origin https://github.com/<votre-utilisateur>/<votre-repo>.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source :
   Deploy from a branch**, choisissez la branche `main` et le dossier
   `/ (root)`.
4. Après une minute ou deux, le site est en ligne à l'adresse :
   `https://<votre-utilisateur>.github.io/<votre-repo>/`

