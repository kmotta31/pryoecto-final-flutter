const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// Crear un nuevo gasto
router.post('/expenses', async (req, res) => {
    try {
        const newExpense = new Expense(req.body);
        await newExpense.save();
        res.status(201).send(newExpense);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los gastos
router.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un gasto por ID
router.get('/expenses/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            res.status(404).send();
        }
        res.status(200).send(expense);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un gasto por ID
router.patch('/expenses/:id', async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!expense) {
            res.status(404).send();
        }
        res.status(200).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un gasto por ID
router.delete('/expenses/:id', async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if (!expense) {
            res.status(404).send();
        }
        res.status(200).send(expense);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
