const router = require("express").Router();
const {
  models: { User, UserInfo, UserPreference },
} = require("../db");
module.exports = router;

//api/users/
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
    next(err);
  }
});

router.put("/:id/account", async (req, res, next) => {
  try {
    console.log('body', req.body)
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.send(user[0]);
  } catch (err) {
    console.log("Can not update user", err);
    next(err);
  }
});

router.post("/userinfo", async (req, res, next) => {
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

router.put("/id/userinfo", async (req, res, next) => {
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
