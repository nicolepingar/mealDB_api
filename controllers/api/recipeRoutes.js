const router = require('express').Router();
const Recipe = require('../../models/Recipe');
// add a recipe to the database
router.post('/', async (req, res) => {
    try {
        const recipeData = await Recipe.create({
            id: req.body.id,
            area: req.body.area,
            category: req.body.category,
            instructions: req.body.instructions,
            name: req.body.name,
            image: req.body.image,
            ingredients1: req.body.ingredients1,
        })
        res.status(200).json("STATUS GOOD!!!!!!!!!!!!!!!!", recipeData)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;