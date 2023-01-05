import React from 'react';

const moviesLists = (properties) => {
    return (
        <>
            {properties.movies.map ((movieName, index) => <div className='image-container'>
                <img src = {movieName.Poster_Link} alt='movie'></img>
            </div>)}
        </>
    );
};

export default list;