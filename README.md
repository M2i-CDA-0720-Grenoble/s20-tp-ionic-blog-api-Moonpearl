# Travaux pratiques Ionic/React + API

## Ionic blog: le retour

Tu te rappelles avoir conçu un blog à partir de données "en dur"? Eh bien, maintenant, on passe à la vitesse supérieure: il s'agit de faire le même exercice, mais en remplaçant les données "en dur" par des donneés provenant d'une API (fausse, certes, mais une API tout de même!).

Tous les composants que nous avions déjà écrits sont déjà là et n'attendent plus qu'un coup de baguette magique de ta part pour apparaître!

> Conseil: il est fortement conseillé de fouiller dans la [documentation de json-server](https://www.npmjs.com/package/json-server), tant il est vrai que l'API a plein de possibilités qui peuvent grandement nous faciliter la vie...

## Installation

1. Installer les dépendances: `npm i`

2. Lancer le serveur de l'API: `npm run server:start`

3. Lancer le serveur de développement: `ionic serve`

## Travail à accomplir

### 1. Afficher tous les articles

Peupler la page qui doit faire apparaître tous les articles avec les données provenant de l'API.

#### BONUS

Lister les articles du plus récent au plus ancien.

### 2. Afficher toutes les catégories

Peupler la page qui doit faire apparaître toutes les catégories avec les données provenant de l'API.

#### BONUS

Pour chaque catégorie, afficher le nombre d'articles contenus dans cette catégorie entre parenthèses.

### 3. Afficher un article complet

Peupler la page qui doit faire apparaître les détails d'un seul article avec les données provenant de l'API.

### 4. Afficher tous les articles d'une catégorie

Peupler la page qui doit faire apparaître les détails d'une seule catégorie avec les données provenant de l'API.

### 5. Commenter un article

Dans la page présentant un article complet, ajouter un formulaire permettant d'ajouter un commentaire (nom de l'auteur, adresse e-mail, texte du commentaire). Une fois validé, le commentaire doit être ajouté dans les données de l'API, et il doit apparaître dans une liste en bas de l'article.

### SUPER BONUS

Stocker les différents objets provenant de l'API de manière incrémentale, de telle sorte que tant que l'application n'a pas été refermée (ou rechargée), elle n'ait pas besoin de retourner chercher deux fois la même donnée.
