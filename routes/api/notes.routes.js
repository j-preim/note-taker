// All notes routes go here

const router = require("express").Router();
const seeNotes = require("../../db/db.json");
const fs = require("fs");
const uuid = require('../../helpers/uuid');

router.get("/", (req, res) => {
  res.json(seeNotes);
});

router.post("/", (req, res) => {
  res.json(`${req.body} request received`);
  const newNote = req.body;
  newNote.id = uuid();
  seeNotes.push(newNote);

  fs.writeFile("./db/db.json", JSON.stringify(seeNotes), (err) =>
  err ? console.error(err) : console.log("Created db.json")
)
})

module.exports = router;