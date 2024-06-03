const express = require('express');
const router = express.Router();
const Income = require('../models/incoome');

// Crear un nuevo ingreso
router.post('/incomes', async (req, res) => {
    try {
        const newIncome = new Income(req.body);
        await newIncome.save();
        res.status(201).send(newIncome);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los ingresos
router.get('/incomes', async (req, res) => {
    try {
        const incomes = await Income.find({});
        res.status(200).send(incomes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un ingreso por ID
router.get('/incomes/:id', async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) {
            res.status(404).send();
        }
        res.status(200).send(income);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un ingreso por ID
router.patch('/incomes/:id', async (req, res) => {
    try {
        const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!income) {
            res.status(404).send();
        }
        res.status(200).send(income);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un ingreso por ID
router.delete('/incomes/:id', async (req, res) => {
    try {
        const income = await Income.findByIdAndDelete(req.params.id);
        if (!income) {
            res.status(404).send();
        }
        res.status(200).send(income);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
