import React from 'react';

import Header from "../components/Header";
import MarvelContainer from "../components/Container/MarvelContainer";
import Slideshow from '../components/slideshowFeature'
import Footer from '../components/Footer'
import TVContainer from "../components/Container/TVShowsContainer";




const HomePage = ({marvelmovies,moviePressed,tvshows}) => {
    return (
        <div id="container">
            <Header/>
            <main>
                
            <Slideshow marvelmovies={marvelmovies} moviePressed={moviePressed}/>
                <MarvelContainer   marvelmovies={marvelmovies} moviePressed={moviePressed}/>
                <TVContainer tvshows={tvshows} moviePressed={moviePressed}/>
                
                
                
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage