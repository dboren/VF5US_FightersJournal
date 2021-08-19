const router = require('express').Router();
const { Note } = require('../../models');

router.post('/', async (req, res) => {
    try {

        const noteData = await Note.create(req.body);

        res.status(200).json(noteData);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;