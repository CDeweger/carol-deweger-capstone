const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const jwt = require("jsonwebtoken");

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
  console.log("authorize middleware entered");
  console.log(req.headers.authorization);
  if (!req.headers.authorization)
    return res.status(401).json({ message: "not authorized" });
  const authToken = req.headers.authorization.split(" ")[1];

  jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
    console.log("authorize middleware :: JWT verification");
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

singupAndLoginRouter.post("/signup", (req, res) => {
  //auth
  // const { username, name, type, location, website, description } = req.body;
  const { username, name, password } = req.body;

  users[username] = {
    name,
    password,
    // type,
    // location,
    // website,
    // description,
  };
  // res.json({ success: "true" });

  const organizationList = readFile();
  const newNpoObj = {
    program_type: req.body.type,
    id: uuidv4(),
    program_name: req.body.name,
    location: req.body.location,
    image: "",
    description: req.body.description,
    donations: [],
    website: req.body.website,
  };

  organizationList.push(newNpoObj);
  writeFile(organizationList);
  res.status(201).json(newNpoObj);
});

singupAndLoginRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    const token = jwt.sign({ name: user.name }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  }
});

singupAndLoginRouter.get("/profile", authorize, (req, res) => {
  // the code in the authorize middleware will execute BEFORE this block of code executes.
  res.json(req.decoded);
});

module.exports = singupAndLoginRouter;
