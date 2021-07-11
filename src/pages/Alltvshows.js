import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

const Alltvshows = (props) => {
    return (
        <div id="container">
            <Header />
            <main>
                <div className="mainHeader">
                    <h2 className="Headingwrapper">All TV Shows</h2>
                    <div className="wrapper">
                        <section1 id="DCsection1">


                            {props.products.map((item) => (
                                <Link to="./selectedmov">
                                    <div class="item">

                                        <a href="#">
                                            <img class="Allimage" onClick={() => { props.moviePressed(item.TVShows, item.TitleTV, item.describeTV, item.selectedTVImage, item.paraTV) }} src={item.TVShows} alt="Describe Image" />
                                            <h5 className="first-ttxt">
                                                {item.TitleTV}
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