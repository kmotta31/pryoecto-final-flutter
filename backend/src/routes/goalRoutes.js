const express = require('express');
const router = express.Router();
const Goal = require('../models/goal');

// Crear una nueva meta
router.post('/goals', async (req, res) => {
    try {
        const newGoal = new Goal(req.body);
        await newGoal.save();
        res.status(201).send(newGoal);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todas las metas
router.get('/goals', async (req, res) => {
    try {
        const goals = await Goal.find({});
        res.status(200).send(goals);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener una meta por ID
router.get('/goals/:id', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) {
            res.status(404).send();
        }
        res.status(200).send(goal);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar una meta por ID
router.patch('/goals/:id', async (req, res) => {
    try {
        const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!goal) {
            res.status(404).send();
        }
        res.status(200).send(goal);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar una meta por ID
router.delete('/goals/:id', async (req, res) => {
    try {
        const goal = await Goal.findByIdAndDelete(req.params.id);
        if (!goal) {
            res.status(404).send();
        }
        res.status(200).send(goal);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
