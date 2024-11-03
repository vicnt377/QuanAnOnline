
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Home = require('../models/Home');

class HomeController{

    getHome(req, res, next) {
        Home.find({})
            .then(home => {
                res.render('home',{
                    home : mutipleMongooseToObject(home)
                })

            })
            .catch(next)
    }
}

module.exports = new StaffController;