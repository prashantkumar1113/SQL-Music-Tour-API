// DEPENDENCIES
const bands = require("express").Router();
const db = require("../models");
const {Band} = db;

// FIND A SPECIFIC BAND
bands.get("/:id", async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: {band_id: req.params.id},
        });
        res.status(200).json(foundBand);
    } catch (error) {
        res.status(500).json(error);
    }
});

// FIND ALL BANDS
bands.get("/", async (req, res) => {
    try {
        const foundBands = await Band.findAll();
        res.status(200).json(foundBands);
    } catch (error) {
        res.status(500).json(error);
    }
});

// EXPORT
module.exports = bands;
