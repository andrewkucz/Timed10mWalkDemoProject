const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Patient = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Patient', Patient);
