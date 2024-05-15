/**
 * Todo {
 *  title: string,
 *  description: string,
 *  completed: boolean
 * }
 */
import mongoose from "mongoose";

mongoose.connect(process.env.MONGOOSE_CONNECT_URL);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = { todo };
