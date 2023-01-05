import React from "react";
import {Route, Routes} from "react-router"
import Navbar from "./component/Navbar";
import Home from "./Home";
import Movie from "./Movie";
import Contact from "./Contact";

export default function App(){
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/moviepage" element = {<Movie />} />
                <Route path="/contact" element = {<Contact />} />
            </Routes>
        </div>
    );
}