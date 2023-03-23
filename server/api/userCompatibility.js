const router = require("express").Router();
const {
  models: { User, UserInfo, UserPreference },
} = require("../db");

module.exports = router;

// /api/compatibility/
// router.get("/:id/userPreference", async (req, res, next) => {
//   try {
//     const userPreference = await UserPreference.findAll({
//       where: {
//         userId: req.params.id,
//       },
//       include: [User],
//     });
//     res.send(userPreference);
//   } catch (err) {
//     console.log("Can not get user preferences", err);
//     next(err);
//   }
// });
// router.get("/:id/userPreference", async (req, res, next) => {
//   try {
//     const userPreference = await UserPreference.findAll({
//       where: {
//         userId: req.params.id,
//       },
//       include: [User],
//     });
//     res.send(userPreference);
//   } catch (err) {
//     console.log("Can not get user preferences", err);
//     next(err);
//   }
// });

router.get("/userinfos", async (req, res, next) => {
  try {
    const allInfos = await UserInfo.findAll({
      include: User,
    });
    res.status(201).send(allInfos);
  } catch (err) {
    console.log("Can not fetch all users information");
    next(err);
  }
});

router.get("/userPreferences", async (req, res, next) => {
  try {
    const allPreferences = await UserPreference.findAll({
      include: User,
    });
    res.status(201).send(allPreferences);
  } catch (err) {
    console.log("Can not fetch all users preferences");
    next(err);
  }
});
