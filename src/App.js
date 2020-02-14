import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginDrawer from './components/Darwer';
import { Button } from '@material-ui/core';
import LogIn from './components/Login';
import { TaskList } from './components/TaskList';

function App() {
  const [open, setOpen] = useState(false);

  const toogleDrawer = close => event =>{
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(close)
  }
  return (
    <div className="App">
      <LogIn/>
      <Button onClick={toogleDrawer(true)}> open </Button>
      <LoginDrawer open={open} close={()=>{return console.log('cerrar')}}/>
      <TaskList/>
    </div>
  );
}

export default App;
