const notesRoutes = require('express').Router();

// GET Route for homepage
notesRoutes.get('/', (req, res) => {
res.send(req.method)



}
);

// GET Route for notes page
notesRoutes.post('/', (req, res) => {}
);

notesRoutes.delete('/:id', (req, res) => {}
);

module.exports = notesRoutes;