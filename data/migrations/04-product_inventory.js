exports.up = function (knex) {
  return knex.schema.createTable("product_inventory", table => {
    table.increments("id");
    table.integer("quantity").unsigned().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("product_inventory");
};
