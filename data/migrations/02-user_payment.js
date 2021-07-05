exports.up = function (knex) {
  return knex.schema.createTable("user_payment", table => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("payment_type").notNullable();
    table.string("provider").notNullable();
    table.integer("account_no").notNullable();
    table.date("expiry").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_payment");
};
