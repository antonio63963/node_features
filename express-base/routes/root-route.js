const express = require("express");

const { getRootHandler } = require("../controllers/root-controller.js");

const route = express.Router();

route.get("/", getRootHandler);

module.exports = route;
