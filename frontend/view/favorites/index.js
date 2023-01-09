/**
 * Gère l'affichage et les interactions de la page des favoris
 */

// 1°) REQUÊTER LE BACKEND AVEC LE VERBE "POST", ET AVEC EN PARAMÈTRE BODY DE LA REQUÊTE, À LA CLÉ "favorites" UN ARRAY CONTENANT LES IDs DES ARTICLES MIS EN FAVORIES ({"favorites": getFavorisIDs()}), 
//     AFIN DE RÉCUPÉRER L'ENSEMBLE DES PRODUITS CORRESPONDANTS AUX PRODUITS PRÉSENTS DANS LE localStorage (UTILISER LA FONCTION getFavorisIDs())
// 2°) REFAIRE CE QUI A ÉTÉ FAIT DANS LA PAGE D'ACCUEIL (home/index.js) AFIN D'AFFICHER LES ARTICLES PAR DATE DÉCROISSANTE, ET AVEC LA DATE AFFICHÉ AU FORMAT FR



import ListArticles from "../../js/ListArticles.js"

ListArticles.render(true)

/*
fetch("http://localhost:4000/api/article", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({favorites: Favs.getFavorisIDs()})
    //...
})
    .then((resp)=>resp.json())
    .then(data=>{
        // PUT YOUR CODE HERE IN CASE OF !!!SUCCESS!!!
        // console.log(data);
        data.forEach((item,i) => {
            item = new Article(item)
            $('.container')[0].innerHTML += `
                <div class="col-12 mt-5">
                    <div class="card article">
                        <div class="card-header ">
                            <h5 class="card-title d-flex justify-content-between">${item.title}<span class="publication-date">${item.convertDate()}</span></h5>
                        </div>
                        <img src="http://localhost:4000/${item.image}" class="card-img-top">
                        <span data-id="${item.id}" class="fa-stack fa-2x addFavorite active">
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
    .catch(error=>{console.error("//PUT YOUR CODE HERE IN CASE OF !!!FAILURE!!!", error)})
    .finally(()=>{console.warn("FINAL MESSAGE")})

*/




