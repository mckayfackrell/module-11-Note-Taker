const router = require("express").Router();
const path = require("path");

// Import our modular routers for /tips and /feedback
// const notesRouter = require("../apiRoutes/notesRoutes");
// const htmlRouter = require("../htmlRoutes");

// router.use("/api/notes", notesRouter);
// router.use("/", htmlRouter);

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
