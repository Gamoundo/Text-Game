import React, { useState } from "react";

function Movies() {

    
    const [image, setimage] = useState("nothing yet")

    const movieList = [
        {
            title: "Posession",
            art: "posession art goes here",
            genre: "horror",
            reviews: []
        },
        {
            title: "Little Shop of Horrors",
            art: "LSH art",
            genre: "comedy",
            reviews: []
        },
        {
            title: "Inspector Gadget",
            art: "IG art",
            genre: "comedy",
            reviews: []
        },
        {
            title: "The Shining",
            art: "Shining art",
            genre: "horror",
            reviews: []
        },{
            title: "Train to Busan",
            art: "Train to Busan art",
            genre: "horror",
            reviews: []
        },{
            title: "It",
            art: "does this need art?",
            genre: "horror",
            reviews: []
        },{
            title: "Total Recall",
            art: "total recall art",
            genre: "action",
            reviews: []
        },{
            title: "Aladdin",
            art: "Aladdin art",
            genre: "ff",
            reviews: []
        }
    ]
    
const displayMovies = (arr) => {
    return (arr.map(ele => {
        return(
            <div className="movies" >
                <p onMouseEnter={() => setimage(ele.art)}>{ele.title}</p>
                
            </div>
        )
    }

    )

    )
}



    return(
        <div className="row">
            <div>
            {displayMovies(movieList)}
            </div>
            
            <div className="poster">
                {image}
            </div>
        </div>
    )
}

export default Movies;