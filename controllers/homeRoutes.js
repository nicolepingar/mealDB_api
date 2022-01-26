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

module.exports = router;