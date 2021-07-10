exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("email", 128).notNullable().unique();
    table.string("password", 128).notNullable();
    table.string("first_name");
    table.string("last_name");
    table.string("address_1");
    table.string("address_2");
    table.string("city");
    table.string("state");
    table.string("zip_code");
    table.string("phone", 32);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
