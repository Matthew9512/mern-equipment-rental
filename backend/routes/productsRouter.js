const express = require('express');
const router = express.Router();
const searchProducts = require('../controllers/searchProducts');

router.get('/q', searchProducts.searchByName);
router.get('/wyroznione', searchProducts.featuresProducts);
router.get('/:kategoriaProduktu', searchProducts.searchByCategory);

module.exports = router;
