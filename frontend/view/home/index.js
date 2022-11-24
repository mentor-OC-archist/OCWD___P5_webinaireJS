/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
// import AManager from "../../js/articleManager"


// 0°) AJOUTER LE SCRIPT home.js DANS LE <head/> DU FICHIER home.html, avec les attribut "type='module'" et "defer"
// 1°) FETCHER L'API, ET LA STOCKER DANS UNE VARIABLE
// 2°) RÉCUPÉRER LE TEMPLATE D'UN ARTICLE ET UTILISER LE Template Literals POUR Y INTÉGRER LES DONNÉES REÇUS EN ITÉRANT DESSUS (BOUCLE réponse.forEach())
// 2.5°) ALLER CRÉER LES CLASSES Article ET ListArticles POUR AFFICHER LES ARTICLE PAR DATE DÉCROISSANTE, ET AFFICHER LES DATES AU FORMAT FR
// 3°) AJOUTER UN ÉVÈNEMENT SUR CHAQUE ÉTOILE DES ARTICLES POUR AJOUTER/ENLEVER (element.classList.toggle('artticle')) UNE CLASSE NOMMÉ "active"
// 4°) CRÉER DANS favorisManager.js LES 4 FONCTIONS NÉCESSAIRES À L'AJOUT D'ARTICLE DANS LE localStorage
// VOUS POUVEZ LES CRÉER ICI POUR TESTER LEUR FONCTIONNEMENT AVANT DE LES COUPER-COLLER DANS favorisManager.js
// VOUS POUVEZ ALORS AUSSI COMPLÉTER L'ÉVÈNEMENT CRÉÉ EN 3°) AFIN DE POUVOIR AJOUTER L'ARTICLE AU FAVORIS, ET INVERSEMENT L'ENLEVER DES FAVORIS.
// 5°) LORSQUE VOUS AVEZ EXPORTÉ CES FONCTIONS DANS favorisManager.js, LES IMPORTER DANS CE FICHIER (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/export#exemples)
// 5.5°) UTILISER CES FONCTIONS IMPORTÉS POUR COMPLÉTER L'ÉVÈNEMENT CRÉÉ EN 3°) AFIN DE POUVOIR AJOUTER L'ARTICLE AU FAVORIS, ET INVERSEMENT L'ENLEVER DES FAVORIS.



fetch('http://localhost:4000/api/article')
    .then(r=>r.json())
    .then(json=>{
        // console.log(json)
        let articles = new MesArticles(json)
        json.map(x=>{
            document.querySelector('.container').innerHTML += `
            <div class="col-12 mt-5">
                <div class="card article">
                    <div class="card-header ">
                        <h5 class="card-title d-flex justify-content-between">${x.title}<span class="publication-date">${x.publicationDate}</span></h5>
                    </div>
                    <img src="http://localhost:4000/${x.image}" class="card-img-top">
                    <span class="fa-stack fa-2x addFavorite" data-id="${x.id}">
                        <i class="fas fa-star fa-stack-1x"></i>
                        <i class="far fa-star fa-stack-1x"></i>
                    </span>
                    <div class="card-body">
                        <p class="card-text">${x.content}</p>
                    </div>
                </div>
            </div>
            `
        })
        document.querySelectorAll('.addFavorite').forEach(x=>{
            x.addEventListener('click', function(){
                console.log(this);
                if(this.classList.contains('active')){
                    this.classList.remove('active')
                    delFav(this.dataset.id)
                }else{
                    this.classList.add('active')
                    alert(this.dataset.id);
                    addFav(this.dataset.id)
                }
            })
        })
    })