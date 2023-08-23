const transactionService = require("../service/transaction.service");

class TransactionController {
  async getByDoctorId(req, res) {
    try {
      const { id } = req.params;
      const transactions = await transactionService.getByDoctorId({
        doctor_id: id,
      });

      res.send(transactions);
    } catch (err) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  }

  async create(req, res) {
    try {
      const { debit, credit, comment, status } = req.body;
      const { id } = req.params;

      const transaction = await transactionService.create({
        doctor_id: id,
        debit,
        credit,
        comment,
        status,
      });

      res.send(transaction);
    } catch (err) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  }

  async closeTransactions(req, res) {
    try {
      const { transaction_ids } = req.body;

      if (!transaction_ids.length) {
        res.status(400).json({
          message: "Bad request",
        });
      }

      await transactionService.closeTransactions(transaction_ids);

      res.status(200).json({
        message: "Ok"
      });
    } catch (err) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  }
}

module.exports = new TransactionController();
