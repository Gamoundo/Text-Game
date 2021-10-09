import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Login';

function App() {


const login = () => {
  setStart(<Login/>)
}

  const [start,setStart] =useState(
  <h3 onClick={login}>Start</h3>
)


  return (
    <div className="App">
      <h1> Flixtacular</h1>
      {start}
    </div>
  );
}

export default App;
