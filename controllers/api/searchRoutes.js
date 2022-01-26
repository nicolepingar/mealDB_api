const router = require('express').Router();
const Recipe = require('../../models/Recipe');

module.exports = router;

// get recipes that match
// router.get('/search', async (req, res) => {
//     try {
//         const query = req.params;
//         const data = await Recipe.findAll({
//             where: {
//                 ingredients1: query
//             }
//         });
//         if (!data) { // do we need this?
//             res.status(404).json({ message: 'No recipe found with that ingredient!' });
//             return;
//         }
//         res.render('search');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });