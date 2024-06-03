const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder');

// Crear un nuevo recordatorio
router.post('/reminders', async (req, res) => {
    try {
        const newReminder = new Reminder(req.body);
        await newReminder.save();
        res.status(201).send(newReminder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los recordatorios
router.get('/reminders', async (req, res) => {
    try {
        const reminders = await Reminder.find({});
        res.status(200).send(reminders);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un recordatorio por ID
router.get('/reminders/:id', async (req, res) => {
    try {
        const reminder = await Reminder.findById(req.params.id);
        if (!reminder) {
            res.status(404).send();
        }
        res.status(200).send(reminder);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un recordatorio por ID
router.patch('/reminders/:id', async (req, res) => {
    try {
        const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!reminder) {
            res.status(404).send();
        }
        res.status(200).send(reminder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un recordatorio por ID
router.delete('/reminders/:id', async (req, res) => {
    try {
        const reminder = await Reminder.findByIdAndDelete(req.params.id);
        if (!reminder) {
            res.status(404).send();
        }
        res.status(200).send(reminder);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
