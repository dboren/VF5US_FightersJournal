const router = require('express').Router();
const { Combo, Log } = require('../../models');

router.post('/', async (req, res) => {
    try {
        
        const comboData = await Combo.create(req.body);

        res.status(200).json(comboData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const comboData = await Combo.findAll();

        res.status(200).json(comboData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const comboData = await Combo.findByPk(req.params.id, 
            {
                include: [{ model: Log }],
            });

        res.status(200).json(comboData);

        if(!comboData) {
            res.status(404).json(
                {message: 'No combos with this id'});
            
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;