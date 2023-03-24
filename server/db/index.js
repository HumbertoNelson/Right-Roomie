//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const UserInfo = require("./models/UserInfo");
const UserPreference = require("./models/UserPreference");

UserInfo.belongsTo(User);
UserPreference.belongsTo(User);
User.hasOne(UserInfo);
User.hasOne(UserPreference);

module.exports = {
  db,
  models: {
    User,
    UserInfo,
    UserPreference,
  },
};
