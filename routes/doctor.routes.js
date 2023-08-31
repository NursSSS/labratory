const Router = require('express')
const router = new Router()
const doctorController = require('../controller/doctor.controller')
const authMiddleware = require('../midlleware/authMiddleware')

router.get('/doctors', authMiddleware, doctorController.getAll)
router.get('/doctors/:id', authMiddleware, doctorController.getById)

module.exports = router