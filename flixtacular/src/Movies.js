import React, { useState } from "react";
import { useHistory } from "react-router";


function Movies  ({setmovie, status})  {

    console.log(status)
    console.log(setmovie)
const history= useHistory()    
    const [image, setimage] = useState("nothing yet")

    const movieList = [
        {
            id: 1,
            title: "Posession",
            art: "posession art goes here",
            genre: "horror",
            reviews: []
        },
        {
            id: 2,
            title: "Little Shop of Horrors",
            art: "LSH art",
            genre: "comedy",
            reviews: []
        },
        {
            id: 3,
            title: "Inspector Gadget",
            art: "IG art",
            genre: "comedy",
            reviews: []
        },
        {
            id: 4,
            title: "The Shining",
            art: "Shining art",
            genre: "horror",
            reviews: []
        },
        {
            id: 5,
            title: "Train to Busan",
            art: "Train to Busan art",
            genre: "horror",
            reviews: []
        },
        {
            id: 6,
            title: "It",
            art: "does this need art?",
            genre: "horror",
            reviews: []
        },
        {
            id: 7,
            title: "Total Recall",
            art: "total recall art",
            genre: "action",
            reviews: []
        },
        {
            id: 8,
            title: "Aladdin",
            art: "Aladdin art",
            genre: "ff",
            reviews: []
        }
    ]
    




    const displayMovies = (arr) => {
    return (arr.map(ele => {
        const seeMovie = () => {
          setmovie({
              id: ele.id,
              title: ele.title,
              art: ele.art,
              genre: ele.genre,
              reviews: []
          })
                history.push('/movie')
        }
        return(
            <div className="movies" onClick={seeMovie}>
                <p onMouseEnter={() => setimage(ele.art)}>{ele.title}</p>

                
            </div>
        )
    }

    )

    )
}

const displayEnd = () => {
    history.push('/endings')
}

const displayStats = (arr) => {
    return (arr.map(ele => {
        return(
            <div className="review" >
                <p>{ele}</p>
                
            </div>
        )
    }

    ))
}

    return(
        <div >
            <div className="row">
                <div>
                {status.stat.length !== 4 && displayMovies(movieList)}
                </div>
                
                {status.stat.length !== 4 && <div className="poster">{image}</div>}
            </div>
            
            {status && displayStats(status.stat)}
            {status.stat.length === 1 && <p>Your first status of four, what will you end up experiencing?</p>}
            {status.stat.length === 4 && <button onClick={displayEnd}> Your End</button>}
        </div>
    )
}

export default Movies;