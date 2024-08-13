const mongoose = require('mongoose');
const Room = require("../models/Rooms");
// const RoomTypes = require("../models/RoomTypes");

exports.createRoom = async (req, res) => {
  try {
    const { name, price, details, roomType, hotel } = req.body;
    const createdBy = req.user._id;

    // Debug: Log the received data
    console.log("Creating Room with Data:", { name, price, details, roomType, hotel, createdBy });

    const room = new Room({
      name,
      price,
      details,
      roomType,
      hotel,
      status: "vacant",
      createdBy,
    });

    await room.save();

    res.json({ message: "Room created successfully", room });
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ hotel: req.query.hotelId }).populate(
      "roomType",
      "hotel",
    );
    res.json(rooms);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateRoomStatus = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    room.status = room.status === "vacant" ? "occupied" : "vacant";
    await room.save();

    res.json({ message: "Room status updated successfully", room });
  } catch (error) {
    console.error("Error updating room status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getRoomsByType = async (req, res) => {
  try {
    const availRooms = [];
    const rooms = await Room.find({
      hotel: req.query.hotelId,
      roomType: req.params.type,
    }).populate("roomType");

    if (rooms.length > 0) {
      rooms.forEach((room) => {
        if (room.status == 'vacant') availRooms.push(room);
      });
    }

    res.json(availRooms);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getRoomById = async (req, res) => {
  const roomId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    return res.status(400).send('Invalid Room ID');
  }
  try {
    const room = await Room.findById(roomId).populate([
      "hotel",
      "roomType",
    ]);
    if (!room) {
      return res.status(404).send('Room not found');
    }
    res.json(room);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json({ message: "Room updated successfully", room });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    await Room.findByIdAndUpdate(room.roomType, {
      $inc: { totalRooms: -1, availableRooms: -1 },
    });

    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};