import React from 'react';

import Header from "../components/Header";
import MarvelContainer from "../components/Container/MarvelContainer";
import Slideshow from '../components/slideshow'
import Footer from '../components/Footer'
import TVContainer from "../components/Container/TVShowsContainer";
import ContentContainer from '../components/Container/ContentContainer';
import Example from "../components/Container/exampleContainer"

const HomePage = ({products,moviePressed,DCval}) => {
    return (
        <div id="container">
            <Header/>
            <main>
                <Slideshow/>
               
                <MarvelContainer   products={products} moviePressed={moviePressed} DCval={DCval}/>
                <Example products={products} moviePressed={moviePressed}/>
                <TVContainer products={products} moviePressed={moviePressed}/>
                <ContentContainer products={products}/>
                
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage