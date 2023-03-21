//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const UserInfo = require("./models/UserInfo");
const UserPreference = require("./models/UserPreference");
// const UserCompatibility = require("./models/userCompatibility");

UserInfo.belongsTo(User);
UserPreference.belongsTo(User);
// UserCompatibility.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    UserInfo,
    UserPreference,
    // UserCompatibility,
  },
};
