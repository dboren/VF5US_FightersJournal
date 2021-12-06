const router = require('express').Router();
const { Session } = require('../../models');

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

module.exports = router;