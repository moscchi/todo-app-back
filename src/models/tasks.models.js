const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    create_at: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        default: 'low' // low, medium, high
    }
})

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;