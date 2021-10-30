import React, { useState } from 'react'
import Movies from './Movies'












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
          
      ],
    [
        "They looked like basic movies, how could this be different?",
        "Well, your friend can't be right all the time.",
        `${props.uname}: I think I'll just stare at the wall`,
        "???: why stare when you can watch something engaging? You may have seen these movies, but you've never experienced them.",
        `Using that word experience again, is this really supposed to be different?`,  
      ],
      [
        "This site was peddled hard even though there is not much in their collection",
        "I'm bored and skeptical, I'm sure that's a fun combo.",
        "Do I watch one of these or find something else to do?",
         
      ],

]

   console.log(props.uname)
    return(
        <div>
            {count === sceneList.length -1 && <Movies />}
            {props.uname && displayScene(sceneList[count])}
            
           {count !== 0 && <button onClick={countDown}> Prev </button>}
           {count < sceneList.length -1 && <button onClick={countUp}> Next</button>}
        </div>
    )
}

export default Scenes;