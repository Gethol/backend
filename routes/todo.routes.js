const express = require("express")
const router = express.Router()
const todoController = require('../controllers/todo.controller')


router.get('/', todoController.read)
router.get('/:id', todoController)

router.post('/add', todoController.post)
router.put('/update/:id', todoController.put)

module.exports = router;