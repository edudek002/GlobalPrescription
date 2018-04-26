const router = require("express").Router();
const drugRoutes = require("./drugs");
const userRoutes = require("./users");
// Drug routes
router.use("/drugs", drugRoutes);
// router.use("/users", userRoutes);
module.exports = router;