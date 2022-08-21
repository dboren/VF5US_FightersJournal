const router = require('express').Router();
const { Character, Combo, Log, Note, Session, User } = require('../models');

// router.get('/character', async (req, res) => {
//     try {
//         const characterData = await Character.findAll({
//             include: [
//                 {
//                   model: Character,
//                   attributes: ['filename', 'description'],
//                 },
//               ],
//         });

//         res.status(200).json(characterData);

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/character/:id', async (req, res) => {
//     try {
//       const characterData = await Character.findByPK(req.params.id);
      
//       const character = characterData.get({ plain: true });
  
//       if (!characterData) {
//         res.status(404).json({ message: "No character found" });
//         return;
//       }
  
//       res.status(200).json(characterData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



module.exports = router;