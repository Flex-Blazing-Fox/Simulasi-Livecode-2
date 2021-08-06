const user = require("../models/user")
const jwt = require('jsonwebtoken')

class Authentication{
    static userAuth(req, res, next){
        if(!req.headers.access_token){
            throw {msg: 'not login'}
        }
        try{
            const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
            User.findOne({where:{
                id: decoded.userId,
            }})
            .then(result=>{
                if(result){
                    req.user = {
                        id: result.id
                    }
                    next() 
                }else{
                    throw{msg: 'Access Denied'}
                }
            })
            .catch(err=>{
                next(err)
            })
        }
        catch(err){
            next({name: 'Invalid token'})
        }
    }
}
class Authorization{

}

module.exports = {Authentication, Authorization}