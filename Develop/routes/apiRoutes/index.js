// The express.Router class creates modular, mountable route handlers. A Router instance is a complete middleware and routing system.
const router = require("express").Router();

// Adds our route
const notesRoutes = require("./noteRoutes");

// "The router.use() function uses the specified middleware function or functions. It basically mounts middleware for the routes which are being served by the specific router."
router.use(notesRoutes);

// module.exports=router is mapping a router and all logic that's required to map (along with the right callbacks etc...)
module.exports = router;
