const router = require('express').Router();
const Recipe = require('../../models/Recipe');
const { Op } = require("sequelize"); //{ [Op.eq]: req.body.ingredients }

router.post('/', async (req, res) => {
    try {
        const ingData = await Recipe.findAll(
            {
                where:
                    { ingredients1: req.body.ingredients }
            });
        res.status(200).json(ingData);
        console.log(ingData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }


});

module.exports = router;



// Recipe.findAll({ where: { ingredients1: { [Op.eq]: req.body.ingredients } } })
// .then(docs => {
//     const response = {
//         Deal: docs.map(doc => {
//             return {

//                 doc
//             }
//         })
//     }

//     res.status(200).json(response)
//     console.log(response);
// })

// try {
//     const ingData = await Recipe.findAll(
//         {
//             where:
//                 { ingredients1: req.body.ingredients }
//         });
//     // if (!ingData) {
//     //     res
//     //         .status(400)
//     //         .json({ message: 'No recipe with that ingredient, please try again' });
//     //     return;
//     // }
//     // const banana = ingData.get({ plain: true });
//     // res.render('search', {
//     //     banana,
//     // });
//     res.status(200).json(ingData);
//     console.log(ingData);
// } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
// }

  // if (!ingData) {
        //     res
        //         .status(400)
        //         .json({ message: 'No recipe with that ingredient, please try again' });
        //     return;
        // }
        // const banana = ingData.get({ plain: true });
        // res.render('search', {
        //     banana,
        // });