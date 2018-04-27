const router = require("express").Router();
const drugRoutes = require("./drugs");

// router.use("/users", userRoutes);

// Drug routes
router.use("/drugs", drugRoutes);

module.exports = router;