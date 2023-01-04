// import logo from './logo.svg';
// import './App.css';
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
        <th>Name</th>
        <th>Year</th>
        <th>Genre</th>
        <th>Rating</th>
       
      </tr>
      {Movies.map ((item, i) => {
        return <tr>
          <td>{item.Series_Title}</td>
          <td>{item.Released_Year}</td>
          <td>{item.Genre}</td>
          <td>{item.IMDB_Rating}</td>
       
        </tr>
      })}
    </table>
  </div>
  )
}
export default App;

// "Poster_Link": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
// "Series_Title": "The Shawshank Redemption",
// "Released_Year": "1994",
// "Certificate": "A",
// "Runtime": "142 min",
// "Genre": "Drama",
// "IMDB_Rating": 9.3,
// "Overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
// "Meta_score": 80,
// "Director": "Frank Darabont",
// "Star1": "Tim Robbins",
// "Star2": "Morgan Freeman",
// "Star3": "Bob Gunton",
// "Star4": "William Sadler",
// "No_of_Votes": 2343110,
// "Gross": "28,341,469",
// "ID": "1"