import React from 'react';

const Request = ({booking}) => {
    return (
        <div className="booking-list">
            <table className="table table-borderless">
                <tbody>
                        <tr>
                            <td className="pt-4">{booking.name}</td>
                            <td className="pt-4">{booking.email}</td>
                            <td className="pt-4">{booking.number}</td>
                            <td className="pt-4">{booking.message}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Request;