const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

// Query and list operations
router.get('/products', queryController.queryProducts);
router.get('/products/filter', queryController.filterProducts);
router.get('/products/search', queryController.searchProducts);

module.exports = router;
