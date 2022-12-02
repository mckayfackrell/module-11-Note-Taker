const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notesRoutes');
const htmlRouter = require('./htmlRoutes');



router.use('/api/notes', notesRouter);
router.use('/', htmlRouter);

router.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

module.exports = router;