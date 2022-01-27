const router = require('express').Router();
const Recipe = require('../../models/Recipe');

router.post('/', async (req, res) => {
    try {
        const ingData = await Recipe.findAll({ where: { ingredients1: req.body.ingredients } });
        if (!ingData) {
            res
                .status(400)
                .json({ message: 'No recipe with that ingredient, please try again' });
            return;
        }
        res.status(200).json({ ingData });
        console.log(ingData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;