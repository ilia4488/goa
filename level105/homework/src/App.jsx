import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client';
import { Student } from './s'
import { Button } from './s'


function App() {
  return ( 
    <div>
    <Student name="gio" age={17} grade={11}/>
      <Button text="Home" />
      <Button text="About" />
      <Button text="Contact" />
    </div>
  );
}



export default App;

