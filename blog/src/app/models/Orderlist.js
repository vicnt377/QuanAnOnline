const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema: lượt đồ
const Orderlist = new Schema({
    customer_name: {type: String, maxLength: 255},
    phone: {type: String, maxLength: 255},
    address: {type: String, maxLength: 255},
    dishes: {type: String, maxLength: 255},
    status: {type: String, maxLength: 255},
})

module.exports = mongoose.model('Orderlist', Orderlist);
