// All notes routes go here

const router = require("express").Router();
const seeNotes = require("../../db/db.json");
const fs = require("fs");

router.get("/", (req, res) => {
  res.json(seeNotes);
});

module.exports = router;