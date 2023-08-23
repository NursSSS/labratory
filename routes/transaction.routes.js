const Router = require('express')
const router = new Router()
const transactionController = require('../controller/transaction.controller')

router.get('/transactions/:id', transactionController.getByDoctorId)
router.post('/transactions/:id', transactionController.create)
router.put('/transactions', transactionController.closeTransactions)

module.exports = router