const htmlRoutes = require('express').Router();

// GET Route for homepage
htmlRoutes.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

// GET Route for notes page
htmlRoutes.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);

module.exports = htmlRoutes;