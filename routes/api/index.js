const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const logRoutes = require('./logRoutes');
const noteRoutes = require('./noteRoutes');
const sessionRoutes = require('./sessionRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/logs', logRoutes);
router.use('/notes', noteRoutes);
router.use('/sessions', sessionRoutes);

module.exports = router;