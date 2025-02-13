const Sequelize = require("sequelize");
require("dotenv").config();
const pkg = require("../../package.json");

const databaseName = pkg.name;

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dpg-cjt720dhtt0c7397dtpg-a",
  config
);

module.exports = db;
