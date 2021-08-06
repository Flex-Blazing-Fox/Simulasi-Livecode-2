const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  if (!req.headers.access_token) {
    console.log("not authenticated");
  } else {
    try {
      const decodedToken = jwt.verify(
        req.headers.access_token,
        process.env.SECRET
      );
      req.userId = decodedToken.id;
      next();
    } catch {
      console.log("not authenticated");
    }
  }
};

module.exports = authenticate
