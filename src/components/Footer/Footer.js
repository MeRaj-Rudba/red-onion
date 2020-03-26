import React from 'react';
import './Footer.css'
import footerLogo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='footer-panel'>
            
            <div className='card-group row'>
                <div className="card-custom card col-6" style={{width: '18rem'}}>
                    <div className="card-body">
                        <img src={footerLogo} alt="logo"/>
                        
                    </div>
                </div>
                <div className="card-custom card col-3" style={{width: '18rem'}}>
                    <div className="card-body">
                        
                        <p className="card-text">About Online Food</p>
                        <p className="card-text">Read our Blog</p>
                        <p className="card-text">Sign up to deliver</p>
                        <p className="card-text">Add your restaurant</p>
                        
                    </div>
                </div>
                <div className="card-custom card col-3" style={{width: '18rem'}}>
                    <div className="card-body">
                        <p className="card-text">Get Help</p>
                        <p className="card-text">Read FAQs</p>
                        <p className="card-text">View all cities</p>
                        <p className="card-text">Restaurant near me</p>
                    </div>
                </div>
            </div>

            <div className='card-group row'>
                <div className="card-custom card col-6" style={{width: '18rem'}}>
                    <div className="card-body">
                
                        <p className="card-text"><small id='copyright'>Copyright © 2020 Online Food</small> </p>
                        
                    </div>
                </div>
                <div className="card-custom card col-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        
                        <p className="card-text">Privacy policy.</p> 
                        
                    </div>
                </div>
                <div className="card-custom card col-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        <p className="card-text">Terms to use</p>
                    </div>
                </div>
                <div className="card-custom card col-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        <p className="card-text">Pricing</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;