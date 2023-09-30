import React, { useState } from 'react';
import './App.css'


function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <h1>Simple todolist</h1>
      <label for="addtodo">Add todo:</label>
      <form id="addtodo" onSubmit={addTodo}>
        <label for="date">Date: </label>
        <input id="date" type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <label for="description">Description: </label>
        <input id="description" type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <br />
      <table>
       <tbody>
       <tr><th>Date</th><th>Description</th></tr>
        {
          todos.map((todo, index) =>
          <tr key="index">
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
          </tr>
          )
        }
      </tbody> 
      </table>
    </div>
  );
}

export default App;
