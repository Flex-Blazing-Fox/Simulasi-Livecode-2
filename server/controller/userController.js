const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class userController {
  static register(req, res, next) {
    let { email, password } = req.body;
    User.create({
      email,
      password,
    })
      .then((result) => {
        res.status(201).json({ id: result.id, email: result.email });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.dataValues.password)) {
          const payload = {
            id: user.dataValues.id,
          };
          const accessToken = jwt.sign(payload, process.env.SECRET);
          res.status(200).json({ access_token: accessToken });
        } else {
          console.log("Not login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = userController;
