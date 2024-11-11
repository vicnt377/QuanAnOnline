const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//schema: lượt đồ
const Home = new mongoose.Schema({

},
{
    timestamps: true // Tự động tạo và cập nhật createdAt, updatedAt
});

module.exports = mongoose.model('Home', Home);