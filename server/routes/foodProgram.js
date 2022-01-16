const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const foodProgramRouter = express.Router();

//function for read file
const readData = () => {
  const foodProgramData = fs.readFileSync(
    "./data/free-and-low-cost-food-programs.json"
  );
  return JSON.parse(foodProgramData);
};

// function for write file
const writeFile = (foodProgramData) => {
  fs.writeFileSync(
    "./data/free-and-low-cost-food-programs.json",
    JSON.stringify(foodProgramData, null, 2)
  );
};

foodProgramRouter.get("/", (req, res) => {
  let foodProgramData = readData();
  return res.status(200).send(foodProgramData);
});

module.exports = foodProgramRouter;
