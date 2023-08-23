const db = require("../db");

class TransactionService {
  async getByDoctorId({ doctor_id }) {
    const responseDoctor = await db.query(
      `
            SELECT *
            FROM doctor
            WHERE id = $1
        `,
      [doctor_id]
    );

    if (!responseDoctor.rowCount) {
      throw new Error("Doctor is not found");
    }

    const doctor = responseDoctor.rows[0];

    const response = await db.query(
      `
          SELECT *
          FROM transaction
          WHERE doctor_id = $1 AND is_close = false
      `,
      [doctor.id]
    );

    return response.rows;
  }

  async create({ doctor_id, debit, credit, comment, status }) {
    const responseDoctor = await db.query(
      `
            SELECT *
            FROM doctor
            WHERE id = $1
        `,
      [doctor_id]
    );

    if (!responseDoctor.rowCount) {
      throw new Error("Doctor is not found");
    }

    const response = await db.query(
      `
        INSERT INTO transaction (debit, credit, comment, status, doctor_id)
        values ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [debit, credit, comment, status, doctor_id]
    );

    if (!response.rowCount) {
      throw new Error("Bad request");
    }

    return response.rows[0];
  }

  async closeTransactions(transaction_ids) {
    const responseTransactions = await db.query(
      `
        UPDATE transaction SET is_close = true WHERE id = ANY($1::int[])
      `,
      [transaction_ids]
    )

    if (!responseTransactions.rowCount) {
      throw new Error("Not found")
    }

    return responseTransactions.rows
  }
}

module.exports = new TransactionService();
