import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MyRents.css';

const MyRents = () => {

    const [housesData, setHousesData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allHouseData')
            .then(res => res.json())
            .then(data => setHousesData(data))
    }, [])

    return (
        <div className="my-rents container-fluid row">
            <Sidebar />
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">My Rents</h4>
                    <p>Tayab Pabel</p>
                </div>
                <div className="rents-table ml-md-5 ml-0">
                    <div className="rents-list">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">House Name</th>
                                    <th className="text-secondary" scope="col">Price</th>
                                    <th className="text-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                            {
                                housesData.map(house => 
                                    <tbody>
                                        <tr>
                                            <td className="pt-4">{house.title}</td>
                                            <td className="pt-4">${house.price}</td>
                                            <td><a class="btn" href="#">View Details</a></td>
                                        </tr>
                                    </tbody>
                                )
                            }
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRents;