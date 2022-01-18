const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const firstNationRouter = express.Router();

//function for read file
const readData = () => {
  const firstNationData = fs.readFileSync("./data/first-nation.json");
  return JSON.parse(firstNationData);
};

// function for write file
const writeFile = (firstNationData) => {
  fs.writeFileSync(
    "./data/first-nation.json",
    JSON.stringify(firstNationData, null, 2)
  );
};

firstNationRouter.get("/", (req, res) => {
  let firstNationData = readData();
  return res.status(200).send(firstNationData);
});

// firstNationRouter.post("/", (req, res) => {
//   let firstNationData = readData();

// });

module.exports = firstNationRouter;
