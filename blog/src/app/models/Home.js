const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//schema: lượt đồ
const Home = new mongoose.Schema({
    
    createdAt: { type: Date, default: Date.now },
    updateedAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Home', Home);