const { Inventory } = require('../models')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.access_token) return res.status(401).json({ message: 'Please provide access token' })

    const { access_token } = req.headers

    const decoded = jwt.verify(access_token, process.env.TOKEN_SECRET)

    res.user = decoded
    console.log(res.user)

    next()
  } catch (err) {
    console.log(err)
  }
}

const authorize = async (req, res, next) => {
  try {
    const inventories = await Inventory.findAll({ where: { UserId: res.user.id } })
    console.log(inventories)

    res.inventories = inventories

    next()
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  authenticate,
  authorize
}