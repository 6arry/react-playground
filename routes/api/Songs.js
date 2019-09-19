const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js')

// Song Mdoel
const Song = require('../../models/Song.js');

// @route   GET api/songs
// @desc    Get all Songs
// @access  Public
router.get('/', (req, res) => {
    Song.find()
    .sort({ date: -1 })
    .then(songs => res.json(songs))
});

// @route   POST api/songs
// @desc    Create a Song
// @access  Protected
router.post('/', auth, (req, res) => {
const newSong = new Song({
    name: req.body.name
});

    newSong.save().then(song => res.json(song));
});

// @route   DELETE api/songs
// @desc    Delete a Song
// @access  Protected
router.delete('/:id', auth, (req, res) => {
    Song.findById(req.params.id)
    .then(song => song.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;