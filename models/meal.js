const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
    box1: [String],
    box2: [String]
})

module.exports = mongoose.model('Meal', mealSchema);