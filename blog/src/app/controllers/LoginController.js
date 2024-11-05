
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Customer = require('../models/Customer');
const Admin = require('../models/Admin')


class LoginController {

    login(req, res){
        res.render('login')
    }

    async checkLogin(req, res, next) {
        const { username, password } = req.body; // Lấy username và password từ request

        try {
            // Tìm Admin trước
            const admin = await Admin.find({ username, password });
            if (admin) {
                // Nếu tìm thấy Admin, chuyển hướng đến trang home
                return res.render('home', { admin })
                    
            }

            // Nếu không phải Admin, kiểm tra trong Customer
            const customer = await Customer.findOne({ username, password });
            if (customer) {
                // Nếu tìm thấy Customer, chuyển hướng đến trang staff
                return res.render('staff', { 
                    customer: mutipleMongooseToObject(customer)
                });
            }

            // Nếu không tìm thấy cả Admin và Customer
            res.render('login', { error: 'Thông tin đăng nhập không đúng' });
            
        } catch (error) {
            console.error(error);
            next(error); // Tiếp tục đến middleware xử lý lỗi
        }

    }
}

module.exports = new LoginController;
