const router = require('express').Router();
const { Log } = require('../../models');

router.post('/', async (req, res) => {
    try {

        const logData = await Log.create(req.body);

        res.status(200).json(logData);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;