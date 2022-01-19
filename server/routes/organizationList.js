const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const organizationRouter = express.Router();

//function for read file
const readData = () => {
  const organizationData = fs.readFileSync("./data/organizationList.json");
  return JSON.parse(organizationData);
};

// function for write file
const writeFile = (organizationData) => {
  fs.writeFileSync(
    "./data/organizationList.json",
    JSON.stringify(organizationData, null, 2)
  );
};

organizationRouter.get("/", (req, res) => {
  let organizationData = readData();
  return res.status(200).send(organizationData);
});

module.exports = organizationRouter;
