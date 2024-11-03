
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Staff = require('../models/Staff');

class StaffController{

    getStaff(req, res, next) {
        Staff.find({})
            .then(staffs => {
                res.render('staff',{
                    staffs : mutipleMongooseToObject(staffs)
                })

            })
            .catch(next)
    }
}

module.exports = new StaffController;