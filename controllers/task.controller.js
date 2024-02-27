const Task = require('../models/task.model');

const create = async (req, res) => {

    const data = req.body;
    const task = new Task(data);
    console.log(data);
    await task.save();

    res.status(201).json({
        status_code: 201,
        status: 'Created',
        message: 'New task created !!!',
        data: {}
    });
}

const findOne = async  (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (task) {
        res.json({
            status_code: 200,
            status: 'OK',
            message: 'Task details',
            data: task
        });
    } else {
        res.json({
            status_code: 404,
            status: 'Not found',
            message: 'Task with id: ' + id + 'not found',
            data: null
        });
    }
}

const find = async (req, res) => {
    const tasks = await Task.find();
    res.json({
        status_code: 200,
        status: 'Ok',
        message: 'All tasks',
        data: tasks
    });
}

const remove = async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({
        status_code: 200,
        status: 'Ok',
        message: 'Task delete successfuly',
        data: null
    });
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await Task.findByIdAndUpdate(id, data);
    res.json({
        status_code: 200,
        status: 'Ok',
        message: 'Task updated successfully',
        data: null
    });
};

const filter = async (req, res) => {
    const data = req.body;
    const filterKey = data.filter;
    
    const filteredTasks = [];
    const tasks = await Task.find();
    console.log(filterKey);
    if(filterKey == 'all') {
        for (let i = 0; i < tasks.length; i++) {
            filteredTasks.push(tasks[i]);
            
        }
    }
    else {

        for (let i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
            if (tasks[i]['status'] === filterKey) {
                filteredTasks.push(tasks[i]);
            }
        }
    }

    res.json({
        status_code: 200,
        status: 'Ok',
        message: 'filtered tasks',
        data: filteredTasks
    });

};

module.exports = { create, findOne, find, remove, update, filter };