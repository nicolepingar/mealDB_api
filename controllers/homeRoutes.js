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
router.get('/search', async (req, res) => {
    try {
        const query = req.params;
        const data = await Recipe.findAll({
            where: {
                ingredients1: query
            }
        });
        if (!data) { // do we need this?
            res.status(404).json({ message: 'No recipe found with that ingredient!' });
            return;
        }
        res.render('search');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;