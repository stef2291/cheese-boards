const { Model, DataTypes } = require("sequelize");
const db = require("../db/db..js");

class Board extends Model {}

Board.init({
  type: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Board;
