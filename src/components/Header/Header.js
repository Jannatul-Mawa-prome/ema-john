import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import Shop from '../Shop/Shop.js';
import Review from '../Review/Review.js';
import cart from '../Shop/Shop.js';


function Header(){
    return (
        <>
        <div className="headerLogo">
            <img src={logo} alt="logo"/>


        <nav className="navbar navbar-expand-lg mt-3">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="text-light nav-link active" aria-current="page" href="/shop">Shop</a>
                </li>
                <li className="nav-item">
                <a className="text-light nav-link" href="/review">Order Review</a>
                </li>
                <li className="nav-item">
                <a className="text-light nav-link" href="/manage">Manage Inventory here</a>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
        </div>
        </>
        
       
    )
}

export default Header;