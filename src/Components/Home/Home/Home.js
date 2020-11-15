import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Houses from '../Houses/Houses';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Searchbar />
            <Houses />
        </div>
    );
};

export default Home;