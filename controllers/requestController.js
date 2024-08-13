const Request = require("../models/Request");

exports.createRequest = async (req, res) => {
  try {
    const {
      roomId,
      hotel,
      roomType,
      bedCount,
      price,
      method,
      paying,
      date,
      transactionId,
      comments,
      extraServices,
    } = req.body;
    console.log("Received data:", req.body);
    const newRequest = new Request({
      roomId,
      hotel,
      roomType,
      bedCount,
      price,
      method,
      paying,
      date,
      transactionId,
      comments,
      extraServices,
    });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all requests
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Get request by ID
exports.getRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findById(id);
    if (!request) {
      return res.status(404).json({ error: "Request not found." });
    }
    res.status(200).json(request);
  } catch (error) {
    console.error("Error fetching request:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Update request by ID
exports.updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRequest = await Request.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedRequest) {
      return res.status(404).json({ error: "Request not found." });
    }
    res.status(200).json({
      message: "Request updated successfully.",
      request: updatedRequest,
    });
  } catch (error) {
    console.error("Error updating request:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Delete request by ID
exports.deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRequest = await Request.findByIdAndDelete(id);
    if (!deletedRequest) {
      return res.status(404).json({ error: "Request not found." });
    }
    res.status(200).json({ message: "Request deleted successfully." });
  } catch (error) {
    console.error("Error deleting request:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
