import React, { useState } from 'react'




let user = JSON.parse(window.localStorage.getItem('Flixtacular')).name 
console.log(typeof user)





const sceneList = [
    [
      "it was a rather boring day so you thought anything would be more fun than this.",
      "Anything at all.",
      "Suddenly you recieved a text from a friend",
      "{user} you have to check out Flixtacular. It is a movie site like you've never experienced!",
      "You checked it out because you had nothing better to do.",  
    ],
    [
        "There didn't seem to be anything special about it at a glance.",
        "But, when have they steered you wrong.",
        "Although the movie list left a lot to be desired.",
        "",
        "",  
      ],
    [
        "",
        "",
        "",
        "",
        "",  
      ],
      [
        "",
        "",
        "",
        "",
        "",  
      ],

]

const displayScene = (scene) => {
    return (scene.map((dialogue) => {
        return(
          user &&  <p>{dialogue}</p>
        )
    })
    )
}

function Scenes() {

    const [count, setCount]=useState(0)

const countUp = () => {
    setCount(count+ 1)
}

const countDown = () => {
    setCount(count- 1)
}

   
    return(
        <div>
            {displayScene(sceneList[count])}
           {count !== 0 && <button onClick={countDown}> Prev </button>}
           {count < sceneList.length && <button onClick={countUp}> Next</button>}
        </div>
    )
}

export default Scenes;