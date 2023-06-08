const express = require('express');
const router = express.Router();
const rentTools = require('../controllers/rentTools');

router.get('/:id', rentTools.getProductDetails);
router.post('/rezerwacja', rentTools.reserveTools);

module.exports = router;
