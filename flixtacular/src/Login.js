import React from 'react'

import { useHistory } from "react-router-dom";

function Login(props) {

    let history = useHistory();
    console.log(props.uname)
    const handleSubmit = (e) => {
        e.preventDefault()
    
     let user = {
            name: e.target.name.value
            
        }
        
        window.localStorage.setItem("Flixtacular", JSON.stringify(user));
        props.changename(user.name)
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