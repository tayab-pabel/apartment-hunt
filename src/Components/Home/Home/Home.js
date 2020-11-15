import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Houses from '../Houses/Houses';
import Searchbar from '../Searchbar/Searchbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Searchbar />
            <Houses />
            <Service />
            <Footer />
        </div>
    );
};

export default Home;