import Todo from '../models/Todo.js';


  export const createtodo = async (req, res) => {
    const { todo, id } = req.body;
    // console.log(todo)
    try {
      const newTodo = new Todo({
        todo,
        id,
        completed:false
      });
      await newTodo.save();
      res.status(201).json({ msg: 'Todo created successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  export const deletetodo = async (req, res) => {
    const { id } = req.body;
    console.log(id)
    try {
      await Todo.findOneAndDelete({ id });
      res.status(200).json({ msg: 'Todo deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  export const changeStatus = async (req, res) => {
    const id= req.body.id;
   console.log(id)
    try {
      const todo = await Todo.findOne({ id });
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      if (todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
      await todo.save();
      res.status(200).json({ msg: 'Todo status updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

export const getAll = async (req, res) => {
  try{
      const todos = await Todo.find();
      res.json(todos);
  } catch (err) {
      res.status(500).json({
          message: 'Не удалось получить todo'
      })

  }
}