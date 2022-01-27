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
            ingredients1: req.body.ingredients1,
            ingredients2: req.body.ingredients2,
            ingredients3: req.body.ingredients3,
            ingredients4: req.body.ingredients4,
            ingredients5: req.body.ingredients5,
            ingredients6: req.body.ingredients6,
            ingredients7: req.body.ingredients7,
            ingredients8: req.body.ingredients8,
            ingredients9: req.body.ingredients9,
            ingredients10: req.body.ingredients10,
            ingredients11: req.body.ingredients11,
            ingredients12: req.body.ingredients12,
            ingredients13: req.body.ingredients13,
            ingredients14: req.body.ingredients14,
            ingredients15: req.body.ingredients15,
            ingredients16: req.body.ingredients16,
            ingredients17: req.body.ingredients17,
            ingredients18: req.body.ingredients18,
            ingredients19: req.body.ingredients19,
            ingredients20: req.body.ingredients20,
            meas1: req.body.meas1,
            meas2: req.body.meas2,
            meas3: req.body.meas3,
            meas4: req.body.meas4,
            meas5: req.body.meas5,
            meas6: req.body.meas6,
            meas7: req.body.meas7,
            meas8: req.body.meas8,
            meas9: req.body.meas9,
            meas10: req.body.meas10,
            meas11: req.body.meas11,
            meas12: req.body.meas12,
            meas13: req.body.meas13,
            meas14: req.body.meas14,
            meas15: req.body.meas15,
            meas16: req.body.meas16,
            meas17: req.body.meas17,
            meas18: req.body.meas18,
            meas19: req.body.meas19,
            meas20: req.body.meas20,
        })
        res.status(200).json(recipeData) // if status is 200 (good) convert recipe data to json
    }
    catch (err) { //if there's an error, print error in console log
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;