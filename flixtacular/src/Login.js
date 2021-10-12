import React from 'react'
import Scenes from './Scenes';
import { useHistory } from "react-router-dom";

function Login(props) {

    let history = useHistory();
    console.log(props.prop)
    const handleSubmit = (e) => {
        e.preventDefault()
    
     let user = {
            name: e.target.name.value
            
        }
        
        window.localStorage.setItem("Flixtacular", JSON.stringify(user));
       props.changeHandler && props.changeHandler(<Scenes/>)
       history.push('/scenes')

    }


    return(
        
        <div className='form'>
            <form onSubmit={handleSubmit}>
            <div>
                    <input type="text" name="name" placeholder="name" />
                    
                    </div>
    
                    
                
                
                <input type="submit" value="Register"  />
            
            </form>
        </div>
    )
    
}


export default Login;