import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBookingData')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className="booking-list container-fluid row">
            <Sidebar />
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">Booking List</h4>
                    <p>Tayab Pabel</p>
                </div>
                <div className="booking-table ml-md-5 ml-0">
                    <div className="request-list">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email</th>
                                    <th className="text-secondary" scope="col">Phone No</th>
                                    <th className="text-secondary" scope="col">Message</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            {
                                bookings.map(booking => 
                                    <tbody>
                                        <tr>
                                            <td className="pt-4">{booking.name}</td>
                                            <td className="pt-4">{booking.email}</td>
                                            <td className="pt-4">{booking.number}</td>
                                            <td className="pt-4">{booking.message}</td>
                                            <td>
                                                {booking.status == "Pending" ?
                                                <select class="form-control" style={{borderColor: "red"}}>
                                                    <option value="Pending" selected>Pending</option>
                                                    <option value="Ongoing">Ongoing</option>
                                                    <option value="Done">Done</option>
                                                </select> : booking.status == "Ongoing" ?
                                                <select class="form-control" style={{borderColor: "orange"}}>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Ongoing" selected>Ongoing</option>
                                                    <option value="Done">Done</option>
                                                </select> :
                                                <select class="form-control" style={{borderColor: "green"}}>
                                                    <option value="Pending" selected>Pending</option>
                                                    <option value="Ongoing">Ongoing</option>
                                                    <option value="Done" selected>Done</option>
                                                </select>
                                                }
                                            </td>
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

export default BookingList;