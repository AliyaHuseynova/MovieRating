import { NavLink } from "react-router-dom";

export default function MovieMap(movie){
    return(
        <div>
            <NavLink to={`/movies`}></NavLink>
            <div>
                <img src={movie.link} alt="movies"/>
                <h1>TITLE:  {movie.title}</h1>
                <p>{movie.overview}</p>
                <h2>{movie.dir}</h2>
                <p>{movie.rating}</p>
                <p>{movie.genre}</p>
                <p>{movie.runtime}</p>
                <p>{movie.year}</p>
            </div>
        </div>
    );
}