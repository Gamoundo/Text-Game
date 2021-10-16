import React, { useState } from 'react'












const displayScene = (scene) => {
    return (scene.map((dialogue) => {
        return(
          <p>{dialogue}</p>
        )
    })
    )
}

function Scenes(props) {

    const [count, setCount]=useState(0)

const countUp = () => {
    setCount(count+ 1)
}

const countDown = () => {
    setCount(count- 1)
}

const sceneList = [
    [
      "it was a rather boring day so you thought anything would be more fun than this.",
      "Anything at all.",
      "Suddenly you recieved a text from a friend",
      `${props.uname} you have to check out Flixtacular. It is a movie site like you've never experienced!`,
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

   console.log(props.uname)
    return(
        <div>
            {props.uname && displayScene(sceneList[count])}
            
           {count !== 0 && <button onClick={countDown}> Prev </button>}
           {count < sceneList.length && <button onClick={countUp}> Next</button>}
        </div>
    )
}

export default Scenes;