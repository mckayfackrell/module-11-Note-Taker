const express = require("express");
const app = express();
const PORT = process.env.port || 3001;
const routes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes),
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
