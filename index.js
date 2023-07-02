import express, { json } from 'express';
import mongoose from 'mongoose';
import checkAuth from './utils/checkAuth.js'
import * as auth from './Validations/auth.js'
import { validationResult } from 'express-validator';
import * as UserController from './controllers/UserController.js'
import * as TodoController from './controllers/TodoController.js'
import Todo from './models/Todo.js';
import cors from 'cors';

mongoose.connect ('mongodb://127.0.0.1:27017/')
    .then( ()=> console.log('db OK'))
    .catch( (err)=> console.log('db error', err))


const app = express ();
app.use(cors())

app.use(express.json());

app.post('/auth/register', auth.registerValidation , UserController.register );

app.post('/auth/login', UserController.login)

app.post('/auth/me', checkAuth, UserController.getMe)

app.post('/todos/create', checkAuth, TodoController.createtodo)
app.patch('/todos/status', checkAuth, TodoController.changeStatus)
app.delete('/todos/delete/:id', checkAuth, TodoController.deletetodo)
app.get('/todos/tasks',checkAuth, TodoController.getAll)

app.listen(4444, (err) => {
    if(err) {
        return console.log(err);
    }
    else 
        return console.log('server okk')
});