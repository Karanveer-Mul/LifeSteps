import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RestoreIcon from '@material-ui/icons/Restore';

const Sidebar = () => {
    return (
        <div className="container sidebar">
            
            <p className="title" style={{backgroundColor:"#12121200", padding:"0px 0 20px 0px"}}>Life Steps</p>
            
            <div className="navItem">
                <HomeIcon className="navIcon"/>
                <p className="navText">Home</p>
            </div>
            <div className="navItem">
                <AssignmentIcon className="navIcon"/>
                <p className="navText">Tasks</p>
            </div>
            <div className="navItem">
                <RestoreIcon className="navIcon"/>
                <p className="navText">Daily</p>
            </div>
            <div className="navItem">
                <DateRangeIcon className="navIcon"/>
                <p className="navText">Monthly</p>
            </div>
            <div className="navItem">
                <EqualizerIcon className="navIcon"/>
                <p className="navText">Performance</p>
            </div>
        </div> 
    )
}

export default Sidebar;