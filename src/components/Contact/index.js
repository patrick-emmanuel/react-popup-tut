import React, { Component } from 'react';
import Popup from '../Popup';
import handIcon from './ok-hand.png';
import closeIcon from './Close.svg';
import './styles.css';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        showPopup: false,
    }

    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    togglePopup = () => {
        this.setState({ showPopup: !this.state.showPopup });
        this.props.history.push({ pathname: '/' });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            showPopup: true
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required />

                    <input
                        type="text"
                        placeholder="Your email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />

                    <textarea
                        cols="4"
                        rows="5"
                        type="text"
                        name="message"
                        placeholder="Your message"
                        message="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required />
                    <button className="submit-button" type="submit">Submit</button>
                    <Popup showPopup={this.state.showPopup}>
                        <div className="confirm">
                            <img src={closeIcon} alt="close" className="close-icon" onClick={this.togglePopup} />
                            <div className="inner-content">
                                <img src={handIcon} alt="OK" />
                                <p> Done</p>
                            </div>
                        </div>
                    </Popup>
                </form>
            </div>
        );
    }
}

export default ContactForm;