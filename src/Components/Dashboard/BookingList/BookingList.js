import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {
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
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;