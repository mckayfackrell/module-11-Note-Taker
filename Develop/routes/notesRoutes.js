const notesRoutes = require('express').Router();
const fs = require('fs');

// GET Route for homepage
notesRoutes.get('/', (req, res) => {
fs.readFile('./db/db.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // Convert string into JSON object
    const parsedReviews = JSON.parse(data);
    res.json(parsedReviews);

  }
});

}
);

// GET Route for notes page
notesRoutes.post('/', (req, res) => {



}
);

notesRoutes.delete('/:id', (req, res) => {




}
);

module.exports = notesRoutes;