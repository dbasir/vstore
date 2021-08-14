import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (

            <div class="navbar">

            <div className="vstore">VStore</div>
            <Link to="/">Home</Link>
            <Link to="/allmovies" class="btn" >All Movies</Link> 
            <Link to="/alltv" class="btn" >All TV Shows</Link>
            <Link to="/createMovie" class="btn" >Create Movie</Link>
            <Link to="/createTv" class="btn" >Create TV Show</Link>
        <Link to="/register" class="btn" id="register">Register</Link>
            <Link to="/login" class="btn" id="login">Sign In</Link>
            </div>
  
    )
}



export default Header
