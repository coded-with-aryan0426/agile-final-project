const express = require('express');
const router = express.Router();

/**
 * Retrieve a specific product by ID
 * GET /products/:id
 */
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Implement database logic to retrieve product
    // For now, returning a mock response
    const product = {
      id,
      name: 'Sample Product',
      description: 'This is a sample product description',
      price: 99.99,
      category: 'Electronics',
      likes: 10,
      dislikes: 2,
      createdAt: '2025-10-26T15:00:00.000Z',
      updatedAt: '2025-10-26T15:00:00.000Z'
    };
    
    res.status(200).json({
      message: 'Product retrieved successfully',
      product
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
