const { Model, DataTypes } = require("sequelize");
const db = require("../db/db..js");

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
