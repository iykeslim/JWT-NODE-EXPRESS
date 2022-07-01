const jwt = require('jsonwebtoken');

const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  // check in this controller for username and password
  if (!username || !password) {
    throw new BadRequestError("Please provide ur email and password");
  }
  // normally would be provided by the DB
  const id = new Date().getDate();

  // try keeping the payload small; it is better experience for users
  // this is only for demo purposes, use long, cpmplex and unguessable sting values for production
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {  

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky nimber is ${luckyNumber}`,
  });
 
};

module.exports = {
  login,
  dashboard,
};
