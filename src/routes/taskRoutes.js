const { Router } = require("express");
const {
  getTaskController,
  getTaskByUsernameController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
  updateStatusTaskController,
} = require("../controller/taskController");
const validateToken = require("../utils/validateToken");
const validator = require("../utils/validator");
const { body } = require("express-validator");

const taskRouter = Router();

taskRouter.get("/", getTaskController);
taskRouter.get("/user", validateToken, getTaskByUsernameController);
taskRouter.post(
  "/",
  validateToken,
  body("title").isString(),
  body("description").isString().isLength({ min: 8 }),
  validator,
  createTaskController
);
taskRouter.put(
    "/:id",
    validateToken,
    body("title").isString(),
    body("description").isString().isLength({ min: 8 }),
    validator,
    updateTaskController
  );
  taskRouter.put('/:id/status', validateToken, updateStatusTaskController)
  taskRouter.delete(
    "/:id",
    validateToken,
    deleteTaskController
  );
module.exports = taskRouter;
