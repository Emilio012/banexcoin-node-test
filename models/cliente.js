'use strict';
const { Model } = require('sequelize');

// PACKAGES
const moment = require('moment');
// END OF PACKAGES


module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Cliente.init({
        id: {
            type: DataTypes.UUID,
            unique: true,
            primaryKey: true
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo de fname no puede ser nulo."
                }
            }
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo de lname no puede ser nulo."
                }
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo de address no puede ser nulo."
                }
            }
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: {
                    msg: "El campo de birthdate debe ser una fecha válida."
                }
            }
        },
        status: {
            type: DataTypes.NUMERIC(1),
            validate: {
                isIn: {
                    args: [
                        [0, 1]
                    ],
                    msg: "El status debe ser 0: INACTIVO o 1: ACTIVO"
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY HH:mm:ss');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY HH:mm:ss');
            }
        }
    }, {
        sequelize,
        freezeTableName: false,
        modelName: 'cliente',
        tableName: 'clientes'
    });

    return Cliente;
};