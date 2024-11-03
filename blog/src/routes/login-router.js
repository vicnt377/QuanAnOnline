const express = require('express')
const router = express.Router()
const app = express();
const bodyParser = require('body-parser');
const loginController = require('../app/controllers/LoginController')

app.use(bodyParser.urlencoded({ extended: true }));

router.get('/login',loginController.login)
router.post('/login',loginController.checkLogin)

module.exports = router
