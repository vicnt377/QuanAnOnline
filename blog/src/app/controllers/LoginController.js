const { mongooseToObject } = require('../../util/mongoose');
const User = require('../models/User');

class LoginController {
    login(req, res) {
        res.render('login');
    }

    async checkLogin(req, res, next) {
        const { username, password } = req.body;

        try {
            // Tìm người dùng trong cơ sở dữ liệu với username và mật khẩu đã băm
            const user = await User.find({ username, password });
            console.log(user)
            
            if (user) {
                // Nếu tìm thấy người dùng, chuyển hướng đến trang 'home' với thông tin người dùng
                res.render('home', {
                    user
                });
            } else {
                // Nếu không tìm thấy người dùng, hiển thị lỗi
                res.render('login', { error: 'Thông tin đăng nhập không đúng' });
            }
        } catch (error) {
            console.error('Error:', error);
            next(error); // Chuyển tiếp lỗi đến middleware xử lý lỗi
        }
    }
}

module.exports = new LoginController();
