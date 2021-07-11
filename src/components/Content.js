import React from 'react'

import imag from '../assets/img/DC/batman vs superman.jpg'

const Content = ({DC,content}) => {
    const imagename = "thor_the_dark_world";


    return (
        <>

                    <div class="contentitem">

                        <a href="#">
                            <img src={process.env.PUBLIC_URL + content} alt="Describe Image" />
                        </a>
                    </div>



                  


        </>

    )
}

export default Content