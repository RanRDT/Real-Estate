import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css'
function Layout() {

    return (
        <div id="container">

            <nav id="top-nav">
                <Link to="/" className="nav-item-top">Home</Link>
                <Link to="/properties" className="nav-item-top">Properties</Link>
                <Link to="/about" className="nav-item-top">About</Link>
                <Link to="/contact" className="nav-item-top">Contact</Link>
                <Link to="/favorite" className="nav-item-top">♡</Link>
               
            </nav>

            <Outlet></Outlet>

            <nav id="bot-nav">

                <div id="fast-links">
                    <p>Fast Links</p>
                <Link to="/" className="nav-item-bot">Home</Link>
                <Link to="/about" className="nav-item-bot">About</Link>
                <Link to="/contact" className="nav-item-bot">Contact</Link>
                
            
                
                </div>

                <div id="follow-us">
                <p>Follow us</p>
                <a href="https://he-il.facebook.com/" target="_blank" className="nav-item-bot">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" className="nav-item-bot">Instagram</a>
                <a href="https://twitter.com/" target="_blank" className="nav-item-bot">Twitter</a>
                </div>
            
                
            
            </nav>

            </div>




            
    )

}

export default Layout