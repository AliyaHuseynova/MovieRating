import { NavLink } from "react-router-dom";
import './Navbar.css';
// import '../Home.css';

export default function Navbar(){
    return <div className="NavBar">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/moviepage" >Movie Page</NavLink>
        <NavLink to="/contact" >Contact Us</NavLink>          
    </div>
}

