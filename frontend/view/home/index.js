/**
 * Gère l'affichage et les interactions de la page d'accueil
 */


// 0°) AJOUTER LE SCRIPT home/index.js DANS LE <head/> DU FICHIER home/index.html, avec les attribut "type='module'" et "defer"
// 1°) FETCHER L'API, ET LA STOCKER DANS UNE VARIABLE
// 2°) RÉCUPÉRER LE TEMPLATE D'UN ARTICLE ET UTILISER LE Template Literals POUR Y INTÉGRER LES DONNÉES REÇUS EN ITÉRANT DESSUS (BOUCLE réponse.forEach())
// 3°) ALLER CRÉER LES CLASSES Article ET ListArticles POUR AFFICHER LES ARTICLES PAR DATE DÉCROISSANTE, ET AFFICHER LES DATES AU FORMAT FR
//      3.5° A) classe ListArticles: une liste d'articles dans le fichier js/ListArticles.js (Ajoutez-lui une propriété contenant la liste des articles, et une méthode pour trier la liste des articles par date décroissante).
//      3.5° B) classe Article: un article dans le fichier Article.js (Ajoutez-lui une propriété pour chaque donnée d’un article, et une méthode pour formater la date).
// 4°) AJOUTER UN ÉVÈNEMENT SUR CHAQUE ÉTOILE DES ARTICLES POUR AJOUTER/ENLEVER (element.classList.toggle('artticle')) UNE CLASSE NOMMÉ "active"
// 5°) CRÉER DANS favorisManager.js LES 4 FONCTIONS NÉCESSAIRES À L'AJOUT D'ARTICLE DANS LE localStorage
// VOUS POUVEZ LES CRÉER ICI POUR TESTER LEUR FONCTIONNEMENT AVANT DE LES COUPER-COLLER DANS favorisManager.js
// VOUS POUVEZ ALORS AUSSI COMPLÉTER L'ÉVÈNEMENT CRÉÉ EN 3°) AFIN DE POUVOIR AJOUTER L'ARTICLE AU FAVORIS, ET INVERSEMENT L'ENLEVER DES FAVORIS.
// 6°) LORSQUE VOUS AVEZ EXPORTÉ CES FONCTIONS DANS favorisManager.js, LES IMPORTER DANS CE FICHIER (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/export#exemples)
// 6.5°) UTILISER CES FONCTIONS IMPORTÉS POUR COMPLÉTER L'ÉVÈNEMENT CRÉÉ EN 4°) AFIN DE POUVOIR AJOUTER L'ARTICLE AU FAVORIS, ET INVERSEMENT L'ENLEVER DES FAVORIS.

import ListArticles from "../../js/ListArticles.js"
import Article from "../../js/Article.js"
import * as Favs from "../../js/favorisManager.js"



fetch("http://localhost:4000/api/article")
    .then((resp)=>resp.json())
    .then(data=>{
        // data// PUT YOUR CODE HERE IN CASE OF !!!SUCCESS!!!}
        console.log('data:', data)
        const listArticles = new ListArticles(data)
        listArticles.articles.forEach((item,i) => {
            item = new Article(item)
            $('.container')[0].innerHTML += `
                <div class="col-12 mt-5">
                    <div class="card article">
                        <div class="card-header ">
                            <h5 class="card-title d-flex justify-content-between">${item.title}<span class="publication-date">${item.convertDate()}</span></h5>
                        </div>
                        <img src="http://localhost:4000/${item.image}" class="card-img-top">
                        <span data-id="${item.id}" class="fa-stack fa-2x addFavorite">
                            <i class="fas fa-star fa-stack-1x"></i>
                            <i class="far fa-star fa-stack-1x"></i>
                        </span>
                        <div class="card-body">
                            <p class="card-text">${item.content}</p>
                        </div>
                    </div>
                </div>
            `
        })
        // console.log($('.addFavorite'));
        Array.from($('.addFavorite')).forEach(elt=>{
            elt.addEventListener('click', e=>{
                // console.log(e.target);
                const star = e.target.classList.contains("addFavorite") ? e.target : e.target.closest('.addFavorite')
                // console.log(star);
                star.classList.toggle('active')
                if(star.classList.contains('active')){
                    Favs.addArticle(star.dataset.id)
                }else Favs.deleteArticle(star.dataset.id)
            })
        })
    })
    .catch(error=>{console.error("/*PUT YOUR CODE HERE IN CASE OF !!!FAILURE!!!*/", error)})
    .finally(()=>{console.warn("FINAL MESSAGE")})

