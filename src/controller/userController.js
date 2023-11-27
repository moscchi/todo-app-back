const registerService = require("../services/userService");

const registerController = async (req, res) => {
    return await registerService(req, res);
}

module.exports = registerController