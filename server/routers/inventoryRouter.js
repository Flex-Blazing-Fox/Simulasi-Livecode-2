const router = require('express').Router()
const InventoryController = require('../controllers/InventoryController')


router.get('/', InventoryController.getAll)

module.exports = router