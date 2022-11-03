const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");

/* User - Boards One-To-Many */
Board.belongsTo(User);
User.hasMany(Board); // add test!

// Boards - Cheeses Many-to-Many
Board.belongsToMany(Cheese, { through: "Board_Cheese" });
Cheese.belongsToMany(Board, { through: "Board_Cheese" }); //add tests

module.exports = {
  Board,
  Cheese,
  User,
};
