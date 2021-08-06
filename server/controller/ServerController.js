const {user, inventories} = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class ServerController{
    static register(req, res, next){ 
        const {email, password} = req.body
        user.create({email, password})
        .then(data=>{
            res.send(201).json({id: data.id, email: data.email})
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static login(req, res, next){
        const {id, password} = req.body
        user.findOne({
            where: {id}
        })
        .then(data=>{
            const compare = bcrypt.compareSync(password, data.password)
            if(compare){
                const payload = {
                    userId: data.id
                }
                const access_token = jwt.sign(payload, process.env.JWT_SECRET)
                res.status(200).json({access_token})
            }
            else{
                throw({msg: "login gagal"})
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static fetchInventories(req, res, next){
        const UserId = req.user.id
        inventories.findAll({
            where: {UserId}
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(err=>{
            console.log(err);
        })
    }

}

module.exports = ServerController