const { Cheese, User, Board } = require("../models");

async function main() {
  //timmy.createBoard()
  //john.findByPK()
  //timmy.hetPosts()
  //john.countPosts()

  const cheeses = await Cheese.findByPk(1);

  console.log(cheeses.toJSON());
}
main();
