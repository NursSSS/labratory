const db = require('../db')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

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

      const token = generateAccessToken(user.id, user.login)

      return token;
    } catch (err) {
      throw new Error("Authentication failed");
    }
  }

}

const generateAccessToken = (id, login) => {
  const payload = {
    id,
    login
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
}

module.exports = new AuthService();
