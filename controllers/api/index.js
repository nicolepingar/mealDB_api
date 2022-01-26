const router = require('express').Router();

const recipeRoutes = require('./recipeRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/recipes', recipeRoutes);
router.use('/search-recipes', searchRoutes);

module.exports = router;
