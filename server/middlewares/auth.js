
const jwt = require('jsonwebtoken')
const {Inventory} = require('../models/inventory')

const authentication = (req, res, next) => {
    if (!req.headers.access_token) return next( {name: "Missing access token"})

    try{
        const decoded = jwt.verify(req.headers.access_token, "secret")
        req.userId = decoded.id
        next()
    }
    catch(err) {
        next( {name: "Invalid access_token"})
    }
}

const authorization = (req, res, next) => {
    const {id} = req.params

    Inventory.findOne({ where: {
        id : id,
        userId : req.userId
    }})
    .then((inventory) => {
        if(!inventory) throw ( {name: "inventory Not Found"})

        req.inventory = inventory
        next()
    })
    .catch(err => [
        next(err)
    ])
}

module.exports = {authentication, authorization}