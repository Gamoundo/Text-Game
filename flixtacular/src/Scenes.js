import React from 'react'




let user = JSON.parse(window.localStorage.getItem('Flixtacular')).name 
console.log(typeof user)


function Scenes() {
   
    return(
        <div>
            <p> it was a rather boring day so you thought anything would be more fun than this.</p>
            <p> Anything at all.</p>
            <p> Suddenly you recieved a text from a friend.</p>
            <p> {user} you have to check out Flixtacular. It is a movie site like you've never experienced!</p>
            <p> You checked it out because you had nothing better to do.</p>
            <button> Next</button>
        </div>
    )
}

export default Scenes;