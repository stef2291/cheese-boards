const { Cheese, User, Board } = require("../models");
const db = require("./db");

async function seed() {
  await db.sync({
    force: true,
  });

  const cheese = await Cheese.bulkCreate([
    { title: "Cheddar", description: "Cheddar Cheese Maturity Level 4" },
    { title: "Edam", description: "Edam Cheese Maturity Level 2" },
  ]);
}

seed();
