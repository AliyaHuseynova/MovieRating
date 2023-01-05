import { useState } from "react";
import  MovieMap  from "./component/MovieMap"
export default function Movie() {
    const [movie,  setMovie] = useState([]);

    fetch(`http://localhost:4000/movies/`)
.then(response => response.json())
.then((response) => setMovie(response))


return(
    <div>
        {movie.map((movie) =>(
            <MovieMap id={movie.id} dir={movie.Director} link={movie.Poster_Link} title={movie.Series_Title} year={movie.Released_Year} runtime={movie.Runtim} genre={movie.Genre} rating={movie.IMDB_Rating} overview={movie.Overview}  />
        ))}
    </div>
);
}   