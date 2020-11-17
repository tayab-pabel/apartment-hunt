import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Request from '../Request/Request';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {
    const userData = useSelector(state=>state)
    const [bookings, setBookings] = useState([]);

    useEffect( () => {
        fetch('https://young-plateau-45606.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    return (
        <div className="booking-list container-fluid row">
            <Sidebar />
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">Booking List</h4>
                    <p>{userData.name}</p>
                </div>
                <div className="booking-table ml-md-5 ml-0">
                    <div className="request-list">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Message</th>
                                </tr>
                            </thead>
                        </table>
                        {
                            bookings.map(booking => <Request key={booking._id} booking={booking}></Request>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;