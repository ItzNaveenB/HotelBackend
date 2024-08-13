const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
const { authenticateUser, checkAdminRole } = require('../middleware/authMiddleware');


router.post('/requests', authenticateUser, checkAdminRole, requestController.createRequest);
router.get('/requests', authenticateUser, requestController.getAllRequests);
router.get('/requests/:id', authenticateUser, requestController.getRequestById);
router.put('/requests/:id', authenticateUser, checkAdminRole, requestController.updateRequest);
router.delete('/requests/:id', authenticateUser, checkAdminRole, requestController.deleteRequest);

module.exports = router;