/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 * 
 */

// 1°) CRÉER LE SQUELETTE D'UNE CLASSE, DU NOM DE Article
// 2°) DANS LE CONSTRUCTOR, RÉCUPÉRER LES PROPRIÉTÉS DE L'OBJET PASSÉ EN PARAMÈTRE, DANS LES PROPRIÉTÉ DE LA CLASSE
// 3°) CRÉER UNE MÉTHODE POUR FORMATER UN DATE EN FRANÇAIS
// 4°) C'EST TOUT :b

import * as Favs from "./favorisManager.js"

export default class Article {
    constructor(article) {
        // super()
        article && Object.assign(this,article)
        console.log(this)
    }
    convertDate() {
        const convertedDate = new Date(this.publicationDate).toLocaleDateString('fr')
        console.log(convertedDate)
        return convertedDate        
    }
    
    static render(article, isFav) {
        
        article = new this(article)
        $('.container')[0].innerHTML += `
            <div class="col-12 mt-5">
                <div class="card article">
                    <div class="card-header ">
                        <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.convertDate()}</span></h5>
                    </div>
                    <img src="http://localhost:4000/${article.image}" class="card-img-top">
                    <span data-id="${article.id}" class="fa-stack fa-2x addFavorite ${isFav || Favs.getFavorisIDs().includes(article.id)?"active":""}">
                        <i class="fas fa-star fa-stack-1x"></i>
                        <i class="far fa-star fa-stack-1x"></i>
                    </span>
                    <div class="card-body">
                        <p class="card-text">${article.content}</p>
                    </div>
                </div>
            </div>
        `
    }
    
}
// const chose = new Article()



