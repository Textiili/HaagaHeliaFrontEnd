import React, { useState } from 'react';
import './App.css';
import './index.css';
import TodoGrid from './components/TodoGrid';
import { Link, Outlet } from 'react-router-dom';

function App() {
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
    <div className="App">
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/About"}>About </Link>
        <Link to={"/Contact"}>Contact </Link>
      </nav>
      <Outlet/>
      <h1>Todolist app</h1>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="date" onChange={inputChanged} name="date" value={todo.date}/>
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <button onClick={addTodo}>Add</button>
      <br />
      <TodoGrid todos={todos} deleteTodo={deleteTodo}/>
    </div>   
    )
}

export default App;