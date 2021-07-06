const getRand = max => {
  return Math.floor(Math.random() * max) + 1;
};

const orderItems = [...new Array(20)].map(() => ({
  order_id: getRand(19),
  product_id: getRand(19),
  quantity: getRand(10),
}));

exports.seed = function (knex) {
  return knex("order_item").insert(orderItems);
};
