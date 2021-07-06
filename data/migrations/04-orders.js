exports.up = function (knex) {
  return knex.schema.createTable("orders", table => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.datetime("date").notNullable();
    table.decimal("amount").notNullable().unsigned();
    table.decimal("total").notNullable().unsigned();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};
