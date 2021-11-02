const router = require('express').Router();
const { Note, Log } = require('../../models');

router.post('/', async (req, res) => {
    try {

        const noteData = await Note.create(req.body);

        res.status(200).json(noteData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const noteData = await Note.findAll();

        res.status(200).json(noteData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbNoteData = await Note.findByPk(req.params.id, {
            include: [{ model: Log }],
        });

        res.status(200).json(dbNoteData);

        if(!dbNoteData) {
            res.status(404).json({message: 'No notes with this id'});
        }


    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;