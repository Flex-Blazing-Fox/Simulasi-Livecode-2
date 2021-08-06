'use strict';
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./databases/db.json','utf-8n'))
data = data.map(el=>{
  return {
    ...el,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Inventory",data,{})
    await queryInterface.sequelize.query(`SELECT setval('"Inventory_id_seq"',(SELECT MAX(id) from "Inventory"))`)
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
    await queryInterface.bulkDelete("Inventory")
    await queryInterface.sequelize.query(`ALTER`)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
