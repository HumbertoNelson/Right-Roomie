const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
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
