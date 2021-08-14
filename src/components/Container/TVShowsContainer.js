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
 
const DC = ({tvshows,moviePressed}) => {

  return (
    <div className="DC">

    <hr className="seperator" />
    <h2 className="Headingwrapper">Top TV Shows Collection</h2>
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {tvshows.map((item) => (
           <div className="content_img">
           <Link to="./selectedTV"><img onClick={ ()=>{moviePressed(item.tvshows_title,item.tvshows_price, item.tvshows_synopsis,item.tvshows_tag, item.tvshows_small_poster, item.tvshows_large_poster,item.tvshows_rent,item.tvshows_purchase_outright,item.tvshows_featured, item.tvshows_description, item.id)}}  src={item.tvshows_small_poster} alt="TV Shows" className="containerImage"/>
           <div><h4 className="first-txt">
            {item.tvshows_title}
        </h4></div>
           
           </Link></div>
        ))}
      </Carousel>
    </div>
  </div>

  )
}

export default DC

