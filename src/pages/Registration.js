import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import "../assets/css/login.css"
import { useHistory } from "react-router-dom";


const Register = () => {
    const history = useHistory();
    const [users, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        role: ""
    })

    const submitform = (e) => {

        console.log(users);
        e.preventDefault();
        fetch("http://localhost:5002/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then((res) => res.json())
            .then(data => {
                alert(`User: ${users.firstName} is registered successfully!!!`)
                history.push("/login");
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }
    return (
        <div id="container">
         
            <main>
           
                <div className="MainRegister">
                    <p className="signup">Sign Up </p>
                    <form className="form2" action="/" method="POST" onSubmit={submitform}>
                        <input className="un " type="text" align="center" placeholder="Username" name="username" id="username" value={users.username} onChange={event => {
                            setUser({
                                ...users,
                                username: event.target.value
                            })
                        }}></input>
                        <input className="un " type="text" align="center" placeholder="First Name" name="firstName" id="firstName" value={users.firstName} onChange={event => {
                            setUser({
                                ...users,
                                firstName: event.target.value
                            })
                        }}></input>
                        <input className="un " type="text" align="center" placeholder="Last Name" name="lastName" id="lastName" value={users.lastName} onChange={event => {
                            setUser({
                                ...users,
                                lastName: event.target.value
                            })
                        }}></input>
                        <input className="pass" type="password" align="center" placeholder="Password" name="password" id="password" value={users.password} onChange={event => {
                            setUser({
                                ...users,
                                password: event.target.value
                            })
                        }}></input>
                        <input className="pass" type="text" align="center" placeholder="User/Admin" name="role" id="role" value={users.role} onChange={event => {
                            setUser({
                                ...users,
                                role: event.target.value
                            })
                        }}></input>
                        <input className="un " type="text" align="center" placeholder="Email" name="email" id="email" value={users.email} onChange={event => {
                            setUser({
                                ...users,
                                email: event.target.value
                            })
                        }}></input>
                        <button className="submit" align="center">Register</button>

                    </form>
                </div>

            </main>
          
        </div>
    )
}

export default Register