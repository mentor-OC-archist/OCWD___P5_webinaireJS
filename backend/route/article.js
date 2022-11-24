  
const express = require('express');
const router = express.Router();
const article = require('../controller/article');


router.get('/', article.getAll)
router.get('/:id', article.getById)
router.get('/', article.getFavorites)

module.exports = router;