import React, { useState } from 'react';
import TodoGrid from './TodoGrid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: null, priority: ''});
  const [todos, setTodos] = useState([]);
    
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const changeDate = (newValue) => {
    setTodo({...todo, date: dayjs(newValue).toDate() });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <>
    <div>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField
        label="Description"
        variant="standard"
        name="description" value={todo.description}
        onChange={inputChanged}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <DatePicker 
          label="Date"
          value={todo.date}
          onChange={changeDate}
        />
      </LocalizationProvider>
      {/* <input type="date" onChange={inputChanged} name="date" value={todo.date}/> */}
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
    </>  
    )
}

export default Todolist;