const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const singupAndLoginRouter = express.Router();
const JWT_SECRET =
  "53b99e8b91f67d12e04508c91d59b87620edd27c0f28ec01a517cee81d4b87bf";

//function for read file
const readFile = () => {
  const organizationList = fs.readFileSync("./data/organizationList.json");
  return JSON.parse(organizationList);
};

// function for write file
const writeFile = (organizationList) => {
  fs.writeFileSync(
    "./data/organizationList.json",
    JSON.stringify(organizationList, null, 2)
  );
};

function authorize(req, res, next) {
  // console.log("authorize middleware entered");
  // console.log(req.headers.authorization);
  if (!req.headers.authorization)
    return res.status(401).json({ message: "not authorized" });
  const authToken = req.headers.authorization.split(" ")[1];

  jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
    // console.log("authorize middleware :: JWT verification");
    if (err) {
      return res.status(401).json({ message: "not authorized" });
    }

    if (Date.now() > new Date(decoded.exp * 1000)) {
      return res.status(401).json({ message: "token expired" });
    }

    // const organization = readFile();
    // const npoLocation = organization.find((org) => {
    //   if (org.program_name === decoded.name) {
    //     return org.location;
    //   }
    // });
    // req.location = npoLocation;
    req.decoded = decoded;
    next();
  });
}

const users = {};

singupAndLoginRouter.post("/signup", async (req, res) => {
  try {
    const { username, program_name, password } = req.body;
    users[username] = {
      program_name,
      password,
    };

    // need to find the solution for uppcase and lowercase
    const exitingEmail = await User.findOne({
      username,
    });

    if (exitingEmail) {
      return res
        .status(400)
        .json({ error: "There is already a user with this email" });
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 12);

      const newUser = new User({
        id: uuidv4(),
        username: req.body.username,
        password: hashedPassword,
        program_type: req.body.type,
        program_name: req.body.name,
        location: req.body.location,
        image: "https://content.hostgator.com/img/weebly_image_sample.png",
        description: req.body.description,
        donations: [],
        website: req.body.website,
      });
      const savedUser = await newUser.save();
      return res.json(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
  //auth

  //const organizationList = readFile();
  //const hashedPassword = bcrypt.hash(req.body.password, 12);

  // const newNpoObj = {
  //   username: req.body.username,
  //   password: req.body.password,
  //   program_type: req.body.type,
  //   id: uuidv4(),
  //   program_name: req.body.name,
  //   location: req.body.location,
  //   image: "https://content.hostgator.com/img/weebly_image_sample.png",
  //   description: req.body.description,
  //   donations: [],
  //   website: req.body.website,
  // };

  // organizationList.push(newNpoObj);
  // writeFile(organizationList);
  // res.status(201).json(newNpoObj);
});

singupAndLoginRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  // const organizationList = readFile();
  // const organizationList = User();

  let currUser = organizationList.find((user) => {
    return user.username === username;
  });
  //const user = users[username];
  if (!currUser) {
    res.status(401).json("not found");
  }

  if (currUser && currUser.password === password) {
    const token = jwt.sign({ name: currUser.program_name }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  }
});

singupAndLoginRouter.get("/login/:username", (req, res) => {
  //console.log(req.params);
  const organizationList = readFile();
  let currUser = organizationList.find((user) => {
    //console.log(user.username);
    return user.username === req.params.username;
  });
  //console.log(currUser);
  res.json(currUser);
});

singupAndLoginRouter.get("/profile", authorize, (req, res) => {
  // the code in the authorize middleware will execute BEFORE this block of code executes.
  res.json(req.decoded);
});

module.exports = singupAndLoginRouter;
