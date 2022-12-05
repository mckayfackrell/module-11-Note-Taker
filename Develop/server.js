const express = require("express");
const app = express();
const PORT = process.env.port || 3001;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const fs = require("fs");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes),
  app.use("/", htmlRoutes),
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
