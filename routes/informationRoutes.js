const express = require('express');
const router = express.Router();
const informationController = require('../controllers/informationController');

// Route to create a new user
router.post('/users', informationController.createUser);

// Route to get all users
router.get('/users', informationController.getAllUsers);

// Route to get a user by ID
router.get('/users/:id', informationController.getUserById);

// Route to update a user by ID
router.put('/users/:id', informationController.updateUser);

// Route to delete a user by ID
router.delete('/users/:id', informationController.deleteUser);

module.exports = router;
