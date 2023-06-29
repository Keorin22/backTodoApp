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
    type: mongoose.Schema.ObjectId,
    required: true,
    unique: true,
    default: mongoose.Types.ObjectId
  }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;