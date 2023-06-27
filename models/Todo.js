import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  id: {
    type: Number,
    required: true,
    unique: true
  }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;