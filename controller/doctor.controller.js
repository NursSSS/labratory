const doctorService = require("../service/doctor.service");

class AuthController {
  async getAll(req, res) {
    try {
      const doctors = await doctorService.getAll();

      res.send(doctors);
    } catch (err) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  }

  async getById(req, res) {
    try {
      const {id} = req.params

      const doctor = await doctorService.getById(id)

      res.send(doctor)
    } catch (err) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  }
}

module.exports = new AuthController();
