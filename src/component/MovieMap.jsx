import { NavLink } from "react-router-dom";
import './MovieMap.css';

export default function MovieMap(movie){
    return(
        <div>
            <NavLink to={`/movies`}></NavLink>
            <div className="moviepage">
                <div className="right-column">
                <img src={movie.link} alt="movies"/>
                <h1>Title: {movie.title}</h1></div>

                <div className="left-column">
                <p>Overview: {movie.overview}</p>
                <p>Director: {movie.dir}</p>
                <p>Rating: {movie.rating}</p>
                <p>Genre: {movie.genre}</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Year: {movie.year}</p>
                </div>
            </div>
        </div>
    );
}