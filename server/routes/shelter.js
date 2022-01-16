const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const shelterRouter = express.Router();

const readData = () => {
  const sheltersData = fs.readFileSync(
    "./data/homeless-shelter-locations.json"
  );
  return JSON.parse(sheltersData);
};

shelterRouter.get("/", (req, res) => {
  let sheltersData = readData();
  return res.status(200).send(sheltersData);
});

module.exports = shelterRouter;
