import React, { useState } from "react";

function Movies() {

    
    const [image, setimage] = useState("nothing yet")

    const movieList = [
        {
            title: "Posession",
            art: "",
            genre: "horror",
            reviews: []
        },
        {
            title: "Little Shop of Horrors",
            art: "",
            genre: "comedy",
            reviews: []
        },
        {
            title: "Inspector Gadget",
            art: "",
            genre: "comedy",
            reviews: []
        },
        {
            title: "The Shining",
            art: "",
            genre: "horror",
            reviews: []
        },{
            title: "Train to Busan",
            art: "",
            genre: "horror",
            reviews: []
        },{
            title: "It",
            art: "",
            genre: "horror",
            reviews: []
        },{
            title: "Total Recall",
            art: "",
            genre: "action",
            reviews: []
        },{
            title: "Aladdin",
            art: "",
            genre: "ff",
            reviews: []
        }
    ]
    
const displayMovies = (arr) => {
    return (arr.map(ele => {
        return(
            <div className="movies">
                <p>{ele.title}</p>
                
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