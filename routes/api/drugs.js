const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/drugs"

router.route("/")
  .get(controller.findAll)
  .post(controller.create);


router.route("/")
  .get(controller.takeInfo)
  .post(controller.addUser);


// Finds existing Username in database
router.route("/loginn")
  .get(controller.findUser);
  

router.route("/logged")
  .get(controller.displayUser);  

//matches
router
	.route("/search")
	.get(controller.findADrug);


// Matches with "/api/drugs/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
