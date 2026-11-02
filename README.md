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