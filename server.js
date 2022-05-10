// DEPENDENCIES
const express = require("express");
const app = express();

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CONTROLLERS
const bandsController = require("./controllers/bands_controller");
app.use("/bands", bandsController);

const eventsController = require("./controllers/events_controller");
app.use("/events", eventsController);

// ROOT
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Tour API",
    });
});

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
