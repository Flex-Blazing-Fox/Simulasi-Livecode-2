const routers = require("express").Router();
const userController = require("../controller/userController");
const inventoryController = require("../controller/inventoryController");
const authentication = require("../middlewares/authentication");

routers.get("/", (_, res) => res.status(200).send("Welcome"));

routers.post("/register", userController.register);
routers.post("/login", userController.login);
routers.use(authentication);
routers.post("/inventories", inventoryController.getAllInventories);

module.exports = routers;
