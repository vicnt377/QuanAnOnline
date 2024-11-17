const express = require('express')
const router = express.Router()

const dishController = require('../app/controllers/DishesController')


router.get('/admin',dishController.getDish)
router.get('/admin/dish',dishController.getDish)

module.exports = router