import React from 'react';

const moviesLists = (properties) => {
    return (
        <>
            {properties.movies.map ((movieName, index) => <div>
                <img src = {movieName.Poster_Link}></img>
            </div>)}
        </>
    )
}