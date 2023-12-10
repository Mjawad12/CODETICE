const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const getUserId = async (req, res, next) => {
  try {
    const Authtoken = req.headers.authtoken;
    const userId = await jwt.verify(Authtoken, process.env.Secret);
    req.body.userid = userId;
    console.log(userId);
    next();
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getUserId;
