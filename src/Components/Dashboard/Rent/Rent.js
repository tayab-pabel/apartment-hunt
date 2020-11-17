import React from 'react';

const Rent = ({house}) => {
    return (
        <div className="rents-list">
            <table className="table table-borderless">
                <tbody>
                        <tr>
                            <td className="pt-4">{house.title}</td>
                            <td className="pt-4">{house.price}</td>
                            <td><a className="btn" href="#">View Details</a></td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Rent;