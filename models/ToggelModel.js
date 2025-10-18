const mongoose = require('mongoose');


const toggelSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Status', toggelSchema);