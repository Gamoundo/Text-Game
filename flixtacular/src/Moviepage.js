import React from 'react'

function MoviePage(props) {
    
   const reviews = [
        `I felt like I was inside ${props.title} a marvelous experience`,
        "How have I not known about this?",
        "Movies will never feel the same again."
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
    
    
    return(
        <div>
            <h1>{props.title} </h1>
            <img src={props.art} alt ={props.title} />
            <div className="reviews">
                {displayReviews(reviews)}
            </div>
        </div>
    )
}

export default MoviePage;