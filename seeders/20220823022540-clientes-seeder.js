'use strict';

// PACKAGES
const { faker } = require('@faker-js/faker');
faker.locale = "es";
// END OF PACKAGES

module.exports = {
    async up(queryInterface) {
        /**
         * Add seed commands here.
         */

        let data = [];

        for (let i = 0; i < 50; i++) {

            let birthdate = faker.date.between('1990-01-01', '2010-12-31');

            data.push({
                id: faker.datatype.uuid(),
                fname: faker.name.firstName(),
                lname: faker.name.lastName(),
                address: faker.address.city(),
                birthdate,
                createdAt: new Date(),
                updatedAt: new Date()
            });

        }

        await queryInterface.bulkInsert('clientes', data);
    },

    async down(queryInterface) {
        /**
         * Add commands to revert seed here.
         */
        await queryInterface.bulkDelete('clientes', null);
    }
};