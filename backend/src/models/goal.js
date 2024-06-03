const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    goal_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    name: { type: String, required: true },
    target_amount: { type: Number, required: true },
    target_date: { type: Date, required: true },
    current_amount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Goal', GoalSchema);
