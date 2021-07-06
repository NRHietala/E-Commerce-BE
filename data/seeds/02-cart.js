const getRand = max => {
  return Math.floor(Math.random() * max) + 1;
};

const cartInstances = [...new Array(20)].map(() => ({
  user_id: getRand(19),
}));

exports.seed = function (knex) {
  return knex("cart").insert(cartInstances);
};
