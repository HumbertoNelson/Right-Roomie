const Sequelize = require("sequelize");
const db = require("../db");

const UserPreference = db.define("user_preference", {
  cleanliness: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  allowPets: {
    type: Sequelize.STRING,
  },
  smoking: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  minAge: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  maxAge: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  drugs: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  workSchedule: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  socialLevel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  noiseLevel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  overnightGuests: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sexualOrientation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  politicalViews: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  religion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = UserPreference;
