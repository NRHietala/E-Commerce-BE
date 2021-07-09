const knex = require("../../data/dbConfig");

module.exports = {
  getAll,
  getById,
  getByEmail,
  addUser,
  editUser,
};

function getAll() {
  return knex("users").select("id", "email").orderBy("id");
}

function getById(id) {
  return knex("users").where({ id: id }).select("id").first();
}

function getByEmail(email) {
  return knex("users").where({ email: email }).select("id", "password").first();
}

async function addUser(user) {
  const [id] = await knex("users").insert(user, "id");
  return getById(id);
}

function editUser(changes, id) {
  return knex("users").where({ user_id: id }).update(changes);
}
