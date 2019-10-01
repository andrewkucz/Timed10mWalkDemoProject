const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Record = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    trials: [{ duration: Number }],
    note: {
        type: String
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Record', Record);
