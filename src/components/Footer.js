import React from "react";
import '../assets/css/utils.css'
// npm install --save-dev @iconify/react @iconify-icons/ion
import {Link} from "react-router-dom";



function App() {
  return (
    <div className="footer-basic">
    <footer>
        <div className="social"><a href="#" class="fa fa-instagram"></a><a href="#" class="fa fa-facebook"></a><a href="#" class="fa fa-twitter"></a><a href="#" class="fa fa-snapchat-ghost"></a></div>
        <ul className="list-inline">
            <li className="list-inline-item"><Link to="/"><a>Home</a></Link></li>
            <li className="list-inline-item"><Link to="/allmovies"><a>All Movies</a></Link></li>
            <li className="list-inline-item"><Link to="/alltv"><a>All TV Shows</a></Link></li>
         
        </ul>
        <p className="copyright">Video Store © 2021</p>
    </footer>
</div>
    );
}

export default App;
