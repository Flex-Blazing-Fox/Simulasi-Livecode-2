const router = require('express').Router()
const { User, Inventory } = require('../models')

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

// router.post('/login')

// router.get('/inventories')

module.exports = router