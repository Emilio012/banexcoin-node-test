'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('clientes', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            fname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            birthdate: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            status: {
                type: Sequelize.NUMERIC(1),
                allowNull: false,
                defaultValue: 1,
                comments: '0: INACTIVO, 1: ACTIVO'
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('clientes');
    }
};