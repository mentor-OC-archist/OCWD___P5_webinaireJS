/**
 * Gère l'affichage et les interactions de la page d'accueil
 */


// 0°) AJOUTER LE SCRIPT home/index.js DANS LE <head/> DU FICHIER home/index.html, avec les attribut "type='module'" et "defer"
// 1°) FETCHER L'API, ET LA STOCKER DANS UNE VARIABLE
// 2°) RÉCUPÉRER LE TEMPLATE D'UN ARTICLE ET UTILISER LE Template Literals POUR Y INTÉGRER LES DONNÉES REÇUS EN ITÉRANT DESSUS (BOUCLE réponse.forEach())
// 3°) ALLER CRÉER LES CLASSES Article ET ListArticles POUR AFFICHER LES ARTICLES PAR DATE DÉCROISSANTE, ET AFFICHER LES DATES AU FORMAT FR
//      3.5° A) classe Article: un article dans le fichier Article.js (Ajoutez-lui une propriété pour chaque donnée d’un article, et une méthode pour formater la date).
//      3.5° B) classe ListArticles: une liste d'articles dans le fichier js/ListArticles.js (Ajoutez-lui une propriété contenant la liste des articles, et une méthode pour trier la liste des articles par date décroissante).
// 4°) AJOUTER UN ÉVÈNEMENT SUR CHAQUE ÉTOILE DES ARTICLES POUR AJOUTER/ENLEVER (element.classList.toggle('artticle')) UNE CLASSE NOMMÉ "active"
// 5°) CRÉER DANS favorisManager.js LES 4 FONCTIONS NÉCESSAIRES À L'AJOUT D'ARTICLE DANS LE localStorage
// VOUS POUVEZ LES CRÉER ICI POUR TESTER LEUR FONCTIONNEMENT AVANT DE LES COUPER-COLLER DANS favorisManager.js
// VOUS POUVEZ ALORS AUSSI COMPLÉTER L'ÉVÈNEMENT CRÉÉ EN 3°) AFIN DE POUVOIR AJOUTER L'ARTICLE AU FAVORIS, ET INVERSEMENT L'ENLEVER DES FAVORIS.
// 6°) LORSQUE VOUS AVEZ EXPORTÉ CES FONCTIONS DANS favorisManager.js, LES IMPORTER DANS CE FICHIER (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/export#exemples)
// 6.5°) UTILISER CES FONCTIONS IMPORTÉS POUR COMPLÉTER L'ÉVÈNEMENT CRÉÉ EN 3°) AFIN DE POUVOIR AJOUTER L'ARTICLE AU FAVORIS, ET INVERSEMENT L'ENLEVER DES FAVORIS.

