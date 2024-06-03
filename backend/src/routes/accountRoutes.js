const express = require('express');
const router = express.Router();
const Account = require('../models/account');

// Crear una nueva cuenta
router.post('/accounts', async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        await newAccount.save();
        res.status(201).send(newAccount);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todas las cuentas
router.get('/accounts', async (req, res) => {
    try {
        const accounts = await Account.find({});
        res.status(200).send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener una cuenta por ID
router.get('/accounts/:id', async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            res.status(404).send();
        }
        res.status(200).send(account);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar una cuenta por ID
router.patch('/accounts/:id', async (req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!account) {
            res.status(404).send();
        }
        res.status(200).send(account);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar una cuenta por ID
router.delete('/accounts/:id', async (req, res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) {
            res.status(404).send();
        }
        res.status(200).send(account);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
