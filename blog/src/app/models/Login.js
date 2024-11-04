
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerS = new Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 }, // Lưu mật khẩu không băm
    loginAt: { type: Date, default: Date.now },
});

const AdminS = new Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 }, // Lưu mật khẩu không băm 
});

const Customer = module.exports = mongoose.model('Customer', CustomerS);
const Admin = module.exports = mongoose.model('Admin', AdminS);

module.exports.model('Customer','Admin')