// This file acts as a gatekeeper for all my page routes

const router = require("express").Router();

const notesPageRoutes = require("./notesPage.routes");

router.use("/", notesPageRoutes);

module.exports = router;