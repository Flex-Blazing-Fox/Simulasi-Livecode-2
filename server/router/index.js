const router = require('express').Router()
const ServerController = require('../controller/ServerController')
const { Authentication } = require('../middleware/auth')

router.post('/register', ServerController.register)
router.post('/login', ServerController.login)
// router.get('/inventories', Authentication, ServerController.fetchInventories)
router.get('/inventories', ServerController.fetchInventories)

module.exports = router