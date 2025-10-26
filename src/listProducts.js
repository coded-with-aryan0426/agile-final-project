const express = require('express');
const router = express.Router();

/**
 * List all products
 * GET /products
 */
router.get('/', (req, res) => {
  try {
    // TODO: Implement database logic to retrieve all products
    // TODO: Implement pagination for large datasets
    // For now, returning a mock response
    
    const products = [
      {
        id: '1',
        name: 'Laptop',
        description: 'High-performance laptop',
        price: 999.99,
        category: 'Electronics',
        likes: 15,
        dislikes: 2
      },
      {
        id: '2',
        name: 'Smartphone',
        description: 'Latest smartphone model',
        price: 699.99,
        category: 'Electronics',
        likes: 25,
        dislikes: 3
      },
      {
        id: '3',
        name: 'Headphones',
        description: 'Wireless noise-cancelling headphones',
        price: 199.99,
        category: 'Audio',
        likes: 30,
        dislikes: 5
      }
    ];
    
    res.status(200).json({
      message: 'Products retrieved successfully',
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
