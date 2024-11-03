const express = require('express')
const router = express.Router()

const staffController = require('../app/controllers/HomeController')


router.get('/home',homeController.getHome)

module.exports = router