import React from "react";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Contact from "./components/Contact";

export default function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element = <Home /> />
                <Route path="/movies" element = <Movie /> />
                <Route path="/contact" element = <Contact /> />
            </Routes>
        </div>
    );
}