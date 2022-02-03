const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const User = require("../models/User");

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
  User.find({}, (err, organizationData) => {
    if (err) {
      console.log(err);
    }
    // console.log(organizationData);
    if (!req.query.search) return res.status(200).send(organizationData);

    const query = req.query.search.toLowerCase();
    const infoResults = organizationData.filter((organization) => {
      if (
        organization.program_type.toLowerCase().includes(query) ||
        organization.program_name.toLowerCase().includes(query) ||
        organization.location.toLowerCase().includes(query) ||
        organization.description.toLowerCase().includes(query)
      )
        return organization;
    });

    const donationResults = organizationData.filter((organization) => {
      for (let i = 0; i < organization.donations.length; i++) {
        if (organization.donations[i].itemName.toLowerCase().includes(query)) {
          if (!infoResults.includes(organization)) return organization;
        }
      }
    });

    res.send(infoResults.concat(donationResults));
  });
  // let organizationData = readData();

  //console.log(req.query.search);

  //return res.status(200).send(organizationData);
});

//get the single organization by Id
organizationRouter.get("/:organizationId", (req, res) => {
  const organizationId = req.params.organizationId;
  // const tragetOrganizationData = readData().find((organization) => {
  //   return organization.id === organizationId;
  // });
  User.findOne({ id: organizationId }, (err, tragetOrganizationData) => {
    if (err) {
      console.log(err);
    }
    //console.log(tragetOrganizationData, organizationId);

    if (tragetOrganizationData) {
      res.status(200).json(tragetOrganizationData);
    } else {
      res.status(404).send("not fund");
    }
  });
});
//create a new donation card

organizationRouter.post("/item", async (req, res) => {
  const newDonationObj = {
    id: uuidv4(),
    date: Date.now(),
    organizationID: req.body.organizationID,
    itemName: req.body.item,
    information: req.body.info,
    status: req.body.status,
    image:
      req.body.image === null
        ? "https://ecowaterqa.vtexassets.com/arquivos/ids/156130-800-auto?width=800&height=auto&aspect=true"
        : req.body.image,
  };

  const organizationID = req.body.organizationID;

  User.findOne({ id: organizationID }, (err, targetOrganization) => {
    //console.log(newDonationObj);
    if (err) {
      console.log(err);
    } else {
      targetOrganization.donations.unshift(newDonationObj);
      targetOrganization.save();
    }

    res.status(201).json(newDonationObj);
  });
});

//delete a donation card

organizationRouter.delete("/:organizationId/item/:itemId", (req, res) => {
  // console.log(req.params.organizationId);
  // console.log(req.params.itemId);

  const organizationId = req.params.organizationId;
  const itemId = req.params.itemId;

  User.findOne({ id: organizationId }, (err, targetOrganization) => {
    if (err) {
      console.log(err);
    }

    const targetItem = targetOrganization.donations.find((item) => {
      return item.id === itemId;
    });

    //console.log(targetItem);
    const TargetItemIndex = targetOrganization.donations.indexOf(targetItem);
    //console.log(TargetItemIndex);

    if (targetItem) {
      targetOrganization.donations.splice(TargetItemIndex, 1);
      targetOrganization.save();
      res.status(204).json(targetItem);
    } else {
      res.status(400).json({ message: "item not found" });
    }
  });
});

//edit a donation card

organizationRouter.patch("/:organizationId/item/:itemId", (req, res) => {
  const organizationId = req.params.organizationId;
  const itemId = req.params.itemId;

  User.findOne({ id: organizationId }, (err, targetOrganization) => {
    if (err) {
      console.log(err);
    }

    const targetItem = targetOrganization.donations.find((item) => {
      return item.id === itemId;
    });

    if (targetItem) {
      targetItem.id = itemId;
      targetItem.organizationID = organizationId;
      targetItem.itemName = req.body.itemName;
      targetItem.information = req.body.information;
      targetItem.status = req.body.status;
      targetItem.date = Date.now();
      targetItem.image = req.body.image;

      targetOrganization.save();
      res.status(200).send(targetItem);
    } else {
      res.status(400).send("not found");
    }
  });
});

//edit organization profile
organizationRouter.patch("/:id/edit", async (req, res) => {
  const organizationId = req.params.id;

  User.findOne({ id: organizationId }, (err, targetOrganization) => {
    if (err) {
      console.log(err);
    }

    if (targetOrganization) {
      targetOrganization.location = req.body.location;
      targetOrganization.website = req.body.website;
      targetOrganization.description = req.body.description;
      targetOrganization.image = req.body.image;

      targetOrganization.save();
      res.status(200).send(targetOrganization);
    } else {
      res.status(400).send("not found");
    }
  });
});

module.exports = organizationRouter;
