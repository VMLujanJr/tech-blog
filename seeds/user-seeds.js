const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Victor",
    email: "victor@victor.com",
    password: "victor",
  },
  {
    id: 2,
    username: "Michael",
    email: "michael@michael.com",
    password: "michael",
  },
  {
    id: 3,
    username: "Keith",
    email: "keith@keith.com",
    password: "keith",
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;