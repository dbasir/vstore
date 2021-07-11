
import Movies from "../movies"
import Header from "../Header"

const AllMoviesContainer = ({ products }) => {
    return (

        <>

          <Header/>
            <div className="mainHeader">
            <h2 className="Headingwrapper">All Movies</h2>
                <div className="wrapper">
                    <section1 id="DCsection1">
                       

                        {products.map((product) => (<Movies DC={product.DC} img={product.img} key={product.id} />))}

                       
                    </section1>
                 

                </div>



            </div>

        </>






    )
}

export default AllMoviesContainer