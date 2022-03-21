const mongoose = require('mongoose');

const publicationScheama = new mongoose.Schema({
    name: { type: String, required: true },

}, { versionKey: false, timestamps: true });

const Publication = mongoose.model('publication', publicationScheama);

module.exports = Publication;;