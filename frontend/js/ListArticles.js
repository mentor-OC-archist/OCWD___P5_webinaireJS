/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */

// 1°) CRÉER LE SQUELETTE D'UNE CLASSE, DU NOM DE ListArticles
// 2°) DANS LE CONSTRUCTOR, CRÉER UNE PROPRIÉTÉ DE CLASSE NOMMÉ articles, À LAQUELLE VOUS ASSOCIEREZ L'OBJET PASSÉ EN PARAMÈTRE
// 3°) CRÉER UNE MÉTHODE POUR TRIER LES ÉLÉMENTS DE LA PROPRIÉTÉ .articles (créé en 2°) PAR DATE DÉCROISSANTE
// 4°) ET C'EST TOUT :P


export default class ListArticles {
    // Public field declarations
    // publicField = 0;
    // Public Static field declarations
    // static staticField = 0;
    // Private field declarations
    // #privateField = 0;
    // Private Static field declarations
    // static #privateStaticField = 0;
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
    
    static render(param) {
        
    }
    
    
    
    
    
    
}
// const chose = new ListArticles()



