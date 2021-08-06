const router = require('express').Router()
const userRouter = require('./userRouter')
const inventoryRouter = require('./inventoryRouter')
const {authentication} = require('../middlewares/auth')

router.use('/', userRouter)
router.use(authentication)
router.use('/inventories',inventoryRouter)

module.exports = router