const { getTaskService, getTaskByUsernameService, createTaskService, updateTaskService, deleteTaskService, updateStatusTaskService } = require("../services/taskService")

const getTaskController = async (_req, res) => {
    return await getTaskService(res)
}
const getTaskByUsernameController = async (req, res) => {
    return await getTaskByUsernameService(req.username, res)
}

const createTaskController = async (req, res) => {
    return await createTaskService(req, res)
}
const updateTaskController = async (req, res) => {
    return await updateTaskService(req, res)
}
const updateStatusTaskController = async (req, res) => {
    return await updateStatusTaskService(req, res)

}
const deleteTaskController = async (req, res) => {
    return await deleteTaskService(req, res)
}
module.exports = { getTaskController, getTaskByUsernameController, createTaskController, updateTaskController, deleteTaskController, deleteTaskService, updateStatusTaskController }