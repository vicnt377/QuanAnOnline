
// const { mutipleMongooseToObject } = require('../../util/mongoose');
const Customer = require('../models/Login');

class LoginController {

    login(req, res){
        res.render('login')
    }

    checkLogin(req, res, next) {
        const { email, password } = req.body; // Lấy email và password từ request

        // Kiểm tra thông tin đăng nhập
        Customer.findOne({ email, password })
            .then(customers => {
                if (customers) {
                    // Nếu tìm thấy khách hàng, chuyển hướng đến trang staff
                    res.render('home', { customers }),
                    console.log("Đăng nhập thành công!");
                } else {
                    // Nếu không tìm thấy, thông báo lỗi
                    res.render('login', { error: 'Thông tin đăng nhập không đúng' });
                }
            })
            .catch(error => {
                console.error(error);
                next(error); // Tiếp tục đến middleware lỗi
            });
    }
}

module.exports = new LoginController;
