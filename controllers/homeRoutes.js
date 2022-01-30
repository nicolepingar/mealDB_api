const router = require('express').Router();
const Recipe = require('../models/Recipe');
const { Op } = require("sequelize");
// renders home page on load 
router.get('/', async (req, res) => {
    res.render('home');
});
// post request from search.js
router.post('/search', async (req, res) => {
    try {
        const ingData = await Recipe.findAll(
            {
                where: {
                    // find all recipes where req.body.ingredients = ingredients1 or ingredients2 or ...etc 
                    [Op.or]: [{ ingredients1: req.body.ingredients }, //https://infinitbility.com/sequelize-operators-example-with-query
                    { ingredients2: req.body.ingredients },
                    { ingredients3: req.body.ingredients },
                    { ingredients4: req.body.ingredients },
                    { ingredients5: req.body.ingredients },
                    { ingredients6: req.body.ingredients },
                    { ingredients7: req.body.ingredients },
                    { ingredients8: req.body.ingredients },
                    { ingredients9: req.body.ingredients },
                    { ingredients10: req.body.ingredients },
                    { ingredients11: req.body.ingredients },
                    { ingredients12: req.body.ingredients },
                    { ingredients13: req.body.ingredients },
                    { ingredients14: req.body.ingredients },
                    { ingredients15: req.body.ingredients },
                    { ingredients16: req.body.ingredients },
                    { ingredients17: req.body.ingredients },
                    { ingredients18: req.body.ingredients },
                    { ingredients19: req.body.ingredients },
                    { ingredients20: req.body.ingredients }]
                },
            });
        const banana = ingData.map((bananas) => bananas.get({ plain: true })); // data comes as array of objects so need to map over data 
        res.send(banana); // sends data back to front end 
    } catch (err) { //if there's an error, print error in console
        console.log(err);
        res.status(400).json(err);
    }
});
// renders search page
router.get('/search', async (req, res, next) => {
    res.render('search');
});

module.exports = router;