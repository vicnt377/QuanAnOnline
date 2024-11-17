const express = require('express')
const router = express.Router()

const staffController = require('../app/controllers/StaffController')
//staffController.index

router.get('/admin/staff',staffController.getStaff)


module.exports = router