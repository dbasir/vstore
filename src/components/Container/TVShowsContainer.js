import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 4 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 }
  ];
 
const DC = ({products,moviePressed}) => {

  return (
    <div className="DC">

    <hr className="seperator" />
    <h2 className="Headingwrapper">Top TV Shows Collection</h2>
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {products.map((item) => (
           <div className="content_img">
           <Link to="./selectedmov"><img onClick={ ()=>{moviePressed(item.TVShows,item.TitleTV,item.describeTV,item.selectedTVImage,item.paraTV)}}  src={item.TVShows} alt="TV Shows" className="containerImage"/>
           <div><h4 className="first-txt">
            {item.TitleTV}
        </h4></div>
           
           </Link></div>
        ))}
      </Carousel>
    </div>
  </div>

  )
}

export default DC

