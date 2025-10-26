const express = require('express');
const router = express.Router();

/**
 * Update an existing product
 * PUT /products/:id
 * 
 * Expected request body (all fields optional):
 * {
 *   "name": "Updated Product Name",
 *   "description": "Updated Description",
 *   "price": 149.99,
 *   "category": "Updated Category"
 * }
 */
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    
    // Validation - at least one field should be provided
    if (!name && !description && !price && !category) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'At least one field must be provided for update'
      });
    }
    
    // TODO: Implement database logic to update product
    // For now, returning a mock response
    const updatedProduct = {
      id,
      name: name || 'Sample Product',
      description: description || 'This is a sample product description',
      price: price || 99.99,
      category: category || 'Electronics',
      likes: 10,
      dislikes: 2,
      createdAt: '2025-10-26T15:00:00.000Z',
      updatedAt: new Date().toISOString()
    };
    
    res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
