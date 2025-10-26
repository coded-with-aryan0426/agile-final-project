const express = require('express');
const router = express.Router();

/**
 * Query products by specific criteria
 * GET /products/search?category=Electronics&minPrice=100&maxPrice=1000&sortBy=price
 * 
 * Supported query parameters:
 * - category: Filter by product category
 * - minPrice: Minimum price filter
 * - maxPrice: Maximum price filter
 * - sortBy: Sort by field (price, likes, createdAt)
 * - order: Sort order (asc, desc)
 */
router.get('/search', (req, res) => {
  try {
    const { category, minPrice, maxPrice, sortBy, order } = req.query;
    
    // TODO: Implement database logic to query products with filters
    // TODO: Implement proper sorting and filtering
    // For now, returning a mock response
    
    const mockProducts = [
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
      }
    ];
    
    let filteredProducts = mockProducts;
    
    // Apply filters (mock implementation)
    if (category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => 
        p.price >= parseFloat(minPrice)
      );
    }
    
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => 
        p.price <= parseFloat(maxPrice)
      );
    }
    
    res.status(200).json({
      message: 'Products queried successfully',
      count: filteredProducts.length,
      filters: { category, minPrice, maxPrice, sortBy, order },
      products: filteredProducts
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
