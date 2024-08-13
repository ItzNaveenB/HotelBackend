const express = require('express');
const router = express.Router();
const extraServiceController = require('../controllers/extraServiceController');
const { authenticateUser } = require('../middleware/authMiddleware');
const { checkAdminRole } = require('../middleware/authMiddleware');

router.post('/extra-services', authenticateUser, checkAdminRole, extraServiceController.createExtraService);
router.get('/extra-services', authenticateUser, checkAdminRole, extraServiceController.getAllExtraServices);
router.get('/extra-services/:id', authenticateUser, checkAdminRole, extraServiceController.getExtraServiceById);
router.put('/extra-services/:id', authenticateUser, checkAdminRole, extraServiceController.updateExtraService);
router.delete('/extra-services/:id', authenticateUser, checkAdminRole, extraServiceController.deleteExtraService);

module.exports = router