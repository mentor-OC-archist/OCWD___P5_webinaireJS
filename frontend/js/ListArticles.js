/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */

// 1°) CRÉER LE SQUELETTE D'UNE CLASSE, DU NOM DE ListArticles
// 2°) DANS LE CONSTRUCTOR, CRÉER UNE PROPRIÉTÉ DE CLASSE NOMMÉ articles, À LAQUELLE VOUS ASSOCIEREZ L'OBJET PASSÉ EN PARAMÈTRE
// 3°) CRÉER UNE MÉTHODE POUR TRIER LES ÉLÉMENTS DE LA PROPRIÉTÉ .articles (créé en 2°) PAR DATE DÉCROISSANTE
// 4°) ET C'EST TOUT :P








/*export default */class AManager {
    // Public field declarations
    // publicField = 0;
    // Private field declarations
    // #privateField = 0;
    constructor(articles) {
        this.articles = articles
    }
    filterDesc() {
        return this.articles.sort((a,b)=> +new Date(b.publicationDate) - +new Date(a.publicationDate))
    }
/*
    // Setter
    set _props(props) {
        this.props = props;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.props;
    }
    // Generator *Method
    *getSides() {
            for (const side of this.sides) {
            yield side;
        }
    }
    // Static Properties
    static displayName = "VALUE";
    // Static Methods
    static distance(a) {
        
    }
*/
}