import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import "../assets/css/login.css"
import {Link} from "react-router-dom";


const login = () => {
    return (
        <div id="container">
            <Header />
            <main>
            <center> <h1> Student Login Form </h1> </center>   
    <div className="MainLogin">
        <p className="sign">Sign In </p>
        <form className="form1">
            <input className="un " type="text" align="center" placeholder="Username"></input>
            <input className="pass" type="password" align="center" placeholder="Password"></input>
            <Link to="/"><a  className="submit" align="center">Sign in</a></Link>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
        </form>
    </div>
                
            </main>
                        <Footer />
        </div>
                    )
}

                    export default login