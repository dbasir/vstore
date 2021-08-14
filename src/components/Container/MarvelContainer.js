import Carousel from "react-elastic-carousel";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 4 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 }
  ];
 
const Marvel = ({marvelmovies,moviePressed}) => {

  return (
    <div >

   
    <h2 className="Headingwrapper">Marvel Collection</h2>
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {marvelmovies.map((item) => (<div className="content_img">
            <Link to="./selectedmov"><img onClick={() => { moviePressed(item.marvel_title,item.marvel_price, item.marvel_synopsis,item.marvel_tag, item.marvel_small_poster, item.marvel_large_poster,item.marvel_rent,item.marvel_purchase_outright,item.marvel_featured, item.marvel_description, item.id) }} src={item.marvel_small_poster} alt="Marvel" className="containerImage" />
              <div><h4 className="first-txt">
                {item.marvel_title}
              </h4></div>

            </Link></div>
        ))}
      </Carousel>
    </div>
  </div>

  )
}

export default Marvel

