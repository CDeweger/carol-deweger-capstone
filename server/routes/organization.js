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

organizationRouter.get("/:organizationId", (req, res) => {
  const organizationId = req.params.organizationId;
  const tragetOrganizationData = readData().find((organization) => {
    return organization.id === organizationId;
  });

  if (tragetOrganizationData) {
    res.status(200).json(tragetOrganizationData);
  } else {
    res.status(404).send("not fund");
  }
});

organizationRouter.post("/", (req, res) => {
  let organizationData = readData();

  const newDonationObj = {
    id: uuidv4(),
    date: Date.now(),
    organizationID: req.body.organizationID,
    itemName: req.body.item,
    information: req.body.info,
    status: req.body.status,
  };

  const organizationID = req.body.organizationID;
  organizationData.find((organization) => {
    if (organization.id === organizationID) {
      organization.donations.push(newDonationObj);
      return;
    }
  });

  writeFile(organizationData);
  res.status(201).json(newDonationObj);
});

organizationRouter.patch("/:id/edit", (req, res) => {
  const organizationData = readData();
  const itemId = req.params.id;

  // console.log(itemId);

  let targetItem = organizationData.find((item) => item.id === itemId);

  // console.log(targetItem);
  if (targetItem) {
    targetItem.location = req.body.location;
    targetItem.website = req.body.website;
    targetItem.description = req.body.description;
    targetItem.image = req.body.image;
    writeFile(organizationData);
    res.status(200).send(targetItem);
  } else {
    res.status(400).send("not found");
  }
});

module.exports = organizationRouter;
