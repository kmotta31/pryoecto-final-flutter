const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const incoomeRoutes = require('./routes/incoomeRoutes'); // Corregido el nombre de la ruta
const goalRoutes = require('./routes/goalRoutes');
const reportRoutes = require('./routes/reportRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const accountRoutes = require('./routes/accountRoutes');
const userSecurityRoutes = require('./routes/userSecurityRoutes');

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors({ origin: 'http://localhost:55667' }));

app.use(express.json());

// Conectar a MongoDB sin las opciones obsoletas
mongoose.connect('mongodb://localhost:27017/financeApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Usar rutas
app.use('/api', userRoutes);
app.use('/api', expenseRoutes);
app.use('/api', incoomeRoutes); // Corregido el nombre de la ruta
app.use('/api', goalRoutes);
app.use('/api', reportRoutes);
app.use('/api', reminderRoutes);
app.use('/api', accountRoutes);
app.use('/api', userSecurityRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
