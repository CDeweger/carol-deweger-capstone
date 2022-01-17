const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const shelterRouter = express.Router();

//function for read file
const readData = () => {
  const sheltersData = fs.readFileSync("./data/homeless-shelter.json");
  return JSON.parse(sheltersData);
};

// function for write file
const writeFile = (sheltersData) => {
  fs.writeFileSync(
    "./data/homeless-shelter.json",
    JSON.stringify(sheltersData, null, 2)
  );
};

shelterRouter.get("/", (req, res) => {
  let sheltersData = readData();
  return res.status(200).send(sheltersData);
});

module.exports = shelterRouter;
