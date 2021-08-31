const router = require('express').Router();
const { Combo } = require('../../models');

router.post('/', async (req, res) => {
    try {
        
        const comboData = await Combo.create(req.body);

        res.status(200).json(comboData);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;