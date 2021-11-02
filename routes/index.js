const path = require('path');
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

module.exports = router;