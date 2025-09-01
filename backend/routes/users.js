const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Mock users data (replace with database later)
let users = [
  {
    id: '1',
    username: 'john_doe',
    email: 'john@example.com',
    role: 'user',
    createdAt: '2025-08-29T10:00:00.000Z'
  },
  {
    id: '2',
    username: 'jane_smith',
    email: 'jane@example.com',
    role: 'admin',
    createdAt: '2025-08-29T11:00:00.000Z'
  },
  {
    id: '3',
    username: 'mike_wilson',
    email: 'mike@example.com',
    role: 'user',
    createdAt: '2025-08-29T12:00:00.000Z'
  },
  {
    id: '4',
    username: 'sarah_jones',
    email: 'sarah@example.com',
    role: 'admin',
    createdAt: '2025-08-29T13:00:00.000Z'
  },
  {
    id: '5',
    username: 'alex_brown',
    email: 'alex@example.com',
    role: 'user',
    createdAt: '2025-08-29T14:00:00.000Z'
  }
];

// Get all users
router.get('/', (req, res) => {
  try {
    res.json({
      message: 'Users retrieved successfully',
      users: users.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Get user by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      message: 'User retrieved successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

// Create new user
router.post('/', (req, res) => {
  try {
    const { username, email, role = 'user' } = req.body;

    if (!username || !email) {
      return res.status(400).json({ error: 'Username and email are required' });
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      role,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Update user
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role } = req.body;

    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    users[userIndex] = {
      ...users[userIndex],
      username: username || users[userIndex].username,
      email: email || users[userIndex].email,
      role: role || users[userIndex].role
    };

    res.json({
      message: 'User updated successfully',
      user: users[userIndex]
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    res.json({
      message: 'User deleted successfully',
      user: deletedUser
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;


