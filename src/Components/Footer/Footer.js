import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../images/logos/vector-fb.png';
import instagram from '../../images/logos/vector-ig.png';
import linkedin from '../../images/logos/vector-in.png';
import youtube from '../../images/logos/vector-yt.png';

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex">
                            <i className="fas fa-map-marker-alt mt-2 mr-3"></i>
                            <p>H#340 (4th Floor), Road #24, <br/>
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br/>
                            Phone: 018XXXXXXXX <br/>
                            E-mail: info@company.com</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className="mb-3">Company</h5>
                        <ul  className="list-unstyled">
                            <li>
                                <Link to="#">About</Link>
                            </li>
                            <li>
                                <Link to="#">Site Map</Link>
                            </li>
                            <li>
                                <Link to="#">Support Center</Link>
                            </li>
                            <li>
                                <Link to="#">Terms Conditions</Link>
                            </li>
                            <li>
                                <Link to="#">Submit Listing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul  className="list-unstyled">
                            <li>
                                <Link to="#">Rentals</Link>
                            </li>
                            <li>
                                <Link to="#">Sales</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                            <li>
                                <Link to="#">Terms Conditions</Link>
                            </li>
                            <li>
                                <Link to="#">Our blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3">About Us</h5>
                        <p className="mb-3">We are the top real estate <br/>
                        agency in Sydney, with agents <br/>
                        available to answer any <br/>
                        question 24/7.</p>
                        <div className="d-flex pt-4">
                            <Link to="#">
                                <img className="mr-4" src={facebook} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="mr-4" src={instagram} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="mr-4" src={linkedin} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="mr-4" src={youtube} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;