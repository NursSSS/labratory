const Router = require('express')
const router = new Router()
const transactionController = require('../controller/transaction.controller')
const authMiddleware = require('../midlleware/authMiddleware')

router.get('/transactions/:id', authMiddleware, transactionController.getByDoctorId)
router.post('/transactions/:id', authMiddleware, transactionController.create)
router.put('/transactions', authMiddleware, transactionController.closeTransactions)

module.exports = router