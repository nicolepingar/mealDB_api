const router = require('express').Router();
const Recipe = require('../../models/Recipe');
const { Op } = require("sequelize"); //{ [Op.eq]: req.body.ingredients }   where: { ingredients1: { [Op.eq]: req.body.ingredients } }

router.post('/', async (req, res) => {
    try {
        const ingData = await Recipe.findAll(
            {
                where: {
                    [Op.or]: { ingredients1: req.body.ingredients },
                    [Op.or]: { ingredients2: req.body.ingredients },
                    [Op.or]: { ingredients3: req.body.ingredients },
                    [Op.or]: { ingredients4: req.body.ingredients },
                    [Op.or]: { ingredients5: req.body.ingredients },
                    [Op.or]: { ingredients6: req.body.ingredients },
                    [Op.or]: { ingredients7: req.body.ingredients },
                    [Op.or]: { ingredients8: req.body.ingredients },
                    [Op.or]: { ingredients9: req.body.ingredients },
                    [Op.or]: { ingredients10: req.body.ingredients },
                    [Op.or]: { ingredients11: req.body.ingredients },
                    [Op.or]: { ingredients12: req.body.ingredients },
                    [Op.or]: { ingredients13: req.body.ingredients },
                    [Op.or]: { ingredients14: req.body.ingredients },
                    [Op.or]: { ingredients15: req.body.ingredients },
                    [Op.or]: { ingredients16: req.body.ingredients },
                    [Op.or]: { ingredients17: req.body.ingredients },
                    [Op.or]: { ingredients18: req.body.ingredients },
                    [Op.or]: { ingredients19: req.body.ingredients },
                    [Op.or]: { ingredients20: req.body.ingredients },
                },
            });
        console.log(ingData.length);
        const banana = ingData.map((bananas) => bananas.get({ plain: true }));
        // console.log('banana', banana);
        res.render('search', {
            banana,
        });
        //res.status(200).json(ingData);
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