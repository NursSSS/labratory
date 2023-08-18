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
        console.log(err)
      throw new Error("Bad request");
    }
  }
}

module.exports = new AuthService();
