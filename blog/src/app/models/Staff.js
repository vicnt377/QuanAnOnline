const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//schema: lượt đồ
const Staff = new mongoose.Schema({
    name:{type: String, maxLength: 255},
    email:{type: String, maxLength: 255},
    phone:{type: String, maxLength: 10},
    address:{type: String, maxLength: 255},
    position:{type: String, maxLength: 20},
},
{
    timestamps: true // Tự động tạo và cập nhật createdAt, updatedAt
});

module.exports = mongoose.model('Staff', Staff);