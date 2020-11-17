import React from 'react';
import './Sidebar.css'
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar mt-5 ml-5">
            <Link to="/" className="sidebar-header">
                <img style={{width: '100px', height: '54.8px'}} src={logo} alt="logo"/>
            </Link>
            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/bookingList" className="dashboard-component">
                        <i className="fas fa-hdd"></i> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addHouse" className="dashboard-component">
                        <i className="fas fa-plus"></i> <span>Add House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myRents" className="dashboard-component">
                        <i className="fas fa-home"></i> <span>My Rents</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;