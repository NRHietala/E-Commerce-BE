exports.up = function (knex) {
  return knex.schema.createTable("cart_item", table => {
    table.increments("id");
    table
      .integer("cart_id")
      .references("id")
      .inTable("cart")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .references("id")
      .inTable("products")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("quantity").notNullable().unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart_item");
};
