const express = require('express');
const path = require('path');
const api = require('./routes/index');
const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use (express.static('public'));
app.use('/', api),






app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);