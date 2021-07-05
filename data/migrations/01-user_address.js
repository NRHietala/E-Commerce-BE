exports.up = function (knex) {
  return knex.schema.createTable("user_address", table => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("address_line1").notNullable();
    table.string("address_line2");
    table.string("city").notNullable();
    table.string("postal_code", 12).notNullable();
    table.string("country").notNullable();
    table.string("telephone", 32);
    table.string("mobile", 32);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_address");
};
