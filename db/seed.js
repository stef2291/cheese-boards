const { Cheese, User, Board } = require("../models");
const db = require("./db");

async function seed() {
  await db.sync({
    force: true,
  });

  const john = await User.create({
    name: "John",
    email: "johndoe@hotmail.com",
  });

  const timmy = await User.create({
    name: "Timmy",
    email: "timmy@hotmail.com",
  });

  const cheese = await Cheese.bulkCreate([
    { title: "Cheddar", description: "Hard cheese originated in the UK" },
    {
      title: "Mozzarella",
      description: "Semi-soft cheese originated in Italy",
    },
  ]);

  const b1 = await Board.create({
    type: "Cheddar",
    description: "Hard cheese originated in the UK",
    rating: 4,
  });
  const b2 = await Board.create({
    type: "Mozzarella",
    description: "Semi-soft cheese from Italy",
    rating: 5,
  });
  const b3 = await Board.create({
    type: "Cheddar",
    description: "Hard cheese originated in the UK",
    rating: 2,
  });
  const b4 = await Board.create({
    type: "Mozzarella",
    description: "Semi-soft cheese from Italy",
    rating: 1,
  });

  await timmy.addBoard(b1);
  await timmy.addBoard(b2);

  // const data = await timmy.getBoards();

  // console.log("Data: ", data.map((d) => d.toJSON()).length);

  await john.addBoard(b3);
  await john.addBoard(b4);

  await cheese[0].addBoards(b1);
  await cheese[0].addBoards(b3);
  await cheese[1].addBoards(b2);
  await cheese[1].addBoards(b4);

  const user_Boards = await User.findAll({
    include: Board,
  });

  const jsoned = user_Boards.map((b) => b.toJSON());

  console.log(jsoned[0].Boards);

  //add{name-of-table} = many tables owned by source
  // set{name-of-table} = subject is owned by single source, also one to one relationship
}

seed();
