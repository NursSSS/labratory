const doctorService = require("../service/doctor.service");

class AuthController {
  async getAll(req, res) {
    try{
        const doctors = await doctorService.getAll()

        res.send(doctors)
    } catch(err) {
        console.log(err)
        res.status(400).json({
            message: "Bad request"
        })
    }
  }
}

module.exports = new AuthController();
