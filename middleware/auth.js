const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require('../errors')

const authnticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer  ")) {
    throw new UnauthenticatedError("No toekns provided");
  }

  const token = authHeader.split(" ")[1];
   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     const {id, username} = decoded
     req.user = {id, username}
     next()
   } catch (error) {
     throw new UnauthenticatedError("Not authorized foor this route");
   }
};

module.exports = authnticationMiddleware;
