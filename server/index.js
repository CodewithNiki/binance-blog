const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const UserModel = require("./models/UserModel");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ username, email, password: hash })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, username: user.username },
            "jwt-secret-key",
            { expiresIn: "1day" }
          );
          res.cookie("token", token);
          return res.json("Success");
        } else {
          return res.json("Password Incorrect");
        }
      });
    } else {
      res.json("User does not exist");
    }
  });
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("The token is missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err){
            return res.json("The token is missing")
        }else{
            req.email = decoded.email;
            req.username = decoded.username;

        }
    });
  }
};
app.get("/home", verifyUser, (req, res) => {
    return res.json({
        email:req.email,
        username: req.username
    })
});

app.listen(3001, () => {
  console.log("Server is running");
});
