const { Router } = require('express');
const registerController = require('../controller/userController');

const userRouter = Router();

userRouter.post('/register', registerController)

module.exports = userRouter;