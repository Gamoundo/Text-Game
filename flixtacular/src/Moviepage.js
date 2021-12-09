import React from 'react'
import { useHistory } from 'react-router'

function MoviePage(props) {

    const history= useHistory()
   const reviews = [
        `I felt like I was inside ${props.movie.title} a marvelous experience`,
        "How have I not known about this?",
        "Movies will never feel the same again."
    ]

    const badReviews = [
        "I came here for entertainment not endangerment",
        "Get out while you can, cut your losses.",
        "This isn't fun anymore",
        "Those stauses don't mean anything right?"
    ]

    const displayReviews = (arr) => {
        return (arr.map(ele => {
            return(
                <div className="review" >
                    <p>{ele}</p>
                    
                </div>
            )
        }
    
        )
    
        )
    }

    const diffMovie = () => {
        history.push('/movies')
    }

    const statuses =[
        "lost a limb",
        "lost an eye",
        "inflicted with bloodlust",
        "went deaf",
        "gained a fortune",
        "became more charismatic",
        "trouble magnet",
        "one wish will be granted",
        "Toes will get stubbed regularly for a year.",
        "Gain another personality"
    ]

    
    const addStatus = () => {
        let newStatus;
        newStatus = statuses[Math.floor(Math.random()*statuses.length)]
        if (props.movie.genre === 'action' || props.movie.genre === 'horror') {
            props.addstats(newStatus) 
            history.push('/movies')
        }
        
    }

    
    
    console.log(props)    
    return(
        <div>
             <h1 onClick={addStatus}>{props.movie.title}</h1>
            <img src={props.movie.art} alt ={props.movie.title}  />
            <div className="reviews">
                {displayReviews(reviews)}
            </div>
            <button onClick={diffMovie}>More Movies</button>
            { (props.movie.genre === 'action' || props.movie.genre === 'horror') && (props.status.stat.length >= 1 && displayReviews(badReviews))}
        </div>
    )
}

export default MoviePage;