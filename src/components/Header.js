import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
   
        return (
            <header>
            <div className="navbar">
              <div className="logo">
                <img
                  src="./images/EchosLogo2.png"
                  alt="logo"
                  width="100px"
                  height="100px"
                />
              </div>
              
              <ul className="nav-links">
                <Link to="/" >Home</Link>
            
                <Link to="/Products" >Shop</Link>
              
                <Link to="/Contact" >Contact</Link>
              </ul>
            </div>
            
          </header>
        );
    }

