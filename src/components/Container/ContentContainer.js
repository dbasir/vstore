
import Content from "../Content";

const ContentContainer = ({ products }) => {
    return (

        <>


            <div className="mainHeader">
            <h2 className="Headingwrapper">Content Section</h2>
                <div className="wrapper">
                    <section id="Contentsection1">
                        <div className="tblactors">
                            <table><tr>Actors</tr>
                            <tr>Spotlight</tr></table>
                        </div>
                        

                        {products.slice(0, 7).map((product) => (<Content DC={product.DC} content={product.content} key={product.id} />))}

                        
                    </section>
                    

                </div>



            </div>

        </>






    )
}

export default ContentContainer