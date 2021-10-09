import React from 'react'

function Scenes() {
   let name = window.getItem('Flixtacular', user.name)
    return(
        <div>
            <p> it was a rather boring day so {name} thought anything would be more fun than this.</p>
            <p> Anything at all.</p>
            <p> Suddenly they recieved a text from a friend.</p>
            <p> Have you heard of Flixtacular. It is a movie site like you've never experienced</p>
            <p> You checked it out because you had nothing better to do.</p>
            <button> Next</button>
        </div>
    )
}

export default Scenes;