const express = require("express");
const app = express();
const mongo = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("./models/User");
dotenv.config(); //configs .env file
mongo.connect(process.env.MONGO_URL);
const jwtcode = process.env.JWT_CODE;

app.post("/register", async (req, res) => {
  const { userName, password } = req.body;
  const userCreated = await User.create({ userName, password });
   jwt.sign({ userID: userCreated._id }, jwtcode)
});
app.listen(4000);
