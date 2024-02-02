// All pages routes go here

const router = require("express").Router();
const path = require('path');
// const seeNotes = require("../../db/db.json");

// // Helper function to generate unique ids
// const uuid = require('../../helpers/uuid');

// // Helper functions for reading and writing to the JSON file
// const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;