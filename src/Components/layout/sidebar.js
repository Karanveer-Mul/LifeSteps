import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';


const Sidebar = () => {
    return (
        <div className="container sidebar">
            
            <p className="logo" style={{backgroundColor:"#12121200", padding:"0px 0 20px 0px", }}>Finger Notes</p>
            
            <div className="navItem">
                <HomeIcon className="navIcon"/>
                <p className="navText">Home</p>
            </div>
            <div className="navItem">
                <SearchIcon className="navIcon"/>
                <p className="navText">Search</p>
            </div>
        </div> 
    )
}

export default Sidebar;