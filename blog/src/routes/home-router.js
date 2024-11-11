const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/HomeController')

router.post('/home',homeController.createnewdish)
router.get('/home',homeController.index)

module.exports = router