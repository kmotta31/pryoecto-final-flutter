const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    reminder_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    bill_name: { type: String, required: true },
    amount: { type: Number, required: true },
    due_date: { type: Date, required: true },
    frequency: { type: String, required: true },
    notification_method: { type: String, required: true }
});

module.exports = mongoose.model('Reminder', ReminderSchema);
