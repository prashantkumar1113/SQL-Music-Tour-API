// DEPENDENCIES
const router = require("express").Router();
const db = require("../models");
const {Stage, Event} = db;
const {Op} = require("sequelize");

router.get("/", (req, res) => {
    res.send("In Stages Controller");
});

module.exports = router;
