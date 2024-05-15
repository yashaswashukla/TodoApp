/**
 * Todo {
 *  title: string,
 *  description: string,
 *  completed: boolean
 * }
 */
require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.DATABASE_URL;
mongoose.connect(uri);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = { todo };
