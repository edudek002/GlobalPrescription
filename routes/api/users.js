const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/articles"
router.route("/landing")
    .get(controller.takeInfo)
    .post(controller.addUser);

// Matches with "/api/articles/:id"

router.route("/login")
    .get(controller.findUser);

router
    .route("/:id")
    .get((req, res) => {
        if (isAuthenticated()) {
            controller.findById(req.query);
        }
    })
    .put(controller.update)
    .delete(controller.remove);

module.exports = router;
