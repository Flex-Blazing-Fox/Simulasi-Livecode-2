const router = require('express').Router()
const { User, Inventory } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { authenticate, authorize } = require('../middleware/auth')

router.post('/register', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.create({ email, password })
    return res.status(201).json({ 
      id: user.id, 
      email: user.email 
    })
  } catch (err) {
    console.log(err)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ where: { email } })

    const isPasswordCorrect = bcrypt.compareSync(password, user.password)
    
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'password is incorrect' })
    }

    const access_token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET)

    return res.status(200).json({ access_token })
  } catch (err) {
    console.log(err)
  }
})

router.get('/inventories', authenticate, authorize, async (req, res) => {
  try {
    const inventories = await Inventory.findAll()
    
    res.status(200).json(inventories)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router