const faker = require("faker");

const users = [...new Array(20)].map(() => ({
  email: faker.fake(`{{internet.email}}`),
  password: faker.fake(`{{internet.password}}`),
  first_name: faker.fake(`{{name.firstName}}`),
  last_name: faker.fake(`{{name.lastName}}`),
  address_1: faker.fake(`{{address.streetAddress}}`),
  address_2: faker.fake(`{{address.streetAddress}}`),
  city: faker.fake(`{{address.city}}`),
  state: faker.fake(`{{address.stateAbbr}}`),
  zip_code: faker.fake(`{{address.zipCode}}`),
  phone: faker.fake(`{{phone.phoneNumber}}`),
}));

// Consistent non-random test user
users.push({
  email: "test@test.com",
  password: "test",
  first_name: "Nate",
  last_name: "Tester",
  address_1: "123 Sesame St",
  address_2: "321 Rocky Rd",
  city: "Duluth",
  state: "MN",
  zip_code: "12345",
  phone: "1218555555",
});

exports.seed = function (knex) {
  return knex("users").insert(users);
};
