
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useState } from 'react';
import Login from './Login';
import Scenes from './Scenes';

import { useHistory } from "react-router-dom";
import MoviePage from './Moviepage';
import Movies from './Movies';

function App() {

  let history = useHistory();

  const login = () => {
    history.push('/login')
  }


  const [movie, setmovie] = useState(
    {
      title: 'Aladdin',
      art: 'Aladdin art here',
      genre: 'action',
      reviews: []
    }
  )

  const [uname,setuname] =useState(
  "Akil"
)

const [userStatus, setuserStatus] = useState(
  []
)

console.log(setmovie)
const changename = (name) => {
  setuname(name)
}

let location = window.location
console.log(location)



  return (
    <Router>
    <div className="App">
      
      <h1>Flixtacular</h1>
      {location.pathname === '/' &&<a href="/login" onClick={login}> Start </a>}
      <Route exact path= '/login'  render={ routerProps => <Login {...routerProps} changename={changename} uname={uname}/>}>
    
    </Route>
    <Route exact path= '/scenes'  render={ routerProps => <Scenes {...routerProps} uname={uname} status={userStatus} setmovie={setmovie}/>}>
    
    </Route>
    <Route exact path= '/movie'><MoviePage movie={movie} setuserStatus={setuserStatus} /> </Route>
    <Route exact path= '/movies'><Movies setmovie={setmovie} status={userStatus}/></Route>
    </div>
    

    </Router>
     );
}

export default App;
