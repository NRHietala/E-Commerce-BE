const faker = require("faker");

const getRand = max => {
  return Math.floor(Math.random() * max) + 1;
};

const orders = [...new Array(20)].map(() => ({
  user_id: getRand(19),
  date: faker.date.past(),
  amount: faker.fake(`{{finance.amount}}`),
  total: faker.fake(`{{finance.amount}}`),
}));

exports.seed = function (knex) {
  return knex("orders").insert(orders);
};
