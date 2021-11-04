import React from 'react'

function MoviePage(props) {
    
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
    
    console.log(props)    
    return(
        <div>
             <h1>{props.movie.title}</h1>
            <img src={props.movie.art} alt ={props.movie.title} />
            <div className="reviews">
                {displayReviews(reviews)}
            </div>
        </div>
    )
}

export default MoviePage;