const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    email_verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
