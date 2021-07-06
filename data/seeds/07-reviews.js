const faker = require("faker");

const getRand = max => {
  return Math.floor(Math.random() * max) + 1;
};

const reviews = [...new Array(20)].map(() => ({
  product_id: getRand(19),
  user_id: getRand(19),
  content: faker.fake(`{{lorem.sentences}}`),
  rating: getRand(4),
  date: faker.date.past(),
}));

exports.seed = function (knex) {
  return knex("reviews").insert(reviews);
};
