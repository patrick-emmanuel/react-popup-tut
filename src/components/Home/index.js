import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="wrapper">
        <h2>Contact me to get your pizza.</h2>
        <Link className="contact" to="/contact">Contact me!</Link>
    </div>
)

export default Home;