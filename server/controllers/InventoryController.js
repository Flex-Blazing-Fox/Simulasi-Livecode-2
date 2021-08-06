const {Inventory} = require('../models')
const inventory = require('../models/inventory')


class InventoryController{
    static getAll(req, res, next){
        Inventory.findAL({where: {userId: req.userId}})
        .then((inventory)=> {
            res.status(200).json({data: inventory})
        })
        .catch((err)=>{
            next(err)
        })
    }
}

module.exports = InventoryController