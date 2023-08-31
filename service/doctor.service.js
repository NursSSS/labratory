const db = require('../db')

class AuthService {
  async getAll() {
    try {
      const response = await db.query(
        `
            SELECT *
            FROM doctor
        `
      );

      const doctors = response.rows;

      return doctors;
    } catch (err) {
      throw new Error("Bad request");
    }
  }

  async getById(id) {
    try {
      const response = await db.query(
        `
            SELECT *
            FROM doctor
            WHERE id = $1
        `,
        [id]
      );

      if(!response.rowCount) {
        throw new Error('Doctor is not found')
      }

      const doctor = response.rows[0];

      return doctor;
    } catch (err) {
      throw new Error("Bad request");
    }
  }
}

module.exports = new AuthService();
