exports.up = function (knex) {
  return knex.schema.createTable("payment_details", table => {
    table.increments("id");
    table.integer("order_id").notNullable();
    table.decimal("amount").unsigned().notNullable();
    table.string("provider").notNullable();
    table.text("status").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("payment_details");
};
