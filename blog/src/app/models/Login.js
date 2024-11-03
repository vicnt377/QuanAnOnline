
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    email: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 }, // Lưu mật khẩu không băm
    loginAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Customer', Customer);
