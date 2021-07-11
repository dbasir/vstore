import Carousel from "react-elastic-carousel";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 4 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 }
  ];
 
const Marvel = ({products,moviePressed}) => {

  return (
    <div className="Marvel">

   
    <h2 className="Headingwrapper">Marvel Collection</h2>
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {products.map((item) => (
           <Link to="./selectedmov"><img onClick={ ()=>{moviePressed(item.img,item.TitleMarvel,item.describeMarvel,item.selectedMarvelImage,item.paraMarvel)}} src={item.img} alt="Describe Image" className="containerImage"/>
            <h5 className="first-txt">
            {item.TitleMarvel}
        </h5>
           </Link>
        ))}
      </Carousel>
    </div>
  </div>

  )
}

export default Marvel

