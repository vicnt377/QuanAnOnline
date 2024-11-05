const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//schema: lượt đồ
const Customer = new mongoose.Schema({
    username: {type: String, maxLength: 255},
    password: {type: String, maxLength: 255},

});

module.exports = mongoose.model('Customer', Customer);