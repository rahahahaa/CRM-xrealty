const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Mock products data (replace with database later)
let products = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    description: 'High-performance laptop with M2 Pro chip, perfect for professional work and creative tasks',
    price: 2499.99,
    category: 'Electronics',
    stock: 25,
    createdAt: '2025-08-29T10:00:00.000Z'
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Latest smartphone with titanium design, A17 Pro chip, and advanced camera system',
    price: 999.99,
    category: 'Electronics',
    stock: 150,
    createdAt: '2025-08-29T11:00:00.000Z'
  },
  {
    id: '3',
    name: 'Breville Coffee Maker',
    description: 'Automatic espresso machine with built-in grinder for cafe-quality coffee at home',
    price: 599.99,
    category: 'Home & Kitchen',
    stock: 30,
    createdAt: '2025-08-29T12:00:00.000Z'
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air Max technology for maximum cushioning',
    price: 129.99,
    category: 'Sports',
    stock: 75,
    createdAt: '2025-08-29T13:00:00.000Z'
  },
  {
    id: '5',
    name: 'Kindle Paperwhite',
    description: 'Waterproof e-reader with 6.8" display and weeks of battery life',
    price: 139.99,
    category: 'Books',
    stock: 45,
    createdAt: '2025-08-29T14:00:00.000Z'
  },
  {
    id: '6',
    name: 'Instant Pot Duo',
    description: '7-in-1 electric pressure cooker for fast and healthy cooking',
    price: 89.99,
    category: 'Home & Kitchen',
    stock: 60,
    createdAt: '2025-08-29T15:00:00.000Z'
  },
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise-canceling headphones with exceptional sound quality',
    price: 399.99,
    category: 'Electronics',
    stock: 40,
    createdAt: '2025-08-29T16:00:00.000Z'
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat made from eco-friendly materials, perfect for home workouts',
    price: 49.99,
    category: 'Sports',
    stock: 100,
    createdAt: '2025-08-29T17:00:00.000Z'
  }
];

// Get all products
router.get('/', (req, res) => {
  try {
    const { category, search, sort = 'name' } = req.query;
    
    let filteredProducts = [...products];

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Search by name or description
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort products
    filteredProducts.sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'stock') return a.stock - b.stock;
      return a.name.localeCompare(b.name);
    });

    res.json({
      message: 'Products retrieved successfully',
      products: filteredProducts,
      total: filteredProducts.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Get product by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      message: 'Product retrieved successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

// Create new product
router.post('/', (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    if (!name || !description || !price || !category || stock === undefined) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    if (price < 0 || stock < 0) {
      return res.status(400).json({ 
        error: 'Price and stock must be non-negative' 
      });
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
      createdAt: new Date().toISOString()
    };

    products.push(newProduct);

    res.status(201).json({
      message: 'Product created successfully',
      product: newProduct
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Update product
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, stock } = req.body;

    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (price < 0 || stock < 0) {
      return res.status(400).json({ 
        error: 'Price and stock must be non-negative' 
      });
    }

    products[productIndex] = {
      ...products[productIndex],
      name: name || products[productIndex].name,
      description: description || products[productIndex].description,
      price: price !== undefined ? parseFloat(price) : products[productIndex].price,
      category: category || products[productIndex].category,
      stock: stock !== undefined ? parseInt(stock) : products[productIndex].stock
    };

    res.json({
      message: 'Product updated successfully',
      product: products[productIndex]
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const deletedProduct = products.splice(productIndex, 1)[0];

    res.json({
      message: 'Product deleted successfully',
      product: deletedProduct
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;


