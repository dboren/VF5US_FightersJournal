const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const logRoutes = require('./logRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/logs', logRoutes);

module.exports = router;