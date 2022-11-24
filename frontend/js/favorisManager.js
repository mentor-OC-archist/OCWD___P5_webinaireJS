/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

// 1°) CRÉER LE SQUELETTE DE 5 FONCTIONS, PORTANT LES NOM SUIVANT: getAllFavoris, saveArticle, addArticle, deleteArticle, ET getFavorisIDs
// 2°) POUR getAllFavoris(), RÉCUPÉRER DANS LE localStorage LA CLÉ "listFavorites"
// 3°) POUR saveArticle(favorisToSave), ENREGISTRER DANS LE localStorage À LA CLÉ "listFavorites" L'OBJET PASSÉ EN PARAMÈTRE
// 4°) POUR addArticleToFavoris,        VÉRIFIER SI LE PARAMÈTRE EXISTE, PUIS RÉCUPÉRER TOUS LES FAVORIS DANS UNE VARIABLE, À LAQUELLE VOUS     AJOUTEREZ       L'ID PASSÉ EN PARAMÈTRE AINSI QUE LA DATE DE L'AJOUT (new Date()), ET ENFIN ENREGISTRER LE TOUT DANS LE localStorage
// 5°) POUR deleteArticleFromFavoris,   VÉRIFIER SI LE PARAMÈTRE EXISTE, PUIS RÉCUPÉRER TOUS LES FAVORIS DANS UNE VARIABLE, À LAQUELLE VOUS     RETIREREZ       L'ID PASSÉ EN PARAMÈTRE, ET ENFIN ENREGISTRER LE TOUT DANS LE localStorage
// 6°) POUR getFavorisIDs, RÉCUPÉRER TOUS LES FAVORIS DANS UNE VARIABLE, PUIS RETOURNER UN ARRAY NE COMPRENANT QUE L'ID DE CHACUN D'EUX
// 7°) EXPORTER TOUTES LE FONCTION À L'AIDE DE: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/export#utilisation_dexports_nommés







//Récupérer tous les favoris du localStorage
let getFavs = () => {
    console.log(localStorage.getItem('listFavorites'))
    return JSON.parse(localStorage.getItem('listFavorites') || "[]")
}
// Ajouter un nouveau favoris au localStorage
let addFav = (id=null) => {
    if(id){
        let favs = getFavs()
        favs.push({id, date: new Date()})
        saveFav(favs)
    }else alert("Vous devez fourni un identifiant d'article (function addFav)")
}
//Supprimer un favoris existant du localStorage
let delFav = (id=null) => {
    if(id){
        let favs = getFavs()
        favs = favs.filter(x=>{
            console.log(id);
            console.log(x.id);
            console.log(x.id!=id);
            return x.id!=id
        })
        console.log(favs);
        saveFav(favs)
        // saveFav(getFavs().filter(x=>x.id==id))
    }else alert("Vous devez fourni un identifiant d'article (function delFav)")
    
}
//Redéfinir le localStorage à partir de l'objet de favoris passé en paramètre
let saveFav = (favsObj=null) => {
    if(favsObj)localStorage.setItem("listFavorites", JSON.stringify(favsObj))
    else alert("Aucun objet n'a été fourni pour la sauvegarde dans localStorage")
}
//Retourner un tableau avec les id des favoris
let getFavsIds = () => {
    return getFavs().map(x=>x.id)
}