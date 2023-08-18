const Router = require('express')
const router = new Router()
const doctorController = require('../controller/doctor.controller')

router.get('/doctors', doctorController.getAll)

module.exports = router