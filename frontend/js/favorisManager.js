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



export function getAllFavoris(){
    return JSON.parse(localStorage.listFavorites || "[]")
}


export function saveArticle(object, key="listFavorites"){
    localStorage[key] = JSON.stringify(object)
}


export function addArticle(articleID){
    localStorage.listFavorites = JSON.stringify([...getAllFavoris(), {id: parseInt(articleID), timestamp: +new Date()}])
}


export function deleteArticle(articleID){
    localStorage.listFavorites = JSON.stringify(getAllFavoris().filter(item=>item.id!=articleID))
}


export function getFavorisIDs(){
    return getAllFavoris().map(item=>item.id)
}



