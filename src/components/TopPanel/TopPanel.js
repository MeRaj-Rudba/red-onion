import React from 'react';
import './TopPanel.css';

const TopPanel = () => {
    return (
        <div className='d-flex justify-content-center align-items-center banner '>
            
                <form className="form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Food Item" aria-label="Search"></input>
                    <button className="button-mine" type="submit">Search</button>
                </form> 
            
        </div>
    );
};

export default TopPanel;