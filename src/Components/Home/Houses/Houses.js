import React from 'react';
import './Houses.css';
import house from '../../../images/house1.png';
import map from '../../../images/logos/map.png';
import bed from '../../../images/logos/bed.png';
import bath from '../../../images/logos/bath.png';
import { Link } from 'react-router-dom';

const Houses = () => {
    return (
        <div className="houses container my-5">
            <div className="houses-header text-center">
                <p>House Rent</p>
                <h2>Discover the latest Rent <br/> available today</h2>
            </div>
            <div className="row mt-5">
                {/* {
                    houses.map(house =><House key={house._id} house={house}></House>)
                } */}
                <div className="col-lg-4 col-md-6 p-3">
                    <div class="card">
                        <img class="card-img-top" src={house} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-3">Washington Avenue</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img class="map" src={map} alt="Map" />
                                <p className="ml-2">Nasirabad H/S, Chattogram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <img class="bed" src={bed} alt="Bed" />
                                    <p className="ml-2">3 Bedrooms</p>
                                </div>
                                <div className="d-flex align-items-center pl-3">
                                    <img class="bath" src={bath} alt="Bath" />
                                    <p className="ml-2">2 Bathrooms</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                                <h3 className="pt-2">$194</h3>
                                <Link to="/houseDetails" class="view-details-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3">
                    <div class="card">
                        <img class="card-img-top" src={house} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-3">Washington Avenue</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img class="map" src={map} alt="Map" />
                                <p className="ml-2">Nasirabad H/S, Chattogram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <img class="bed" src={bed} alt="Bed" />
                                    <p className="ml-2">3 Bedrooms</p>
                                </div>
                                <div className="d-flex align-items-center pl-3">
                                    <img class="bath" src={bath} alt="Bath" />
                                    <p className="ml-2">2 Bathrooms</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                                <h3 className="pt-2">$194</h3>
                                <Link to="#" class="view-details-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3">
                    <div class="card">
                        <img class="card-img-top" src={house} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-3">Washington Avenue</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img class="map" src={map} alt="Map" />
                                <p className="ml-2">Nasirabad H/S, Chattogram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <img class="bed" src={bed} alt="Bed" />
                                    <p className="ml-2">3 Bedrooms</p>
                                </div>
                                <div className="d-flex align-items-center pl-3">
                                    <img class="bath" src={bath} alt="Bath" />
                                    <p className="ml-2">2 Bathrooms</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                                <h3 className="pt-2">$194</h3>
                                <Link to="#" class="view-details-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3">
                    <div class="card">
                        <img class="card-img-top" src={house} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-3">Washington Avenue</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img class="map" src={map} alt="Map" />
                                <p className="ml-2">Nasirabad H/S, Chattogram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <img class="bed" src={bed} alt="Bed" />
                                    <p className="ml-2">3 Bedrooms</p>
                                </div>
                                <div className="d-flex align-items-center pl-3">
                                    <img class="bath" src={bath} alt="Bath" />
                                    <p className="ml-2">2 Bathrooms</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                                <h3 className="pt-2">$194</h3>
                                <Link to="#" class="view-details-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3">
                    <div class="card">
                        <img class="card-img-top" src={house} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-3">Washington Avenue</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img class="map" src={map} alt="Map" />
                                <p className="ml-2">Nasirabad H/S, Chattogram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <img class="bed" src={bed} alt="Bed" />
                                    <p className="ml-2">3 Bedrooms</p>
                                </div>
                                <div className="d-flex align-items-center pl-3">
                                    <img class="bath" src={bath} alt="Bath" />
                                    <p className="ml-2">2 Bathrooms</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                                <h3 className="pt-2">$194</h3>
                                <Link to="#" class="view-details-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 p-3">
                    <div class="card">
                        <img class="card-img-top" src={house} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-3">Washington Avenue</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img class="map" src={map} alt="Map" />
                                <p className="ml-2">Nasirabad H/S, Chattogram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <img class="bed" src={bed} alt="Bed" />
                                    <p className="ml-2">3 Bedrooms</p>
                                </div>
                                <div className="d-flex align-items-center pl-3">
                                    <img class="bath" src={bath} alt="Bath" />
                                    <p className="ml-2">2 Bathrooms</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                                <h3 className="pt-2">$194</h3>
                                <Link to="#" class="view-details-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Houses;