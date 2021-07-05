exports.up = function (knex) {
  return knex.schema.createTable("order_details", table => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.decimal("total").unsigned().notNullable();
    table
      .integer("payment_id")
      .references("id")
      .inTable("payment_details")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("order_details");
};
