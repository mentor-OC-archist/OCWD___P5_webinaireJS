# [Webinaire : Utilisez JavaScript pour réaliser un site dynamique](https://openclassrooms.com/fr/projects/construisez-un-site-e-commerce-en-javascript/resources)

---

# OC PROJET#5 [Construisez un site e-commerce en JavaScript](https://openclassrooms.com/fr/projects/construisez-un-site-e-commerce-en-javascript/assignment) DU PARCOURS ["DÉVELOPPEUR-WEB"](https://openclassrooms.com/fr/paths/185-developpeur-web#path-tabs): 

[lien code projet revisité](https://github.com/mentor-OC-archist/OCWD___P5_webinaireJS) || 
[lien de la solution](https://github.com/mentor-OC-archist/OCWD___P5_webinaireJS/tree/solution) || 
[VIDÉO: intro au webinaire]()
[VIDÉO: webinaire réalisé]() || 


## ÉTAPES DE RÉALISATION: 
0. Commencez par cloner le projet, puis: 
   - installer le backend (lire la suite du README) 
   - lancer le backend (npm run start => cela lance par défaut le fichier server.js)
   - comprendre l'API (quels sont ses routes, quelles données l'API contient)
   - lancer le frontend, puis afficher la page d'accueil sur le navigateur
1. **Dans la page home/index.html**, requêtez le back-end pour récupérer les articles
et les afficher sur la page HTML.
2. Créez 2 classes JS pour représenter: (les fichiers des classes sont déjà créés)
   - (classe **ListArticles**) une liste d'articles avec une propriété contenant la liste des articles, et une méthode pour trier ces articles par date décroissante
   - (classe **Article**) un article dans le fichier Article.js (Ajoutez-lui une propriété pour chaque donnée d’un article, et une méthode pour formater la date).
   - Puis, via home/index.js et l'utilisation de ces 2 classes, afficher <u>les dates dans le bon format</u>, et les afficher par <u>date décroissante</u>.
3. Ajoutez un événement click sur le bouton d'un article pour ajouter cette article en favoris. <u>**Pour cela**</u>, créer les cinq(5) fonctions suivantes dans le fichier <u>**js/favorisManager.js**</u>: 
   - <u>getAllFavoris()</u> récupérer tous les favoris présents dans le localStorage 
   - <u>saveArticle(objetToSave)</u> qui "sérialize" un objet passé en paramètre ( JSON.stringify(objetToSave) ), et l'enregistre dans le localStorage
   - <u>addArticle()</u> ..pour ajouter un article au localStorage
   - <u>deleteArticle()</u> ..pour supprimer un article du localStorage
   - <u>getFavorisIDs()</u> ..pour retourner un tableau contenant les ID des articles présents dans les favoris (réutilisez-y getAllFavoris() pour vous simplifier la vie)
   - Ensuite, vous devez alors exporter ces 5 fonctions, pour les importer dans home/index.js, et faire la modification nécessaire pour que tout refonctionne comme avant.
Enfin, utiliser addArticleToFavoris() et deleteArticleFromFavoris() au sein de l'évènement créé dans cette même étape.
4. **Dans la page favorites/index.html** via favorites/index.js, requêtez le back-end pour récupérer les articles en favoris. Il faut envoyer au backend les id favoris enregistrés dans le localstorage (utiliser donc (getFavorisIDs() créé à l'étape 5). Une fois les données reçu du backend, les afficher dans la page, par date décroissante, avec la date au format FR (comme à l'étape 3).
5. **Dans la page contact/index.html** ajoutez un événement sur le click du bouton et valider les champs du formulaire via l’ApiValidation, Regex, HTML5, ou encore du CSS.
6. **Optimiser**, ou plus techniquement parlant, **bundler** le projet en utilisant le bundler **[Webpack](https://webpack.js.org/concepts/)** ou un bundler plus simple nommé **[Parcel](https://fr.parceljs.org/getting_started.html)**.

## LES LIENS QUI VOUS SERONT UTILES: 
- [Constraint validation API](https://developer.mozilla.org/fr/docs/Web/API/Constraint_validation#Methods)
- [HTML DOM Document querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)
- [Template literals, ou, Template strings)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals)
- [La methode .sort() des instances de l'objet Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [L'Object Date, et sa méthod toLocaleDateString'](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [L'objet Promise (pour les curieux)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [fetch()](https://developer.mozilla.org/fr/docs/Web/API/fetch)


## LES LIENS D'ORIGINE: 
- [lien du webinaire (vidéo)](https://app.livestorm.co/openclassrooms-1/utilisez-javascript-pour-realiser-un-site-dynamique?type=detailed)
- [lien du pdf (énoncé d'origine)](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Webinars/Code/JavaScript_March_2021/Webinaire+JavaScript+P5+DevWeb+Enonce+et+Correction.pdf)
[Lien vers le code du projet d'origine](https://github.com/mostuf/Jsnews) 
[Lien vers la solution du projet d'origine](https://github.com/mostuf/Jsnews-final)


---
---
---
---
---
---
---
---



# Javanews
## Téléchargement
Copier l'url du repository et faire un : 
* git clone https://github.com/mostuf/Javanews.git

## Installation
Vous devez avoir installé nodejs et npm sur votre machine : https://www.npmjs.com/get-npm
Positionnez vous sur le dossier backend à partir du projet
```
> cd ./backend/
```
Vous devrez probablement redémarrer l'ordinateur après installation.
Ensuite, installez les composants du projet.
```
> npm install
```
Vous pouvez maintenant lancer le projet en local pour l'utiliser
```
> node server
```
Le serveur sera accessible sur http://localhost:4000 par défaut.

Un fichier Javanews.json est présent dans le repository github, il sert à configurer l'outil Talend Api Tester pour envoyer des requêtes http vers le serveur.

Vous pouvez télécharger cette extension pour google chrome ici : https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm

Ce fichier de configuration peut aussi être chargé dans Postman, mais il peut y avoir des problèmes de compatibilité.

## API
Il y a actuellement 3 api sur le serveur :

Elles traitent toutes des articles. Un article est au format suivant : 

> {  
> &nbsp;&nbsp;&nbsp;"id" : int,  
> &nbsp;&nbsp;&nbsp;"title": string,  
> &nbsp;&nbsp;&nbsp;"publicationDate" : string,  
> &nbsp;&nbsp;&nbsp;"image" : string,  
> &nbsp;&nbsp;&nbsp;"content" : string  
> }  

### GetAll
```
GET /api/article
```
> Récupération des articles
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ] 

### GetById
```
GET /api/article/:id
```
> Récupération d'un article par son id
> Format de retour :  
> {article}

### GetFavorites
```
POST /api/article/
@body 
{
    "favorites": [id]
}
```
> Récupération des articles favoris (non triés)  
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ]  
