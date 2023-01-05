import React from "react";
export default function MovieCard(props) {
    return (

     <div className="card">
        <div className="poster">
            <img src="" />

        </div>
        <div className="info">
            <p className="title">{props.Poster_Link}</p>
            <p className="rating"></p>

        </div>

     </div>

    );
}