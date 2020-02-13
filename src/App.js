import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginDrawer from './components/Darwer';
import { Button } from '@material-ui/core';
import LogIn from './components/Login';

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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LogIn></LogIn>
      <Button onClick={toogleDrawer(true)}> open </Button>
      <LoginDrawer open={open} close={()=>{return console.log('cerrar');
      }}/>
    </div>
  );
}

export default App;
