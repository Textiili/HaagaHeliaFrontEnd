import React, { useState } from 'react';
import TodoGrid from './TodoGrid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);
    
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField
        label="Description"
        variant="standard"
        name="description" value={todo.description}
        onChange={inputChanged}
      />
      <input type="date" onChange={inputChanged} name="date" value={todo.date}/>
      <TextField
        label="Priority"
        variant="standard"
        name="priority" value={todo.priority}
        onChange={inputChanged}
      />
      <Button onClick={addTodo} variant="contained">Add</Button>
      </Stack>

      <br />
      <TodoGrid todos={todos} deleteTodo={deleteTodo}/>
    </div>   
    )
}

export default Todolist;