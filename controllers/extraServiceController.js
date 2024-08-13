
const ExtraService = require('../models/ExtraService');

// Create a new extra service
exports.createExtraService = async (req, res) => {
  try {
    const { CustomerName, Services, Price, Hotel, Method, TransactionId, Paying, Details } = req.body;
    console.log('Received data:', req.body);
    const newExtraService = new ExtraService({
      CustomerName,
      Services,
      Price,
      Hotel,
      Method,
      TransactionId,
      Paying,
      Details
    });
    await newExtraService.save();
    res.status(201).json(newExtraService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all extra services
exports.getAllExtraServices = async (req, res) => {
  try {
    const extraServices = await ExtraService.find().populate('Hotel');
    res.status(200).json(extraServices);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific extra service by ID
exports.getExtraServiceById = async (req, res) => {
  try {
    const extraService = await ExtraService.findById(req.params.id).populate('Hotel');
    if (!extraService) {
      return res.status(404).json({ error: 'Extra service not found' });
    }
    res.status(200).json(extraService);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a specific extra service by ID
exports.updateExtraService = async (req, res) => {
  try {
    const { CustomerName, Services, Price, Hotel, Method, TransactionId, Paying, Details } = req.body;
    const updatedExtraService = await ExtraService.findByIdAndUpdate(
      req.params.id,
      { CustomerName, Services, Price, Method, TransactionId, Paying, Details },
      { new: true }
    );
    if (!updatedExtraService) {
      return res.status(404).json({ error: 'Extra service not found' });
    }
    res.status(200).json(updatedExtraService);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a specific extra service by ID
exports.deleteExtraService = async (req, res) => {
  try {
    const deletedExtraService = await ExtraService.findByIdAndDelete(req.params.id);
    if (!deletedExtraService) {
      return res.status(404).json({ error: 'Extra service not found' });
    }
    res.status(200).json({ message: 'Extra service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
