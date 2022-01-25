const router = require('express').Router();
const Recipe = require('../models/Recipe');
// renders home page on load 
router.get('/', async (req, res) => {
    res.render('home');
});
// renders search page
router.get('/search', async (req, res) => {
    res.render('search');
});
// get recipes that match 
router.get('/recipe-search', (req, res) => {
    const query = req.params;
    console.log(query);
    Recipe.findAll({
        where: {
            ingredients1: query
        }
    }).then((recipeData) => {
        res.json(recipeData);
    }).catch((err) => res.json(err));;
});

module.exports = router;