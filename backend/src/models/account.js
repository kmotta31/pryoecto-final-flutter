const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    account_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    account_type: { type: String, required: true },
    initial_balance: { type: Number, required: true },
    currency: { type: String, required: true }
});

module.exports = mongoose.model('Account', AccountSchema);
