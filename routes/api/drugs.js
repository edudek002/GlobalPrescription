const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/articles"
router.route("/")
  .get(controller.takeInfo)
  .post(controller.addUser);

console.log(controller);

// Matches with "/api/articles"

router.route("/")
  .get(controller.findAll)
  .post(controller.create);



// Finds existing Username in database
router.route("/loginn")
  .get(controller.findUser);
  

router.route("/logged")
  .get(controller.displayUser);  

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
