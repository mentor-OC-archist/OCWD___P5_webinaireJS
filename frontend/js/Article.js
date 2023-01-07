/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 * 
 */

// 1°) CRÉER LE SQUELETTE D'UNE CLASSE, DU NOM DE Article
// 2°) DANS LE CONSTRUCTOR, RÉCUPÉRER LES PROPRIÉTÉS DE L'OBJET PASSÉ EN PARAMÈTRE, DANS LES PROPRIÉTÉ DE LA CLASSE
// 3°) CRÉER UNE MÉTHODE POUR FORMATER UN DATE EN FRANÇAIS
// 4°) C'EST TOUT :b


export default class Article {
    // Public field declarations
    // publicField = 0;
    // Public Static field declarations
    // static staticField = 0;
    // Private field declarations
    // #privateField = 0;
    // Private Static field declarations
    // static #privateStaticField = 0;
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
    
    static render() {
        
    }
    
}
// const chose = new Article()



