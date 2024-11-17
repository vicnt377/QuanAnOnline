const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/HomeController')

router.post('/admin',homeController.createnewdish)
router.get('/admin',homeController.index)

module.exports = router