exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("username", 128).notNullable().unique();
    table.string("password", 128).notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("telephone").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
