import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Rent from '../Rent/Rent';
import Sidebar from '../Sidebar/Sidebar';
import './MyRents.css';

const MyRents = () => {
    const userData = useSelector(state=>state)
    const [houses, setHouses] = useState([]);

    useEffect( () => {
        fetch('https://young-plateau-45606.herokuapp.com/rents')
        .then(res => res.json())
        .then(data => setHouses(data))
    }, [])

    return (
        <div className="my-rents container-fluid row">
            <Sidebar />
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">My Rents</h4>
                    <p>{userData.name}</p>
                </div>
                <div className="rents-table ml-md-5 ml-0">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">House Name</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
                    {
                        houses.map(house => <Rent key={house._id} house={house}></Rent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyRents;