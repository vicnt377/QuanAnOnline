
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Dish = require('../models/Dish');

class DishController{

    getDish(req, res, next) {
        Dish.find({})
            .then(dishes => {
                res.render('dish_list',{
                    dishes: mutipleMongooseToObject(dishes)
                })
            })
            .catch(next)
    }
}

module.exports = new DishController;
