import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="wrapper">
        <img src='https://vignette.wikia.nocookie.net/teenage-mutant-ninja-turtles-2012-series/images/f/fd/Pizza_trad_pepperoni.png/revision/latest?cb=20161106191944' alt="Pizza" width="200" height="150"/>
        <h2>Contact me to get your pizza.</h2>
        <Link className="contact" to="/contact">Order now!</Link>
    </div>
)

export default Home;