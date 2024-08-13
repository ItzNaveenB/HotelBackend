const express = require('express');
const router = express.Router();
const superadminController = require('./superadminController');
const { authenticateUser,checkSuperadminRole } = require('../middleware/authMiddleware');

// Users
router.get('/superadmin/users', authenticateUser, checkSuperadminRole, superadminController.getAllUsers);
router.post('/superadmin/users', authenticateUser, checkSuperadminRole, superadminController.createUser);
router.put('/superadmin/users/:id', authenticateUser, checkSuperadminRole, superadminController.updateUser);
router.delete('/superadmin/users/:id', authenticateUser, checkSuperadminRole, superadminController.deleteUser);

// Hotels
router.get('/superadmin/hotels', authenticateUser, checkSuperadminRole, superadminController.getAllHotels);
router.post('/superadmin/hotels', authenticateUser, checkSuperadminRole, superadminController.createHotel);
router.put('/superadmin/hotels/:id', authenticateUser, checkSuperadminRole, superadminController.updateHotel);
router.delete('/superadmin/hotels/:id', authenticateUser, checkSuperadminRole, superadminController.deleteHotel);

// Rooms
router.get('/superadmin/rooms', authenticateUser, checkSuperadminRole, superadminController.getAllRooms);
router.post('/superadmin/rooms', authenticateUser, checkSuperadminRole, superadminController.createRoom);
router.put('/superadmin/rooms/:id', authenticateUser, checkSuperadminRole, superadminController.updateRoom);
router.delete('/superadmin/rooms/:id', authenticateUser, checkSuperadminRole, superadminController.deleteRoom);

module.exports = router;
