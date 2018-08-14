import React from 'react';
import { Link } from 'react-router-dom';
import pizzaImage from './pizza.jpg';
import './styles.css';

const Home = () => (
    <div className="wrapper">
        <h2>Thanks for your order.</h2>
        <Link className="back" to="/">Back home!</Link>
    </div>
)

export default Home;