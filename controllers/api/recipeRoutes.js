const router = require('express').Router();
const Recipe = require('../../models/Recipe');
// add a recipe to the database
router.post('/', async (req, res) => {
    try {
        const recipeData = await Recipe.create({ // adds recipe to "recipe" table in database 
            // come from HTTP request body in "apiCall.js"
            id: req.body.id,
            area: req.body.area,
            category: req.body.category,
            instructions: req.body.instructions,
            name: req.body.name,
            image: req.body.image,
            ingredients1: req.body.ingredients1
        })
        res.status(200).json(recipeData) // if status is 200 (good) convert recipe data to json
    }
    catch (err) { //if there's an error, print error in console log
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;