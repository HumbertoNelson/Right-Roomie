const router = require("express").Router();
const {
  models: { User, UserInfo, UserPreference },
} = require("../db");
module.exports = router;

//api/users/
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: UserInfo,
    });
    res.json(users);
    console.log(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/account", async (req, res, next) => {
  try {
    res.send(await User.findByPk(req.params.id));
  } catch (err) {
    console.log("Can not find user", err);
  }
});

router.post("/:id/userPreference", async (req, res, next) => {
  try {
    const userPref = await UserPreference.create(req.body);
    await userPref.save();
    res.send(userPref);
  } catch (err) {
    next(err);
  }
});
router.get("/:id/userPreference", async (req, res, next) => {
  try {
    const userPreference = await UserPreference.findAll({
      include: User,
      where: {
        userId: req.params.id,
      },
    });
    res.status(201).send(userPreference);
  } catch (err) {
    console.log("Can not fetch user preferences");
    next(err);
  }
});

router.put("/:id/account", async (req, res, next) => {
  try {
    console.log("body", req.body);
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.send(user);
  } catch (err) {
    console.log("Can not update user", err);
    next(err);
  }
});
router.get("/userinfo/:id", async (req, res, next) => {
  try {
    const userInfo = await UserInfo.findAll({
      include: User,
      where: {
        userId: req.params.id,
      },
    });
    res.status(201).send(userInfo);
  } catch (err) {
    console.log("Can not fetch user information");
    next(err);
  }
});

router.post("/userinfo/", async (req, res, next) => {
  try {
    const info = await UserInfo.create(req.body);
    // info.userId = req.params.id;
    await info.save();
    res.status(201).send(info);
  } catch (err) {
    console.log("Can not add user information");
    next(err);
  }
});

router.put("/userinfo/:id", async (req, res, next) => {
  try {
    const info = await UserInfo.findAll({
      where: {
        userId: req.params.id,
      },
    });
    console.log("this is info", info);
    console.log("this is req.body", req.body);
    await info[0].update(req.body);
    res.send(info);
  } catch (err) {
    console.log("Can not update user information", err);
    next(err);
  }
});
router.put("/:id/userPreference", async (req, res, next) => {
  try {
    const userPref = await UserPreference.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(userPref);
  } catch (err) {
    next(err);
  }
});

// router.get("/:id/userCompatibility", async (req, res, next) => {
//   try {
//     const usersCompatibility = await User.findByPk({
//       where: { id: req.params.id },
//     });
//     res.json(usersCompatibility);
//   } catch (err) {
//     next(err);
//   }
// });

router.delete("/:id/account", async (req, res, next) => {
  try {
    const destroyUser = await User.findById({
      where: { id: req.params.id },
    });
    res.send(destroyUser.destroy());
  } catch (error) {
    next(error);
  }
});
