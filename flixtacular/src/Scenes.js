import React, { useState } from 'react'
import Movies from './Movies'
import { ReactComponent as S0 } from './Scene1.svg';
import { ReactComponent as S1 } from './Scene2.svg';
import { ReactComponent as S2 } from './Scene3.svg';
import { ReactComponent as S3 } from './Scene4.svg';




function Scenes(props) {

  // const displayImage = (num) => {
  //   let image = "S" + num
  //   console.log(image)
  //   return(
  //     <div>
  //       <{...image} />
  //     </div>
  //   )
    
  // }
  const displayScene = (scene) => {
    return (scene.map((dialogue) => {
        return(
          <p>{dialogue}</p>
        )
    })
    )
}
  
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
        "But, when have they steered you wrong?",
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
            {/* {props.uname && images[count]} */}
            {count === 0 && <S0 />}
            {count === 1 && <S1 />}
            {count === 2 && <S2 />}
            {/* {count === 3 && <S3 />} */}
            {count === sceneList.length -1 && <Movies setmovie={props.setmovie}/>}
            {props.uname && displayScene(sceneList[count])}
            
           {count !== 0 && <button onClick={countDown}> Prev </button>}
           {count < sceneList.length -1 && <button onClick={countUp}> Next</button>}
        </div>
    )
}

export default Scenes;