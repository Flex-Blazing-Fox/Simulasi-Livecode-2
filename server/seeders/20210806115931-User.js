'use strict';
const fs = require('fs')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);
let {users} = JSON.parse(fs.readFileSync('./db.json', {encoding: "utf-8"}))

users = users.map(user=>{
  return {
    ...user,
    password: bcrypt.hashSync(`${user.password}`, salt),
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users, {})
    
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
