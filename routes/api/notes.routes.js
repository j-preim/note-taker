// All notes routes go here

const router = require("express").Router();
const seeNotes = require("../../db/db.json");
const fs = require("fs");
const uuid = require('../../helpers/uuid');

router.get("/", (req, res) => {
  res.json( seeNotes );
});

router.get("/:id", (req, res) => {
  const result = seeNotes.find(note => note.id.toString() === req.params.id.toString());
  res.json(result);
});

router.post("/", (req, res) => {
  res.json(`${req.body} request received`);
  const newNote = req.body;
  newNote.id = uuid();
  seeNotes.push(newNote);

  fs.writeFile("./db/db.json", JSON.stringify(seeNotes), (err) =>
  err ? console.error(err) : console.log("Created db.json")
)
});

router.delete("/:id", async (req, res) => {
  const result = seeNotes.filter(note => note.id.toString() !== req.params.id.toString());
  res.send(result);

  fs.writeFile("./db/db.json", JSON.stringify(result), (err) =>
  err ? console.error(err) : console.log("Created db.json")
);
})



module.exports = router;