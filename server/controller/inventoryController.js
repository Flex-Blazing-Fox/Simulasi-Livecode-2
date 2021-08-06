const { Inventory } = require("../models");

class inventoryController {
  static getAllInventories(_, res, next) {
    Inventory.findAll()
      .then((results) => {
        results = results.map((result) => result.dataValues);
        res.status(200).json(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = inventoryController
