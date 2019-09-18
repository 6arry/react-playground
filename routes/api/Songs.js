const express = require('express');
const router = express.Router();

// Song Mdoel
const Song = require('../../models/Song');

// @route   GET api/songs
// @desc    Get all Songs
// @access  Public
router.get('/', (req, res) => {
    Song.find()
    .sort({ date:-1 })
    .then(songs => res.json(songs))
});

// @route   POST api/songs
// @desc    Create a Song
// @access  Public
router.post('/', (req, res) => {
const newSong = new Song({
    name: req.body.name
});

    newSong.save().then(song => res.json(song));
});

// @route   DELETE api/songs
// @desc    Delete a Song
// @access  Public
router.delete('/:id', (req, res) => {
    Song.findById(req.params.id)
    .then(song => song.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;