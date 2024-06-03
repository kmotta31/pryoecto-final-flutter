const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    income_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    amount: { type: Number, required: true },
    source: { type: String, required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Income', IncomeSchema);
