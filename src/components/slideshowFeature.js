import Carousel from "react-elastic-carousel";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const breakPoints = [
 {itemsToShow: 1 }
  ];
 
const Marvel = ({marvelmovies,moviePressed}) => {

  return (

    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {marvelmovies.filter(feature => feature.marvel_featured === "Yes").map((item) => (<div className="content_img">
            <Link to="./selectedmov"><img onClick={() => { moviePressed(item.marvel_title,item.marvel_price, item.marvel_synopsis,item.marvel_tag, item.marvel_small_poster, item.marvel_large_poster,item.marvel_rent,item.marvel_purchase_outright,item.marvel_featured, item.marvel_description) }} src={item.marvel_large_poster} alt="Marvel" className="containerImage" />
              <div><h4 className="first-txt">
                {item.marvel_title}
              </h4></div>

            </Link></div>
        ))}
      </Carousel>
    </div>

  )
}

export default Marvel

