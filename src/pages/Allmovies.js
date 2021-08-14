import React from 'react';

import Header from "../components/Header";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

const AllMovies = (props) => {
    return (
        <div id="container">
            <Header />
            <main>
                <>


                    <div className="mainHeader">
                        <h2 className="Headingwrapper">All Movies</h2>
                        <div className="wrapper">
                            <section1 id="DCsection1">


                                {props.marvelmovies.map((item) => (
                                    <Link to="./selectedmov">
                                        <div class="item">
                                            <a href="#">
                                                <img class="Allimage" onClick={() => { props.moviePressed(item.marvel_title,item.marvel_price, item.marvel_synopsis,item.marvel_tag, item.marvel_small_poster, item.marvel_large_poster,item.marvel_rent,item.marvel_purchase_outright,item.marvel_featured, item.marvel_description, item.id) }} src={item.marvel_small_poster} alt="All Movies" />
                                                <h5 className="first-ttxt">
            {item.marvel_title}
        </h5>
                                            </a>
        

                                        </div>
                                        
                                    </Link>
                                ))}


                            </section1>


                        </div>



                    </div>

                </>



            </main>
            <Footer />
        </div>
    )
}

export default AllMovies