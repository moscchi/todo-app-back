const {registerService, loginService} = require("../services/userService");

const registerController = async (req, res) => {
  return await registerService(req, res);
};

const loginController = async (req, res) => {
  return await loginService(req, res);
};

module.exports = { registerController, loginController };
