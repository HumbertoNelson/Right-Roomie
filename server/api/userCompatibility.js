const router = require("express").Router();
const {
  models: { UserCompatability },
} = require("../db");
const UserPreference = require("../db/models/UserPreference");
module.exports = router;

router.get("/:id/userPreference/userCompatibility", async (req, res, next) => {
  try {
    const userCompatibility = await UserPreference.findAll();
    res.send(userCompatibility);
  } catch (err) {
    console.log("Can not get user preferences", err);
    next(err);
  }
});
