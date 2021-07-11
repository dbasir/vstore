import React from "react";
import '../assets/css/utils.css'
// npm install --save-dev @iconify/react @iconify-icons/ion
import { Icon } from '@iconify/react';
import socialInstagramOutline from '@iconify-icons/ion/social-instagram-outline';
import logoFacebook from '@iconify-icons/ion/logo-facebook';
import logoTwitter from '@iconify-icons/ion/logo-twitter';
import logoSnapchat from '@iconify-icons/ion/logo-snapchat';
import {Link} from "react-router-dom";



function App() {
  return (
    <div className="footer-basic">
    <footer>
        <div className="social"><a href="#"><Icon icon={socialInstagramOutline} /></a><a href="#"><Icon icon={logoFacebook} /></a><a href="#"><Icon icon={logoTwitter} /></a><a href="#"><Icon icon={logoSnapchat} /></a></div>
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
