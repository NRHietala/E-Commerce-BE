exports.up = function (knex) {
  return knex.schema.createTable("order_item", table => {
    table.increments("id");
    table
      .integer("order_id")
      .references("id")
      .inTable("orders")
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
  return knex.schema.dropTableIfExists("order_item");
};
