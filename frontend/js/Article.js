/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 * 
 */

// 1°) CRÉER LE SQUELETTE D'UNE CLASSE, DU NOM DE Article
// 2°) DANS LE CONSTRUCTOR, RÉCUPÉRER LES PROPRIÉTÉS DE L'OBJET PASSÉ EN PARAMÈTRE, DANS LES PROPRIÉTÉ DE LA CLASSE
// 3°) CRÉER UNE MÉTHODE POUR FORMATER UN DATE EN FRANÇAIS
// 4°) C'EST TOUT :b






class MesArticles {
    // Public field declarations
    // publicField = 0;
    // Private field declarations
    // #privateField = 0;
    constructor(articles) {
        let articleManager = new AManager(articles)
        articles && Object.assign(this,articleManager.filterDesc(articles))
    }
    dateFormat(date) {
        let dateObject = Date.parse(date)
        , newDate = new Date(dateObject)
        return newDate.toLocaleDateString('fr-FR')
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