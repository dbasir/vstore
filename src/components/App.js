import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState, useEffect } from "react";

import HomePage from "../pages/HomePage";
import Alltvshows from "../pages/Alltvshows";
import '../assets/img/thor_the_dark_world.jpg'
import Allmovies from "../pages/Allmovies";
import '../assets/css/utils.css'
import Selectedmov from "./selectedmov"
import SelectedTV from "./selectedTV"
import Login from "../pages/Loginpage"
import Register from "../pages/Registration"
import CreateMovie from "../pages/CreateMovie"
import CreateTv from "../pages/CreateTVShow"



const App = () => {
  const [products, setProducts] = useState([]);
  const [tvshows, setTVShows] = useState([]);
  const [marvelmovies, setMarvelMovies] = useState([]);
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [tag, setTag] = useState("");
  const [smallPoster, setSmallPoster] = useState("");
  const [largePoster, setLargePoster] = useState("");
  const [rent, setRent] = useState("");
  const [purchase, setPurchase] = useState("");
  const [featured, setFeatured] = useState("");
  const [describe, setDescribe] = useState("");

  const moviePressed = (a, b, c, d, e, f, g, h, i, j,k) => {
    setTitle(a);
    setPrice(b);
    setSynopsis(c);
    setTag(d);
    setSmallPoster(e);
    setLargePoster(f);
    setRent(g);
    setPurchase(h);
    setFeatured(i);
    setDescribe(j);
    setID(k);



    //alert(g);
  }


  useEffect(() => {

    fetch("http://localhost:5002/marvelmovies")
      .then((res) => {

        return res.json()
      })
      .then(data => {
        setMarvelMovies(data.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })

    fetch("http://localhost:5002/tvshows")
      .then((res) => {

        return res.json()
      })
      .then(data => {
        setTVShows(data.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })


    //Async operation //POST,PUT OR DELETE
    fetch("db/products")
      .then((res) => {

        return res.json()
      })
      .then(json => {
        setProducts(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })


  }, [])

  return (


    <Router>

      <Switch>

        <Route exact path="/">
          <HomePage moviePressed={moviePressed} marvelmovies={marvelmovies} tvshows={tvshows} />
        </Route>


        <Route path="/alltv">

          <Alltvshows tvshows={tvshows} moviePressed={moviePressed} />

        </Route>



        <Route path="/allmovies">

          <Allmovies marvelmovies={marvelmovies} moviePressed={moviePressed} />

        </Route>
        <Route path="/selectedmov">

          <Selectedmov marvelmovies={marvelmovies} id={id} title={title} price={price} synopsis={synopsis} tag={tag} smallPoster={smallPoster} largePoster={largePoster} rent={rent} purchase={purchase} featured={featured} describe={describe} moviePressed={moviePressed} />

        </Route>
        <Route path="/selectedTV">

          <SelectedTV tvshows={tvshows} id={id} title={title} price={price} synopsis={synopsis} tag={tag} smallPoster={smallPoster} largePoster={largePoster} rent={rent} purchase={purchase} featured={featured} describe={describe} moviePressed={moviePressed} />

        </Route>
        <Route path="/createMovie">

          <CreateMovie products={products} moviePressed={moviePressed} />

        </Route>
        <Route path="/createTv">

          <CreateTv products={products} moviePressed={moviePressed} />

        </Route>
        <Route path="/register">

          <Register products={products} moviePressed={moviePressed} />

        </Route>
        <Route path="/login">

          <Login products={products} moviePressed={moviePressed} />

        </Route>

      </Switch>
    </Router>


  )
}

export default App

