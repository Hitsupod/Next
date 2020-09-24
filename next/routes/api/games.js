const router = require("express").Router();
const gamesController = require("../../controllers/gameControllers");
let Games = require("../../models/game");

// Matches with "/api/games"
router
  .route("/")
  .get((req, res) => {
    Games.fine()
      .then((games) => res.json(games))
      .catch((err) => res.status(400).json("error" + err));
  })
  .post(gamesController.create);

// Matches with "/api/games/:id"
router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
