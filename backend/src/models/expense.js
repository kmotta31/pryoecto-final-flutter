const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    expense_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
