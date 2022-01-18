const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const singupAndLoginRouter = express.Router();

const users = {};

singupAndLoginRouter.get("/signup", (req, res) => {
  const { username, name, password } = req.body;

  users[username] = {
    name,
  };
  res.json({ success: "true" });
});

singupAndLoginRouter.get("/login", (req, res) => {});

module.exports = singupAndLoginRouter;
