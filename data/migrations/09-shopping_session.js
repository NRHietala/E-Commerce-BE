exports.up = function (knex) {
  return knex.schema.createTable("shopping_session", table => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.decimal("total").unsigned().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("shopping_session");
};
