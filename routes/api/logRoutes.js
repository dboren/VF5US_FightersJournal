const router = require('express').Router();
const { Log, User } = require('../../models');

router.post('/', async (req, res) => {
    try {

        const logData = await Log.create(req.body);

        res.status(200).json(logData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const logData = await Log.findAll();

        res.status(200).json(logData);


    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const logData = await Log.findByPk(req.params.id, {
            include: [{ model: User }],
        });

        res.status(200).json(logData);

        if(!logData) {
            res.status(404).json({message: 'No logs with this id'});
        }

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;