/**
 * Gère l'affichage et les interactions de la page de contact
 */
/*
textarea: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
Constraint validation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
attribut pattern: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
setcustomvalidity: https://www.w3schools.com/js/js_validation_api.asp
learn regex: https://regexone.com/
text2regex: https://www.autoregex.xyz/
regex2text: https://www.browserling.com/tools/text-from-regex
*/

/*
importer "index.js" dans "index.html" avec l'attribut "defer"



pour tous les input et textarea, rajouter un "id", et compléter par un attribut "for" les balises label associées 
pour tous les input et textarea, rajouter un attribut "required"
pour tous les input et textarea, rajouter un attribut "placeholder"
pour l'input "noms", rajouter un title 

pour tous les input, en css rajouter des regles css, via les pseudo-formats ":valid", ":invalid", et ":placeholder-shown"
pour le textarea, en css rajouter dans les sélecteurs des règles précédentes un cas pour le textarea mais avec un nom de classe plutot que les pseudo-formats

pour l'input "noms", rajouter un attribut "pattern", et y mettre une regex que vous créerez pour vérifier "contient au moins 2 mots, dont le 1er est en majuscule et le 2nd est Capitalisé, séparés par une virgule suivi d'un espace: 'TEST, Prenom'"
pour l'input "message", rajouter deux attributs "minlength" et "maxlength" aux valeurs respectives 10 et 5000 sur message
OPTION A) pour l'input "age", créer une regex pour vérifier "compris entre 18 et 120", et placer la dans un attribut pattern, puis rajouter un title décrivant cette regex
OPTION B) pour l'input "age", rajouter deux attribut "min" et "max"



puis pour l'input "message", rajouter un event "change", dedans: 
    créer une variable contenant une regex pour "ne contient aucun caractère spéciaux"
    tester la regex sur la "value" du textarea "message": 
        si la réponse est false: 
            rajouter lui une classe d'échec via classList (et lui enlever toute autre classe de validation)
            et utiliser la methode DOM .setCustomValidity("message d'erreur") sur le textarea "message"
        si la réponse est true
            rajouter lui une class de succès via classList (et lui enlever toute autre classe de validation)
            et utiliser la methode DOM .setCustomValidity("") sur le textarea "message" pour annuler l'erreur (potentiellement déclenchée en cas d'un 1er false)



pour le formulaire, rajouter un event "submit", dedans: 
    enlever le comportement par défaut du formulaire
    créer une variable contenant un objet, dans lequel vous créez une(1) clé "datas" étant un objet  pour l'instant vide
    faite un log de la l'objet DOM validity sur le textarea "message", puis de sa propriété DOM validity.valid
    si validity.valid est true, rediriger la page vers google xD
        récupérer toutes les valeurs du formulaire, pour les insérer à la clé "datas" de l'objet créé précédement
            chaque valeur d'input associée à la valeur de l'attribut "name" de cette l'input
        puis, fetcher ces données en POST vers le endpoint "/api/contact"
            à la reception de la réponse du serveur(le backend) de cette requête, afficher dans un alert() le message de confirmation reçu (clé "confirmID"), ou le message d'erreur reçu (clé "message")'
    sinon ....ne rien faire



enfin, utiliser des outils de bundler, comme webpack ou parcel pour ...bundler votre application (càd l'optimiser grâce à ces outils)
    avec webpack:
        installer toutes les dépendances npm
            npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env babel-polyfill
        créer un fichier webpack.config.js à la racine de votre projet,
        le remplir avec les informations présentés dans le cours, ou sur la documentation de webpack
            https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577766-compilez-et-executez-votre-code
            https://webpack.js.org/guides/getting-started/
        puis lancer la commande: npx webpack (à la racine du projet)
        puis ouvrir une page sur le browser à l'adresse du localhost indiqué
    avec parcel:
        lancer juste la commande: npx parcel frontend/view/home/index.html
        puis ouvrir une page sur le browser à l'adresse: http://localhost:1234
*/





