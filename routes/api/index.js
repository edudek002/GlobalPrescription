const router = require("express").Router();
const drugRoutes = require("./drugs");

// Drug routes
router.use("/drugs", drugRoutes);

module.exports = router;