const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, Inventory } = require('../models')
const authentication  = require('../middleware/auth')

router.post('/register', (req,res) => {
    const { email, password } = req.body

    User.create({email, password})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/login', (req,res,next) => {
    const { email, password } = req.body

    User.findOne({where:{email}})
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const payload = {
                    id: user.id,
                }

                const access_token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
                res.status(200).json({access_token})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/inventories', authentication, (req, res, next) => {
    Inventory.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router