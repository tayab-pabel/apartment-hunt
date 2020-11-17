import React, { useEffect, useState } from 'react';
import House from '../House/House';
import './Houses.css';


const Houses = () => {
    const [houses, setHouses] = useState([]);
    
    useEffect( () => {
        fetch('https://young-plateau-45606.herokuapp.com/rents')
        .then(res => res.json())
        .then(data => setHouses(data))
    }, [])

    return (
        <div className="houses container my-5">
            <div className="houses-header text-center">
                <p>House Rent</p>
                <h2>Discover the latest Rent <br/> available today</h2>
            </div>
            <div className="row mt-5">
                {
                    houses.map(house =><House key={house._id} house={house}></House>)
                }
            </div>
        </div>
    );
};

export default Houses;