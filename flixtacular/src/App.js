import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useState } from 'react';
import Login from './Login';
import Scenes from './Scenes';

function App() {


const login = () => {
  setStart(<Login/>)
}

  const [start,setStart] =useState(
  <h3 onClick={login}>Start</h3>
)


const changeState = (status) => {
  setStart(status)
}

let location = window.location
console.log(location)


const hello = 'hellooo'
  return (
    <Router>
    <div className="App">
      <h1> Flixtacular</h1>
      {location.pathname == '/' &&<a href="/login"> Start </a>}
      <Route exact path= '/login'  render={ routerProps => <Login {...routerProps} changeHandler={changeState} prop={hello}/>}>
    
    </Route>
    <Route exact path= '/scenes'  render={ routerProps => <Scenes {...routerProps} changeHandler={changeState}/>}>
    
    </Route>
    </div>
    

    </Router>
     );
}

export default App;
