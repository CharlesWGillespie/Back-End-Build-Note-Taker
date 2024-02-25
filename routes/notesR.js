const router = require('express').Router();
const fs = require('fs');
const path = require('path');


const { readFromFile, writeToFile } = require('../db/utilsDB');

router.get('/notes', (req, res) => {
    const notes = readFromFile();
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    const notes = readFromFile();
    newNote.id = notes.length + 1;
    notes.push(newNote);
    writeToFile(notes);
    res.json(newNote);
});
  
router.delete('/notes/:id', (req, res) => {
    const notes = readFromFile();
    const updatedNotes = notes.filter((note) => note.id !== parseInt(req.params.id));
    writeToFile(updatedNotes);
    res.json({ success: true });
});

module.exports = router;