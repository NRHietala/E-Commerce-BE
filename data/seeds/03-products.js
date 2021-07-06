const faker = require("faker");

const categories = ["Men", "Women", "Kids", "Accessories"];

const getRand = max => {
  return Math.floor(Math.random() * max) + 1;
};

const products = [...new Array(20)].map(() => ({
  category: categories[getRand(3)],
  name: faker.fake(`{{commerce.productName}}`),
  description: faker.fake(`{{lorem.sentence}}`),
  price: faker.fake(`{{commerce.price}}`),
  in_stock: getRand(10),
  image_url: faker.fake(`{{lorem.words}}`),
}));

exports.seed = function (knex) {
  return knex("products").insert(products);
};
