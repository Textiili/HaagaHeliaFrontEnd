import React, { useState } from 'react'

export default function Todolist() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={desc} inputChange={inputChanged} />
        <input type="submit" value="Add"/>
      </form>
    </div>
  );
}
