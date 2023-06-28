import express, { json } from 'express';
import mongoose from 'mongoose';
import checkAuth from './utils/checkAuth.js'
import * as auth from './Validations/auth.js'
import { validationResult } from 'express-validator';
import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'
import * as TodoController from './controllers/TodoController.js'
import Todo from './models/Todo.js';
import cors from 'cors';
mongoose.connect ('mongodb://localhost:27017/Todo')
    .then( ()=> console.log('db OK'))
    .catch( (err)=> console.log('db error', err))


const app = express ();
app.use(cors())

app.use(express.json());

app.post('/auth/register', auth.registerValidation , UserController.register );

app.post('/auth/login', UserController.login)

app.post('/auth/me', checkAuth, UserController.getMe)

app.post('/todos/create', TodoController.createtodo)
app.patch('/todos/status', TodoController.changeStatus)
app.delete('/todos/delete', TodoController.deletetodo)
app.get('/todos/tasks',  TodoController.getAll)

// app.get('/posts',  PostController.getAll )
// app.get('/posts/:id',  PostController.getOne )
// app.post('/posts', checkAuth, auth.postCreateValidation ,PostController.createPost )
// app.delete('/posts/:id', checkAuth, PostController.remove )
// app.patch('/posts',  PostController.update )

app.listen(4444, (err) => {
    if(err) {
        return console.log(err);
    }
    else 
        return console.log('server okk')
});