
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useState } from 'react';
import Login from './Login';
import Scenes from './Scenes';
import { ReactComponent as Scene1 } from './Scene1.svg';
import { useHistory } from "react-router-dom";

function App() {

  let history = useHistory();

  const login = () => {
    history.push('/login')
  }


  const [uname,setuname] =useState(
  "Akil"
)


const changename = (name) => {
  setuname(name)
}

let location = window.location
console.log(location)



  return (
    <Router>
    <div className="App">
      <Scene1 />
      <h1> Flixtacular</h1>
      {location.pathname === '/' &&<a href="/login" onClick={login}> Start </a>}
      <Route exact path= '/login'  render={ routerProps => <Login {...routerProps} changename={changename} uname={uname}/>}>
    
    </Route>
    <Route exact path= '/scenes'  render={ routerProps => <Scenes {...routerProps} uname={uname}/>}>
    
    </Route>
    </div>
    

    </Router>
     );
}

export default App;
