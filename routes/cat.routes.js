const express = require("express")
const router = express.Router()
const catController = require('../controllers/cats.controller')


router.get('/', catController.read)
router.get('/add/:name', catController.create)
router.post('/add', catController.post)
router.put('/update/:id', catController.put)

module.exports = router;