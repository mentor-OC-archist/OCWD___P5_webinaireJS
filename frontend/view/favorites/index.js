/**
 * Gère l'affichage et les interactions de la page des favoris
 */

// 1°) REQUÊTER LE BACKEND AVEC LE VERBE "POST", AFIN DE RÉCUPÉRER L'ENSEMBLE DES PRODUITS CORRESPONDANTS AUX PRODUITS PRÉSENTS DANS LE localStorage (UTILISER LA FONCTION getFavorisIDs())
// 2°) REFAIRE CE QUI A ÉTÉ FAIT DANS LA PAGE D'ACCUEIL (home.js) AFIN D'AFFICHER TOUS LES PRODUITS RÉCUPÉRÉS EN 1°) ET DE LES AFFICHER PAR DATE DÉCROISSANTE, AVEC LA DATE AFFICHÉ AU FORMAT FR







fetch("http://localhost:4000/api/article", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({ favorites: getFavsIds() }),
})
  .then((r) => r.json())
  .then((json) => {
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
                <span class="fa-stack fa-2x addFavorite active off" data-id="${x.id}">
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
  });
