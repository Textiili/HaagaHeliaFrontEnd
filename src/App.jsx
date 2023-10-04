import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';


function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <h1>Todolist with delete</h1>
      <label htmlFor="addtodo">Add todo:</label>
      <form id="addtodo" onSubmit={addTodo}>
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <label htmlFor="description">Description: </label>
        <input id="description" type="text" name="description" value={todo.description} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <br />
      <TodoTable todos={todos} delete={deleteTodo}/>
    </div>
  );
}

export default App;