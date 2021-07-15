import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useState,useEffect} from "react";

import HomePage from "../pages/HomePage";
import Alltvshows from "../pages/Alltvshows";
import '../assets/img/thor_the_dark_world.jpg'
import Allmovies from "../pages/Allmovies";
import '../assets/css/utils.css'
import Selectedmov from "./selectedmov"
import Login from "../pages/Loginpage"
import Register from "../pages/Registration"



const App = () => {
 const [products, setProducts] = useState([]);
 const [imageval, setImg] = useState("");
 const [title, setTitle] = useState("");
 const [descimage, setdescimage] = useState("");
 const [describeMarvels, setdescribeMarvels] = useState("");
 const [para, setPara] = useState("");

 const moviePressed=(e,f,g,h,i)=>{

   setImg(e);
   setTitle(f);
   setdescribeMarvels(g);
   setdescimage(h);
   setPara(i);
   //alert(g);
 }


  useEffect(()=>{


      //Async operation //POST,PUT OR DELETE
      fetch("db/products")
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
            setProducts(json);
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })


  },[])

  return (


    <Router>

        <Switch>
  
          <Route exact path="/">
                <HomePage products={products} moviePressed={moviePressed}/>
          </Route>

         
          <Route path="/alltv">

              <Alltvshows products={products}  moviePressed={moviePressed}/>

          </Route>


         
          <Route path="/allmovies">

              <Allmovies products={products} moviePressed={moviePressed}/>

          </Route>
          <Route path="/selectedmov">

              <Selectedmov products={products} imageval={imageval} para={para} descimage={descimage} moviePressed={moviePressed} title={title} describeMarvels={describeMarvels}/>

          </Route>
<Route path="/register">

              <Register products={products} moviePressed={moviePressed}/>

          </Route>
          <Route path="/login">

              <Login products={products} moviePressed={moviePressed}/>

          </Route>

        </Switch>
    </Router>


  )
}

export default App

