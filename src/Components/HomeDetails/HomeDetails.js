import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomeDetails.css';

const HomeDetails = () => {
    return (
        <div className="home-details">
            <Navbar />
            <div className="home-details-header d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <h1>Apartment</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;