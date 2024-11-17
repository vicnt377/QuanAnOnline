const express = require('express')
const router = express.Router()



const orderlistController = require('../app/controllers/OrderlistController')

router.get('/staff',orderlistController.getOrderlist)

module.exports = router
