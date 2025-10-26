const express = require('express');
const createProduct = require('./createProduct');
const retrieveProduct = require('./retrieveProduct');
const updateProduct = require('./updateProduct');
const deleteProduct = require('./deleteProduct');
const likeProduct = require('./likeProduct');
const dislikeProduct = require('./dislikeProduct');
const listProducts = require('./listProducts');
const queryProducts = require('./queryProducts');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Product Catalog API',
    version: '1.0.0',
    endpoints: {
      createProduct: 'POST /products',
      retrieveProduct: 'GET /products/:id',
      updateProduct: 'PUT /products/:id',
      deleteProduct: 'DELETE /products/:id',
      likeProduct: 'POST /products/:id/like',
      dislikeProduct: 'POST /products/:id/dislike',
      listProducts: 'GET /products',
      queryProducts: 'GET /products/search'
    }
  });
});

// Register routes - IMPORTANT: Order matters! More specific routes first
app.use('/products', queryProducts);  // /products/search must come before /:id
app.use('/products', listProducts);   // /products (list all)
app.use('/products', likeProduct);    // /products/:id/like
app.use('/products', dislikeProduct); // /products/:id/dislike
app.use('/products', createProduct);  // POST /products
app.use('/products', retrieveProduct); // GET /products/:id
app.use('/products', updateProduct);  // PUT /products/:id
app.use('/products', deleteProduct);  // DELETE /products/:id

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Product Catalog API server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});

module.exports = app;
