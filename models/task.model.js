const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: String,
    description: String,
    status: String,
    expectedDate: Date,
    priority: String,
});

const Task = model('task', taskSchema);
Task.createCollection();

module.exports = Task;
