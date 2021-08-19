const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const logRoutes = require('./logRoutes');
const noteRoutes = require('./noteRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/logs', logRoutes);
router.use('/notes', noteRoutes);

module.exports = router;