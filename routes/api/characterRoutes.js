const router = require('express').Router();
const { Character } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll();

        res.status(200).json(characterData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const characterData = await Character.findByPK(req.params.id);
      
      res.status(200).json(characterData);
  
      if (!characterData) {
        res.status(404).json({ message: "No character found" });

      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;