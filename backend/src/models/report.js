const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    report_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    format: { type: String, required: true },
    file_path: { type: String, required: true }
});

module.exports = mongoose.model('Report', ReportSchema);
