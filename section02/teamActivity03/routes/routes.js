const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.js');

router.get('/', productsController.getProducts);
router.get('/search', productsController.getSearchProducts);

module.exports = router;