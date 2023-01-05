import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function App() {
  const API_URL="http://localhost:8000/movies"
  const [movies,setMovies] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8000/movies")
    .then(res => {
      return res.json();
    })
    .then(data => {setMovies(data.results)}
    );
  },[]);

  return (
    <div className="App">
     <div className="movies">
      {movies.map((movie)=>(
        <MovieCard {...movie} />
      ))}
     </div>
   
    </div>
  );
}

export default App;
