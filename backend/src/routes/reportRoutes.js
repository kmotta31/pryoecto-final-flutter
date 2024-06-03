const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// Crear un nuevo informe
router.post('/reports', async (req, res) => {
    try {
        const newReport = new Report(req.body);
        await newReport.save();
        res.status(201).send(newReport);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los informes
router.get('/reports', async (req, res) => {
    try {
        const reports = await Report.find({});
        res.status(200).send(reports);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un informe por ID
router.get('/reports/:id', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            res.status(404).send();
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un informe por ID
router.patch('/reports/:id', async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!report) {
            res.status(404).send();
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un informe por ID
router.delete('/reports/:id', async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id);
        if (!report) {
            res.status(404).send();
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
