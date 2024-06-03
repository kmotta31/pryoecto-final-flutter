const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Crear un nuevo usuario
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un usuario por ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un usuario por ID
router.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un usuario por ID
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Login de usuario
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send({ message: 'Email format is invalid' });
    }

    // Validar la longitud mínima de la contraseña
    if (password.length < 4) {
        return res.status(400).send({ message: 'Password must be at least 4 characters long' });
    }

    // Aquí deberías implementar la lógica de autenticación
    // Por ahora, simplemente respondemos con un mensaje
    res.status(200).send({ message: 'Login successful' });
});

module.exports = router;

