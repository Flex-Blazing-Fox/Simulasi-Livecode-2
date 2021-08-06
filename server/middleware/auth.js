const jwt = require('jsonwebtoken')
const { User } = require('../models')

const authentication = (req, res, next) => {
    if(!req.headers.access_token){
        throw 'Invalid Access Token'
    }

    try {
        const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET_KEY)

        User.findOnde({where:{
            id:decoded.id
        }})
            .then(user => {
                if(user){
                    next()
                } else {
                    throw 'You are not login'
                }
            })
            .catch( err => {
                res.status(500).json(err)
            })

    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = authentication