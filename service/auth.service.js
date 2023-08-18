const db = require('../db')

class AuthService {
  async login({ login, password }) {
    try {
      const response = await db.query(
        `
            SELECT *
            FROM "user"
            WHERE "login" = $1 AND "password" = $2
            LIMIT 1;
        `,
        [login, password]
      );

      if (!response.rowCount) {
        throw new Error("Access denied");
      }

      const user = response.rows[0];

      return user;
    } catch (err) {
      throw new Error("Authentication failed");
    }
  }
}

module.exports = new AuthService();
