import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import {Link} from "react-router-dom";
import "./Footer.css";
export default function Footer(){

    return <><footer>
    <div className="footer-left">
    <p>© 2022 kINETIC. All rights reserved</p> <div className="div-social"><a href="https://www.instagram.com/kinetic.agency/"><FaInstagramSquare className="social"/></a>
    <a href="https://www.facebook.com/thekineticmarketing.agency/"><FaFacebookF className="social"/></a>
    
    <a href="https://www.linkedin.com/company/thekinetic/"><FaLinkedinIn className="social"/></a></div>
    </div>
    <div className="footer-right">
    <Link to="/privacy">Terms  &amp;  Conditions and Privacy Policy</Link>
    
    </div>
    
  </footer> </>
}