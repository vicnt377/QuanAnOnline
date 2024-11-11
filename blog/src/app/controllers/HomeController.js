
const { mutipleMongooseToObject } = require('../../util/mongoose');
const multer = require('multer');
const Home = require('../models/Home');
const Dish = require('../models/Dish');

class HomeController{

    index(req, res, next) {
        res.render('home')
    }

    createnewdish(req, res, next){
        const formData = req.body
        formData.image = '${req.body.image}'
        const newdish = new Dish(formData)
        newdish.save()

        res.redirect('/dish')
    }
}

module.exports = new HomeController;