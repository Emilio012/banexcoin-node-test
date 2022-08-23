'use strict';
const dotenv = require('dotenv');
dotenv.config();


// PACKAGES
const express = require('express');
const app = express();
app.use(express.json());
// END OF PACKAGES


// ROUTES
app.use('/', require('./routes/clientes'));
// END OF ROUTES


const PORT = process.env.NODE_PORT || 8000;

app.listen(PORT, () => {
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Listening on *:${PORT}`);
});

module.exports = app;