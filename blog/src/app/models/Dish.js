const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema: lượt đồ
const Dish = new Schema({
    image: { type: Buffer },
    coat: { type: String, maxLength: 255 },
    name: { type: String, maxLength: 255 },
}, {
    timestamps: true // Tự động tạo và cập nhật createdAt, updatedAt
});

module.exports = mongoose.model('Dish', Dish);
