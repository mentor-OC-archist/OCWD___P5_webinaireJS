/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */

// 1°) CRÉER LE SQUELETTE D'UNE CLASSE, DU NOM DE ListArticles
// 2°) DANS LE CONSTRUCTOR, CRÉER UNE PROPRIÉTÉ DE CLASSE NOMMÉ articles, À LAQUELLE VOUS ASSOCIEREZ L'OBJET PASSÉ EN PARAMÈTRE
// 3°) CRÉER UNE MÉTHODE POUR TRIER LES ÉLÉMENTS DE LA PROPRIÉTÉ .articles (créé en 2°) PAR DATE DÉCROISSANTE
// 4°) ET C'EST TOUT :P



import Article from "./Article.js"
import * as Favs from "./favorisManager.js"

export default class ListArticles {
    constructor(articles) {
        // super()
        articles && Object.assign(this,{articles})
        console.log(this)
        this.filterDateAsc()
    }
    filterDateAsc() {
        this.articles = this.articles.sort(function(a, b){return +new Date(a.publicationDate) - +new Date(b.publicationDate)})
        // console.log(this.articles);
    }
    
    static render(isFav=false, endpoint="http://localhost:4000/api/article") {
        
        fetch("http://localhost:4000/api/article")
        .then((resp)=>resp.json())
        .then(data=>{
            
            const listArticles = new this(
                !isFav 
                    ? data 
                    : data.filter(e=>Favs.getFavorisIDs().includes(e.id))
            )
            listArticles.articles.forEach((item,i) => {
                Article.render(item, isFav)
            })
            this.#addToFav()
        })
        .catch(error=>{console.error("//PUT YOUR CODE HERE IN CASE OF !!!FAILURE!!!", error)})
        .finally(()=>{console.warn("FINAL MESSAGE")})

    }
    
    
    static #addToFav() {
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
    }
    
    
    
    
}
// const chose = new ListArticles()



