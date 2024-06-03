const mongoose = require('mongoose');

const UserSecuritySchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    two_factor_auth: { type: Boolean, default: false },
    security_questions: { type: String, required: true }
});

module.exports = mongoose.model('UserSecurity', UserSecuritySchema);
