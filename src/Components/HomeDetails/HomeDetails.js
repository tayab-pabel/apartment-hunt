import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomeDetails.css';
import homeDetailImage1 from '../../images/housedetail1.png';
import homeDetailImage2 from '../../images/housedetail2.png';
import homeDetailImage3 from '../../images/housedetail3.png';
import homeDetailImage4 from '../../images/housedetail4.png';
import homeDetailImage5 from '../../images/housedetail5.png';
import Footer from '../Footer/Footer';

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
            <div className="home-details-content container">
                <div className="row my-5">
                    <div className="col-md-8">
                        <img className="img-fluid homeDetailImage1" src={homeDetailImage1} alt=""/>
                        <div className="row mt-3">
                            <div className="col-3">
                                <img className="img-fluid homeDetailImage2" src={homeDetailImage2} alt=""/>
                            </div>
                            <div className="col-3">
                                <img className="img-fluid homeDetailImage3" src={homeDetailImage3} alt=""/>
                            </div>
                            <div className="col-3">
                                <img className="img-fluid homeDetailImage4" src={homeDetailImage4} alt=""/>
                            </div>
                            <div className="col-3">
                                <img className="img-fluid homeDetailImage5" src={homeDetailImage5} alt=""/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-5">
                            <h3 className="rent-title">Family Apartment Three</h3>
                            <h3 className="rent-price">$256</h3>
                        </div>
                        <p className="mt-3">3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        <h4 className="mt-5">Price Details-</h4>
                        <p className="mt-3">
                            Rent/Month: $550 (negotiable) <br/>
                            Service Charge : 8,000/= Tk per month, subject to change <br/>
                            Security Deposit : 3 month’s rent <br/>
                            Flat Release Policy : 3 months earlier notice required
                        </p>
                        <h4 className="mt-5">Property Details-</h4>
                        <p className="mt-3">
                            Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/>
                            Flat Size : 3000 Sq Feet. <br/>
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/>
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/>
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br/>
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera

                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="card px-3 py-4">
                            <form>
                                <input name='name' placeholder='Full Name' className='form-control mt-3' type="text" />
                                <input name='number' placeholder='Phone No.' className='form-control mt-3' type="text" />
                                <input name='email' placeholder='Username or Email' className='form-control mt-3' type="email" />
                                <textarea className="form-control mt-3" rows="6" placeholder="Your message"></textarea>
                                <button type='submit' className='btn request-booking-btn btn-block mt-4'>Request Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeDetails;