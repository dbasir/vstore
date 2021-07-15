import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import "../assets/css/login.css"
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div id="container">
            <Header />
            <main>
                <center> <h1> Student Login Form </h1> </center>
                <div className="MainRegister">
                    <p className="signup">Sign Up </p>
                    <form className="form2">
                        <input className="un " type="text" align="center" placeholder="Username"></input>
                        <input className="un " type="text" align="center" placeholder="First Name"></input>
                        <input className="un " type="text" align="center" placeholder="Last Name"></input>
                        <input className="pass" type="password" align="center" placeholder="Password"></input>
                        <input className="pass" type="password" align="center" placeholder="Confirm Password"></input>
                        <input className="un " type="text" align="center" placeholder="Email"></input>
                        <Link to="/login"><a className="submit" align="center">Register</a></Link>

                    </form>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Register