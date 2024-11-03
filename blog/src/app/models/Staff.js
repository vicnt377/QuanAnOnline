const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//schema: lượt đồ
const Staff = new mongoose.Schema({
    name:{type: String, maxLength: 255},
    email:{type: String, maxLength: 255},
    phone:{type: String, maxLength: 10},
    address:{type: String, maxLength: 255},
    position:{type: String, maxLength: 20},
    createdAt: { type: Date, default: Date.now },
    updateedAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Staff', Staff);