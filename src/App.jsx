import React, { useState } from 'react';
import './components/Todolist';
import './index.css';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack'; //TODO
import Todolist from './components/Todolist';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <>
    <div>
      <Tabs value={value} onChange={handleChange}>
      <Tab value="Home" label="Home" />
      <Tab value="Todos" label="Todos" />
      <Tab value="About" label="About" />
      <Tab value="Contact" label="Contact" />
      </Tabs>
      {value === 'Home' && <Home></Home>}
      {value === 'Todos' && <Todolist/>}
      {value === 'About' && <About></About>}
      {value === 'Contact' && <Contact></Contact>}
    </div>
    </>
  )
}

export default App;