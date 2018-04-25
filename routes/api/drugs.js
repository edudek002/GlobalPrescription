const router = require("express").Router();
const controller = require("../../controllers/controller");
console.log(controller);

// Matches with "/api/articles"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);


//mat
router
	.route("/search")
	.get(controller.findADrug);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);



module.exports = router;
