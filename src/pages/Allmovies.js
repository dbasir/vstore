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


                                {props.products.map((item) => (
                                    <Link to="./selectedmov">
                                        <div class="item">

                                            <a href="#">
                                                <img class="Allimage" onClick={() => { props.moviePressed(item.img, item.TitleMarvel, item.describeMarvel, item.selectedMarvelImage, item.paraMarvel) }} src={item.img} alt="Describe Image" />
                                                <h5 className="first-ttxt">
            {item.TitleMarvel}
        </h5>
                                            </a>
                                            <a href="#">
                                                <img class="Allimage" onClick={() => { props.moviePressed(item.DC,item.TitleDC,item.describeDC,item.selectedDCImage,item.paraDC) }} src={item.DC} alt="Describe Image" />
                                                <h5 className="first-ttxt">
            {item.TitleDC}
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