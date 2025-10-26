const express = require('express');
const router = express.Router();

/**
 * Create a new product
 * POST /products
 * 
 * Expected request body:
 * {
 *   "name": "Product Name",
 *   "description": "Product Description",
 *   "price": 99.99,
 *   "category": "Category Name"
 * }
 */
router.post('/', (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    
    // Validation
    if (!name || !description || !price || !category) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Missing required fields: name, description, price, category'
      });
    }
    
    // TODO: Implement database logic to create product
    // For now, returning a mock response
    const product = {
      id: Date.now().toString(), // Mock ID generation
      name,
      description,
      price,
      category,
      likes: 0,
      dislikes: 0,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json({
      message: 'Product created successfully',
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
