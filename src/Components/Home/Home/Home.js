import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Searchbar />
        </div>
    );
};

export default Home;