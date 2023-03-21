const router = require("express").Router();
const {
  models: { User, UserInfo, UserPreference },
} = require("../db");

module.exports = router;

router.get("/:id/userPreference/userCompatibility", async (req, res, next) => {
  try {
    const userCompatibility = await UserInfo.findAll({
      where: {
        userId: req.params.id,
      },
      include: [User],
    });
    res.send(userCompatibility);
  } catch (err) {
    console.log("Can not get user preferences", err);
    next(err);
  }
});

// router.get("/:id/userPreference/userCompatibility", async (req, res, next) => {
//   try {
//     const getUserInfo = await User.findByPk({
//       where: {
//         id: auth.id,
//       },
//       include: UserPreference,
//     });
//     res.send(getUserInfo);
//   } catch (err) {
//     console.log("Can not get user preferences", err);
//     next(err);
//   }
// });
