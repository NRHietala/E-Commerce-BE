exports.up = function (knex) {
  return knex.schema.createTable("products", table => {
    table.increments("id");
    table.string("category").notNullable();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.decimal("price").notNullable().unsigned();
    table.integer("in_stock").notNullable().unsigned();
    table.string("image_url");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
