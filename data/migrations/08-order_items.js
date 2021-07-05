exports.up = function (knex) {
  return knex.schema.createTable("order_items", table => {
    table.increments("id");
    table
      .integer("order_id")
      .references("id")
      .inTable("order_details")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .references("id")
      .inTable("product")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("order_items");
};
