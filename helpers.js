// MODELS
const Cliente = require('./models').cliente;
// END OF MODELS


// PACKAGES
const { v4: uuidv4 } = require('uuid');
// END OF PACKAGES

exports.clearField = (txt, field = 'string') => {
    if (txt == '' || txt == ' ' || txt === null || txt === '0000-00-00' || txt === 'null' || txt === undefined) {
        return null;
    } else {
        return field == 'string' ? this.capitalize(txt.trim().replace(/  +/g, ' ')) : txt;
    }
};

exports.capitalize = (string) => {

    const words = string.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");

};

exports.generateId = async() => {
    const id = uuidv4();

    const buscarCliente = await Cliente.findOne({ where: { id } });

    if (buscarCliente) {
        await this.genereteId();
    } else {
        return id;
    }
};