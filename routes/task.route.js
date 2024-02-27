const { Router } = require('express');
const router = Router();

const taskController = require('../controllers/task.controller');

router.post('/create', taskController.create);
router.post('/update/:id', taskController.update);
router.get('/find/:id', taskController.findOne);
router.get('/find', taskController.find);
router.get('/delete/:id', taskController.remove);
router.post('/filter', taskController.filter);

module.exports = router;