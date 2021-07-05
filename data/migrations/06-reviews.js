exports.up = function (knex) {
  return knex.schema.createTable("reviews", table => {
    table.increments("id");
    table
      .integer("product_id")
      .references("id")
      .inTable("products")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.text("content");
    table.integer("rating").notNullable().unsigned();
    table.date("date").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reviews");
};
