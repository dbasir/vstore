import React from 'react';
import Header from "./Header";
import Footer from './Footer'

const selectedMovie = (props) => {
    
    return (
        <div id="container">
            <Header />
            <div class="container"id="cont">
                <h1>Hello World!</h1>
                <div class="row" id="roww">
                    <div class="col-sm-4" id="col1">
                    <img id="imgg" src={props.imageval} alt="Describe Image" />
                    </div>
                    <div class="col-sm-4" id="col2">
                    <h2 className="Headingwrapper">{props.title}</h2>
                                <p className="Headingwrapper">{props.describeMarvels}</p>
                                <p><span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span></p>
                                    <p className="Headingwrapper">{props.para}</p>
                                    <p><button class="play"><i class="fa fa-play" ></i> Play Movie</button></p>
                    </div>
                    <div class="col-sm-4" id="col3">
                    <img id="imgdesc" src={props.descimage} alt="Describe Image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default selectedMovie

/*   <img id="imgg" src={process.env.PUBLIC_URL + props.imageval} alt="Describe Image" /> */