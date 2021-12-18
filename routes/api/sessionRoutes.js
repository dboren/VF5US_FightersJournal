const router = require('express').Router();
const { Session, Log } = require('../../models');

router.post('/', async (req, res) => {
    try {

        const sessionData = await Session.create(req.body);

        res.status(200).json(sessionData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const sessionData = await Session.findAll();

        res.status(200).json(sessionData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const sessionData = await Session.findByPk(req.params.id, {
            include: [{ model: Log }],
        });

        res.status(200).json(sessionData);

        if(!sessionData) {
            res.status(404).json({message: 'No sessions with this id'});
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;