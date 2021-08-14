import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

const Alltvshows = (props) => {
    console.log(props.tvshows);
    return (
        <div id="container">
            <Header />
            <main>
                <div className="mainHeader">
                    <h2 className="Headingwrapper">All TV Shows</h2>
                    <div className="wrapper">
                        <section1 id="DCsection1">


                            {props.tvshows.map((item) => (
                                <Link to="./selectedTV">
                                    <div class="item">

                                        <a href="#">
                                            <img class="Allimage" onClick={() => { props.moviePressed(item.tvshows_title,item.tvshows_price, item.tvshows_synopsis,item.tvshows_tag, item.tvshows_small_poster, item.tvshows_large_poster,item.tvshows_rent,item.tvshows_purchase_outright,item.tvshows_featured, item.tvshows_description, item.id) }} src={item.tvshows_small_poster} alt="All TV" />
                                            <h5 className="first-ttxt">
                                                {item.tvshows_title}
                                            </h5>
                                        </a>

                                    </div>

                                </Link>
                            ))}


                        </section1>
                    </div>



                </div>




            </main>
            <Footer />
        </div>
    )
}

export default Alltvshows