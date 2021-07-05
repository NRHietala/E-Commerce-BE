exports.up = function (knex) {
  return knex.schema.createTable("cart_item", table => {
    table.increments("id");
    table
      .integer("session_id")
      .references("id")
      .inTable("shopping_session")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .references("id")
      .inTable("product")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("quantity").unsigned().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart_item");
};
