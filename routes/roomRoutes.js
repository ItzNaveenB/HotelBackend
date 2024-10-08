const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomsController');
const { updateRoomStatus } = require("../controllers/roomsController");
const { authenticateUser, checkAdminRole } = require('../middleware/authMiddleware');

router.post('/rooms', authenticateUser, checkAdminRole, roomController.createRoom);
router.get('/rooms', roomController.getRooms);
router.get('/rooms/:id', roomController.getRoomById);
router.put('/rooms/:id', authenticateUser, checkAdminRole, roomController.updateRoom);
router.delete('/rooms/:id', authenticateUser, checkAdminRole, roomController.deleteRoom);
router.patch("/rooms/:id/status", updateRoomStatus);

module.exports = router;