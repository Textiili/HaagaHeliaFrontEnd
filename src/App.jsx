import React, { useState } from 'react';
import './App.css';
import './index.css';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/About"}>About </Link>
        <Link to={"/Contact"}>Contact </Link>
      </nav>
      <Outlet/>
    </div>   
    )
}

export default App;