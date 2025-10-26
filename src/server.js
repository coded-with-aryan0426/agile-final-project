const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const productRoutes = require('./routes/productRoutes');
const likeRoutes = require('./routes/likeRoutes');
const queryRoutes = require('./routes/queryRoutes');

app.use('/api/products', productRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/query', queryRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'E-commerce Catalog API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
