import React, { useEffect, useState } from 'react';
import './Houses.css';
import House from '../House/House';

const Houses = () => {

    const [housesData, setHousesData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allHouseData')
            .then(res => res.json())
            .then(data => setHousesData(data))
            console.log(housesData)
    }, [])

    return (
        <div className="houses container my-5">
            <div className="houses-header text-center">
                <p>House Rent</p>
                <h2>Discover the latest Rent <br/> available today</h2>
            </div>
            <div className="row mt-5">
                {
                    housesData.map(house => <House key={house._id} house={house}></House>)
                }
            </div>
        </div>
    );
};

export default Houses;