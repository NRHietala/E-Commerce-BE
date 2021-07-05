exports.up = function (knex) {
  return knex.schema.createTable("product", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.text("desc").notNullable();
    table.string("SKU").notNullable();
    table
      .integer("category_id")
      .references("id")
      .inTable("product_category")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("inventory_id")
      .references("id")
      .inTable("product_inventory")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.decimal("price").unsigned().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("product");
};
