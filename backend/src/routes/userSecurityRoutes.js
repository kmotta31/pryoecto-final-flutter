const express = require('express');
const router = express.Router();
const UserSecurity = require('../models/user_security');

// Crear configuración de seguridad para un usuario
router.post('/user_security', async (req, res) => {
    try {
        const newUserSecurity = new UserSecurity(req.body);
        await newUserSecurity.save();
        res.status(201).send(newUserSecurity);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todas las configuraciones de seguridad
router.get('/user_security', async (req, res) => {
    try {
        const userSecurities = await UserSecurity.find({});
        res.status(200).send(userSecurities);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener configuración de seguridad por ID de usuario
router.get('/user_security/:id', async (req, res) => {
    try {
        const userSecurity = await UserSecurity.findById(req.params.id);
        if (!userSecurity) {
            res.status(404).send();
        }
        res.status(200).send(userSecurity);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar configuración de seguridad por ID de usuario
router.patch('/user_security/:id', async (req, res) => {
    try {
        const userSecurity = await UserSecurity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!userSecurity) {
            res.status(404).send();
        }
        res.status(200).send(userSecurity);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar configuración de seguridad por ID de usuario
router.delete('/user_security/:id', async (req, res) => {
    try {
        const userSecurity = await UserSecurity.findByIdAndDelete(req.params.id);
        if (!userSecurity) {
            res.status(404).send();
        }
        res.status(200).send(userSecurity);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
