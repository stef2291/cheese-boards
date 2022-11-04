const { Model, DataTypes } = require("sequelize");
const db = require("../db/db.js");

class Board extends Model {}

//French cheese is a type of board. Soft cheese is another etc

Board.init(
  {
    type: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize: db }
);

module.exports = Board;
