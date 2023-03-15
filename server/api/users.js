const router = require("express").Router();
const {
  models: { User, UserPreference },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
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

router.put("/:id/account", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (err) {
    console.log("Can not update user", err);
    next(err);
  }
});

router.post("/:id/userinfo", async (req, res, next) => {
  try {
    const info = await UserInfo.create(req.body);
    info.userId = req.params.id;
    await info.save();
    res.status(201).send(info);
  } catch (err) {
    console.log("Can not add user information");
    next(err);
  }
});

router.put("/:id/userinfo", async (req, res, next) => {
  try {
    const info = await UserInfo.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.send(await info.update(req.body));
  } catch (err) {
    console.log("Can not update user information", err);
    next(err);
  }
});
router.put("/:id/userPreference", async (req, res, next) => {
  try {
    const userPref = await UserPrefernce.update(req.body, {
      where: { id: req.params.id },
    });
    res.status.json(userPref);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/userCompatibility", async (req, res, next) => {
  try {
    const usersCompatibility = await User.findByPk({
      where: { id: req.params.id },
    });
    res.json(usersCompatibility);
  } catch (err) {
    next(err);
  }
});

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
