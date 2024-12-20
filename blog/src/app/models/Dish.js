const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema: lượt đồ
const Dish = new Schema({
    coat: { type: String, maxLength: 255 },
    name: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Dish', Dish);
