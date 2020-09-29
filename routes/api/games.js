const router = require("express").Router();
const gamesController = require("../../controllers/gameControllers");
let Games = require("../../models/game");

router.route("/").get(gamesController.findAll).post(gamesController.create);

router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
