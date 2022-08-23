// MODELS
const Cliente = require('../models').cliente;
// END OF MODELS


// PACKAGES
const { clearField, generateId } = require('../helpers');
// END OF PACKAGES

exports.list = async(req, res) => {

    try {

        const clientes = await Cliente.findAll();

        res.status(200).json({ total: clientes.length, data: clientes });

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

exports.create = async(req, res) => {

    let { fname, lname, address, birthdate, status } = req.body;

    try {

        const id = await generateId();

        fname = clearField(fname);
        lname = clearField(lname);
        address = clearField(address);
        birthdate = clearField(birthdate, 'birthdate');
        status = status !== undefined ? status : 1;

        const cliente = await Cliente.create({ id, fname, lname, address, birthdate, status });

        res.status(200).json({ message: 'El cliente se ha registrado correctamente.', data: cliente });

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

exports.info = async(req, res) => {

    const { id } = req.params;

    try {

        const cliente = await Cliente.findOne({ where: { id } });

        res.status(200).json(cliente);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

exports.update = async(req, res) => {

    const { id } = req.params;
    let { fname, lname, address, birthdate, status } = req.body;

    try {

        const cliente = await Cliente.findOne({ where: { id } });

        if (cliente) {

            cliente.fname = clearField(fname);
            cliente.lname = clearField(lname);
            cliente.address = clearField(address);
            cliente.birthdate = clearField(birthdate, 'birthdate');
            cliente.status = status !== undefined ? status : 1;

            await cliente.save();

            res.status(200).json({ message: 'La información del cliente se ha actualizado correctamente.', data: cliente });

        } else {
            res.status(200).json({ message: `No se encontró ningún cliente con el ID: ${id}` });
        }

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};