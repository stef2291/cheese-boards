const { Model, DataTypes } = require("sequelize");
const db = require("../db/db.js");

class Cheese extends Model {}

Cheese.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db }
);

module.exports = Cheese;
