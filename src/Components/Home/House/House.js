import React from 'react';
import { Link } from 'react-router-dom';
import './House.css';
import map from '../../../images/logos/map.png';
import bed from '../../../images/logos/bed.png';
import bath from '../../../images/logos/bath.png';

const House = ({house}) => {
    return (
        <div className="col-lg-4 col-md-6 p-3">
            <div class="card">
                {
                    house.image ? <img class="card-img-top" src={`data:icon/png;base64,${house.image.img}`} />
                    :
                    <img class="card-img-top" src={`http://localhost:5000/${house.icon}`} />
                }
                <div class="card-body">
                    <h5 class="card-title mb-3">{house.title}</h5>
                    <div className="d-flex align-items-center mb-2">
                        <img class="map" src={map} alt="Map" />
                        <p className="ml-2">{house.location}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <img class="bed" src={bed} alt="Bed" />
                            <p className="ml-2">{house.bedroom}</p>
                        </div>
                        <div className="d-flex align-items-center pl-3">
                            <img class="bath" src={bath} alt="Bath" />
                            <p className="ml-2">{house.bathroom}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
                        <h3 className="pt-2">{house.price}</h3>
                        <Link to="/houseDetails" class="view-details-btn">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default House;