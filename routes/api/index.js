// This file acts as a gatekeeper for all my api routes

const router = require("express").Router();
const notesRoutes = require("./notes.routes");

router.use("/notes", notesRoutes);

module.exports = router;