import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img className='logo-head' src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    
                    <button className="nav-item nav-link button-mine-2" href="#"><FontAwesomeIcon icon={faShoppingCart} /></button>
                    <button className="nav-item nav-link button-mine-2" href="#">Login</button>
                    <button className="nav-item nav-link button-mine" href="#">Sign Up</button>
                    
                </div>
                </div>
            </nav>





        </div>
    );
};

export default Header;