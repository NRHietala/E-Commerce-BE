const getRand = max => {
  return Math.floor(Math.random() * max) + 1;
};

const cartItems = [...new Array(20)].map(() => ({
  cart_id: getRand(19),
  product_id: getRand(19),
  quantity: getRand(5),
}));

exports.seed = function (knex) {
  return knex("cart_item").insert(cartItems);
};
