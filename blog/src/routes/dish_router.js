const express = require('express')
const router = express.Router()

const dishController = require('../app/controllers/DishesController')


router.get('/dish',dishController.getDish)
router.get('/home/dish',dishController.getDish)

module.exports = router