const authService = require('../service/auth.service')

class AuthController {
  async login(req, res) {
    const { login, password } = req.body;

    try{
        const user = await authService.login({login, password})

        res.send(user)
    } catch(err) {
        res.status(403).json({
            message: "Access denied"
        })
    }
  }
}

module.exports = new AuthController();
