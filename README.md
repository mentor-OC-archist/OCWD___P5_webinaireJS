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
   - comprendre l'API (quels sont ses routes, quels données elle contient)
   - lancer(backend et frontend) pour l'afficher sur le navigateur
1. **Dans la page home**, requêtez le back-end pour récupérer les articles
et les afficher sur la page HTML.
2. Créez 2 classes JS pour représenter: (les fichiers des classes sont déjà créés)
   - (classe **Article**) un article dans le fichier article.js (Ajoutez-lui une propriété pour chaque donnée d’un article, et une méthode pour formater la date).
   - (classe **ListArticles**) une liste d'articles avec une propriété contenant la liste des articles, et une méthode pour trier ces articles par date décroissante
3. **Modifier la page home.html** via home.js pour afficher <u>les dates dans le bon format</u>, et les afficher par <u>date décroissante</u>.
4. Ajoutez un événement click sur le bouton d'un article pour ajouter cette article en favoris. Pour cela, créer les quatre(4) fonctions suivantes (toujours dans home.js): 
   - <u>getAllFavoris()</u> récupérer tous les favoris présents dans le localStorage 
   - <u>saveArticle(objetToSave)</u> qui "sérialize" un objet passé en paramètre ( JSON.stringify(objetToSave) ), et l'enregistre dans le localStorage
   - <u>addArticle()</u> ..pour ajouter un article au localStorage
   - <u>deleteArticle()</u> ..pour supprimer un article du localStorage
Enfin, utiliser addArticleToFavoris() et deleteArticleFromFavoris() au sein de l'évènement créé dans cette étape.
5. Une fois que la fonctionnalité d'ajout/suppression au favoris fonctionne, <u>déplacerez ces quatre(4) fonctions (crééés précédement, ajout/suppression/save) dans le fichier favorisManager.js</u>. Puis, toujours dans dans favorisManager.js,  créer une(1) nouvelle fonction nommé getFavorisIDs() pour: 
   - retourner un tableau contenant les ID des articles présents dans les favoris (getFavorisIDs(), réutilisez-y getAllFavoris())
Vous devez alors exporter ces 5 fonctions, pour les importer dans home.js, et faire la modification nécessaire pour que tout refonctionne comme avant.
6. **Dans la page favorites.html** via favorites.js, requêtez le back-end pour récupérer les articles en favoris. Il faut envoyer au backend les id favoris enregistrés dans le localstorage (utiliser donc (getFavorisIDs() créé à l'étape 5). Une fois les données reçu du backend, les afficher dans la page, par date décroissante, avec la date au format FR (comme à l'étape 3).
7. **Dans la page contact.html** ajoutez un événement sur le click du bouton et
traitez les champs du formulaire avec l’ApiValidation, une Regex, et du CSS.

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
