const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/articles"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
