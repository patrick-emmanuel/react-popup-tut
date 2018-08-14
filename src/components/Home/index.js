import React from 'react';
import { Link } from 'react-router-dom';
import pizzaImage from './pizza.jpg';
import './styles.css';

const Home = () => (
    <div className="wrapper">
        <img src={pizzaImage} alt="Pizza" width="200" height="150"/>
        <h2>Contact me to get your pizza.</h2>
        <Link className="contact" to="/contact">Contact me!</Link>
    </div>
)

export default Home;