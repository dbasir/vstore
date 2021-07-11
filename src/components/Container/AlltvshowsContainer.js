
import Alltv from "../Alltv";

const AllTVContainer = ({ count }) => {
    return (

        <>


            <div className="mainHeader">
                <h2 className="Headingwrapper">All TV Shows</h2>
                <div className="wrapper">
                    <section1 id="DCsection1">


                        <div class="item">

                            <a href="#">
                                <img id="imgg" src={process.env.PUBLIC_URL + count} alt="Describe Image" />
                            </a>

                        </div>


                    </section1>


                </div>



            </div>

        </>
    )
}

export default AllTVContainer