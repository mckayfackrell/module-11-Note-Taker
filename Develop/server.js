const express = require('express');
const path = require('path');
const api = require('./routes/index');
const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api),

app.use (express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);
app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);