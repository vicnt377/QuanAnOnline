
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Orderlist = require('../models/Orderlist');

class OrderlistController{

    getOrderlist(req, res, next) {
        Orderlist.find({})
            .then(orderlists => {
                res.render('orderlist',{
                    orderlists : mutipleMongooseToObject(orderlists)
                })
            })
            .catch(next)
    }
}

module.exports = new OrderlistController;
