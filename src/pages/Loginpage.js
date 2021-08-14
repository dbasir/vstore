import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import "../assets/css/login.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();
    const [users, setUser] = useState({
        username: "",
        password: ""
    })

    const submitform = (e) => {

        console.log(users);
        e.preventDefault();
        fetch("http://localhost:5002/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then((res) => res.json())
            .then(data => {
                alert(`User: ${users.firstName} is logged in successfully!!!`)
                history.push("/");
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }
    return (
        <div id="container">
          
            <main>
              
                <div className="MainLogin">
                    <p className="sign">Sign In </p>
                    <form className="form1" action="/" method="POST" onSubmit={submitform}>
                        <input className="un " type="text" align="center" placeholder="Username" name="username" id="username" value={users.username} onChange={event => {
                            setUser({
                                ...users,
                                username: event.target.value
                            })
                        }}></input>
                        <input className="pass" type="password" align="center" placeholder="Password" name="password" id="password" value={users.password} onChange={event => {
                            setUser({
                                ...users,
                                password: event.target.value
                            })
                        }}></input>
                        <button className="submit" align="center">Sign in</button>
                    </form>
                </div>

            </main>
          
        </div>
    )
}

export default Login