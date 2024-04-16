const express = require("express")
const router = express.Router()
const myTodos = {
  todos: [
    {
      id: 1,
      title: 'Finish this JavaScript exercise',
      priority: 1, // High priority
      createdAt: new Date(), 
      done: false,
      doneAt: null, 
    },
    {
      id: 2,
      title: 'Buy groceries',
      priority: 2, // Medium priority
      createdAt: new Date(),
      done: true,
      doneAt: new Date('2024-04-15'), 
    },
  
  ],
};

exports.read = (req, res) => {
    res.send('All the tasks')
}

exports.readOne = (req, res) => {
    const id = req.params.id

    let task

    for (const todo of myTodos.todos) {
        if (todo.id === targetId) {
            task = todo;
            break; // Exit the loop once a match is found
        }
    }

    res.send(task)



}

exports.post = (req, res) => {
   
    const {id, title, priority, createdAt, done, doneAt} = req.body


    res.send(req.body);
}
exports.put = (req, res) => {
    const id = req.params.id

    let task

    for (const todo of myTodos.todos) {
        if (todo.id === targetId) {
            task = todo;
            break; // Exit the loop once a match is found
        }
    }<<s



}