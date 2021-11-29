import React from "react";
import { useHistory } from "react-router";

function Ending(props){

    console.log(props.stats)

    
    let count = 0
    return(
        <div>
            <h1>Bad End</h1>
            <p> You wake up. Wishing you were still asleep.</p>
            <p> Because being awake doesn't explain how you are down {count} limbs.</p>
            <p> If you had only lost {count} limbs, that would be one thing,</p>
            <p> But as far as you know you were safely home.</p>
            <p> The idea of safety has been shattered.</p>
            
            {(props.stats && props.stats.stat.find(str => str === "one wish will be granted")) && <div><button> Make a Wish</button></div>}
        </div>
    )
}

export default Ending;