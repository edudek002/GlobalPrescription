const router = require("express").Router();
const drugRoutes = require("./drugs");


// Drug routes

// router.use("/users", userRoutes);


// Drug routes
router.use("/drugs", drugRoutes);




module.exports = router;