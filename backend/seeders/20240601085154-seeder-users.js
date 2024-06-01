"use strict";

const users = require("../db/users.json");
const { hashPassword } = require("../helpers/bcrypt");

users.forEach((user) => {
  delete user.id;
  user.createdAt = new Date();
  user.updatedAt = new Date();
  user.password = hashPassword(user.password);
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
