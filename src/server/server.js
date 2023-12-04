const express = require('express');
const userRouter = require('../routes/userRoutes.js');
const taskRouter = require('../routes/taskRoutes.js');
const cors = require('cors')

const server = express();

server.use(cors('*'))
server.use(express.json());
server.use(userRouter)
server.use('/task', taskRouter)
module.exports = server;