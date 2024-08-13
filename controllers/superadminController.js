const User = require('../models/User');
const Hotel = require('../models/Hotel');
const Room = require('../models/Rooms');
const bcrypt = require('bcryptjs');

// Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email, username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            username,
            password: hashedPassword,
            role
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email, username, role } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, username, role },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Hotels
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createHotel = async (req, res) => {
    try {
        const { name, address, owner } = req.body;
        const newHotel = new Hotel({ name, address, owner });
        await newHotel.save();
        res.status(201).json(newHotel);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateHotel = async (req, res) => {
    try {
        const { name, address, owner } = req.body;
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { name, address, owner },
            { new: true }
        );
        if (!updatedHotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteHotel = async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!deletedHotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }
        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createRoom = async (req, res) => {
    try {
        const { name, price, hotel, details, images, roomType } = req.body;
        const newRoom = new Room({ name, price, hotel, details, images, roomType });
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateRoom = async (req, res) => {
    try {
        const { name, price, hotel, details, images, roomType } = req.body;
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { name, price, hotel, details, images, roomType },
            { new: true }
        );
        if (!updatedRoom) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteRoom = async (req, res) => {
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        if (!deletedRoom) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
