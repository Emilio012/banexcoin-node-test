'use strict';
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "port": process.env.DB_PORT,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "timezone": "America/Lima"
};