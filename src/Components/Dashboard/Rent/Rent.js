import React from 'react';
import { Link } from 'react-router-dom';

const Rent = ({house}) => {
    return (
        <div className="rents-list">
            <table className="table table-borderless">
                <tbody>
                        <tr>
                            <td className="pt-4">{house.title}</td>
                            <td className="pt-4">{house.price}</td>
                            <td><Link to={`/houseDetails/${house._id}`} className="btn" >View Details</Link></td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Rent;