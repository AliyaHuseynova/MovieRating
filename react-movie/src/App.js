// import logo from './logo.svg';
 import './App.css';
// import React from 'react';

// const App = () => {
//   return <div>movie app</div>;
// };

// function App() {
  // return (
  //   <div className="App">
  //     <div className='navigator'>
  //       <div>
  //         <h1>Movies</h1>
  //       </div>

  //       <div>
  //         <form>
  //          <input />
  //          <button>Search Box </button>
  //         </form>
  //       </div>

  //       <div className='movienames'></div>

  //     </div>

  //   </div>
//   );
// }

import React, { useEffect, useState} from 'react';

function App() {
  const [Movies, fetchMovies] = useState([])
  useEffect(() => {

const API_URL = 'http://localhost:3000/movies';

    fetch(API_URL)
    .then((resultat) => resultat.json())
    .then((resultat) => {
      fetchMovies(resultat)
      console.log(resultat.movies);
    })
  }, []);
  return (
  <div className='divclass'>
    <table className='table'>
      <tr>
        <th>Poster</th>
        <th>Title</th>
        <th>Rating</th>
        <th>Overview</th>
        <th>Year</th>
        <th>Genre</th>
        <th>Runtime</th>
        
       
      </tr>
      {Movies.map ((item, i) => {
        return <tr>
          <td>{item.Poster_Link}</td>
          <td>{item.Series_Title}</td>
          <td>{item.IMDB_Rating}</td>
          <td>{item.Overview}</td>
          <td>{item.Released_Year}</td>
          <td>{item.Genre}</td>
          <td>{item.Runtime}</td>
       
        </tr>
      })}
    </table>
  </div>
  )
}
export default App;

