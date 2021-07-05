exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("email", 128).notNullable().unique();
    table.string("password", 128).notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("address_1").notNullable();
    table.string("address_2");
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("zip_code").notNullable();
    table.string("phone", 32).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
