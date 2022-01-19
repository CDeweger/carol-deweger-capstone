const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const donationRouter = express.Router();

//function for read file
const readFile = () => {
  const donationData = fs.readFileSync("./data/donation.json");
  return JSON.parse(donationData);
};

// function for write file
const writeFile = (donationData) => {
  fs.writeFileSync(
    "./data/donation.json",
    JSON.stringify(donationData, null, 2)
  );
};

donationRouter.get("/", (req, res) => {
  let donationData = readFile();
  return res.status(200).send(donationData);
});

donationRouter.post("/", (req, res) => {
  let donationData = readFile();

  const newDonationObj = {
    id: uuidv4(),
    organizationID: req.body.organizationID,
    program_name: req.body.program_name,
    itemName: req.body.item,
    information: req.body.info,
    status: req.body.status,
  };
  donationData.push(newDonationObj);
  writeFile(donationData);
  res.status(201).json(newDonationObj);
});

module.exports = donationRouter;
