exports.up = function (knex) {
  return knex.schema.createTable("product_category", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.text("desc").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("product_category");
};
