import React from 'react'

function Login() {

let user;

    const handleSubmit = (e) => {
        e.preventDefault()
    
         user = {
            name: e.target.name.value
            
        }
        
        window.localStorage.setItem("Flixtacular", JSON.stringify(user));

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