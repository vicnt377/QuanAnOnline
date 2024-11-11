const mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = mongoose.Schema;

const User = new mongoose.Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 },
},
{
    timestamps: true // Tự động tạo và cập nhật createdAt, updatedAt
});

module.exports = mongoose.model('User', User);
