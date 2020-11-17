import React from 'react';
import "./Service.css";
import service1 from '../../../images/logos/service1.png';
import service2 from '../../../images/logos/service2.png';
import service3 from '../../../images/logos/service3.png';

const Service = () => {
    return (
        <div className="service container text-center my-5">
            <div className="service-header pt-5">
                <p>House Rent</p>
                <h2>Discover the latest Rent <br/> available today</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mt-5 p-4">
                    <img className="service1" src={service1} alt=""/>
                    <h5 className="pt-4 pb-2">Wide Range of Properties</h5>
                    <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5 p-4">
                    <img className="service2" src={service2} alt=""/>
                    <h5 className="pt-4 pb-2">Wide Range of Properties</h5>
                    <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5 p-4">
                    <img className="service3" src={service3} alt=""/>
                    <h5 className="pt-4 pb-2">Trusted by Thousands</h5>
                    <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;