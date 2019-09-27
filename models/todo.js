var mongoose = require("mongoose");

// Schema Setup
var todoSchema = new mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    completed: Boolean,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", todoSchema);