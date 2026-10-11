# Aimer les Maths au Collège !

Site statique gratuit pour GitHub Pages, sans compte élève ni collecte de données.

## Publier
1. Créer un compte sur https://github.com/.
2. Créer un dépôt **public** nommé `aimer-les-maths-college`.
3. Dans le dépôt, choisir **Add file > Upload files** et déposer `index.html`, le dossier `assets` (avec ses deux fichiers), et ce README. GitHub ne conserve pas les dossiers vides ; le dossier `ressources` sera créé lorsque tu y ajouteras un PDF.
4. Valider avec **Commit changes**.
5. Aller dans **Settings > Pages**, choisir **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
6. Le site sera accessible à `https://TON_IDENTIFIANT.github.io/aimer-les-maths-college/` après quelques minutes.

## Ajouter un document PDF
1. Déposer le PDF dans un dossier `ressources` à la racine du dépôt, par exemple `ressources/6e-fractions.pdf`.
2. Ouvrir `assets/app.js` sur GitHub et cliquer sur l'icône crayon pour modifier le fichier.
3. Remplacer `const ressources = [];` par :

```js
const ressources = [
  { niveau: '6e', type: 'cours', titre: 'Les fractions', description: 'Cours PDF', fichier: 'ressources/6e-fractions.pdf' },
];
```

4. Valider avec **Commit changes**. Le document apparaîtra dans la rubrique Cours & exercices.

Types autorisés : `cours`, `exercice`, `corrige`. Niveaux : `6e`, `5e`, `4e`, `3e`.

## Personnaliser
- Textes et rubriques : `index.html`.
- Couleurs et mise en page : `assets/style.css`.
- Liste des ressources : `assets/app.js`.

**Important** : ne publie pas de données personnelles d'élèves, de notes ou de documents protégés sans autorisation. Le dépôt et les ressources sont publics.
